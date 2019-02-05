callibriErrorInfo = function(e, add_msg) {
    var internal_vars = {};

    function stringify(obj) {
        if (obj.outerHTML) obj = obj.outerHTML;
        if (NodeList.prototype.isPrototypeOf(obj)) obj = Array.from(obj);
        if (typeof(obj) == 'object' && obj.length > 0) {
            for (var i = 0; i < obj.length; i++) {
                obj[i] = stringify(obj[i]);
            }
        }
        return obj;
    }
    if (_callibri.internal_vars)
        for (var name in _callibri.internal_vars) {
            var item = _callibri.internal_vars[name]
            internal_vars[name] = stringify(item)
        }
    data = {
        error: e,
        stack: e.stack,
        _callibriKeys: Object.keys(_callibri),
        mobile: _callibri.mobile,
        page: window.location.href,
        browser: window.navigator.userAgent,
        language: window.navigator.language,
        cookie_enabled: window.navigator.cookieEnabled,
        cookie: document.cookie,
        localStorage: JSON.stringify(localStorage),
        mv_version: _callibri.mv_version,
        _callibri: JSON.stringify({
            user_id: JSON.stringify(_callibri.user_id),
            internal_vars: internal_vars,
            module_settings: JSON.stringify(_callibri.module_settings),
        })
    };
    if (add_msg) data.add_msg = add_msg;
    return data;
}
CallibriSegment = function(segments) {
    this.init(segments);
};
//сервис для определения сегмента
CallibriSegment.prototype = {
    init: function(segments) {
        var self = this;
        this.segments = segments;
        this.check_onchanged = [];
        this.active_segments = {};
        if (!this.segments || this.segments.filter(function(i) { return i.is_default; }).length === 0) { //случий когда нет дефолтного сегмента
            return;
        }
        this.segments.sort(function(a, b) { //сортируем сегменты по приоритету в порядке убывания
            if (a.priority < b.priority) {
                return 1;
            }
            if (a.priority > b.priority) {
                return -1;
            }
            return 0;
        });
        this.choose_segments();
    },
    get_active_groups: function(type) {
        var self = this,
            lids, segments = self.agree_segments,
            groups_hooks = (type == 'hooks') ? _callibri.module_settings.hooks_groups : _callibri.module_settings.catchers_groups;
        if (groups_hooks && groups_hooks.length > 0) {
            segments = segments.concat(self.default_segment);
            segments.some(function(segment) {
                if (groups_hooks.some(function(group) {
                        if (group.segment_ids.indexOf(segment.id) > -1) {
                            self.active_segments[type] = segment.id;
                            lids = group[type];
                            return true;
                        }
                    })) return true;
            });
            if (lids) return lids;
        } else self.active_segments[type] = '';
        return null;
    },
    choose_segments: function() {
        var self = this;
        self.agree_segments = [];
        this.segments.forEach(function(segment) {
            if (segment.is_default) {
                self.default_segment = segment;
            } else if (self.is_active(segment)) {
                self.agree_segments.push(segment);
            }
        });
    },
    set_active_segment: function(segment) {
        if (!this.active_segment || (this.active_segment.id != segment.id && segment.priority > this.active_segment.priority)) {
            this.active_segment = segment;
            if (!segment.is_default) {
                //callibriSetCookie(_callibri.cookie_prefix + "segment_callibri", segment.id, 1);
                if (this.segments.indexOf(segment) === 0) { //самый приоритетный сегмент убираем чекалку
                    window.removeEventListener("hashchange", arguments.callee, true);
                }
            }
        }
    },
    is_active: function(segment) {
        var conditions_length = Object.keys(segment.conditions).length;
        if (conditions_length === 0) {
            return true;
        }
        var key, condition, param;
        for (key in segment.conditions) { //Между условиями И
            values = segment.conditions[key];
            if (key == 'url')
                if (!this.check_url(values)) return false;
            if (key == 'cookie') {
                if (!this.check_cookie(values)) return false;
            }
            if (key.match(/^request_params=/)) {
                param = key.split('=')[1];
                key = key.split('=')[0];
            }
            if (this["check_" + key](values, param) === false) {
                if (key != 'request_params' && this.check_onchanged.indexOf(key) === -1) {
                    this.check_onchanged.push(key);
                }
                return false;
            }
        }
        return true;
    },
    check_cookie: function(values, param) {
        var check = false,
            value, values_length = values.length,
            i;
        for (i = 0; i < values_length; i++) { //между значениями ИЛИ
            value = values[i];
            if (callibriGetCookie(value) !== null) {
                return true; //если есть кука возвращается true
            }
        }
        return check;
    },
    check_request_params: function(values, param) {
        var matched_data = window.location.search && window.location.search.match(param + "=([^&]+)");
        if (!matched_data) return false;
        matched_data = matched_data[1];
        var check = false,
            value, values_length = values.length,
            i;
        for (i = 0; i < values_length; i++) { //между значениями ИЛИ
            value = values[i];
            if (matched_data.match(value)) {
                return true;
            }
        }
        return check;
    },
    check_url: function(values, param) {
        var check = false,
            value, values_length = values.length,
            i;
        for (i = 0; i < values_length; i++) { //между значениями ИЛИ
            value = values[i];
            //Убрать потом 
            //value = value.substring(0, value.length - 1);
            if (window.location.href.match(value)) {
                return true;
            }
        }
        return check;
    },
    cookie_onchanged: function() {
        var self = this;
        /*
        document.cookie.addEventListener('change', function(event) {
            if (event.removed || event.cause === 'overwrite') {
                this.choose_segment();
            }
        }, false);
        */
    },
    url_onchanged: function() {
        window.addEventListener("hashchange", this.choose_segments, false);
    },
};
CALLIBRI_LOCALIZTION_OBJ = {
    'localization_1': {
        ru: '<span>Даю <a href="{0}" target="_blank" class="callibri_b">согласие</a> на обработку моих персональных данных и принимаю условия <a  href="{1}" target="_blank" class="callibri_b">политики</a>.</span>',
        en: '<div class="callibri_ml25">I have read the <a class="callibri_link_black" href="{1}" target="_blank">Policy</a> conditions and <a class="callibri_link_black" href="{0}" target="_blank">agree</a> to the use and storage of my data.</div>'
    },
    'localization_2': { ru: 'Ваше сообщение', en: 'Your message' },
    'localization_3': { ru: 'Ваше имя', en: 'Your name' },
    'localization_4': { ru: 'E-mail', en: 'E-mail address' },
    'localization_5': { ru: 'Жду звонка', en: 'I am waiting for a call' },
    'localization_6': {
        ru: 'Не хотите оставлять номер? Если у вас есть микрофон и наушники, вы можете бесплатно позвонить оператору через наш сайт',
        en: "Don't want to leave a number? If you have a microphone and headphones, you can call the operator for free through our website"
    },
    'localization_7': { ru: 'Позвонить', en: 'Call' },
    'localization_8': {
        ru: 'Вы можете продолжить переписку в наших официальных аккаунтах:',
        en: 'You can continue to communicate through our official accounts:'
    },
    'localization_9': {
        ru: 'Вы должны дать согласие на обработку персональных данных',
        en: 'You must consent to the processing of personal data'
    },
    'localization_10': { ru: 'Виджет предоставлен Callibri', en: 'Widget provided by Callibri' }
};
var link_agreement,
    link_privacy;

function callibriOnTransition(element, handler, add) {
    var method = (add ? "add" : "remove") + "EventListener";
    element[method]("transitionend", handler, false);
    element[method]("mozTransitionEnd", handler, false);
    element[method]("webkitTransitionEnd", handler, false);
}

function CallibriGroups() {
    var self = this;
    self.groups = {};
    self.groups.groups = _callibri.module_settings.groups;
    self.groups.segments = _callibri.segment_service.agree_segments;
    self.operators = _callibri.module_settings.operators;
    var i = 0;

}
callibriShowGroups = function() {
    var messages_area = document.querySelector('.callibri_wrapperField'),
        chat = document.getElementById('callibri_chatW');
    chat.style.opacity = 0;
    localStorage.removeItem(_callibri.cookie_prefix + "callibri_operator");
    localStorage.removeItem(_callibri.cookie_prefix + "callibri_segment_chat");
    callibriOnTransition(chat, show, true);

    function show() {
        var items = messages_area.children,
            socials = _callibri.internal_vars.social && _callibri.internal_vars.social.already_online && _callibri.internal_vars.social.already_online.length > 0;
        document.getElementById('callibri_input_chat_div').style.display = 'none';
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.style.display = (item.classList.contains('callibri_groups_line') || (item.id == 'callibri_social_plug' && socials)) ? '' : 'none';
        }
        chat.style.opacity = 1;
        callibriOnTransition(chat, show, false);
    }
}
// Выбор группы по id и выбор рандомного онлайн оператора. Если ввести id оператора(old_operator) и он онлайн выберется он,а не рандом
CallibriGroups.prototype.selectGroup = function(id, group, old_operator) {
    var self = this,
        groups = document.querySelectorAll('.callibri_groups_line');
    group = id ? self.getGroup(id) : group;
    var operator = old_operator ? old_operator : random(group),
        chat = document.getElementById('callibri_chatW'),
        operator_picture = document.getElementById('operator_picture'),
        operator_name = document.getElementById('callibri_wrap_pict_name_operator');
    _callibri.chat_operator = {
        name: operator.name,
        avatar_image: operator.avatar_image,
        id: operator.user_id
    };
    if (operator_picture && operator_name) {
        operator_picture.src = _callibri.chat_operator.avatar_image;
        if (!_callibri.mobile.isMobile) operator_name.innerHTML = _callibri.chat_operator.name;
    }
    chat.style.opacity = 0;
    callibriOnTransition(chat, show, true);

    function show() {
        var append_here = document.getElementById('callibri_appendHere'),
            append_here_child = document.getElementById('callibri_appendHere').children,
            socials = _callibri.internal_vars.social && _callibri.internal_vars.social.already_online && _callibri.internal_vars.social.already_online.length > 0;
        document.getElementById('callibri_input_chat_div').style.display = '';
        var group_name = document.getElementById('callibri_group_name');
        if (group_name) group_name.innerHTML = group.group_name;
        for (var i = 0; i < append_here_child.length; i++) {
            if (append_here_child[i].classList.contains('callibri_groups_line') || append_here_child[i].classList.contains('callibri_connected_plugin') || (append_here_child[i].id == 'callibri_social_plug' && !socials)) append_here_child[i].style.display = 'none';
            else append_here_child[i].style.display = 'block';
        }
        var min_tags = 2;
        if (socials) {
            min_tags = 4;
        }
        var callibri_manager = document.querySelector('.callibri_overflow.callibri_chat_message.callibri_manager');
        if (append_here_child.length - groups.length <= min_tags && callibri_manager)
            callibri_manager.parentNode.removeChild(callibri_manager);
        if (!document.querySelector('.callibri_overflow.callibri_chat_message.callibri_manager')) callibri_getMessageData(_callibri.chat_widget, true);
        var chat_widget = _callibri.chat_widget;
        if (chat_widget.chat_history) {
            var i = 0;
            while (i < append_here_child.length) {
                if (!(append_here_child[i].classList.contains('callibri_groups_line') || append_here_child[i].id == 'callibri_group_name')) document.getElementById('callibri_appendHere').removeChild(append_here_child[i]);
                else i++;
            }
            for (var i = 0; i < chat_widget.chat_history.length; i++) {
                var message = JSON.parse(chat_widget.chat_history[i]);
                chat_widget._build_message_element;
                chat_widget._show_message(message);
            }
        }
        chat.style.opacity = 1;
        callibriOnTransition(chat, show, false);
    }
    var send_segment = (this.default_group && group.id == this.default_group.id) ? _callibri.segment_service.active_segments.hooks : group.id;
    callibriSetItemLocalStorage(_callibri.cookie_prefix + "callibri_segment_chat", send_segment);
    _callibri.segment_service.active_segments.chat = send_segment;
    //Получаем рандомного онлайн оператора из группы и сохраняем его в куку callibri_operator
    function random(group) {
        var online_operators = group.online_operators,
            id = online_operators.length > 1 ? online_operators[Math.floor(Math.random() * group.online_operators.length)] : online_operators[0];
        self.operators.forEach(function(operator) {
            if (operator.user_id == id.user_id) online_operators = operator;
        });
        callibriSetItemLocalStorage(_callibri.cookie_prefix + "callibri_operator", id.user_id);
        return online_operators;
    }
};
//Возвращает группу по id
CallibriGroups.prototype.getGroup = function(id) {
    var self = this,
        return_group;
    self.groups.groups.forEach(function(group) {
        if (group.id == id) {
            return_group = group;
        }
    });
    return return_group;
};
//Возвращает обект оператора если он есть и он онлайнт, иначе false
CallibriGroups.prototype.getOperator = function(id) {
    var self = this,
        online = false;
    self.operators.some(function(operator) {
        if (operator.user_id == id) {
            online = operator;
            return;
        }
    });
    return online;
};
CallibriGroups.prototype.getOnlineOperatorsByGroup = function(group) {
    var operators, self = this;
    if (group.user_ids.indexOf(0) > -1) {
        return self.operators;
    } else {
        operators = self.operators.filter(function(operator) {
            return group.user_ids.indexOf(operator.user_id) > -1;
        });
    }
    return operators;
};
CallibriGroups.prototype.getGroups = function() {
    var self = this,
        agree_group = [],
        agree_group_online = [],
        disagree_group_online = [],
        segments = self.groups.segments,
        url = window.location.href;
    for (var i in segments) {
        if (segments[i].disable_widget) {
            return null;
        }
    }
    var online_group = [];
    self.groups.groups.forEach(function(group) {
        segments.forEach(function(segment) {
            if (group.segment_ids.indexOf(segment.id) > -1) {
                group.online_operators = self.getOnlineOperatorsByGroup(group);
                if (!segment.is_default) {
                    group.id = segment.id;
                    agree_group.push(group);
                    // Проверка на то что одна группа с онлайн оператором или нет. Если уже 2 группы с онлайн операторами, то дальше нет смысла добавлять в online_group потому что будет возвращать agree_group. если же online_group всего одна то вернем online_group
                    if (group.online_operators.length > 0 && online_group.length < 3) {
                        online_group.push(group);
                    }
                }
            }
        });
    });
    if (online_group.length == 1) {
        return online_group;
    } else if (online_group.length > 1) {
        return agree_group;
    } else {
        self.default_group = self.groups.groups.filter(function(group) {
            return group.segment_ids.indexOf(_callibri.segment_service.default_segment.id) > -1;
        })[0];
        if (self.default_group) self.default_group.online_operators = self.getOnlineOperatorsByGroup(self.default_group);
        return [self.default_group];
    }

};
// Отрисовка групп в чат
CallibriGroups.prototype.draw = function() {
    function compare(onlineA, onlineB) {
        return onlineB.online_operators.length - onlineA.online_operators.length;
    }

    function hideGroups() {
        var groups = document.querySelectorAll('.callibri_groups_line');
        document.getElementById('callibri_input_chat_div').style.display = '';
        for (var i = 0; i < groups.length; i++) {
            groups[i].style.display = 'none';
        }
    }
    var self = this,
        groups = self.getGroups(),
        old_operator = self.getOperator(callibriGetItemLocalStorage(_callibri.cookie_prefix + "callibri_operator")),
        old_group = self.getGroup(callibriGetItemLocalStorage(_callibri.cookie_prefix + "callibri_segment_chat")),
        messages_area = document.querySelector('.callibri_wrapperField');
    if (groups !== null) {
        messages_area.innerHTML += (groups.length > 1) ? "<div id='callibri_group_name' onclick='callibriShowGroups()'></div>" : "";
        var group_name = document.getElementById('callibri_group_name');
        if (groups.length > 1) {
            document.getElementById('callibri_input_chat_div').style.display = 'none';
            groups.sort(compare);
            for (var i = 0; i < groups.length; i++) {
                var online = 0,
                    images = '';
                groups[i].online_operators.some(function(current_operator) {
                    if (online < 3) {
                        images += '<img src=' + current_operator.avatar_image + ' class="callibri_groups_img">';
                        online++;
                    } else
                        return true;
                });
                if (groups[i].online_operators.length > 0) {
                    online = images + '<div class="callibri_groups_online callibri_groups_online_on">' + groups[i].online_operators.length + ' онлайн</div>';
                } else {
                    online = '<div class="callibri_groups_online">Пока никого нет</div>';
                }
                var active = (groups[i].online_operators.length > 0) ? ('style="cursor:pointer" onclick="_callibri.groups.selectGroup(' + groups[i].id + ')') : '';
                messages_area.innerHTML += '<div class="callibri_groups_line" ' + active + '"><div class="callibri_groups_name">' + groups[i].group_name + '</div><div class="callibri_groups_info">' + online + '</div></div>';
            }
        }
        if (old_operator && old_group) {
            _callibri.segment_service.active_segments.chat = old_group;
            hideGroups();
            self.selectGroup(null, old_group, old_operator);

        } else if (groups.length == 1) {
            hideGroups();
            self.selectGroup(null, groups[0]);
        }
    }
};

var callibri_open_chat = false;
String.prototype.callibri_format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

function callibri_events_callback(name) {
    var fn = window[name];
    if (typeof fn === 'function') {
        fn();
    }
}

function callibri_ios_check() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function callibri_tablet_check() {
    return (/Tablet|iPad/i.test(navigator.userAgent));
}

function callibri_manual_zoom() {
    try {
        function zoom_replace(iw) {
            widget_mobile_style.innerHTML = widget_mobile_style.innerHTML.replace(re, 'zoom:' + iw / screen.width);
            if (lc_style) {
                lc_style.innerHTML = lc_style.innerHTML.replace(re, 'zoom:' + iw / screen.width);
            }
        }
        if (_callibri.mobile.isMobile) {
            var re = /zoom:(\d+\.*\d*)/gi,
                widget_mobile_style = document.getElementById('MOBILE_MIN'),
                lc_style = document.getElementById('CALLIBRI_LID_CATCHER_STYLE'),
                meta = document.querySelector('meta[name="viewport"]');
            if (!(meta && meta.content && meta.content.indexOf("width=device-width") > -1)) {
                zoom_replace(document.documentElement.clientWidth);
            } else {
                var iw = callibri_ios_check() ? screen.width : window.innerWidth;
                zoom_replace(iw);
            }
        }
    } catch (e) {
        if (typeof(callibriOnError) == "function") {
            callibriOnError(callibriErrorInfo(e));
        }
    }
}

function callibri_set_events() {
    window.addEventListener("mousemove", function(event) {
        if (event.target.getAttribute && event.target.getAttribute('data-options') !== 'true') {
            callibriToggleOptions(event);
        }
    });
}

/////// SVG иконки

var callibriTabs = {
    'callback': {
        tab_switch: 'callibri_reqCallW',
        tab_id: 'switchForCall',
        tab_text: 'Заказать звонок',
        tab_icon: '<svg xmlns="http://www.w3.org/2000/svg" id="callback_svg" data-options="true"  width="28" height="34" viewBox="0 0 14 17" class="callibri_panel_picture"><path d="M3.97.1h-.03C2.67.22 1.73.69 1.12 1.42c-.61.73-.88 1.69-.9 2.76-.05 2.14.87 4.74 2.28 7.03 1.4 2.29 3.28 4.27 5.21 5.14.97.43 1.95.58 2.88.31.93-.27 1.78-.96 2.48-2.12.05-.09.04-.22-.04-.29L9.55 10.8c-.01-.02-.02-.03-.03-.04-.01-.01-.03-.02-.04-.03a.138.138 0 0 1-.04-.03h-.03s-.01-.01-.02-.01h-.1c-.01.01-.01.01-.02.01h-.01c-.02.01-.03.02-.05.03-.02.01-.03.02-.05.03l-1.3.87C6.21 10.36 5.2 8.52 4.45 6.17l1.2-.81c.01 0 .02-.01.02-.01l.03-.01v-.01c.01 0 .01 0 .02-.01h.01s0-.01.01-.01V5.3s.01-.01.02-.01c0-.01 0-.01.01-.02l.01-.01s0-.01.01-.01v-.02c.01-.01.01-.02.02-.03v-.02-.04-.01-.02-.02-.01s0-.01-.01-.01c0-.01.01-.01.01-.01-.01-.01-.01-.02-.01-.03-.01-.01-.02-.03-.03-.04L4.2.27a.248.248 0 0 0-.17-.16C4.01.1 3.99.1 3.97.1z"  class="callibri_passive_icon" data-options="true"/></svg>'
    },
    'chat': {
        tab_switch: 'callibri_chatW',
        tab_id: 'switchForChat',
        tab_text: 'Написать в чат',
        tab_icon: '<svg xmlns="http://www.w3.org/2000/svg" id="chat_svg" data-options="true" class="callibri_panel_picture" width="30" height="30" viewBox="0 -1 16 17"><path d="M2.38 10.96h.22v3.19a.649.649 0 0 0 1.05.51l4.58-3.7h3.6c1.32 0 2.38-1.06 2.38-2.38v-6.1c0-1.32-1.06-2.38-2.38-2.38H2.38C1.06.1 0 1.16 0 2.48v6.1c0 1.32 1.06 2.38 2.38 2.38z" data-options="true"/></svg>'
    },
    'feedback': {
        tab_switch: 'callibri_request',
        tab_id: 'switchForRequest',
        tab_text: 'Оставить заявку',
        tab_icon: '<svg xmlns="http://www.w3.org/2000/svg" id="feedback_svg" data-options="true" class="callibri_panel_picture" width="30" height="38" viewBox="0 0 15 19"><path d="M12.24 18.09H1.81c-1.01 0-1.81-.8-1.81-1.8V4.65c0-1.01.8-1.81 1.81-1.81h1.62v-.4c0-.34.26-.6.6-.6h.85C5.06.99 5.78.39 6.64.39h.75c.86 0 1.58.6 1.76 1.45H10c.34 0 .6.26.6.6v.4h1.64c1.01 0 1.81.8 1.81 1.81v11.64c0 1-.8 1.8-1.81 1.8zM3.39 7.91a.514.514 0 1 0 0 1.03h5.18a.514.514 0 1 0 0-1.03H3.39zm6.02-4.87h-.8a.59.59 0 0 1-.6-.6V2.2c0-.34-.26-.6-.6-.6h-.75c-.34 0-.6.26-.6.6v.24c0 .34-.26.6-.6.6h-.8v1.37h4.75V3.04zm1.16 7.93H3.39a.514.514 0 1 0 0 1.03h7.18a.514.514 0 1 0 0-1.03zm0 2.94H3.39a.514.514 0 1 0 0 1.03h7.18a.514.514 0 1 0 0-1.03z"  class="callibri_passive_icon" data-options="true"/></svg>'
    },
    'contact': {
        tab_switch: 'callibri_map',
        tab_id: 'switchForMap',
        tab_icon: '<svg xmlns="http://www.w3.org/2000/svg" id="contact_svg" data-options="true"  width="28" height="34" viewBox="0 0 14 17" class="callibri_panel_picture"><path d="M3.18 12.31l2.72 3.57a1.4 1.4 0 0 0 2 0l3-3.55c.1-.08.19-.19.3-.27a6.828 6.828 0 0 0-.37-10.01C8.27-.21 5.79-.21 3.25 2.01.21 4.65.08 9.24 2.88 12.03c.11.09.19.18.3.28zm3.71-7.59c1.31 0 2.37 1.05 2.37 2.37a2.36 2.36 0 0 1-2.37 2.36 2.36 2.36 0 0 1-2.37-2.36c0-1.32 1.06-2.37 2.37-2.37z"  class="callibri_passive_icon" data-options="true"/></svg>'
    },
    'social': {
        tab_switch: 'callibri_social',
        tab_id: 'switch_for_social',
        tab_icon: '<svg xmlns="http://www.w3.org/2000/svg" id="social_svg" data-options="true" class="callibri_panel_picture" version="1" width="400" height="740" viewBox="0 0 300 555"><g clip-path="url(#clipPath20)" transform="matrix(1.0333 0 0 1.0333 0 0)"><path d="M194 1.5c-53.2 7.3-90.9 39.9-104.6 90.3-4.9 17.9-5.5 25.1-6.1 67.4l-.5 39.7-38 .3-38 .3-3.4 3.7L0 207v49.1c0 43.4.2 49.4 1.6 51.8 3.3 5.6 2.8 5.6 43.6 5.9l37.8.3V429c0 126.2-.3 120.6 5.9 124.3 2.6 1.5 7.7 1.7 53.1 1.7 55.6 0 54.8.1 57.6-6.5 1.2-2.9 1.4-21.4 1.4-119V314h42.8c47.8 0 48 0 51.4-7 1.6-3.2 1.8-7.7 1.8-50.3 0-50.9-.1-51.7-5.6-55.4-2.6-1.7-6.2-1.8-46.6-2.1l-43.8-.3v-31.4c0-39.4 1.1-45.3 9.7-52.4 7.4-6.1 9.4-6.4 47.3-7 37.6-.7 38.1-.7 40.8-6.7.9-1.8 1.2-15.6 1.2-47.5 0-49.4 0-49.3-6-52.4C291.5.2 284.6 0 247.3.1c-30 .1-46.8.5-53.3 1.4z" class="callibri_passive_icon" data-options="true"/></g></svg>',
        messengers: {
            telegram: '<svg xmlns="http://www.w3.org/2000/svg" data-options="true" class="callibri_sphere_social_svg" viewBox="0 0 310 300"><g clip-path="url(#clipPath20)" transform="matrix(1.0333 0 0 1.0333 -20 -10)"><path class="callibri_social_svg_telegram" data-options="true" fill="#000" d="M5.3 144.645l69.125 25.8 26.756 86.047c1.713 5.51 8.452 7.548 12.925 3.89l38.532-31.41c4.04-3.292 9.792-3.456 14.013-.392l69.498 50.457c4.785 3.478 11.564.856 12.764-4.926l50.91-244.89c1.31-6.316-4.895-11.585-10.91-9.26L5.22 129.403c-7 2.7-6.94 12.612.08 15.243zm91.57 12.066l135.097-83.206c2.428-1.49 4.926 1.792 2.84 3.726L123.314 180.87c-3.92 3.648-6.447 8.53-7.163 13.83l-3.798 28.145c-.503 3.758-5.782 4.13-6.82.494l-14.606-51.326c-1.673-5.854.765-12.107 5.943-15.303z"/></g></svg>',
            vk: '<svg xmlns="http://www.w3.org/2000/svg" data-options="true" class="callibri_sphere_social_svg callibri_social_svg" viewBox="440 631 17 10"><path data-options="true" class="callibri_social_svg_vk" fill-rule="evenodd" d="M448.195 640.7h.94s.283-.032.428-.188c.133-.143.13-.412.13-.412s-.02-1.26.565-1.446c.577-.183 1.317 1.218 2.102 1.756.593.408 1.044.32 1.044.32l2.098-.03s1.098-.068.577-.93c-.043-.072-.304-.64-1.56-1.806-1.317-1.222-1.14-1.024.444-3.136.966-1.287 1.35-2.072 1.23-2.408-.114-.32-.824-.236-.824-.236l-2.362.015s-.176-.025-.305.052c-.127.076-.21.254-.21.254s-.373.995-.87 1.842c-1.053 1.786-1.474 1.88-1.646 1.77-.4-.26-.3-1.04-.3-1.593 0-1.73.262-2.453-.51-2.64-.258-.062-.447-.103-1.104-.11-.843-.008-1.557.003-1.96.2-.27.133-.477.426-.35.443.156.02.51.095.697.35.242.33.234 1.07.234 1.07s.14 2.037-.325 2.29c-.32.174-.757-.18-1.694-1.8-.48-.83-.844-1.75-.844-1.75s-.07-.17-.194-.262c-.152-.11-.363-.147-.363-.147l-2.245.014s-.337.01-.46.156c-.11.13-.01.4-.01.4s1.758 4.112 3.748 6.184c1.825 1.9 3.897 1.775 3.897 1.775" data-options="true"/></svg>',
            viber: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" data-options="true" class="callibri_sphere_social_svg callibri_social_svg"><g fill-rule="evenodd"><path class="callibri_social_svg_viber" d="M11.164 8.905c-.375-.302-.776-.574-1.17-.85-.788-.553-1.508-.596-2.095.293-.33.5-.793.52-1.276.302-1.33-.603-2.36-1.533-2.96-2.886-.267-.6-.264-1.136.36-1.56.33-.223.662-.488.635-.977C4.624 2.59 3.075.457 2.463.232 2.21.14 1.96.145 1.7.232.268.714-.326 1.894.243 3.29c1.697 4.167 4.684 7.068 8.796 8.838.234.1.494.14.626.177.936.01 2.033-.892 2.35-1.787.305-.86-.34-1.203-.85-1.613zM6.554.66c3.006.462 4.392 1.89 4.775 4.918.035.28-.07.7.33.71.416.007.316-.408.32-.688C12.015 2.75 9.53.106 6.64.008c-.216.03-.667-.15-.695.338-.02.33.36.275.61.314z" data-options="true"/><path class="callibri_social_svg_viber" d="M7.142 1.49c-.29-.035-.67-.17-.738.23-.07.42.355.378.628.44 1.857.414 2.503 1.09 2.81 2.93.043.27-.045.688.41.618.34-.05.217-.41.245-.62.015-1.766-1.5-3.376-3.355-3.598z" data-options="true"/><path class="callibri_social_svg_viber" d="M7.313 2.935c-.193.005-.383.026-.453.232-.107.308.117.382.345.42.762.12 1.163.57 1.24 1.33.02.205.15.372.35.35.275-.034.3-.28.29-.513.015-.853-.95-1.84-1.772-1.82z" data-options="true"/></g></svg>',
            facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" data-options="true" class="callibri_sphere_social_svg callibri_social_svg" viewBox="544 632 16 8"><g clip-path="url(#clipPath20)" transform="matrix(1 0 0 1 -1 0)"><path class="callibri_social_svg_fb" fill-rule="evenodd" d="M544.827 639.554l6.434-6.853 3.06 3.18 5.64-3.15-6.29 6.722-3.047-3.155" data-options="true"/></g></svg>',
            ok: '<svg xmlns="http://www.w3.org/2000/svg" data-options="true" class="callibri_sphere_social_svg callibri_social_svg" viewBox="13 10 16 16"><g fill="#000" fill-rule="evenodd"><path d="M20.448 25.036c-3.948 0-7.148-3.2-7.148-7.148 0-3.947 3.2-7.147 7.148-7.147 3.947 0 7.147 3.2 7.147 7.148 0 3.948-3.2 7.148-7.147 7.148zm0-4.113c1.676 0 3.035-1.358 3.035-3.035 0-1.676-1.36-3.035-3.035-3.035-1.676 0-3.035 1.36-3.035 3.035 0 1.677 1.36 3.035 3.035 3.035z" data-options="true" class="callibri_social_svg_ok"/><path class="callibri_social_svg_ok" d="M14.26 21.065l-1.087 3.867 3.856-1.103-.617-2.236" data-options="true"/></g></svg>'
        }
    }
};

var callibri_svg = {
    'checkmark': {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" id="ok_svg" data-options="true" class="callibri_panel_picture" viewBox="5 5 16 18" preserveAspectRatio="xMinYMin meet"><g  transform="matrix(.04333 0 0 .04333 5 3)"><path fill="rgb(255,255,255)" class="callibri_checkmark_icon" d="M434.539 98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993-7.618 0-14.093 2.665-19.417 7.993L169.59 247.248l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992-7.616 0-14.087 2.662-19.417 7.992L7.994 201.852C2.664 207.181 0 213.654 0 221.269c0 7.609 2.664 14.088 7.994 19.416l103.351 103.349 38.831 38.828c5.327 5.332 11.8 7.994 19.414 7.994 7.611 0 14.084-2.669 19.414-7.994l38.83-38.828L434.539 137.33c5.325-5.33 7.994-11.802 7.994-19.417.004-7.611-2.669-14.084-7.994-19.414z"/></g></svg>'
    },
    'textcursor': {
        icon: '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="266.667" height="266.667" viewBox="0 0 200 200" ><path d="M68 5.8c0 1.8.8 2 10.8 2.4 11.7.4 15.9 1.8 17.9 5.8 1 1.9 1.3 12.4 1.3 43.2V98h-5.5c-4.8 0-5.5.2-5.5 2s.7 2 5.5 2H98v39.5c0 43.9-.1 45-6.2 48.1-2.3 1.2-6.5 1.9-13.5 2.2-9.5.4-10.3.6-10.3 2.5s.5 1.9 10.3 1.5c10.9-.5 16-2.1 19.6-5.9l2.1-2.3 2.1 2.3c3.6 3.8 8.7 5.4 19.7 5.9 9.7.4 10.2.4 10.2-1.5s-.8-2.1-10.2-2.5c-7.1-.3-11.3-1-13.6-2.2-6.1-3.1-6.2-4.2-6.2-48.1V102h5.5c4.8 0 5.5-.2 5.5-2s-.7-2-5.5-2H102V57.2c0-30.8.3-41.3 1.3-43.2 2-4 6.2-5.4 18-5.8 9.9-.4 10.7-.6 10.7-2.4 0-2-.5-2-11.2-1.6-9 .4-12.2.9-15.5 2.6-2.2 1.2-4.4 2.7-4.7 3.4-.5 1.1-.7 1.1-1.2 0-.3-.7-2.5-2.2-4.7-3.4-3.3-1.7-6.5-2.2-15.4-2.6C68.5 3.8 68 3.8 68 5.8z"/></svg>'
    },
    'arrow_down': {
        icon: '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><line style="fill:none;stroke:#b6b6b6;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="103.334" x2="64" y1="70.88" y2="110.213"/><line style="fill:none;stroke:#b6b6b6;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="64" x2="24.666" y1="110.213" y2="70.88"/></g><line style="fill:none;stroke:#b6b6b6;stroke-width:12;stroke-miterlimit:10;" x1="64" x2="64" y1="110.213" y2="9.787"/></g></svg>'
    }
};

/////// Цветовые схемы

var callibri_themes = {
    '0': {
        'controls': '#54a5ff',
        'balloon': '#d2e7ff'
    },
    '1': {
        'controls': '#eebf16',
        'balloon': '#fdf0ca'
    },
    '2': {
        'controls': '#000000',
        'balloon': '#dedede'
    },
    '3': {
        'controls': '#88c954',
        'balloon': '#e0fdcd'
    },
    '4': {
        'controls': '#f25458',
        'balloon': '#ffd2d2'
    },
    '5': {
        'controls': '#47cdac',
        'balloon': '#d2fcf2'
    },
    '6': {
        'controls': '#f6a544',
        'balloon': '#ffe8d2'
    },
    '7': {
        'controls': '#de6bae',
        'balloon': '#f9daec'
    },
    'callibri_default': {
        'controls': '#54a5ff',
        'balloon': '#d2e7ff'
    },
};

function callibri_show_actions_btn() {
    var messages = document.getElementsByClassName('callibri_chat_message');
    var actions_btn = document.getElementById('callibri_open_chat_settings');
    if (_callibri.chat_widget) {
        if (messages && messages.length > 1)
            actions_btn.style.display = 'block';
        else
            actions_btn.style.display = 'none';
    }
}

function callibri_get_user_info(type, line) {
    var feedback = _callibri.internal_vars.feedback,
        phone = document.getElementById('callibri_info_input_phone_' + type),
        email = document.getElementById('callibri_info_input_email_' + type),
        name = document.getElementById('callibri_info_input_name_' + type);
    if (email) {
        email.addEventListener('blur', function() { callibriCheckInput(this, 'email'); });
        email.addEventListener('focus', function() { callibriUnCheckInput(this); });
    }
    if (line == 'one') {
        feedback.name_field = callibriRemoveTags(name.value) || '';
        document.getElementById('callibri_info_input_nameline_' + type).style.display = 'none';
        document.getElementById('callibri_info_input_phoneemailline_' + type).style.display = 'flex';
    } else {
        if (phone) { feedback.phone = callibriRemoveTags(phone.value); }
        if (email) { feedback.email = callibriRemoveTags(email.value); }
        if (name) { feedback.name_field = callibriRemoveTags(name.value); }
        var module_feedback_data = {
                feedback: feedback
            },
            element = phone || email || name;
        phone = phone ? phone.value.length > 0 : true;
        email = email ? (!callibriCheckInput(email, 'email') && email.value.length > 0) : true;
        if (phone && email) {
            element.parentNode.parentNode.innerHTML = '<div class="callibri_answerphone">Автоответчик</div> Спасибо! Мы свяжемся с вами в ближайшее время';
            module_feedback_data.feedback.page = (document.location.protocol + "//" + document.location.host + document.location.pathname);
            callibriMakeRequest('/module/contactus', module_feedback_data);
        }
    }
}

function callibriUnCheckInput(input) {
    input.classList.remove('callibri_input_dialog_to_email-wrong');
}

function callibriCheckInput(input, type) {
    var check = false;
    if (type == 'email') {
        check = (!/.{1,}@.{1,}\..{1,}/.test(input.value));
    }
    if (type == 'tel') {
        check = true;
    }
    if (input.value.length > 0 && check) {
        input.classList.add('callibri_input_dialog_to_email-wrong');
        return true;
    } else {
        input.classList.remove('callibri_input_dialog_to_email-wrong');
        return false;
    }
}

function callibri_send_chat_to_mail(element /*, channel*/ ) {
    var email = document.querySelector('#callibri_input_dialog_to_email');
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //емейл верный, идем на сервер
    if (re.test(email.value)) {
        email.classList.remove('callibri_error_data');
        var post_data = {
            email: callibriRemoveTags(email.value),
            channel: _callibri.session_id,
            client_id: _callibri.site_id,
            timezone: (new Date().toString().match(/([-\+][0-9]+)\s/)[1])
        };
        callibriMakeRequest("/chat/to_email", post_data);
        element.parentNode.innerHTML = '<div><div class="callibri_answerphone">Автоответчик:</div>Диалог отправлен на ' + email.value + '</div>';
    } else {
        //емейл не верный
        email.classList.add('callibri_input_dialog_to_email-wrong');
    }
}

function callibri_links_to_client_social() {
    return {
        'facebook': { link: "https://m.me/{username}?ref={session_id}", title: 'Facebook' },
        'telegram': { link: "tg://resolve?domain={username}&start={session_id}", title: 'Telegram' },
        'vk': { link: "https://vk.com/im?sel=-{username}", title: "Vkontakte" },
        'viber': {
            link: _callibri.mobile.isMobile ? "viber://pa?chatURI={username}&context={session_id}" : "javascript:callibri_viber_toggle(\"{username}\");",
            title: "Viber"
        },
        'ok': { link: "https://ok.ru/messages/group/{username}", title: "Одноклассники" }
    };
}

var callibri_app = {
    scrolled: 0,
    newPosition: 0,
    interval: null,
    speed: 0,
    scrollTo: function(el) {
        var locate = 0;
        try {
            if (anchor.offsetParent) {
                locate = document.getElementById('callibri_appendHere').scrollHeight;
            }
        } catch (e) {}
        locate = locate >= 0 ? locate : 0;
        this.animateScroll(locate);
        return false;
    },
    animateScroll: function(pos) {
        var block = _callibri.mobile.isMobile ? document.getElementById('callibri_appendHere') : document.getElementById('callibri_chatW');
        var element = (block && block.scrollTop) ? block : block,
            start = element.scrollTop,
            change = pos - start,
            currentTime = 0,
            increment = 20,
            duration = 300;
        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
};

var callibri_operator_print = false,
    callibri_first_message = false,
    callibri_read_last_message = false,
    JsSIP, Pusher,
    callibri_audio_incoming, callibri_audio_outcoming, callibri_jslibs = [];
Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function callibri_visible(element) {
    return (element.offsetWidth > 0 && element.offsetHeight > 0);
}

function callibri_load_emoji_libs() {
    if (typeof EmojiPicker === 'undefined') {
        js_paths = ['nanoscroller.min.js', "full-emoji.min.js"];
        for (i = 0; i < js_paths.length; i++) {
            var jsf = document.createElement("script");
            jsf.setAttribute("type", "text/javascript");
            jsf.setAttribute("src", callibri_image_path + js_paths[i]);
            jsf.setAttribute("defer", "defer");
            callibri_jslibs[i] = jsf;
        }
        callibri_jslibs[0].onload = function() {
            callibri_jslibs[1].onload = function() {
                try {
                    callibri_init_emoji();
                } catch (e) {
                    if (jQuery.fn.jquery.split('.')[1] > 6) {
                        callibriSendError(e, 'jquery');
                    }
                }
            };
            document.getElementsByTagName("head")[0].appendChild(callibri_jslibs[1]);
        };
        document.getElementsByTagName("head")[0].appendChild(callibri_jslibs[0]);
    } else {
        callibri_init_emoji();
    }
}
var UID = {
    _current: 0,
    getNew: function() {
        this._current++;
        return this._current;
    }
};

function callibriAnimateSocial() {
    for (var i = 0; i < _callibri.animation.length; i++) {
        _callibri.animation[i].style.opacity = 0;
    }
    _callibri.animation[_callibri.animation.length - 1].style.opacity = 1;
    var callibri_animation = [].slice.call(_callibri.animation);
    _callibri.animation.push(_callibri.animation.shift());
    _callibri.animation = _callibri.animation;
}

var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : Element.prototype;

elementPrototype.pseudoStyle = function(element, prop, value) {
    var _this = this;
    var _sheetId = "pseudoStyles";
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    var className = "pseudoStyle" + UID.getNew();
    _this.className += " " + className;
    _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
    _head.appendChild(_sheet);
    return this;
};

function callibri_getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function callibri_remove_unread() {
    if (callibri_read_last_message === false) {
        callibri_read_last_message = true;
        var elements = document.querySelectorAll('#callibri_chatW .callibri_unread'),
            elements_length = elements.length,
            i;
        var parents = [];
        for (i = 0; i < elements_length; i++) {
            parents.push(elements[i].parentNode);
            elements[i].remove();
        }
        try { removeClass(parents, 'callibri_unread_padd'); } catch (e) {}
    }
}

function callibri_setHeight(targetArr) {
    var input_chat = document.getElementById('callibri_input_chat_div') === null ? 0 : document.getElementById('callibri_input_chat_div').offsetHeight;
    var header = (!_callibri.mobile.isMobile) ? document.getElementById('callibri_header').offsetHeight : 10;
    targetArr.forEach(function(item, i, arr) {
        try {
            document.getElementById(item).style.height = _callibri.internal_vars.container.offsetHeight - header - document.getElementById('modalPanel').offsetHeight - _callibri.internal_vars.footer.offsetHeight - (item == 'callibri_chatW' ? input_chat : 0) + 2 + 'px';
        } catch (e) {
            if (_callibri.debugger_on === true) {
                console.log(e);
            }
        }
    });
}

function callibri_count_exeption_in_event(ev) {
    var exeptionArr = ['callibri_wrap_pict_flex', 'callibri_header'];
    var countExeptions = 0;
    for (var i = 0; i < ev.length; i++) {
        if (ev[i].classList) {
            for (var j = 0; j < exeptionArr.length; j++) {
                exept = exeptionArr[j];
                if (ev[i].classList.contains(exept)) {
                    countExeptions++;
                }
            }
        }
    }
    return countExeptions;
}
///Возвращает .patch Эвента в нормальном виде в Firefox  //callibriСomposedPath(event.target);
function callibriСomposedPath(el) {
    var path = [];
    while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
            path.push(document);
            path.push(window);
            return path;
        }
        el = el.parentElement;
    }
}

function callibri_init_resize() {
    var indent = 10,
        container = _callibri.internal_vars.container;
    container.addEventListener('mousedown', function(e) {
        var eventObj = e || window.event;
        if (eventObj.which != 1) {
            return false;
        }
        var path = eventObj.path || (eventObj.callibriСomposedPath && eventObj.callibriСomposedPath()) || callibriСomposedPath(eventObj.target);
        var tagname = eventObj.target.tagName;
        if ((eventObj.offsetX < indent || this.offsetWidth - eventObj.offsetX < indent) && tagname === 'DIV') {
            if (eventObj.offsetX < indent && (path[2].id !== 'callibri_appendHere') && (callibri_count_exeption_in_event(path) < 1)) {
                document.body.style.cursor = 'w-resize';
                callibrInitDrag(eventObj, indent, 'left');
                return;
            }
            if (this.offsetWidth - eventObj.offsetX < indent) {
                document.body.style.cursor = 'e-resize';
                callibrInitDrag(eventObj, indent, 'right');
                return;
            }
        }
    });
    container.addEventListener('mousemove', function(e) {
        var eventObj = e || window.event;
        var tagname = eventObj.target.tagName;
        var path = eventObj.path || (eventObj.callibriСomposedPath && eventObj.callibriСomposedPath()) || callibriСomposedPath(eventObj.target);
        if ((eventObj.offsetX < indent || this.offsetWidth - eventObj.offsetX < indent) && tagname === 'DIV') {
            if (!_callibri.internal_vars.set_prev_cursor) {
                _callibri.internal_vars.prev_cursor = document.body.style.cursor;
                _callibri.internal_vars.set_prev_cursor = true;
            }
            if (eventObj.offsetX < indent && (path[2].id !== 'callibri_appendHere')) {
                document.body.style.cursor = 'w-resize';
                return;
            }
            if (this.offsetWidth - eventObj.offsetX < indent) {
                document.body.style.cursor = 'e-resize';
                return;
            }
        } else {
            document.body.style.cursor = _callibri.internal_vars.prev_cursor;
        }
    });
    container.addEventListener('mouseout', function(e) {
        document.body.style.cursor = _callibri.internal_vars.prev_cursor;
    });
}

function callibrInitDrag(event, indent, sector) {
    var active = document.querySelector('#callibri_widget_phone');

    function start_coordinates(elem) {
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
    coords = start_coordinates(active);
    startX = event.clientX;
    startY = event.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(_callibri.internal_vars.container).width, 10);
    //передавать сектор в котором произошло нажатие
    document.addEventListener('mousemove', callibriDoDrag_wrapper = function(e) {
        callibriDoDrag(e, sector);
    }, false);
    document.addEventListener('mouseup', callibriStopDrag, false);
    document.addEventListener('selectstart', callibriDisableSelect, false);
}

function callibriDisableSelect(e) {
    e.preventDefault();
    return false;
}
var CallibriMobileVersion = {
    overlay: function(switch_div, header_div, footer_div) {
        if (_callibri.mobile.isMobile) {
            header_div = "<div class = 'callibri_color_footer' target='_blank' class='callibri_a' id='callibri_footer'>Работает на <a href = 'https://callibri.ru/vidget_dlya_sayta?utm_source=widget&utm_medium=organic' class = 'callibria_color' target = '_blank'>Callibri</a></div>";
            footer_div = "";
        }
        return {
            header_div: header_div,
            footer_div: footer_div,
            switch_div: switch_div
        };
    },
    div_callback: function(div, on_webcall) {
        if (_callibri.mobile.isMobile) {
            /* доправить тест на вебколл с учетом мобильных*/
            return " " + (_callibri.webcalls && on_webcall ? '<hr class="calibri_separator">' : '') + "<div class='callibri_text_sm'>" + (_callibri.webcalls && on_webcall ? 'или введите свой номер телефона' : 'Введите свой номер телефона') + "</div><div class='callibri_text_sm callibri_grey callibri_fs13'>и мы перезвоним вам через 30 секунд</div><div class='callibri_phone_callme callibri_mt30'><input type='tel' id='callibri_callback_phone' class='callibri_phone_callme_phone callibri-phone-mask callibri_phn_m1' placeholder='" + (_callibri.module_settings.mask_format || '+7 (___) ___-__-__') + "'><button class='callibri_button callibri_callme_bkgr'  id='callibri_callback_button_timer'></button></div><div id='callibri_error_callback_tab' style='display:none;' class='callibri_error'></div>";
        } else return div;
    },
    div_call: function(div, div_callback, on_webcall, div_webcall, tab) {
        if (_callibri.mobile.isMobile)
            return "<div class='callibri_request_a_call callibri_overflow' name='select' id='callibri_reqCallW' style='display: none;'><div class='callibri_wrapperField'>" + ((tab.type.indexOf('webcall') > -1 && on_webcall) ? div_webcall : '') + "" + (tab.type.indexOf('callback') > -1 ? div_callback : '') + "</div></div>";
        else return div;
    },
    div_webcall: function(div) {
        if (_callibri.mobile.isMobile)
            return "<div class=''><div class='callibri_text_sm'>Позвоните нам</div><a href='tel:+" + _callibri.number + "' class = 'callibri_mobile_phone'>" + _callibri.number_formatted + "</a></div>";
        else return div;
    },
    operator_mssg: function(div) {
        if (_callibri.mobile.isMobile)
            return "<div class='callibri_chat_wrapper callibri_overflow' name='select' id='callibri_chatW' style='display: none;'><div class='callibri_wrapperField callibri_wrapper_chat' id='callibri_appendHere'></div><div class='callibri_wrapperField callibri_wrapper_chat callibri_operator_writes' id='callibri_operator_writes' style='display: none;'><div class='callibri_font16'><div class='callibri_mt31'><span class='callibri_pencil_dots'>.</span><span class='callibri_pencil_dots callibti_anim2'>.</span><span class='callibri_pencil_dots callibti_anim3'>.</span><span class='callibri_operator_writes_text'>" + _callibri.chat_operator.name + " набирает сообщение...</span></div></div></div><div id='anchor' class='callibri_anchor'></div><div class='callibri_input_chat_div' id='callibri_input_chat_div'><div id='callibri_input_chat_div_checkbox' class='callibri_input_chat_div_checkbox' onclick='callibri_widget_checked_privacy()'><input type='checkbox' onclick='callibri_widget_checked_privacy()''>" + CALLIBRI_LOCALIZTION_OBJ['localization_1'][_callibri.module_settings.common.locale].callibri_format(link_agreement, link_privacy) + "</div><div class='callibri_chat_settings_wrapper'><div class='callibri_color_footer callibri_checkbox_footer'>Виджет от <a href='https://callibri.ru/vidget_dlya_sayta?utm_source=widget&utm_medium=organic' target='_blank' class='callibri_a'><span style='text-decoration:underline;font-size:12px!important;line-height:14px!important'>Callibri</span></a></div><div class='callibri_gray_locomotive callibri_open_chat_settings' onclick=\"callibri_user_chat_actions(event)\" id='callibri_open_chat_settings'><svg version='1' xmlns='http://www.w3.org/2000/svg' width='400' height='401.333' viewBox='0 0 300.000000 301.000000'><path d='M137.7 3.1c-4.8 2.5-6.9 6-10.8 17.6-4.9 14.9-5.6 15.6-24.5 23.8-11.2 4.8-13.6 4.6-27.4-2-12.8-6.2-17.4-6.8-23.9-3.5-5.3 2.7-12.8 11.3-14.2 16.3-1.4 5.4-.9 7.8 4.7 19.4 7.4 15.6 7.4 15.7.4 32.8-5.8 14.2-7.1 15.3-23.1 20.5-11 3.6-14.1 5.7-16.8 11.3-2.6 5.3-2.8 16-.5 21.5 2.6 6.4 6 8.9 16.3 12.3 17.9 5.9 18.3 6.3 25.1 23.3 5.6 14.2 5.6 16.5-.8 29.2-8.4 16.9-8.2 20.4 1.7 30.5 10.5 10.7 14.8 11 31.6 2.6 12.8-6.4 15.2-6.5 30-.3 14.6 6.1 16.4 7.9 21.1 21.8 5.5 16.5 10.3 20.8 23.4 20.8 13.1 0 17.9-4.3 23.4-20.8 4.7-13.9 6.5-15.7 21.1-21.8 14.8-6.2 17.2-6.1 30 .3 16.8 8.4 21.1 8.1 31.6-2.6 5.3-5.4 6.8-7.6 7.4-10.9.8-5.2.5-6.4-5.6-19.3-6.4-13.5-6.5-15.8-.6-30.1 2.4-5.9 5.2-11.9 6.1-13.3 2.1-3.1 6.5-5.4 18.8-9.4 8.3-2.8 10.3-3.9 13.2-7.2 3.8-4.5 4.6-7.4 4.6-16.2 0-7.2-2.7-13.7-7.1-16.8-1.7-1.2-7-3.4-11.9-5-15.4-4.8-17.3-6.5-22-18.3-1.7-4.3-3.8-9.2-4.7-10.9-2.9-5.6-2-11.2 3.6-22.6 5.9-12 6.7-15.2 5.1-21.1-1.3-5-8.6-13.3-14.2-16.1-6.2-3.1-10.7-2.5-22.6 3.3-15 7.2-16.9 7.2-31.7.9-6.5-2.8-12.7-5.9-13.8-6.9-2.6-2.3-4.9-7.1-8.1-16.7-3.4-10.5-5.7-14-10.5-16.5-5.6-2.8-18.9-2.8-24.4.1zm30.4 91.8c16.4 5.2 30.8 19.4 37.1 36.7 2.6 7.3 3.6 23.2 1.8 31.3-2.3 10.7-7.5 19.9-16.4 28.6-12.6 12.5-23 16.8-40.6 16.8-9.9 0-12.5-.3-18.6-2.5-18.9-6.8-33-22-37.8-40.4-2-7.8-2.1-22.2-.1-29.8 3.8-14.4 15.6-29.6 28.2-36.4 13.9-7.4 31.4-9 46.4-4.3z' fill='#9aa2ab'/></svg> действия</div><span id='callibri_user_chat_actions' style = 'display:none'><clb_div class='callibri_gray_locomotive callibri_end_dialog_chat_settings'>Закрыть чат</clb_div><clb_div class='callibri_gray_locomotive callibri_send_dialoge_chat_sttings'>Отправить чат на e-mail</clb_div></span></div><textarea placeholder=\"Напишите сообщение...\" class='callibri_chat_input callibri_text_inp' id='callibri_chat_input'></textarea><img src=\"//cdn.callibri.ru/callibri_sendmobile.png\" class=\"callibri_tele_icon\" id=\"callibri_mobile_sendbttn\"></div></div>";
        else return div;
    },
    chat_div: "",
    call_div: "",
    request_div: "",
    mssg: function(message_element, message_status, message_time, message_text, image, operator, email_input, info_inputs, autoanswer, autoanswer_class, autoanswer_online) {
        if (_callibri.mobile.isMobile)
            return "<div class='callibri_overflow callibri_chat_message " + message_status + "'><div class='callibri_chatPict'><img src=\"" + image + "\" class=\"callibri_chat_pict\">" + autoanswer_online + "<div class = 'callibri_time'>" + message_time + "</div></div><div class='callibri_chat_text_field " + autoanswer_class + " '>" + autoanswer + " " + message_text + email_input + info_inputs + "</div></div>";
        else return div;
    },
    user_mssg: function(div, message_status, message_time, message_text, unread_template, is_new) {
        if (_callibri.mobile.isMobile)
            return "<div class='callibri_overflow callibri_chat_message " + message_status + "'><div class='callibri_chat_text_field_right " + (is_new ? 'callibri_unread_padd' : '') + "'>" + message_text + unread_template + "</div><div class='callibri_chatPict'><div class='callibri_chat_pict_user " + (_callibri.chat_user_avatar ? '' : 'callibri_bttn_color callibri_mt10') + "'>" + (_callibri.chat_user_avatar ? "<img src='" + _callibri.chat_user_avatar + "' class='callibri_avatar_confirmed'>" : "я") + "</div><div class='callibri_time'>" + message_time + "</div></div></div></div>";
        else return div;
    }
};

var callibri_change_text_field_pos = {
    chat: function(element) {
        if (callibri_visible(_callibri.internal_vars.append_)) {
            if (!_callibri.mobile.isMobile) {
                var off_social = document.getElementsByClassName('callibri_off_social');
                for (i = 0; off_social.length > i; i++) {
                    off_social[i].style.width = _callibri.internal_vars.append_.offsetWidth - 16 - 16 - 38 - 8 - 10 + 3 + 'px';
                }
            } else return;
        }
    },
    badge: function(el) {
        var chat_svg = document.getElementById('chat_svg');
        if (chat_svg && callibri_visible(_callibri.internal_vars.badge)) {
            document.getElementById('callibri_badge').style[_callibri.internal_vars.position] = parseInt(chat_svg.offsetLeft - 15) + 'px';
        }
    }
};

function callibriDoDrag(e, sector) {
    e = e || window.event;
    var container = _callibri.internal_vars.container;
    if (e.pageX > document.documentElement.clientWidth && sector == 'right') {
        container.style.width = (startWidth + document.documentElement.clientWidth - startX) + 'px';
        return;
    }
    if (e.pageX < 0 && sector == 'left') {
        container.style.left = 0 + 'px';
        container.style.width = (startWidth - 0 + startX) + 'px';
        return;
    }

    function move_case_sector(sector) {
        if (sector == 'left') {
            if ((startWidth - e.clientX + startX) > 435) {
                container.style.left = e.clientX + 'px';
                container.style.width = (startWidth - e.clientX + startX) + 'px';
            } else {
                container.style.left = container.getBoundingClientRect().right - 435 + 'px';
                container.style.width = 435 + 'px';
            }
        } else if (sector == 'right') {
            if ((startWidth + e.clientX - startX) > 435) container.style.width = (startWidth + e.clientX - startX) + 'px';
            else container.style.width = 435 + 'px';
        }
        if (parseInt(container.style.left) === 0 || document.documentElement.clientWidth - parseInt(container.style.width) == parseInt(container.style.left)) _callibri.internal_vars.docked = true;
        else _callibri.internal_vars.docked = false;
        return true;
    }
    move_case_sector(sector);
    try {
        callibri_change_text_field_pos.chat();
        callibri_change_text_field_pos.badge();
        callibri_avatar_popup.hide();
    } catch (exception) {
        console.log(exception);
    }
}

function callibriStopDrag(e) {
    callibriSetLocalStoragePosition();
    document.removeEventListener('mousemove', callibriDoDrag_wrapper, false);
    document.removeEventListener('mouseup', callibriStopDrag, false);
    document.removeEventListener('selectstart', callibriDisableSelect, false);
}

function callibriEventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

function callibri_init_emoji() {
    try {
        if (!_callibri.mobile.isMobile && typeof(requirejs) !== "function" && !callibriCheckIE8_9_10()) {
            window.emojiPicker = new EmojiPicker({
                emojiable_selector: '[data-emojiable=callibri_emoji_input]',
                assetsPath: document.location.protocol + "//" + _callibri.server_host + "/emoji/img",
                popupButtonClasses: 'fa fa-smile-o',
                iconSize: 20
            });
            window.emojiPicker.discover();
            //тут переопределить обработчики
            var input_chat = document.getElementsByClassName('emoji-wysiwyg-editor callibri_chat_input callibri_text_inp')[0];
            var old_chat = _callibri.chat_widget.message_input_element;
            _callibri.chat_widget.message_input_element = input_chat;
            var send = document.getElementById('callibri_send');
            input_chat.addEventListener("keydown", function(event) {
                if (event.keyCode == 13) {
                    try {
                        $(this).change();
                    } catch (e) {
                        callibriEventFire(this, 'change');
                    }
                    event.preventDefault();
                }
            });
            callibri_add_event_listners(send, input_chat);
            $.each($('.callibri_chat_text_field_right'), function(i, v) {
                v.innerHTML = EmojiPicker.prototype.unicodeToImage(v.innerHTML);
            });
            $.each($('.callibri_chat_text_field'), function(i, v) {
                v.innerHTML = EmojiPicker.prototype.unicodeToImage(v.innerHTML);
            });
            $('#callibri_text_in').html(EmojiPicker.prototype.unicodeToImage($('#callibri_text_in').html()));
            var emoji_wysiwyg_editor = document.getElementsByClassName('emoji-wysiwyg-editor callibri_chat_input callibri_text_inp skip-fields');
            if (emoji_wysiwyg_editor) {
                old_chat.classList.add('callibri_none');
                if (emoji_wysiwyg_editor.length > 0) {
                    emoji_wysiwyg_editor[0].addEventListener('blur', function() {
                        if (emoji_wysiwyg_editor[0].innerText.length > 0)
                            document.getElementById('callibri_chat_input_label').style.left = 'calc(100% - 17px)';
                        else document.getElementById('callibri_chat_input_label').style.left = '';
                    });
                }
            }
        }
    } catch (e) {
        if (typeof(callibriOnError) == "function") {
            callibriOnError(callibriErrorInfo(e));
        }
    }
}

function callibriInputChatSetHeight(input_chat) {
    input_chat.style.cssText = 'height:auto;padding:0;';
    input_chat.style.cssText = 'height:' + input_chat.scrollHeight + 'px';
}

function callibri_add_event_listners(send_button, input_chat) {
    var old_message_len = 0;
    var old_time = new Date();
    var diff_mess = 5;
    var diff_time = 999;
    send_button.addEventListener("click", function() {
        _callibri.chat_widget._submit_chat_message_event();
        if (_callibri.chat_widget._pusher)
            _callibri.chat_widget._chat_channel.trigger('client-print_message', { print: false });
    }, true);

    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" &&
            typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
        el.scrollTop = el.scrollHeight;
    }
    var input_chat_height = input_chat.scrollHeight;
    input_chat.addEventListener("keydown", function(event) {
        function newLineInChat(br) {
            if (input_chat.classList.contains('emoji-wysiwyg-editor')) {
                var lastsimbols = input_chat.innerHTML.substring(input_chat.innerHTML.length - 8, input_chat.innerHTML.length);
                if (lastsimbols == '<br><br>') {
                    input_chat.innerHTML += '<br>';
                } else
                    input_chat.innerHTML += '<br><br>';
                placeCaretAtEnd(input_chat);
            } else
                input_chat.value += br;
        }
        if (event.keyCode == 13) {
            if (event.shiftKey) {
                newLineInChat('');
            } else if (event.metaKey) {
                newLineInChat('\n');
            } else {
                if (_callibri.mobile.isMobile) {
                    return false;
                }
                _callibri.chat_widget._submit_chat_message_event();
                if (_callibri.chat_widget._pusher)
                    _callibri.chat_widget._chat_channel.trigger('client-print_message', { print: false });
            }
        }
        setTimeout(function() {
            callibriInputChatSetHeight(input_chat);
            callibri_setHeight(callibri_tabs_height);
            callibri_app.scrollTo('callibri_chat_input');
        }, 0);
        if (_callibri.chat_widget._pusher) {
            var message = ((this.nodeName == 'TEXTAREA' || this.nodeName == 'INPUT') ? this.value : this.innerHTML);
            var message_len = message.length;
            var time = new Date();
            var text_processing = new CallibriTextProcessing(message),
                out_data = text_processing.start(true);
            message = out_data.text;
            var submit_flag = Math.abs(message_len - old_message_len) >= diff_mess && (time - old_time) > diff_time;
            if (submit_flag) {
                _callibri.chat_widget._chat_channel.trigger('client-print_message', {
                    print: true,
                    text: message
                });
                old_message_len = message_len;
                old_time = new Date();
                callibri_setHeight(callibri_tabs_height);
            }
        }
    }, true);
    //функционал с Пишет пользователь для мобильного
    input_chat.addEventListener("focus", function(event) {
        callibri_hideMSG(0);
        if (self._pusher)
            self._chat_channel.trigger('client-print_message', { print: true });
        setTimeout(function() {
            callibriInputChatSetHeight(input_chat);
            callibri_setHeight(callibri_tabs_height);
        }, 0);
    });
    input_chat.addEventListener("blur", function(event) {
        if (self._pusher)
            self._chat_channel.trigger('client-print_message', { print: false });
        setTimeout(function() {
            callibriInputChatSetHeight(input_chat);
            callibri_setHeight(callibri_tabs_height);
        }, 0);
    });
}

function callibri_webcall_timer() {
    try {
        var my_timer = document.getElementById('callibri_webcall_timer');
        var time = my_timer.innerHTML;
        var arr = time.split(":");
        var m = arr[0];
        var s = arr[1];
        if (s == 59) {
            m++;
            if (m < 10) m = "0" + m;
            s = 0;
        } else s++;
        if (s < 10) s = "0" + s;
        document.getElementById('callibri_webcall_timer').innerHTML = m + ":" + s;
        setTimeout(callibri_webcall_timer, 1000);
    } catch (e) {}
}

function callibri_operatorWrites() {
    callibri_remove_unread();
    _callibri.internal_vars.operator_writes.style.display = (_callibri.internal_vars.operator_writes.style.display == 'block') ? 'none' : 'block';
    callibri_app.scrollTo('callibri_chat_input');
}

function callibri_webkit_gecko_trident() {
    var data = navigator.userAgent;
    var engine = 'else';
    if (data.search(/Gecko/) > -1) engine = "gecko";
    if (data.search(/Trident/) > -1) engine = "trident";
    if (data.search(/WebKit/) > -1) engine = "webkit";
    return engine;
}

function callibri_newMSG(val, message_data) {
    var newValue;
    if (val !== undefined) {
        newValue = 0;
    } else {
        if (_callibri.internal_vars.badge_text && _callibri.internal_vars.badge_text[0])
            newValue = parseInt(_callibri.internal_vars.badge_text[0].innerHTML) + 1;
        else newValue = 0;
    }
    if (document.getElementById('callibri_chatW') && (document.getElementById('callibri_chatW').style.display !== 'block' || !_callibri.internal_vars.container.classList.contains('callibri_widget_in'))) {
        if (!callibri_old_msgs && message_data && !_callibri.mobile.isMobile && !message_data.system) {
            clearInterval(callibriHookInAnimation);
            clearInterval(callibriHookOutAnimation);
            callibriBallonText = [];
            callibriHookState(null, _callibri.hook_animation.texts[0], 'out', 300);
            setTimeout(function() {
                callibriBallonText[0] = message_data.text;
                callibriHookState(null, _callibri.hook_animation.texts[0], 'in', 0);
            }, 400);
            callibriHookOutAnimation = setTimeout(function() { callibriHookState(null, _callibri.hook_animation.texts[0], 'out', 300); }, 15400);
            for (var i = 0; i < _callibri.internal_vars.badge_text.length; i++) {
                _callibri.internal_vars.badge_text[i].parentNode.style.display = '';
                _callibri.internal_vars.badge_text[i].innerHTML = newValue;
            }
        }
    }
}

function callibri_hideMSG() {
    callibri_newMSG(0);
    for (var i = 0; i < _callibri.internal_vars.badge_text.length; i = i + 1) {
        _callibri.internal_vars.badge_text[i].parentNode.style.display = 'none';
    }
}

//старый путь  то что в cdn сложить в assets
//var callibri_image_path = document.location.protocol + "//" + (_callibri.server_host || 'callibri.ru') + "/module/js/widget/assets";
var callibri_image_path = document.location.protocol + "//" + (_callibri.cdn_host || 'cdn.callibri.ru') + '/';
var callibri_check_reply; //переменная нужна для установки таймера не ответа от оператора, и обнуление его
var callibri_robotext; //переменная для установки таймера роботекста и обнуления его
var callibri_timeout; //переменная счетчика кастомной переменной
var callibri_autoopen; //автооткрытие виджета
var callibriHookInAnimation, callibriHookOutAnimation, callibriColorring, callibriColorRingAnimation, callibriHookAllAnimation;

function callibri_text_processing() {
    //TextProcessing.coffee модифицированный
    (function() {
        var extend = function(child, parent) {
                for (var key in parent) {
                    if (hasProp.call(parent, key)) child[key] = parent[key];
                }

                function ctor() {
                    this.constructor = child;
                }

                ctor.prototype = parent.prototype;
                child.prototype = new ctor();
                child.__super__ = parent.prototype;
                return child;
            },
            hasProp = {}.hasOwnProperty;

        window.CallibriTextProcessing = (function() {
            function CallibriTextProcessing(_text, k1, result_data) {
                this._text = _text;
                this.k = k1 != null ? k1 : 0;
                this.result_data = result_data != null ? result_data : {};
                this.GIF = /(\bhttps?:\/\/([\w|\-\.]+(:\d{2,6})?)\/\S*\.(gif)(\?\S+)?)/gi;
                this.IMAGES = /("|\s|^)(\bhttps?:\/\/([\w|\-\.]+(:\d{2,6})?)\/\S*\.(webp|png|jpg|jpeg|bmp)|gif(\?\S+)?)/i;
                this.IMAGE = /(\bhttps?:\/\/([\w|\-\.]+(:\d{2,6})?)\/\S*\.(webp|png|jpg|jpeg|bmp|gif)(\?\S+)?)/i;
                this.OBJECTS = /("|\s|^)(\bhttps?:\/\/([\w|\-\.]+(:\d{2,6})?)\/\S*\.?(pdf|zip|html|msword|gzip|OOXML|DOC|DOCX|XLSX|PPTX|vnd\.openxmlformats-officedocument\.presentationml\.slideshow|vnd\.openxmlformats-officedocument\.presentationml\.template|vnd\.openxmlformats-officedocument\.presentationml\.presentation|vnd\.ms-powerpoint|vnd\.openxmlformats-officedocument\.spreadsheetml\.template|vnd\.ms-excel|vnd\.openxmlformats-officedocument\.wordprocessingml\.template|octet-stream|vnd\.openxmlformats|vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet|vnd\.openxmlformats-officedocument\.wordprocessingml\.document)?(\?\S+)?)/i;
                this.TRIX = /(<a[-A-Zа-яА-Я0-9+&@#\/%?=~_|!:,.;>\s\\"{}]*)?<figure.*?<\/figure>(<\/a>)?/gi;
                this.LINKS = /([^href=\\"]|^)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_\[\]\{\}|!:,.;]*[-A-Z0-9+&@#\/%=~_\[\]\{\}|])/gi;
                this.LINKS_NO_TAG = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_\[\]\{\}|!:,.;]*[-A-Z0-9+&@#\/%=~_\[\]\{\}|])">([^h|f])/gi;
                this.WRAP_LINK = /<a\shref.*?<\/a>|(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_\[\]\{\}|!:,.;]*[-A-Z0-9+&@#\/%=~_\[\]\{\}|])/gi;
                this.TEXT_LINK = /(\b(https?|ftp|file):\/\/([^:\/\s]+)[-A-Z0-9+&@#\/%?=~_\[\]\{\}|!:,.;]*[-A-Z0-9+&@#\/%=~_\[\]\{\}|])/i;
                this.TEXT_LINK_NO_TAG = /[^"](\b(https?|ftp|file):\/\/([^:\/\s]+)[-A-Z0-9+&@#\/%?=~_\[\]\{\}|!:,.;]*[-A-Z0-9+&@#\/%=~_\[\]\{\}|])/i;
                this.TAGS = /<[^>]+>/g;
                this.STYLE = /(<[sS][tT][yY][lL][eE].*?>).*?(<\/[sS][tT][yY][lL][eE]>)/g;
                this.out_data = {
                    'text': '',
                    objects: []
                };
            }
            return CallibriTextProcessing;
        })();

        CallibriTextProcessing.prototype.get_gif = function() {
            if (this._text.indexOf('callibri.ru/emoji/img/blank.gif') !== -1) {
                var reg = /<img src="https?:\/\/in.callibri.ru\/emoji\/img\/blank.gif".*?alt="(.*?)">/g;
                return EmojiPicker.prototype.colonToUnicode(this._text.replace(reg, function(match) {
                    return match.replace(reg, '$1');
                }));
            } else if (this.user) {
                return this._text.replace(this.GIF, "$1");
            } else {
                return this._text.replace(this.GIF, "<img class='callibri_image_preview callibri_gif' onclick='callibri_show_original_image(event, this)' src='$1'>");
            }
        };

        CallibriTextProcessing.prototype.gif = function() {
            return this.GIF.test(this._text);
        };

        CallibriTextProcessing.prototype.links = function() {
            return /([^href=\\"]|^)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])">([^h|f])/i.test(this._text);
        };

        CallibriTextProcessing.prototype.get_links = function(data) {
            var j, k, t;
            if (data === null || data === undefined) data = {};
            j = this.k;
            while (true) {
                t = this.LINKS.exec(this._text);
                if (!t) break;
                data[j] = t[0];
                j++;
            }
            k = this.k;
            this._text = this._text.replace(this.LINKS, function() {
                return 'clb_proc_element_n' + k++;
            });
            while (true) {
                t = this.LINKS_NO_TAG.exec(this._text);
                if (!t) break;
                data[j] = t[0];
                j++;
            }
            this._text = this._text.replace(this.LINKS_NO_TAG, function() {
                return 'clb_proc_element_n' + k++;
            });
            this.k = k;
            Object.assign(this.result_data, data);
        };

        CallibriTextProcessing.prototype.objects = function() {
            var a;
            a = this.TRIX.test(this._text);
            this.TRIX.lastIndex = 0;
            return a;
        };
        CallibriTextProcessing.prototype.start = function(user) {
            var self = this;
            self.user = user;
            var attach_object, data, links_processing, tr_objects, users_data;
            // div contenteditable заменяет теговые скобочки на спецсимволы.
            // Возвращаем их назад чтоб нормально все работало
            this._text = this._text.replace(/&lt;|&gt;|&amp;lt;|&amp;gt;/g, function(match) {
                if (match == '&lt;' || match == '&amp;lt;')
                    return '<';
                else return '>';
            });
            //Чистим от <script>
            this._text = this._text.replace(/<script(.*?)<\/script>/g, function(string) {
                return string.replace(/</g, '&lt;');
            });
            // Чистим от style='', href='', on*=''
            this._text = this._text.replace(this.TAGS, function(match) {
                var clr;

                function clear(text) {
                    return text.replace(/([sS][tT][yY][lL][eE]=("[^"]*"|'[^']*'))|([cC][lL][aA][sS][sS]=("[^"]*"|'[^']*'))|([oO][nN]\w+=("[^"]*"|'[^']*'))|([hH][rR][eE][fF]="([jJ][aA][vV][aA][sS][cC][rR][iI][pP][tT]:.*?)")/g, "");
                }
                if (match.search(/[ |>]/g) > -1) {
                    var tag = match.substring(1, match.search(/[ >]/g));
                    switch (tag) {
                        case 'img':
                            if (match.indexOf('emoji/img/blank.gif') == -1) {
                                var imageTag = /<img.*?src="(.*?)"/;
                                if (self.user && imageTag.exec(match))
                                    match = imageTag.exec(match)[1];
                                clr = clear(match);
                            } else clr = match;
                            break;
                        case 'br':
                            clr = match;
                            break;
                        default:
                            clr = clear(match);
                            break;
                    }
                }
                return clr;
            });
            // Чистим от <style>
            this._text = this._text.replace(this.STYLE, '');
            if (this.gif()) {
                this._text = this.get_gif();
                if (!this.user) {
                    this.rebuild_text();
                    return this.out_data;
                }
            } else if (this.objects()) {
                tr_objects = new CallibriTrixObjectsProcessing(this._text, this.k, this.result_data);
                data = tr_objects.start();
                this._text = data[0];
                this.k = data[2];
                if (data[1].length) this.result_data = data[1];
            }
            if (this.links()) this.get_links();
            links_processing = new CallibriLinksProcessing(this._text, this.k, this.result_data);
            data = links_processing.start(this.user);
            this._text = data[0];
            this.k = data[2];
            if (data[1].length) this.result_data = data[1];
            this.rebuild_text();
            return this.out_data;
        };

        CallibriTextProcessing.prototype.rebuild_text = function() {
            var i, l, ref, reg;
            if (Object.keys(this.result_data).length) {
                for (i = l = 0, ref = Object.keys(this.result_data).length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                    reg = new RegExp('clb_proc_element_n' + i);
                    this._text = this._text.replace(reg, this.result_data[i]);
                }
            }
            this.out_data.text = this._text;
            return this.out_data;
        };

        window.CallibriTrixObjectsProcessing = (function(superClass) {
            extend(CallibriTrixObjectsProcessing, superClass);

            function CallibriTrixObjectsProcessing() {
                return CallibriTrixObjectsProcessing.__super__.constructor.apply(this, arguments);
            }

            return CallibriTrixObjectsProcessing;

        })(CallibriTextProcessing);

        CallibriTrixObjectsProcessing.prototype.get_trix_objects = function(data, objects) {
            var j, k, t;
            if (data === null || data === undefined) data = {};
            if (objects === null || objects === undefined) objects = {};
            j = this.k;
            while (true) {
                t = this.TRIX.exec(this._text);
                if (!t) break;
                data[j] = t[0];
                j++;
            }
            k = this.k;
            this._text = this._text.replace(this.TRIX, function() {
                return 'clb_proc_element_n' + k++;
            });
            this.k = k;
            Object.assign(this.result_data, data);
        };

        CallibriTrixObjectsProcessing.prototype.start = function() {
            this.get_trix_objects();
            if (this.is_objects(this.IMAGES)) this.get_objects(this.IMAGES);
            if (this.is_objects(this.OBJECTS)) this.get_objects(this.OBJECTS);
            return [this._text, this.result_data, this.k];
        };

        CallibriTrixObjectsProcessing.prototype.is_objects = function(regexp) {
            var i, l, ref;
            for (i = l = 0, ref = Object.keys(this.result_data).length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                if (regexp.test(this.result_data[i])) {
                    return regexp.test(this.result_data[i]);
                }
            }
            return false;
        };

        CallibriTrixObjectsProcessing.prototype.get_objects = function(regexp) {
            var i, l, ref;
            for (i = l = 0, ref = Object.keys(this.result_data).length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                if (regexp.test(this.result_data[i])) {
                    this.result_data[i] = regexp.exec(this.result_data[i])[2];
                }
            }
        };

        window.CallibriLinksProcessing = (function(superClass) {
            extend(CallibriLinksProcessing, superClass);

            function CallibriLinksProcessing() {
                return CallibriLinksProcessing.__super__.constructor.apply(this, arguments);
            }
            return CallibriLinksProcessing;

        })(CallibriTextProcessing);

        CallibriLinksProcessing.prototype.start = function(user) {
            this.user = user;
            this.wrap_link();
            this.crop_link_text();
            return [this._text, this.result_data, this.k];
        };

        CallibriLinksProcessing.prototype.crop_link_text = function() {
            var i, l, ref;
            for (i = l = 0, ref = Object.keys(this.result_data).length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                if (this.IMAGE.test(this.result_data[i]) && !this.user) {
                    break;
                } else if (this.TEXT_LINK.test(this.result_data[i]) && !this.result_data[i].match(/target/)) {
                    this.TEXT_LINK.lastIndex = 0;
                    this.result_data[i] = this.result_data[i].replace(this.TEXT_LINK, '<a target= "_blank" href="$1">$3...</a>');
                } else if (this.TEXT_LINK_NO_TAG.test(this.result_data[i])) {
                    this.TEXT_LINK_NO_TAG.lastIndex = 0;
                    this.result_data[i] = this.result_data[i].replace(this.TEXT_LINK_NO_TAG, '>$3...');
                }
            }
        };

        CallibriLinksProcessing.prototype.wrap_link = function() {
            var i, l, ref,
                self = this;

            function wrap() {
                self.result_data[i] = self.result_data[i].replace(self.IMAGE, "$1");
                if (self.WRAP_LINK.test(self.result_data[i]) && !self.result_data[i].match(/">[^h|f]/i)) {
                    self.WRAP_LINK.lastIndex = 0;
                    self.result_data[i] = self.result_data[i].replace(this.WRAP_LINK, '<a target= "_blank" href="$1">$1</a>');
                } else if (self.LINKS_NO_TAG.test(self.result_data[i])) {
                    self.LINKS_NO_TAG.lastIndex = 0;
                    self.result_data[i] = self.result_data[i].replace(self.LINKS_NO_TAG, '$1" target= "_blank">$3');
                }
            }
            for (i = l = 0, ref = Object.keys(this.result_data).length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
                if (this.IMAGE.test(this.result_data[i])) {
                    if (this.user) {
                        wrap();
                    } else this.result_data[i] = this.result_data[i].replace(this.IMAGE, "<img class=\"callibri_image_preview callibri_img\" href=\"$1\" onclick=\"callibri_show_original_image(event, this, 'link');return false;\" src=\"$1\">");
                } else wrap();

            }
        };
    }).call(this);
}

function CallibriChatWidget(options) {
    callibri_text_processing();
    options = options || {};
    var self = this;
    CallibriChatWidget.instances.push(self);

    self.settings = {
        auth_end_point: "messages/auth/member-id",
        channel_name: undefined,
        channel_id: undefined,
        member_id: undefined,
        append_to: document.querySelector('.callibri_chat_wrapper callibri_overflow'),
        debug: true,
        csrf_token: undefined,
        session: _callibri.session_id,
        site_id: _callibri.site_id,
        number: _callibri.number,
        user_id: _callibri.user_id, //кастомная переменная для сайта Callibri
        hook_id: _callibri.module_settings.common.hook_id
    };

    // Вывод отладочной информации
    if (self.settings.debug && window.console && window.console.log) {
        if (!self._log) {
            this._log = function(msg, data) {
                data = data || '';
            };
        }
        if (Pusher && !Pusher.log) {
            Pusher.log = function(msg) {
                //console.log( msg );
            };
        }
    }
    self._initialize(); // get channel name and member id

    if (_callibri.mobile.isMobile) {
        self.message_input_element = document.getElementById('callibri_chat_input');
        self.send = document.getElementById('callibri_mobile_sendbttn');
    } else {
        self.message_input_element = document.getElementById('callibri_chat_input');
        self.send = document.getElementById('callibri_send');
    }

    callibri_add_event_listners(self.send, self.message_input_element);
}
CallibriChatWidget.instances = [];
CallibriChatWidget.prototype._submit_chat_message_event = function() {
    var self = this;
    var message_text;
    if (self.message_input_element.classList.contains('emoji-wysiwyg-editor')) {
        message_text = self.message_input_element.innerHTML;
    } else { message_text = self.message_input_element.value.trim(' '); }
    if (!message_text) {
        return;
    }
    var message = {
        channel: self.settings.session,
        site_id: self.settings.site_id,
        author: "user",
        text: message_text,
        has_manager: false,
        number: self.settings.number,
        user_id: self.settings.user_id,
        datetime: new Date(),
        hook_id: self.settings.hook_id
    };
    if (callibri_first_message) {
        message.chat_operator = _callibri.chat_operator;
        callibri_first_message = false;
        setTimeout(callibri_set_n_stop, 1000);
        message.segment_id = _callibri.segment_service.active_segments.chat;
    }
    clearTimeout(callibri_check_reply);
    callibri_check_reply = undefined;
    clearTimeout(callibri_robotext);
    callibri_robotext = undefined;
    if (callibri_check_message(message.text)) {
        self._log("_submit_chat_message_event : message =", message);
        self._show_message(message, true);
        var text_processing = new CallibriTextProcessing(message.text);
        var text = text_processing.start(true);
        message.text = text.text;
        self._save_message(message);
        self._send_message(message);
        self.message_input_element.value = '';
        if (!_callibri.load_chat_history) {
            callibriSetCookie(_callibri.cookie_prefix + "callibri_chat_history", true);
        }
        try {
            document.getElementsByClassName('emoji-wysiwyg-editor callibri_chat_input callibri_text_inp')[0].innerHTML = '';
        } catch (e) {}
        callibriSetCurrentUrl();
        setTimeout(function() { self.message_input_element.value = ''; }, 1);
    }
};

function callibri_pusher_subscribe(self) {
    var member_id = self.settings ? (self.settings.member_id || "user") : "user";
    var _auth_endpoint = document.location.protocol + "//" + _callibri.server_host + "/messages/auth/" + member_id;
    self._pusher = (Pusher.instances[0]) ? Pusher.instances[0] : (new Pusher('1e4120a2420fdeea3b9b', // открытый ключ от pusher:api
        {
            cluster: 'mt1',
            authTransport: 'ajax',
            authEndpoint: _auth_endpoint
        }));
    // Подписываемся на канал
    self._chat_channel = self._pusher.channels.find("presence-" + _callibri.session_id.toString()) || self._pusher.subscribe("presence-" + _callibri.session_id.toString());
    return self;
}

/*function callibriGetMessagesChat() {
    var callback = function(response) {
        var last_data, message;
        if (response) {
            json = JSON.parse(response);
            if (json.data) {
                var count_messages = document.querySelectorAll('#callibri_appendHere .callibri_chat_message.callibri_overflow:not(.callibri_social_plug):not(.callibri_policy_wrapper)').length;
                var data_length = json.data.length;
                if (count_messages < data_length) {
                    document.querySelector('#callibri_appendHere').innerHTML = '';
                    for (var i = 0; i < data_length; i++) {
                        message = JSON.parse(json.data[i]);
                        _callibri.chat_widget._build_message_element;
                        _callibri.chat_widget._show_message(message);
                    }
                    if (message.author == 'Client' && message.has_manager) {
                        clearTimeout(callibri_check_reply);
                        callibri_check_reply = undefined;
                        clearTimeout(callibri_robotext);
                        callibri_robotext = undefined;
                        check_disable_autoanswer(true);
                        //отрисовали новое сообщение нужен звук
                        callibri_audio_incoming.play();
                    }
                }
            }
        }
    };
    callibriMakeRequest("/messages/history", { channel: _callibri.session_id, client_id: _callibri.site_id }, callback);
    if (_callibri.chat_widget._pusher && _callibri.chat_widget._pusher.connection && !_callibri.chat_widget._pusher.connection.connection) {
        //из за роскомнадзора коннект с пушером может быть долгим (до 3 минут)
        setTimeout(callibriGetMessagesChat, 10000);
    }
}*/
function callibriGetRatingJs(callback, options) {
    callibriGetLibrary(_callibri.ratingjs_path || "//cdn.callibri.ru/rating_v2.min.js", function() {
        if (callback) {
            if (typeof window[callback] == "function")
                window[callback](options);
            if (typeof callback == "function")
                callback(options);
        }
    }, "callibri_rating");
}
CallibriChatWidget.prototype._initialize = function() {
    var self = this;
    try {
        if (typeof(Audio) === 'function') {
            callibri_audio_incoming = new Audio(callibri_image_path + 'Glass.mp3');
            callibri_audio_outcoming = new Audio(callibri_image_path + 'Pop.mp3');
        } else {
            callibri_audio_incoming = document.createElement('audio');
            callibri_audio_incoming.src = callibri_image_path + 'Glass.mp3';
            callibri_audio_outcoming = document.createElement('audio');
            callibri_audio_outcoming.src = callibri_image_path + 'Pop.mp3';
        }
    } catch (e) {}
    self.channel_subscribe = function() { // called in ajax.success
        if (typeof(Pusher) === "undefined") {
            callibriGetLibrary("//js.pusher.com/4.2/pusher.min.js", _callibri.chat_widget.channel_subscribe, "Pusher");
            return;
        }
        self = callibri_pusher_subscribe(self);
        if (self.init_channel_callbacks) return;
        self._chat_channel.bind('client-new_message',
            function(message_data) {
                self._show_message(message_data, undefined, undefined, true);
                if (callibri_operator_print) {
                    callibri_operatorWrites();
                    callibri_operator_print = false;
                }
                clearTimeout(callibri_check_reply);
                callibri_check_reply = undefined;
                clearTimeout(callibri_robotext);
                callibri_robotext = undefined;
                if (message_data.has_manager) {
                    check_disable_autoanswer(true);
                }
                try {
                    callibri_audio_incoming.play();
                } catch (e) {}
            }
        );
        self._chat_channel.bind('client-operator_print_message', function(data) {
            clearTimeout(callibri_robotext);
            callibri_robotext = undefined;
            if (callibri_operator_print === false && data.print) {
                callibri_operatorWrites();
                callibri_operator_print = true;
            }
            if (callibri_operator_print === true && data.print === false) {
                callibri_operatorWrites();
                callibri_operator_print = false;
            }
        });
        self._chat_channel.bind('client-show_rating', function(data) {
            clearTimeout(callibri_check_reply);
            clearTimeout(callibri_robotext);
            if (_callibri.module_settings.tabs.chat.rating) {
                //отписываем от новых сообщений и печати оператора
                self._chat_channel.unbind('client-operator_print_message', function() {});
                self._chat_channel.unbind('client-new_message', function() {});
            } else {
                _callibri.chat_widget._pusher.unsubscribe("presence-" + _callibri.session_id.toString());
            }
            if (callibri_operator_print) {
                callibri_operatorWrites();
            }
            callibriGetRatingJs(function() { callibriShowChatEndButton(); });
        });
        self._chat_channel.bind("client-new_responsible", function(data) {
            messages_area = document.querySelector('.callibri_wrapperField');
            if (Object.keys(data.user).length !== 0) {
                callibri_old_operator_avatar = "<div class='callibri_chatPict'><img src=\"" + _callibri.chat_operator.avatar_image + "\" class=\"callibri_chat_pict\" style='-webkit-filter: opacity(50%);filter: opacity(50%);'></div>";
                if (!data.user.avatar_image.match(/^https?:\/\//)) {
                    data.user.avatar_image = document.location.protocol + "//" + _callibri.server_host + data.user.avatar_image;
                }
                if (_callibri.chat_operator.name == data.user.name && _callibri.chat_operator.avatar_image == data.user.avatar_image) {
                    return;
                }
                callibri_change_operator_text = "<div class=\"callibri_overflow callibri_chat_message callibri_operator_change_text\">" + data.message + "</div>";
                callibri_app.scrollTo('callibri_chat_input');
                var old_name = _callibri.chat_operator.name;
                _callibri.chat_operator = data.user;
                //меняем иконку на отвественного в самом виджете
                document.querySelector('.callibri_wrap_pict_index #operator_picture').src = _callibri.chat_operator.avatar_image;
                _callibri.internal_vars.operator_writes.innerHTML = _callibri.internal_vars.operator_writes.innerHTML.replace(old_name, _callibri.chat_operator.name);
                callibri_new_operator_avatar = "<div class='callibri_chatPict'><img src=\"" + _callibri.chat_operator.avatar_image + "\" class=\"callibri_chat_pict\"></div>";
                messages_area.innerHTML += "<div class='callibri_newOperator'>" + callibri_old_operator_avatar + callibri_change_operator_text + callibri_new_operator_avatar + "</div>";
                callibriSetLocalCookieValue("chat_operator", _callibri.chat_operator);
            }
        });
        self._chat_channel.bind('client-read_message', function(data) {
            callibri_remove_unread();
        });
        self.init_channel_callbacks = true;
        /* if (self._pusher && self._pusher.connection && !self._pusher.connection.connection) { //из за роскомнадзора коннект с пушером может быть долгим (до 3 минут) 
             setTimeout(callibriGetMessagesChat, 10000);
         }*/
    };
    if (supports_callibri_storage()) {
        try {
            _callibri.chat_user_avatar = localStorage.getItem("callibri_chat_user_avatar");
            if (_callibri.chat_user_avatar && _callibri.chat_user_avatar.match(/undefined/)) {
                _callibri.chat_user_avatar = _callibri.chat_user_avatar.replace("undefined", 'callibri.ru');
            }
        } catch (e) {}
    }
    var post_data = { channel: self.settings.session, client_id: _callibri.site_id };
    var callback = function(response) {
        var last_data, message;
        if (response) {
            json = JSON.parse(response);
            if (json.data) {
                if (_callibri.groups) {
                    self.chat_history = json.data;
                } else {
                    for (var i = 0; i < json.data.length; i++) {
                        message = JSON.parse(json.data[i]);
                        self._build_message_element;
                        self._show_message(message);
                        last_data = message.created_at;
                    }
                    if (last_data) callibriSetCookie(_callibri.cookie_prefix + "callibri_chat_history", true);
                }
            }
        }
        try {
            if (last_data !== undefined) {
                last_data = new Date(last_data);
                check_disable_autoanswer();
            }
            var moment = new Date();
            moment.setMinutes(moment.getMinutes() - 20);
            if (last_data === undefined || last_data < moment) {
                callibri_getMessageData(self);
                _callibri.load_chat_history = false;
            } else {
                self.channel_subscribe();
                var operator_messages = document.querySelectorAll('#callibri_appendHere.callibri_wrapper_chat > .callibri_chat_message.callibri_manager .callibri_chat_text_field:not(.callibri_answerphone_parent)');
                var operator_message = operator_messages[operator_messages.length - 1];
                callibri_set_n_stop();
            }
        } catch (e) {}
        callibri_read_last_message = false;
        callibri_remove_unread();
        if (!_callibri.internal_vars.social && !_callibri.module_settings.common.use_privacy) {
            _callibri.internal_vars.social = new CallibriSocial();
        }
    };
    if (_callibri.load_chat_history) {
        callibriMakeRequest("/messages/history", post_data, callback);
    } else {
        if (!_callibri.chat_was_closed) {
            try {
                callibri_getMessageData(self);
            } catch (e) {}
            if (!_callibri.internal_vars.social && !_callibri.module_settings.common.use_privacy) {
                _callibri.internal_vars.social = new CallibriSocial();
            }
        }
    }
};

function widget_callibri_policy(chat) {
    if (_callibri.module_settings.common.use_privacy) {
        var template;
        var checked = callibriGetCookie(_callibri.cookie_prefix + "accepted_the_rules");
        var showhide = 'style="display:' + (checked ? 'block' : 'none') + '"';
        if (chat == true && _callibri.module_settings.tabs.hasOwnProperty('chat')) {
            if (checked && !_callibri.internal_vars.social) {
                _callibri.internal_vars.social = new CallibriSocial();
            }
        }
    } else if (document.getElementById('callibri_callback_button_request')) {
            document.getElementById('callibri_callback_button_request').removeAttribute('disabled');
    }
}

function callibri_widget_checked_privacy(elem) {
    var chat_additional = document.querySelector('.callibri_chat_settings_wrapper');
    var elements = document.querySelectorAll('.callibri_checkbox_left,.callibri_checkbox_right'),
        i = 0,
        showhide,
        chat_block = document.querySelector('.callibri_chat_block');
    var button_request = document.querySelector('#callibri_callback_button_request');
    if (callibriGetCookie(_callibri.cookie_prefix + "accepted_the_rules")) {
        if (chat_block) chat_block.style.display = 'flex';
        showhide = 'none';
        if (elem) callibriInputChatOpen(elem.id, true);
        else callibriInputChatOpen(false, true);
    } else {
        callibriSetCookie(_callibri.cookie_prefix + "accepted_the_rules", true, -1);
        if (chat_block) chat_block.style.display = 'none';
        showhide = 'block';
        if (button_request) document.querySelector('#callibri_callback_button_request').removeAttribute('disabled');
        if (!_callibri.internal_vars.social) {
            _callibri.internal_vars.social = new CallibriSocial();
        }
        if (elem) callibriInputChatOpen(elem.id, true);
    }
    while (elements.length > i) {
        elements[i].style.display = showhide;
        i++;
    }
    callibri_events_callback('callibri_onCheckedPrivacyCallback');
}

function callibri_getMessageData(self, fm) {
    if (_callibri.groups && !fm)
        _callibri.groups.draw();
    else {
        var text = '',
            system = false;
        if (_callibri.module_settings.tabs.chat.first_message) {
            text = _callibri.module_settings.tabs.chat.first_message;
            system = true;
        } else text = _callibri.module_settings.common.hook.chat;
        text = text.replace("{NAME}", _callibri.chat_operator.name).replace("{Name}", _callibri.chat_operator.name);
        var message_data = {
            system: system,
            channel: _callibri.session_id,
            text: text,
            datetime: new Date(),
            author: "Client",
            has_manager: true,
            author_name: _callibri.chat_operator.name,
            avatar_image: _callibri.chat_operator.avatar_image,
        };
        self._show_message(message_data);
    }
    callibri_first_message = true;
    widget_callibri_policy(true);
}

CallibriChatWidget.prototype._send_message = function(message_data, robotext) {
    var self = this;
    if (self._pusher === undefined || self._pusher === null) {
        self.channel_subscribe();
        callibri_events_callback('callibri_onMessageSent');
    }
    if (self._chat_channel && message_data.text) {
        self._log("sending message to Pusher chat channel", self._chat_channel);
        self._chat_channel.trigger("client-new_message", message_data);
        if (typeof(robotext) === "undefined")
            callibri_read_last_message = false;
    } else {
        self._log("failed to send message: no pusher chat channel");
    }
};

function callibriRemoveTags(text) {
    var rex = /(<([^>]+)>)/ig;
    if (text)
        return text.replace(rex, "");
    else return '';
}

function callibriMessagesLocalStorage(message_for_saving) {
    if (!supports_callibri_storage()) {
        return false;
    }
    var callibri_chat_messages = localStorage.getItem("callibri_chat_messages");
    if (callibri_chat_messages) {
        callibri_chat_messages = JSON.parse(callibri_chat_messages);
    } else {
        callibri_chat_messages = [];
    }
    if (message_for_saving !== null) {
        callibri_chat_messages.push(message_for_saving); // просто сохраняем еще одно сообщение, само заберется с колбеком
    } else {
        if (callibri_chat_messages.length > 0) {
            var message = callibri_chat_messages[0];
            if (callibri_check_message(message.text)) {
                _callibri.chat_widget._save_message(message);
                callibri_chat_messages = callibri_chat_messages.slice(1, callibri_chat_messages.length);
            }
        }
    }
    localStorage.setItem("callibri_chat_messages", JSON.stringify(callibri_chat_messages));
    return true;
}
var callibri_avatar_popup = {
    height: 388,
    width: 298,
    arrow: 11,
    avas: ['299700 - f', '299691 - m', '299692 - m', '299693 - m', '299694 - f',
        '299695 - m', '299696 - f', '299697 - f', '299698 - f', '299699 - f',
        '299701 - f', '299702 - f', '299703 - f', '299704 - f', '299705 - m',
        '299706 - m', '299707 - m', '299708 - m', '299709 - m', '299710 - m',
        '299711 - m', '299682 - m', '299683 - m', '299684 - m', '299685 - m',
        '299686 - m', '299687 - m', '299688 - m', '299689 - m', '299690 - m'
    ],
    popup: function() {
        var theme = _callibri.module_settings.common.theme || 'callibri_default';
        overlay = "<label for='callibri_avatar' class='widget-popup-shower avatar_widget'><div class='callibri_chat_pict_user callibri_bttn_color'>" + (_callibri.chat_user_avatar ? "<img src='" + _callibri.chat_user_avatar + "' class='callibri_avatar_confirmed'>" : "я") + "</div></label><div class='widget-popup-wrapper'><input type='checkbox' class='widget-popup-checkbox' id='callibri_avatar'><div class='widget-popup' id='callibri_ov_avatar' style='top:" + callibri_avatar_vertical + "px;left:" + callibri_avatar_horizontal + "px;'><div class='widget-popup-content box-wid'><label for='callibri_avatar' class='widget-popup-closer'><div class='callibrispr callibrispr-close_widget_smiles' onclick = 'callibri_avatar_popup.hide(this)'></div></label>";
        avatars = '';
        for (i = 0; i <= 29; i++) {
            avatars += "<div class='callibrispr callibrispr-" + i + " ava_widget' data-img='" + callibri_image_path + "avatars/" + this.avas[i] + ".png' onclick='callibriChangeUserAvatar(this.dataset.img)'></div>";
        }
        final = "<div class='block-input'><input class='input-widget' onkeydown='if (event.keyCode == 13){callibriSendNameUserChat(this);callibri_avatar_popup.hide()}' type='text' placeholder=\"Введите имя...\" ><div class='callibri_over_avatar'></div><div onclick='callibriSendNameUserChat(this);callibri_avatar_popup.hide()' class='callibrispr callibri_bttn_color callibrispr-ok button-input' style='background-color:" + callibri_themes[theme].controls + "'></div></div></div><style>" + css_pseudo + "</style></div>";
        return overlay + avatars + final;
    },
    show: function(el) {
        this.set_self_position(el);
        if (document.getElementById('wrap_popup') !== null)
            return;
        var wrap_popup = document.createElement('div');
        wrap_popup.id = 'wrap_popup';
        wrap_popup.innerHTML = callibri_avatar_popup.popup();
        _callibri.internal_vars.container.appendChild(wrap_popup);
    },
    hide: function(el) {
        if (document.getElementById('wrap_popup') === null)
            return;
        document.getElementById('wrap_popup').remove();
    },
    check_vertical: function(el, type) {
        return el.getBoundingClientRect().top + type + this.arrow + el.offsetHeight < document.documentElement.clientHeight;
    },
    check_lr: function(el) {
        return _callibri.internal_vars.position === 'left';
    },
    set_self_position: function(el) {
        var left, right, bottom, position, main_position;
        if (this.check_lr(el)) {
            if (this.check_vertical(el, this.height)) {
                callibri_avatar_vertical = parseInt((el.getBoundingClientRect().top + el.offsetHeight));
                callibri_avatar_horizontal = parseInt((el.getBoundingClientRect().left + el.offsetWidth / 2 - this.width / 2 + this.arrow / 2));
                left = parseInt((this.width / 2 - 5)) + 'px';
                bottom = '100%';
                main_position = 'bottom';
                position = 'left';
            } else {
                callibri_avatar_vertical = document.documentElement.clientHeight - this.height - this.arrow;
                bottom = parseInt((document.documentElement.clientHeight - el.getBoundingClientRect().top) - this.arrow) + 'px';
                if (callibri_avatar_vertical > el.getBoundingClientRect().top) {
                    callibri_avatar_vertical = el.getBoundingClientRect().top;
                    bottom = '95%';
                } else {
                    bottom = parseInt((document.documentElement.clientHeight - el.getBoundingClientRect().top) - this.arrow - 15) + 'px';
                }
                callibri_avatar_horizontal = parseInt((el.getBoundingClientRect().left + el.offsetWidth + this.arrow + 5));
                right = '100%';
                main_position = 'right';
                position = 'bottom';
            }
        } else {
            left = '100%';
            main_position = 'left';
            position = 'bottom';
            if (this.check_vertical(el, this.height / 2)) {
                callibri_avatar_vertical = parseInt((el.getBoundingClientRect().top - el.offsetHeight / 2 - this.width / 2));
                callibri_avatar_horizontal = parseInt((el.getBoundingClientRect().left - el.offsetWidth / 2 - this.width));
                bottom = '50%';
            } else {
                callibri_avatar_vertical = document.documentElement.clientHeight - this.height - this.arrow;
                callibri_avatar_horizontal = parseInt((el.getBoundingClientRect().left - el.offsetWidth / 2 - this.width));
                bottom = parseInt((document.documentElement.clientHeight - el.getBoundingClientRect().top - el.offsetHeight / 2)) + 'px';
            }
        }
        css_pseudo = '.box-wid:after,.box-wid:before{left:' + left + ';right:' + right + ';bottom:' + bottom + ';border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.box-wid:after{border-color:rgba(255,255,255,0);border-' + main_position + '-color:#fff;border-width:10px;margin-' + position + ':-10px}.box-wid:before{border-color:rgba(193,193,193,0);border-' + main_position + '-color:#c1c1c1;border-width:11px;margin-' + position + ':-11px}';
    }
};

CallibriChatWidget.prototype._save_message = function(message_data) {
    var self = this;
    if (message_data.text) {
        var post_data = { "message": message_data };
        post_data.ymclid = callibriGetMetrikaClientID(true);
        post_data.gaclid = callibriGetGaClientID(true);
        post_data.clbvid = _callibri.clbvid || null;
        var callback = function(data) {
            if (data.banned) {
                _callibri.btr = true;
                _callibri.chat_widget._pusher.unsubscribe("presence-" + _callibri.session_id.toString());
            }
            if (supports_callibri_storage()) {
                localStorage.setItem("callibri_sending", 0);
                callibriMessagesLocalStorage(null); //отправляем следующее
            }
        };
        if (supports_callibri_storage() && localStorage.getItem("callibri_sending") > 0) { // еще ждем пока дойдет первое сообщение, это сохраняем
            callibriMessagesLocalStorage(message_data);
        } else {
            callibriMakeRequest('/module/messages', post_data, callback);
            if (supports_callibri_storage()) {
                localStorage.setItem("callibri_sending", 1);
            }
        }
        try {
            callibri_audio_outcoming.play();
        } catch (e) {
            console.log(e);
        }
        if (callibri_check_reply === undefined && !_callibri.internal_vars.get_operator_message) {
            var wait_time;
            try {
                wait_time = Number(_callibri.module_settings.tabs.chat.request.message_wait.time);
            } catch (e) {
                wait_time = 121;
            }
            callibri_check_reply = setTimeout(callibriCheckReply, wait_time * 1000);
        }
        if (callibri_robotext === undefined && !_callibri.internal_vars.get_operator_message) {
            try {
                widget_robotext_time = Number(_callibri.module_settings.tabs.chat.request.robotext.time);
            } catch (e) {
                widget_robotext_time = 15;
            }
            callibri_robotext = setTimeout(callibriRobotextStage, (widget_robotext_time * 1000));
        }
    }
};

CallibriChatWidget._build_message_element = function(message_data, is_new) {
    var message_datetime = message_data.datetime || message_data.created_at || undefined,
        message_author = message_data.author || message_data.name || undefined,
        message_status = message_data.has_manager ? 'callibri_manager' : 'callibri_client',
        message_element,
        user = message_data.author == 'user' ? true : false,
        text_processing = new CallibriTextProcessing(message_data.text),
        out_data = text_processing.start(user),
        message_text = out_data.text;
    try {
        message_text = EmojiPicker.prototype.unicodeToImage(message_text);
    } catch (e) {}

    message_datetime = (new Date(message_datetime) !== "Invalid Date" && !isNaN(new Date(message_datetime))) ? new Date(message_datetime) : message_datetime;
    message_time = message_datetime.toTimeString().substring(0, message_datetime.toTimeString().lastIndexOf(':'));
    var class_name = (message_data.class_name !== undefined && message_data.class_name !== null);

    if (message_data.channel === null) {
        message_element = "<div class=\"callibri_overflow callibri_chat_message callibri_operator_change_text\">" + message_data.text + "</div>";
    } else {
        if (!message_data.has_manager) { //robo: 'true'
            var unread_template = !is_new ? '' : "<div class='callibri_unread'><img width='13' height='13' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyI+PHBhdGggZD0iTTYuNTUgMTIuN0MzLjI2IDEyLjcuNTkgMTAuMDQuNTkgNi43NVMzLjI2Ljc5IDYuNTUuNzlzNS45NSAyLjY3IDUuOTUgNS45Ni0yLjY2IDUuOTUtNS45NSA1Ljk1em0wLTEwLjQzYy0yLjQ4IDAtNC40OCAyLTQuNDggNC40OCAwIDIuNDggMiA0LjQ4IDQuNDggNC40OCAyLjQ4IDAgNC40OC0yIDQuNDgtNC40OCAwLTIuNDgtMi00LjQ4LTQuNDgtNC40OHptMy4wMyAzLjUybC0yLjYxIDIuMWMtLjIyLjE4LS41My4yMi0uNzkuMDlMNC4xMSA2LjkzYy0uMzctLjE4LS41NC0uNi0uMzUtLjk3LjE4LS4zNy42Mi0uNTIuOTktLjMzbDEuNjcuODMgMi4yNC0xLjgxYS43NC43NCAwIDAgMSAxLjAzLjExYy4yNi4zMi4yLjc4LS4xMSAxLjAzeiIgZmlsbD0iIzlGOUY5RiIvPjwvc3ZnPg=='><span class='callibri_unread_message'>Ваше сообщение еще не прочитано</span> </div>";
            message_element = "<div class='callibri_overflow callibri_chat_message " + message_status + "'><div class='callibri_chat_text_field_right " + (is_new ? 'callibri_unread_padd' : '') + "'>" + message_text + unread_template + "</div><div class='callibri_chatPict' " + (_callibri.mobile.isMobile ? "" : "onclick = 'callibri_avatar_popup.show(this)'") + "><div class='callibri_chat_pict_user " + (_callibri.chat_user_avatar ? '' : 'callibri_bttn_color callibri_mt10') + "'>" + (_callibri.chat_user_avatar ? "<img src='" + _callibri.chat_user_avatar + "' class='callibri_avatar_confirmed'>" : "я") + "</div><div class='callibri_time'>" + message_time + "</div></div></div></div>";
            message_element = CallibriMobileVersion.user_mssg(message_element, message_status, message_time, message_text, unread_template, is_new);
        } else {
            var image = (message_data.avatar_image ? message_data.avatar_image : '/assets/cabinet/avatar-unknown.png');
            if (!image.match(/^https?:\/\//) && image.indexOf(_callibri.cdn_host) === -1) {
                image = document.location.protocol + "//" + _callibri.server_host + image;
            }
            var operator = '';
            try {
                operator = message_data.author_name.split(' ')[0];
            } catch (e) {
                operator = 'Оператор';
            }
            if (message_data.author == 'Client' && message_data.author_name !== 'Autoanswer') {
                callibri_remove_unread();
            }
            var email_input = "";
            if (message_data.email_send === true) {
                email_input = "<div style='display:flex'><input type='text' placeholder='Адрес e-mail...' class='callibri_input_dialog_to_email' id='callibri_input_dialog_to_email' oninput='callibri_checkmark_check('','callibri_input_dialog_to_email','callibri_btn_send_dialog_to_email')'><div id ='callibri_btn_send_dialog_to_email'class='callibri_btn_send_dialog_to_email' onclick='callibri_send_chat_to_mail(this ," + message_data.channel + ")'>" + callibri_svg.checkmark.icon + "</div></div>";
            }
            var info_inputs = "";

            function info(field) {
                return message_data.info.indexOf(field) > -1;
            }
            if (message_data.info_type && callibriChatRequestFields(message_data.info_type)) {
                message_data.info = callibriChatRequestFields(message_data.info_type);
                var nameline = info("name") ? ("<div id='callibri_info_input_nameline_" + message_data.info_type + "'><input type='text' placeholder='Как вас зовут?...' class='callibri_input_dialog_to_email' id='callibri_info_input_name_" + message_data.info_type + "' oninput=\"callibri_checkmark_check('" + message_data.info_type + "','callibri_info_input_name','callibri_info_btn_name')\"><div id ='callibri_info_btn_name_" + message_data.info_type + "' class='callibri_btn_send_dialog_to_email' onclick=\"callibri_get_user_info('" + message_data.info_type + "','" + ((info("phone") || info("email")) ? 'one' : 'two') + "')\">" + callibri_svg.checkmark.icon + "</div></div>") : "",
                    phone = info("phone") ? ("<input type='text' placeholder='Телефон' type='tel' class='callibri_input_dialog_to_email " + (info("email") ? "callibri_info_input_phone" : "") + " callibri-phone-mask callibri_phn_m3' id='callibri_info_input_phone_" + message_data.info_type + "' onkeyup=\"callibri_checkmark_check('" + message_data.info_type + "','callibri_info_input_phone','callibri_info_btn_phoneemail'" + (info("email") ? ",'callibri_info_input_email'" : "") + ")\" placeholder='" + (_callibri.module_settings.mask_format || '+7 (___) ___-__-__') + "'>") : "",
                    email = info("email") ? ("<input type='text' placeholder='Email...' class='callibri_input_dialog_to_email " + (info("phone") ? "callibri_info_input_email" : "") + "' id='callibri_info_input_email_" + message_data.info_type + "' oninput=\"callibri_checkmark_check('" + message_data.info_type + "','callibri_info_input_email','callibri_info_btn_phoneemail'" + (info("phone") ? ",'callibri_info_input_phone'" : "") + ")\">") : "",
                    phoneline = (info("phone") || info("email")) ? "<div id='callibri_info_input_phoneemailline_" + message_data.info_type + "' class='callibri_info_input_phoneemailline'" + (!nameline ? "style='display:flex'" : "") + ">" + phone + email + "<div id ='callibri_info_btn_phoneemail_" + message_data.info_type + "' class='callibri_btn_send_dialog_to_email' onclick=\"callibri_get_user_info('" + message_data.info_type + "','two')\">" + callibri_svg.checkmark.icon + "</div></div>" : "";
                info_inputs = nameline + phoneline;
                _callibri.internal_vars.feedback = {
                    site_id: _callibri.site_id,
                    number: _callibri.number,
                    session_id: _callibri.session_id,
                    widget_form: true,
                    hook_id: (_callibri.module_settings.common.hook_id || ''),
                    phone: '',
                    email: '',
                    name_field: ''
                };
            }
            var autoanswer = (message_data.author_name === 'Autoanswer') ? '<div class=\'callibri_answerphone\'>Автоответчик:</div>' : '';
            var autoanswer_class = (message_data.author_name === 'Autoanswer') ? 'callibri_answerphone_parent' : '';
            var autoanswer_online = (message_data.author_name === 'Autoanswer') ? '' : '<div class =\'callibri_online\'></div>';
            message_element = "<div class='callibri_overflow callibri_chat_message " + message_status + "'><div class='callibri_chatPict'><img src=\"" + image + "\" class=\"callibri_chat_pict\" onmouseover=\"callibri_operator_name_over(event,'" + operator + "')\" onmouseout=\"callibri_operator_name_out()\">" + autoanswer_online + "<div class = 'callibri_time'>" + message_time + "</div></div><div class='callibri_chat_text_field " + autoanswer_class + " '>" + autoanswer + " " + message_text + email_input + info_inputs + "</div></div>";
        }
    }
    return message_element;
};

CallibriChatWidget.prototype._show_message = function(message_data, is_new, additional, from_pusher) {
    //если сообщение не пустое
    if (message_data.text) {
        var messages_area = _callibri.internal_vars.append_;
        var messages = document.getElementsByClassName('callibri_chat_message');
        var add_message = true,
            childText, social_offer = false;
        try {
            social_offer = message_data.author_name == "Autoanswer" && message_data.text.match("{SOC_BLOCK}");
            if (social_offer) message_data.text = message_data.text.replace(/\{SOC_BLOCK\}/ig, "");
        } catch (e) {
            social_offer = false;
        }
        //обрезаем лишние пустые строки в конце сообщения
        function clearLastBr(text) {
            function clear(n) {
                if (text.length > n) {
                    var lastsimbols = text.substring(text.length - n, text.length - (n - 4));
                    if (lastsimbols == '<br>') {
                        var div = (text.substring(text.length - 6, text.length)) == '</div>' ? '</div>' : '';
                        text = text.substring(0, text.length - n) + div;
                        text = clearLastBr(text);
                    }
                }
            }
            clear(10); //чистим <br> в конце, если все обернуто в <div>
            clear(4); //чистим <br> в конце, если нет обертки
            return text;
        }
        //если сообщение не пустое x2
        if (message_data.channel !== null && messages.length > 0) {
            var last_message = messages[messages.length - 1],
                message_status = message_data.has_manager ? 'callibri_manager' : 'callibri_client',
                message_text,
                user = message_data.author == 'user' ? true : false,
                text_processing = new CallibriTextProcessing(message_data.text),
                out_data = text_processing.start(user);
            out_data.text = clearLastBr(out_data.text);
            try {
                //преобразуем смайлы в картинки, обрамляем ссылки
                message_text = EmojiPicker.prototype.unicodeToImage(out_data.text);
            } catch (e) {
                //если не получается с смайлами, обработаем только ссылки
                message_text = out_data.text;
            } //если это первое сообщение - задаем исходные значения
            if (typeof(prev_messg) === "undefined") {
                prev_messg = { author: '', datetime: new Date() };
            }
            var last_message_datetime = prev_messg.datetime || prev_messg.created_at || undefined;
            last_message_datetime = (new Date(last_message_datetime) !== "Invalid Date" && !isNaN(new Date(last_message_datetime))) ? new Date(last_message_datetime) : last_message_datetime;
            last_message_datetime.setMinutes(last_message_datetime.getMinutes() + 5);
            var message_datetime = message_data.datetime || message_data.created_at || undefined;
            if (from_pusher) { //если пришло из пушера подставим текущую дату
                message_datetime = new Date();
            } else {
                message_datetime = (new Date(message_datetime) !== "Invalid Date" && !isNaN(new Date(message_datetime))) ? new Date(message_datetime) : message_datetime;
            }
            //проверяем что мы можем добавить к последнему сообщению
            function newMessageGif() {
                if (message_data.text.match(/emoji\/img\/blank\.gif/)) {
                    return true;
                } else if (!message_data.text.match(/\.gif/) && !last_message.outerHTML.match(/\.gif">/)) {
                    return true;
                } else return false;
            }
            if (last_message.className.indexOf(message_status) > -1 && message_datetime <= last_message_datetime && message_data.author_name === prev_messg.author_name && message_data.author !== 'ClientSocial' && newMessageGif() && !additional) {
                var childTime = message_status == 'callibri_manager' ? last_message.children[0].getElementsByClassName('callibri_time')[0] : last_message.children[1].children[1];
                if (message_status === 'callibri_manager') {
                    callibri_newMSG(undefined, message_data);
                }
                childTime.innerHTML = message_time;
                //если последний писал менеджер-добавляем к нему
                if (message_status == 'callibri_manager') {
                    childText = last_message.childNodes[1];
                    childText.innerHTML += "<div style='color:inherit;'>" + message_text + "</div>";
                } else { //если клиент
                    childText = last_message.childNodes[0].getElementsByClassName('callibri_unread')[0];
                    //если сообщение еще не прочитано
                    if (childText) {
                        childText.insertAdjacentHTML('beforebegin', '<div style="overflow:hidden;">' + message_text + '</div>');
                    } else {
                        childText = last_message.childNodes[0];
                        childText.innerHTML += "<div style='margin-top:5px;color:inherit;'>" + message_text + "</div><div class='callibri_unread'><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1\" viewBox=\"0 0 256 256\"><g fill=\"#8ea5ac\"><path d=\"M117 .6C99 3 83.6 7.6 69 15 35 32.6 11.3 64.3 3 103.3c-3 14.3-3 35 0 49.4 11 51.7 48.8 89.4 100.5 100.5 14.3 3 35 3 49.4 0 51.7-11 89.4-48.8 100.5-100.5 4.3-20.5 2.5-46.6-4.8-67C233 43 197.4 12 153 3c-10-2-29-3.3-36-2.4zm2 31.5c0 6.2 3.5 10 9.2 10 4.7 0 8.8-4.4 8.8-9.6 0-3 .3-3.4 3-3.4 5.5 0 22.5 5 31.4 9.4 20 9.7 36.4 26 46.2 46.2 4.3 9 9.4 25.8 9.4 31.5 0 2.7-.4 3-3 3-6.2 0-10 3.5-10 9.2 0 4.7 4.4 8.8 9.6 8.8 3 0 3.4.3 3.4 3 0 5.5-5 22.5-9.4 31.4-9.7 20-26 36.4-46.2 46.2-9 4.3-25.8 9.4-31.5 9.4-2.7 0-3-.4-3-3 0-6.2-3.5-10-9.2-10-4.7 0-8.8 4.4-8.8 9.6 0 3-.3 3.4-3 3.4-5.6 0-22.5-5-31.4-9.4-20-9.8-36.5-26.2-46.2-46.2-4.3-9-9.4-26-9.4-31.5 0-2.7.4-3 3-3 6.2 0 10-3.5 10-9.2 0-4.7-4.4-8.8-9.6-8.8-3 0-3.4-.3-3.4-3 0-5.5 5-22.5 9.4-31.4 9.7-20 26-36.4 46.2-46.2 9-4.5 25-9.3 31.2-9.4 3 0 3.2.3 3.2 3z\"></path><path d=\"M123 55.6c-1 1.5-2 3.6-2 4.8l-1.4 26.3-1.3 24.3-3.6 4c-10.6 11.6-4.5 29.3 11 31.6 4 .6 6.3 2.4 24 18.3 22.8 20.3 23.8 21 27.6 21 4.2 0 8.7-5 8.7-9.4 0-4 .5-3.2-25.3-32.5-10-11.5-13.7-16.3-14.2-19-1-4.8-3-8.3-6.3-11.2l-3-2.4-1-26.5c-1-22.8-1.5-26.8-3-29-2.7-3.7-7.4-4-10-.4z\"></path></g></svg><span class='callibri_unread_message'>Ваше сообщение еще не прочитано</span></div>";
                    }
                }
                add_message = false;
            }
        }
        //если для сообщения нужен новый блок
        if (add_message) {
            message_data.text = clearLastBr(message_data.text);
            var new_message_element = CallibriChatWidget._build_message_element(message_data, is_new);
            messages_area.innerHTML += new_message_element;
            if (message_data.author == 'ClientSocial' || social_offer) {
                callibri_offer_soc();
            }
            if (new_message_element.search(/callibri_manager/) > -1) {
                callibri_newMSG(undefined, message_data);
            }
        }
        callibri_app.scrollTo('callibri_chat_input');
        callibri_change_text_field_pos.chat();
        prev_messg = message_data;
    }
    callibri_show_actions_btn();
};
var callibri_old_msgs = true;
/**
 * Родитель для объектов социальных плагинов.
 * @constructor
 * @param {object} chat - Объект чата.
 */

function CallibriSocial() {
    /** @access private */
    var chat = _callibri.module_settings.tabs.chat && _callibri.module_settings.tabs.social && _callibri.module_settings.tabs.social.socials;
    if (chat) {
        var social_types = _callibri.module_settings.tabs.social.socials.map(function(i) {
            return i.type;
        });
        var is_vk = social_types.indexOf('vk');
        var is_fb = social_types.indexOf('facebook');
        this.vk = _callibri.module_settings.tabs.social.socials[is_vk];
        this.fb = _callibri.module_settings.tabs.social.socials[is_fb];
        if (!(this.vk && this.vk.appId && this.vk.pageId)) this.vk = null;
        if (!(this.fb && this.fb.appId && this.fb.pageId)) this.fb = null;
        chat = (this.vk || this.fb);
    }
    /** @access protected */
    this._isChatAvailable = function() {
        return chat;
    };
    this.init();
}
/**
 * Добавляет обработчик для клика по плагинам.
 *
 * @this   {CallibriSocial}
 */
CallibriSocial.prototype.click_listner = function() {
    window.focus();
    var listener = window.addEventListener('blur', function() {
        if (document.activeElement === document.getElementById('vkwidget1')) {
            setTimeout('_callibri.internal_vars.social.callibri_vk.connected()', 1000); //fixme
        }
        window.removeEventListener('blur', listener);
    });
};
/**
 * Выводим текст что соц сеть подключена.
 *
 * @this   {CallibriSocial}
 */
CallibriSocial.prototype.connected = function() {
    document.querySelector('.callibri_social_plug').style.display = 'none';
    document.querySelector('.callibri_connected_plugin').style.display = 'inline-block';
};
CallibriSocial.prototype.show_plug = function() {
    var container = document.getElementById('callibri_social_plug');
    var text1 = document.getElementById('callibri_social_plug_text1');
    text1.style.transition = 'margin .5s';
    text1.style.margin = '0';
    container.style.transition = 'height .5s,padding .5s,opacity .3s';
    var height = '90px';
    if (this.already_online.indexOf('fb') > -1) height = '114px';
    container.style.height = height;
    document.getElementById('callibri_social_plug_arrow').style.top = '-16px';
    document.getElementById('callibri_social_plug_close').style.marginTop = '-2px';
    callibri_setHeight(callibri_tabs_height);
    callibri_app.scrollTo('callibri_chat_input');
};
CallibriSocial.prototype.close_plug = function() {
    var container = document.getElementById('callibri_social_plug');
    container.style.height = '0';
    container.style.padding = '0';
    setTimeout(function() { container.style.opacity = 0; }, 200);
    setTimeout(function() { container.style.display = 'none'; }, 500);
    this.status = 'close';
};
/**
 * Инитим все плагины соц сетей.
 *
 * @this   {CallibriSocial}
 */
CallibriSocial.prototype.init = function() {
    if (this._isChatAvailable() && callibriGetCookie('callbri_social_widgets') != 'true') {
        _callibri.internal_vars.append_.insertAdjacentHTML('beforeend', '<div class="callibri_overflow callibri_chat_message callibri_social_plug" style="display:none" id="callibri_social_plug" >' +
            '<div class="callibri_social_plug_btns"><div id="callibri_social_plug_arrow" class="callibri_social_plug_arrow" onclick="_callibri.internal_vars.social.show_plug()">' + callibri_svg.arrow_down.icon + '</div><div class="callibri_close" id="callibri_social_plug_close" onclick="_callibri.internal_vars.social.close_plug()"><a class="callibri_tdb"></a></div></div>' +
            '<div class="callibri_social_text_style" id="callibri_social_plug_text1">Не хотите ждать на сайте?</div>' +
            '<div class="callibri_before_connect_text callibri_social_text_style" id="callibri_social_plug_text2">Мы можем ответить в социальные сети</div>' +
            '<div class="callibri_social_btns_wrapper" style="margin-top:10px;display: block;"><div id="callibri_fb_chat" class="callibri_social_button callibri_fb_chat"></div><div id="callibri_vk_contact_us" class="callibri_social_button"></div></div>' +
            '</div>' +
            '<div class="callibri_chat_message callibri_connected_plugin">' +
            '<div class="callibri_checkbox_parent_social">' +
            '<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 438.5 438.5"><style>.st0{fill:#888888;}</style><path d="M409.1 109.2c-19.6-33.6-46.2-60.2-79.8-79.8C295.7 9.8 259.1 0 219.3 0s-76.5 9.8-110.1 29.4C75.6 49 49 75.6 29.4 109.2 9.8 142.8 0 179.5 0 219.3s9.8 76.5 29.4 110.1c19.6 33.6 46.2 60.2 79.8 79.8 33.6 19.6 70.3 29.4 110.1 29.4s76.5-9.8 110.1-29.4c33.6-19.6 60.2-46.2 79.8-79.8 19.6-33.6 29.4-70.3 29.4-110.1-.1-39.8-9.9-76.5-29.5-110.1zm-21.7 181c-9.7 22.6-22.7 42-39 58.2-16.3 16.3-35.7 29.3-58.2 39-22.6 9.7-46.2 14.6-70.9 14.6s-48.4-4.9-70.9-14.6c-22.6-9.7-42-22.7-58.2-39-16.3-16.3-29.3-35.7-39-58.2-9.7-22.6-14.6-46.2-14.6-70.9 0-24.7 4.9-48.4 14.6-70.9 9.7-22.6 22.7-42 39-58.2 16.3-16.3 35.7-29.3 58.2-39 22.6-9.7 46.2-14.6 70.9-14.6 24.7 0 48.4 4.9 70.9 14.6 22.6 9.7 42 22.7 58.2 39 16.3 16.3 29.3 35.7 39 58.2 9.7 22.6 14.6 46.2 14.6 70.9 0 24.7-4.9 48.4-14.6 70.9z" class="st0"/><path d="M312.1 247.5c-4.8-1.5-9.4-1.1-14 1.1s-7.6 5.9-9.1 10.8c-4.8 15.2-13.6 27.6-26.4 37-12.8 9.4-27.3 14.1-43.3 14.1-16 0-30.4-4.7-43.3-14.1-12.8-9.4-21.6-21.7-26.4-37-1.5-4.9-4.5-8.6-9-10.8-4.5-2.3-9.1-2.7-13.8-1.1-4.9 1.5-8.6 4.5-10.8 9-2.3 4.5-2.7 9.1-1.1 13.8 7 23 20.2 41.6 39.4 55.7 19.2 14.1 40.9 21.1 65.1 21.1 24.2 0 45.9-7 65.1-21.1 19.2-14.1 32.3-32.6 39.4-55.7 1.5-4.8 1.1-9.4-1.1-13.8-2.5-4.4-6-7.4-10.7-9zm-165.9-64.8c10.1 0 18.7-3.6 25.8-10.7 7.1-7.1 10.7-15.7 10.7-25.8 0-10.1-3.6-18.7-10.7-25.8s-15.8-10.7-25.8-10.7c-10.1 0-18.7 3.6-25.8 10.7-7.1 7.1-10.7 15.7-10.7 25.8s3.6 18.7 10.7 25.8c7.1 7.2 15.7 10.7 25.8 10.7zm146.2-73.1c-10.1 0-18.7 3.6-25.8 10.7-7.1 7.1-10.7 15.7-10.7 25.8s3.6 18.7 10.7 25.8c7.1 7.1 15.8 10.7 25.8 10.7 10.1 0 18.7-3.6 25.8-10.7 7.1-7.1 10.7-15.7 10.7-25.8 0-10.1-3.6-18.7-10.7-25.8s-15.8-10.7-25.8-10.7z" class="st0"/></svg>' +
            '</div>' +
            '<div class="social_connected_title">Отлично! Если хотите, можете закрыть сайт.</div>' +
            '<div class="social_connected_text"></div>' +
            '</div>');
        this.already_online = [];
        if (this.fb) {
            this.callibri_fb = new CallibriSocialFb('//connect.facebook.net/ru_RU/sdk.js', Number(this.fb.appId), true, 'v2.10', Number(this.fb.pageId));
        } else if (this.vk) {
            this.callibri_vk = new CallibriSocialVk('https://vk.com/js/api/openapi.js?146', Number(this.vk.appId), Number(this.vk.pageId));
        }
        this.status = 'show';
        //this.click_listner();
    }
};
CallibriSocial.prototype.change_text_before_connet = function() {
    var field = document.querySelector('.callibri_before_connect_text');
    if (this.already_online.length == 2) {
        field.innerText = 'Мы можем ответить в социальные сети';
    } else if (this.already_online.length == 1 && this.already_online[0] == 'vk') {
        field.innerText = 'Мы можем ответить в VK';
    } else if (this.already_online.length == 1 && this.already_online[0] == 'fb') {
        field.innerText = 'Мы можем ответить в Facebook';
    }
    callibri_app.scrollTo('callibri_chat_input');
};
/**
 * Показываем кнопку после успешного инита.
 *
 * @this   {CallibriSocial}
 * @param {string} selector - селектор которому присваиваем inline-block.
 */
CallibriSocial.prototype.show_plugin = function(selector) {
    document.querySelector('.callibri_social_plug').style.display = 'block';
    document.querySelector(selector).style.display = 'inline-block';
};
/**
 * Плагин для вконтакте.
 * @constructor
 * @param {string} src - ссылка на js api.
 * @param {number} apiId - id приложения.
 */
function CallibriSocialVk(src, api_id, owner_id) {
    this.src = src || 'https://vk.com/js/api/openapi.js?146';
    this.api_id = api_id;
    this.owner_id = owner_id;
    (function() {
        this.init();
    }.call(this));
}
CallibriSocialVk.prototype = Object.create(CallibriSocial.prototype);
/**
 * Добавление jsapi на страницу и создание VK
 *
 * @this   {CallibriSocialVk}
 */
CallibriSocialVk.prototype.build = function() {
    var script = document.createElement("script");
    script.src = this.src;
    script.defer = true;
    var loadedscript = document.head.appendChild(script);
    loadedscript.onload = this.getLoginStatus.bind(this);
};
/**
 * Инит объекта VK и получение данных о сессии
 *
 * @this   {CallibriSocialVk}
 * @return {object} объект VK.
 */
CallibriSocialVk.prototype.getLoginStatus = function() {
    VK.init({ apiId: this.api_id });
    VK.Auth.getLoginStatus(this.callback.bind(this));
};
/**
 * Получение данных о то залогинен ли
 *
 * @this   {CallibriSocialVk}
 */
CallibriSocialVk.prototype.callback = function(response) {
    if (response.status !== 'unknown') {
        this.build_button();
        _callibri.internal_vars.social.already_online.push('vk');
        _callibri.internal_vars.social.change_text_before_connet();
    }
};
/**
 * Отрисовка кнопки
 *
 * @this   {CallibriSocialVk}
 */
CallibriSocialVk.prototype.build_button = function(response) {
    //todo добавляем с id = vk_contact_us прям по ходу чата
    //VK.Widgets.ContactUs("callibri_vk_contact_us", {height:30}, this.owner_id);
    VK.Widgets.AllowMessagesFromCommunity("callibri_vk_contact_us", {
        height: 30,
        key: _callibri.session_id.toString()
    }, this.owner_id);
    this.show_plugin('#callibri_vk_contact_us');
    VK.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed", function f(userId) {
        //после разрешения, меняем див, и редиректим на диалоги вк
        _callibri.internal_vars.social.callibri_vk.connected();
        window.open("https://vk.com/im?sel=-" + _callibri.internal_vars.social.vk.username + "?ref=" + _callibri.session_id, '_blank');
    });
};
/**
 * Заполняем и выводим текст что соц сеть подключена.
 *
 * @this   {CallibriSocialVk}
 */
CallibriSocialVk.prototype.connected = function() {
    document.querySelector('.social_connected_text').innerText = 'Ответ мы пришлем вам в VK';
    document.querySelector('.callibri_social_plug').style.display = 'none';
    document.querySelector('.callibri_connected_plugin').style.display = 'inline-block';
    callibriSetCookie('callbri_social_widgets', 'true', -1);
};
/*
 * Инит плагина
 *
 * @return {boolean} получилось или нет.
 */
CallibriSocialVk.prototype.init = function() {
    this.build();
};

///
/**
 * Плагин для фейсбука.
 * @constructor
 * @param {string} src - ссылка на js api.
 * @param {number} api_id - id приложения.
 * @param {boolean} xfbml - парс приложений.
 * @param {string} version - версия библиотеки.
 * @param {number} page_id - page_id приложения.
 */
function CallibriSocialFb(src, api_id, xfbml, version, page_id) {
    this.src = src || '//connect.facebook.net/ru_RU/sdk.js';
    this.api_id = api_id;
    this.xfbml = xfbml;
    this.version = version;
    this.page_id = page_id;
    (function() {
        this.init();
    }.call(this));
}
CallibriSocialFb.prototype = Object.create(CallibriSocial.prototype);
/**
 * Добавление jsapi на страницу, стандартная функция от fb
 *
 * @this   {CallibriSocialFb}
 * @return {object} объект FB.
 */
CallibriSocialFb.prototype.build = function() {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ru_RU/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};
/**
 * Инитит объект FB и проверяет что пользователен залогинен
 *
 * @this   {CallibriSocialFb}
 */
CallibriSocialFb.prototype.fbAsyncInit = function() {
    var self = this;
    window.fbAsyncInit = function() {
        FB.init({
            appId: self.api_id,
            xfbml: self.xfbml,
            version: self.version
        });
        FB.getLoginStatus(function(response) {
            if (response.status !== "unknown") {
                _callibri.internal_vars.social.show_plugin('#callibri_fb_chat');
                _callibri.internal_vars.social.callibri_fb.subscribeToClick();
                _callibri.internal_vars.social.already_online.push('fb');
                _callibri.internal_vars.social.change_text_before_connet();
            }
        });
    };
};
/**
 * Подписывает на клик по кнопке мессенджера
 *
 * @this   {CallibriSocialFb}
 */
CallibriSocialFb.prototype.subscribeToClick = function() {
    FB.Event.subscribe('send_to_messenger', function(e) {
        if (e.event == "clicked") {
            //FB.login(this.connected.bind(this));
            //FB.login(function(response) {
            //    if (response.authResponse) {
            //        _callibri.internal_vars.social.callibri_fb.connected();//fixme
            //    }
            //});
            _callibri.internal_vars.social.callibri_fb.connected();
            window.open("https://m.me/" + _callibri.internal_vars.social.fb.username + "?ref=" + _callibri.session_id, '_blank');
        }
    });
};
/**
 *Рисует кнопку
 *
 * @this   {CallibriSociaVk}
 */
CallibriSocialFb.prototype.build_button = function() {
    var el = document.createElement('div'),
        append_el = document.querySelector('#callibri_fb_chat');
    el.setAttribute("id", "SendToMessenger");
    el.setAttribute("class", "fb-send-to-messenger");
    el.setAttribute('messenger_app_id', this.api_id);
    el.setAttribute('page_id', this.page_id);
    el.setAttribute('data-ref', _callibri.session_id);
    el.setAttribute("color", "blue");
    el.setAttribute("width", "180");
    el.setAttribute("height", "30");
    append_el.appendChild(el);
};
/**
 * Заполняем и выводим текст что соц сеть подключена.
 *
 * @this   {CallibriSocialFb}
 */
CallibriSocialFb.prototype.connected = function() {
    document.querySelector('.social_connected_text').innerText = 'Ответ мы пришлем вам в FB Messenger';
    document.querySelector('.callibri_social_plug').style.display = 'none';
    document.querySelector('.callibri_connected_plugin').style.display = 'inline-block';
    callibriSetCookie('callbri_social_widgets', 'true', -1);
};
/**
 *Инит плагина
 *
 * @this   {CallibriSocialFb}
 */
CallibriSocialFb.prototype.init = function() {
    if (typeof FB === "undefined") {
        this.build();
        this.build_button();
        this.fbAsyncInit();
    }
};

function check_disable_autoanswer(operator_message) {
    if (_callibri.module_settings.tabs.chat.request && _callibri.module_settings.tabs.chat.request.disable_autoanswer && !_callibri.internal_vars.get_operator_message) { //даем команду на отключение автоответами
        var operator_message_date = callibriGetItemLocalStorage("callibri_operator_date"),
            date = new Date();
        operator_message_date = operator_message_date ? new Date(operator_message_date) : null;
        if ((operator_message_date && (date - operator_message_date) / (1000 * 3600 * 24) <= 1) || operator_message) {
            _callibri.internal_vars.get_operator_message = true;
            if (operator_message) callibriSetItemLocalStorage("callibri_operator_date", new Date().toString());
        }
    }
}

function callibriCloseHook() {
    try {
        callibriHookState(null, _callibri.hook_animation.texts[0], 'out', 300);
        if (_callibri.internal_vars.hooks_animation) clearTimeout(_callibri.internal_vars.hooks_animation);
        if (callibriBallonText.length > 1) {
            _callibri.internal_vars.blacklist.push(callibriBallonText.shift());
            callibriBallonText = [];
            callibriSetCookie('callibri_blacklist', JSON.stringify(_callibri.internal_vars.blacklist));
        }
    } catch (e) {
        console.log(e);
    }
}

function callibri_check_message(text) {
    var reg = new RegExp('(<[Dd][Ii][Vv]>)(.*)(<\/[Dd][Ii][Vv]>)');
    text = text.replace(/(?:&nbsp;|<br>)/g, '');
    if (reg.exec(text)) {
        if (reg.exec(text)[2].length > 0 && reg.exec(text)[2].trim().length > 0) {
            return true;
        } else {
            return false;
        }
    } else if (text.length > 0 && text.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

function callibriCheckReply() {
    var chat = _callibri.module_settings.tabs.chat;
    if (!chat.request || !chat.request.message_wait) {
        return;
    }
    var messages = document.querySelectorAll('.callibri_chat_wrapper > .callibri_wrapperField .callibri_chat_message');
    var last_message = messages[messages.length - 1];
    if (last_message !== undefined && last_message !== null && last_message.className.indexOf('callibri_client') > -1 && callibri_read_last_message === true) {
        var date_now = new Date();
        var text;
        try {
            text = chat.request.message_wait.text || "Оператор занят, но Callibri на проводе: скорее оставляйте ваш e-mail или телефон, и мы свяжемся с Вами в ближайшее время!";
        } catch (e) {
            text = "Оператор занят, но Callibri на проводе: скорее оставляйте ваш e-mail или телефон, и мы свяжемся с Вами в ближайшее время!";
        }
        var message_data = {
            channel: _callibri.session_id,
            text: text,
            datetime: date_now,
            author: "Client",
            has_manager: true,
            author_name: 'Autoanswer',
            site_id: _callibri.site_id,
            avatar_image: callibri_image_path + 'autoanswer.png',
            info_type: 'message_wait'
        };
        if (callibri_check_message(message_data.text)) {
            CallibriChatWidget.prototype._save_message(message_data);
            CallibriChatWidget.prototype._show_message(message_data);
            callibriUserInfoMask('message_wait');
            _callibri.chat_widget._send_message(message_data);
            callibri_check_reply = undefined;
            check_disable_autoanswer(true);
        }
    }
}

function callibriUserInfoMask(mask) {
    var input = document.getElementById('callibri_info_input_phone_' + mask);
    if (!_callibri.internal_vars['UserInfoMask_' + mask] && input) {
        var i = new callibrimasked(input);
        i.maskc(_callibri.module_settings.mask_format || '+7 (___) ___-__-__');
        _callibri.internal_vars['UserInfoMask_' + mask] = true;
    }
}
///////Отображение и скрытие имени оператора и робота при ховере
function callibriWrapPictHover(element, state) {
    if (!_callibri.mobile.isMobile) {
        var main_element;
        if (element == 'operator') {
            element = document.getElementById('callibri_wrap_pict_name_operator');
            main_element = document.getElementById('callibri_wrap_pict_operator');
        }
        if (element == 'robot') {
            element = document.getElementById('callibri_wrap_pict_name_robot');
            main_element = document.getElementById('callibri_wrap_pict_robot');
        }
        var close = document.getElementsByClassName('callibri_hooktext_wrapper_close')[0];
        if (state == 'in') {
            if (close) close.style.opacity = 1;
            if (!hook_visible && main_element !== undefined && element !== null) {
                main_element.style.transform = 'scale(1.05)';
                main_element.classList.remove('callibri_anim_vibro');
                element.style.display = 'block';
            }
            clearInterval(callibriHookInAnimation);
            clearInterval(callibriHookOutAnimation);
            clearInterval(callibriColorRingAnimation);
            clearInterval(callibriHookAllAnimation);
        } else {
            try {
                if (close) close.style.opacity = 0;
                if (main_element !== undefined && element !== null) {
                    main_element.style.transform = 'scale(1)';
                    element.style.display = 'none';
                    if (main_element.classList.contains('callibri_wrap_pict_l')) {
                        main_element.classList.add('callibri_anim_vibro');
                    }
                }
            } catch (e) {}
            callibriHookOutAnimation = setTimeout(function() { callibriHookState(null, _callibri.hook_animation.texts[0], 'out', 300); }, 5000);
        }
    }
}

function callibri_set_position(right, bot) {
    if (!_callibri.mobile.isMobile) {
        var anim_speed = 500;
        var container = _callibri.internal_vars.container;
        container.style.transition = 'all ' + anim_speed / 1000 + 's';
        setTimeout(function() { container.style.transition = ''; }, anim_speed);
        var style_position = JSON.parse(callibriGetItemLocalStorage("callibri_position"));
        var chat_input_height = document.querySelector('div.callibri_chat_input') && document.querySelector('div.callibri_chat_input').offsetHeight || document.querySelector('input.callibri_chat_input') && document.querySelector('input.callibri_chat_input').offsetHeight || 50;
        var min_height = _callibri.internal_vars.footer.offsetHeight + _callibri.internal_vars.modalPanel.offsetHeight + _callibri.internal_vars.header.offsetHeight + chat_input_height + 220;
        if (style_position.top > (window.innerHeight - min_height)) {
            container.style.top = (window.innerHeight - min_height) + 'px';
        }
        if (right !== null && right !== undefined) {
            if (right < 0) right = 0;
            container.style.left = (document.documentElement.clientWidth - container.offsetWidth - right > 0) ? document.documentElement.clientWidth - container.offsetWidth - right + "px" : "1px";
        }
        if (bot !== null && bot !== undefined) {
            if (bot < 0) bot = 0;
            if ((window.innerHeight - bot) > min_height) {
                container.style.bottom = bot + 'px';
                if (parseInt(container.style.top) - bot > 0)
                    container.style.top = parseInt(container.style.top) - bot + 'px';
                else { if (container.style.top) container.style.top = '1px'; }
            } else {
                container.style.bottom = window.innerHeight - min_height + 'px';
                container.style.top = '1px';
            }
            var style = document.getElementById('GENERAL_ANIMATION').sheet;
            for (var r in style.rules) {
                if (style.rules[r].name == "widget_out") {
                    style.rules[r].cssRules[2].style.top = window.innerHeight - parseInt(container.style.bottom) - _callibri.internal_vars.header.offsetHeight - _callibri.internal_vars.header.offsetHeight + 'px';
                }
            }
        }
        if (_callibri.module_settings.tabs.chat && _callibri.chat_widget) {
            var chat_height = window.innerHeight - parseInt(container.style.bottom) - parseInt(container.style.top) - _callibri.chat_widget.message_input_element.offsetHeight - _callibri.internal_vars.header.offsetHeight - 50 + 'px';
            if (bot > container.style.bottom) {
                setTimeout(function() {
                    document.getElementById('callibri_chatW').style.height = chat_height;
                }, anim_speed);
            } else {
                callibri_app.scrollTo('callibri_chat_input');
                document.getElementById('callibri_chatW').style.height = chat_height;
            }

        }
    }
}

function callibriEnterEmailForSaveDialog() {
    var messages = document.querySelectorAll('.callibri_chat_wrapper > .callibri_wrapperField .callibri_chat_message');
    var last_message = messages[messages.length - 1];
    if (messages.length < 2 || last_message.querySelector('#callibri_input_dialog_to_email')) {
        return;
    } //неспамим сообщением
    var message_data = {
        channel: _callibri.session_id,
        text: "Впишите адрес вашей почты:",
        datetime: new Date(),
        author: "Client",
        has_manager: true,
        author_name: 'Autoanswer',
        avatar_image: callibri_image_path + 'autoanswer.png',
        email_send: true
    };
    CallibriChatWidget.prototype._show_message(message_data, undefined, true);
}
var callibriBallonText = [''];

function callibri_focus_chat_input() {
    var checked = callibriGetCookie(_callibri.cookie_prefix + "accepted_the_rules");
    var chat_input = _callibri.chat_widget.message_input_element;
    if (checked) {
        chat_input.focus();
    } else {
        chat_input.blur();
    }
}

function callibriWidgetDraw(number) {
    _callibri.number_formatted = number;
    var tabs = _callibri.module_settings.tabs;
    var switch_div = "",
        widgets_div = "",
        footer_div = "";
    num = 0;
    for (var key in _callibri.module_settings.tabs) {
        if (key === Object.keys(_callibri.module_settings.tabs)[Object.keys(_callibri.module_settings.tabs).length - 1])
            var tabname = _callibri.module_settings.tabs[key].name;
        var tab = tabs[key];
        widgets_div += callibriTabDivs(key, tab);
        switch_div += callibriTabSwitchs(key, tab, num); //todo неиспользуется?
        num++;
    }
    var header_div = "<div class='callibri_header callibri_passive_icon' id='callibri_header'><div class='callibri_widget_phone " + _callibri.widget_theme_border + "' id='callibri_widget_phone'> <div id='callibri-widget-header-phone' class='callibri_phone_ex callibri_phone " + _callibri.widget_theme_phone + " '>" + number + " </div><div id='callibri_switch_div_underline'></div> </div> <div class='callibri_close' onclick='callibri_widget_toggle(this);callibri_opacity_toggle(event)'><a class='callibri_tdb'></a></div></div>";
    if (_callibri.module_settings.common.use_privacy) {
        footer_div = "<div class='callibri_footer' id='callibri_footer'><div><a href='http://callibri.ru/pdfs/privacy.pdf' target='_blank' class='callibri_a' id='callibri_a'><span style='font-size:12px!important;line-height:14px!important'><label onclick='callibriInputChatOpen(false,false)'><input id='callibri_checkbox_priv' type='checkbox' checked class='callibri_checkbox' ><span class='callibri_checkbox-custom'></span><span class='callibri_checkbox-custom-label'>согласие</span> </label></span></a><div class='callibri_color_footer callibri_checkbox_footer'>Виджет от <a href='https://callibri.ru/vidget_dlya_sayta?utm_source=widget&utm_medium=organic' target='_blank' class='callibri_a'><span style='text-decoration:underline;font-size:12px!important;line-height:14px!important'>Callibri</span></a></div><div class='callibri_chat_settings_wrapper'><div class='callibri_gray_locomotive callibri_open_chat_settings' onclick=\"callibri_user_chat_actions(event)\" id='callibri_open_chat_settings'><div style='border-bottom: 1px dotted;width:52px;height:18px'>действия</div></div><span id='callibri_user_chat_actions' style = 'display:none'><div style='position:relative;overflow:hidden;border-radius:8px;'><clb_div class='callibri_gray_locomotive callibri_end_dialog_chat_settings'>Закрыть чат</clb_div><clb_div class='callibri_gray_locomotive callibri_send_dialoge_chat_sttings'>Отправить чат на e-mail</clb_div></div></span></div></div></div>";
    } else {
        footer_div = "<div class='callibri_footer' id='callibri_footer'><div><div class='callibri_color_footer callibri_checkbox_footer'>Виджет от <a href='https://callibri.ru/vidget_dlya_sayta?utm_source=widget&utm_medium=organic' target='_blank' class='callibri_a'><span style='text-decoration:underline;font-size:12px!important;line-height:14px!important'>Callibri</span></a></div><div class='callibri_chat_settings_wrapper'><div class='callibri_gray_locomotive callibri_open_chat_settings' onclick=\"callibri_user_chat_actions(event)\" id='callibri_open_chat_settings'><div style='border-bottom: 1px dotted;width:52px;height:18px'>действия</div></div><span id='callibri_user_chat_actions' style = 'display:none'><div style='position:relative;overflow:hidden;border-radius:8px;'><clb_div class='callibri_gray_locomotive callibri_end_dialog_chat_settings'>Закрыть чат</clb_div><clb_div class='callibri_gray_locomotive callibri_send_dialoge_chat_sttings'>Отправить чат на e-mail</clb_div></div></span></div></div></div>";
    }
    switch_div = (_callibri.mobile.isMobile ? '<div id = "callibri_mobile_close" class = "callibri_times_top callibri_wrap_pict_flex" onclick="callibri_widget_toggle(this);callibri_opacity_toggle(event);"><</div>' : '') + CallibriMobileVersion.overlay(switch_div, header_div, footer_div).switch_div;
    header_div = CallibriMobileVersion.overlay(switch_div, header_div, footer_div).header_div;
    footer_div = CallibriMobileVersion.overlay(switch_div, header_div, footer_div).footer_div;

    return "<div class='callibri_widget " + _callibri.widget_theme + "_text' id='callibri_containerWidget' style='" + (_callibri.mobile.isMobile ? 'display:none;' : '') + "'><div id='callibri_OperatorName'></div> <div style=\"height:inherit;\" class='callibri_gradient'>" + header_div + "<div class='callibri_modal_panel' id='modalPanel'> " + switch_div + " </div> " + widgets_div + footer_div + "</div></div>";
}

function callibri_internal_vars_in_init(widget_width) {
    _callibri.internal_vars.div_underline = document.getElementById("callibri_switch_div_underline");
    _callibri.internal_vars.operator_name = document.getElementById("callibri_OperatorName");
    _callibri.internal_vars.footer = document.getElementById('callibri_footer');
    _callibri.internal_vars.callibri_gradient = document.querySelector('.callibri_gradient');
    _callibri.internal_vars.opacity = document.getElementById('callibri_opacity');
    _callibri.internal_vars.container = document.getElementById('callibri_containerWidget');
    if (widget_width) {
        _callibri.internal_vars.container.style.width = widget_width;
    }
    if (Object.keys(_callibri.module_settings.tabs).length > 4) {
        _callibri.internal_vars.container.style.minWidth = 435 + 'px';
    }
    _callibri.internal_vars.bubl = document.getElementById('callibri_soc');
    _callibri.internal_vars.append_ = document.getElementById('callibri_appendHere');
    _callibri.internal_vars.badge = document.getElementById('callibri_badge');
    _callibri.internal_vars.sphere_options = document.getElementsByName('callibri_sphere_option');
    _callibri.internal_vars.badge_text = document.getElementsByName('callibri_bg_text');
    _callibri.internal_vars.operator_writes = document.getElementById('callibri_operator_writes'); //не видно в альбомном виде на моб
    _callibri.internal_vars.pict_index = document.querySelector('.callibri_wrap_pict_index');
    _callibri.internal_vars.header = document.querySelector('#callibri_header');
    _callibri.internal_vars.modalPanel = document.querySelector('#modalPanel');
    _callibri.internal_vars.module_area = document.querySelector('#callibri-module-area');
}

function callibri_append_css(use_custom_ymaps) {
    for (var key in _callibri.css) {
        if (key.match('MOBILE')) {
            if (!_callibri.mobile.isMobile) {
                continue;
            }
            if (key === 'MOBILE_IPHONE_TEXT' && !_callibri.mobile.iPhone) {
                continue;
            }
            if ((key.match('RIGHT') && _callibri.internal_vars.position === 'left') || (key.match('LEFT') && _callibri.internal_vars.position === 'right')) {
                continue;
            }
        }
        if (key.match('AVATAR')) {
            if (_callibri.mobile.isMobile) {
                continue;
            }
        }
        if (key.match('RIGHT_ANIMATION') && (_callibri.internal_vars.position === 'left')) {
            continue;
        }
        if (key.match('LEFT_ANIMATION') && (_callibri.internal_vars.position === 'right')) {
            continue;
        }
        if (key.match('IE_GENERAL_FIX') && !_callibri.internal_vars.browsers.ie89) {
            continue;
        }
        if (key.match('TABLET') && !callibri_tablet_check()) {
            continue;
        }
        if (key.match('IE_891011') && !(_callibri.internal_vars.browsers.ie89 || _callibri.internal_vars.browsers.ie1011)) {
            continue;
        }
        if (key.match('IE_LEFT') && (_callibri.internal_vars.position === 'right' || !_callibri.internal_vars.browsers.ie1011)) {
            continue;
        }
        if (key.match('IE_RIGHT') && (_callibri.internal_vars.position === 'left' || !_callibri.internal_vars.browsers.ie1011)) {
            continue;
        }
        if (use_custom_ymaps) {
            if (!_callibri.internal_vars.css_names_arr) {
                _callibri.internal_vars.css_names_arr = [];
            }
            _callibri.internal_vars.css_names_arr.push(key);
        }
        var css = document.createElement('style');
        css.setAttribute("id", key);
        css.setAttribute("type", "text/css");
        css.appendChild(document.createTextNode(_callibri.css[key]));
        document.getElementsByTagName("head")[0].appendChild(css);
    }
}
callibri_tabs_height = [];

function set_callibri_tabs_height() {
    if (_callibri.module_settings.tabs.chat !== undefined)
        callibri_tabs_height.push('callibri_chatW');
    if (_callibri.module_settings.tabs.callback !== undefined)
        callibri_tabs_height.push('callibri_reqCallW');
    if (_callibri.module_settings.tabs.feedback !== undefined)
        callibri_tabs_height.push('callibri_request');
    if (_callibri.module_settings.tabs.contact !== undefined)
        callibri_tabs_height.push('callibri_map');
    if (_callibri.module_settings.tabs.social !== undefined)
        callibri_tabs_height.push('callibri_social');
}

function callibriInitWidget(hide_tabs) {
    //hide_tabs = true отрисовка виджета без крючков вызывается только из ловца когда виджет с мобильных отключен а ловец есть
    //_callibri.internal_vars.positionH - true - во всю высоту
    //_callibri.internal_vars.border_type - новая рамка|новая тень|все по старому
    if (!_callibri.mobile) _callibri.mobile = {};
    if (!_callibri.module_settings) _callibri.module_settings = {};
    callibri_open_chat = callibriGetCookie(_callibri.cookie_prefix + "accepted_the_rules");
    if (_callibri.segments) {
        _callibri.segment_service = new CallibriSegment(_callibri.segments);
        if (_callibri.module_settings.landing_groups)
            _callibri.landing_service = new CallibriLandingService(_callibri.module_settings.landing_groups);
    }
    _callibri.reference_body_element = document.getElementsByTagName("body")[0];
    if (callibriGetCookie('callibri_nowidget') === 'true') return;
    if (!_callibri.internal_vars) _callibri.internal_vars = {};
    if (typeof(_callibri.module_settings.tabs) === "undefined" || _callibri.module_settings.tabs === null) return; //нет табов -> нет виджета
    if (_callibri.mobile.isMobile)
        if (callibri_tablet_check()) _callibri.mobile.isMobile = false;
    if (_callibri.mobile.isMobile && _callibri.module_settings.common.show_mobile === "false") {
        callibriInitLidCatcher();
        return; //не показывать виджет на мобильных устройствах
    }
    if (_callibri.module_settings.operators && _callibri.module_settings.operators.length === 0)
        delete(_callibri.module_settings.operators);
    if (_callibri.module_settings.operators && (_callibri.segment_service.agree_segments || _callibri.segment_service.default_segment)) {
        _callibri.groups = new CallibriGroups();
    }
    //Заглушка потом убрать
    if (!_callibri.chat_operator && _callibri.module_settings.operators) {
        var length = _callibri.module_settings.operators.length,
            number = Math.floor(Math.random() * (length - 1)),
            operator = _callibri.module_settings.operators[number];
        _callibri.chat_operator = {};
        _callibri.chat_operator.name = operator.name;
        _callibri.chat_operator.avatar_image = operator.avatar_image;
    }
    //
    if (_callibri.groups && _callibri.groups.getGroups() === null) return;
    _callibri.internal_vars.browsers = [];
    _callibri.internal_vars.browsers.ie89 = callibriCheckIE8_9();
    _callibri.internal_vars.browsers.ie1011 = callibriCheckIE10_11_Edge();
    if (_callibri.module_settings.common.use_opacity === '') _callibri.internal_vars.border_type = '';
    try {
        var style_position = JSON.parse(callibriGetItemLocalStorage("callibri_position")) || "";
    } catch (e) {
        if (typeof(callibriOnError) == "function") {
            callibriOnError(callibriErrorInfo(e, callibriGetItemLocalStorage("callibri_position")));
        }
    }
    _callibri.module_settings.common.position = getCallibriAngle();
    if (style_position.position) {
        if (style_position.position == 'LEFT_ANIMATION') {
            _callibri.internal_vars.position = 'left';
            _callibri.internal_vars.positionH = 'false';
        } else {
            _callibri.internal_vars.position = 'right';
            _callibri.internal_vars.positionH = 'false';
        }
    } else if (_callibri.module_settings.common.position === 'left_angle') {
        _callibri.internal_vars.position = 'left';
        _callibri.internal_vars.positionH = 'false';
    } else if (_callibri.module_settings.common.position === 'right_angle') {
        _callibri.internal_vars.position = 'right';
        _callibri.internal_vars.positionH = 'false';
    } else if (_callibri.module_settings.common.position === 'left') {
        _callibri.internal_vars.position = 'left';
        _callibri.internal_vars.positionH = 'true';
    } else if (_callibri.module_settings.common.position === 'right') {
        _callibri.internal_vars.position = 'right';
        _callibri.internal_vars.positionH = 'true';
    }
    if (_callibri.module_settings.common.position === 'bottom') {
        _callibri.internal_vars.positionH = 'true';
        if (_callibri.module_settings.common.right < 190) {
            _callibri.internal_vars.position = 'right';
        } else {
            _callibri.internal_vars.position = 'left';
        }
    }
    var not_use_social_desktop = _callibri.module_settings.tabs.social && _callibri.module_settings.tabs.social.only_mobile && !_callibri.mobile.isMobile;
    if (not_use_social_desktop) delete _callibri.module_settings.tabs.social;
    callibri_onetab = Object.keys(_callibri.module_settings.tabs).length === 1;
    //нужно чтоб расставить нужные классы задержек на старте
    _callibri.tabscount = Object.keys(_callibri.module_settings.tabs).length - 1;
    if (_callibri.module_settings.tabs.social) {
        _callibri.tabscount--;
    }
    if (callibriGetCookie('callibri_blacklist') !== null && JSON.parse(callibriGetCookie('callibri_blacklist')) !== false) {
        _callibri.internal_vars.blacklist = JSON.parse(callibriGetCookie('callibri_blacklist'));
    }
    if (_callibri.segment_service && _callibri.segment_service.agree_segments && _callibri.segment_service.get_active_groups('hooks')) {
        var segment_hook = _callibri.segment_service.get_active_groups('hooks')[0],
            hooks = _callibri.module_settings.common.hook,
            hook;
        if (hooks) {
            for (hook in hooks) {
                if (segment_hook[hook]) {
                    hooks[hook] = segment_hook[hook];
                } else {
                    //delete(hooks[hook]);
                }
            }
        } else if (segment_hook) {
            _callibri.module_settings.common.hook = {};
            for (hook in segment_hook) {
                if (hook == 'chat' || hook == 'feedback' || hook == 'callback') {
                    _callibri.module_settings.common.hook[hook] = segment_hook[hook];
                }
                if (hook == 'when') {
                    _callibri.module_settings.common.hook_when = segment_hook[hook];
                }
                if (hook == 'id') {
                    _callibri.module_settings.common.hook_id = segment_hook[hook];
                }
            }
        }
    }
    if (!_callibri.module_settings.operators || (_callibri.groups && (_callibri.groups.operators.length === 0 || _callibri.groups.getGroups() === 0) && _callibri.module_settings.tabs.chat)) {
        delete(_callibri.module_settings.chat);
        delete(_callibri.module_settings.tabs.chat);
        if (_callibri.chat_operator)
            delete(_callibri.chat_operator);
        if (_callibri.module_settings.common.hook && _callibri.module_settings.common.hook.chat)
            delete(_callibri.module_settings.common.hook.chat);
    }
    var tabs = _callibri.module_settings.tabs;
    set_callibri_tabs_height();
    callibri_generate_css();
    link_agreement = _callibri.module_settings.common.link_agreement || ('http://callibri.ru/agreement/' + _callibri.site_id);
    link_privacy = _callibri.module_settings.common.link_privacy || ('http://callibri.ru/privacy/' + _callibri.site_id);
    var use_custom_ymaps = (typeof(ymaps) !== "undefined" && _callibri.module_settings.custom_ymaps);
    callibri_append_css(use_custom_ymaps);
    if (use_custom_ymaps) {
        ymaps.ready(function() {
            var all_ymaps_stylesheet = document.evaluate("//head/style[contains(.,'ymaps')]", document, null, XPathResult.ANY_TYPE, null);
            var ymaps_stylesheet = all_ymaps_stylesheet.iterateNext();
            var arr_length = _callibri.internal_vars.css_names_arr.length,
                css_name;
            for (var i = 0; i < arr_length; i++) {
                css_name = _callibri.internal_vars.css_names_arr[i];
                var style = document.getElementById(css_name);
                if (style)
                    style.parentNode.removeChild(style);
                ymaps_stylesheet.insertAdjacentHTML('beforebegin', '<style id="' + css_name + '" type="text/css">' + _callibri.css[css_name] + '</style>');
            }
        });
    }
    if (!_callibri.module_settings.common.locale) {
        _callibri.module_settings.common.locale = "ru";
    }
    if (_callibri.mobile.isMobile) {
        _callibri.mobile.styleBodyPosition = document.body.style.position;
    }
    var elemDiv = document.createElement('div'),
        bubl_image;
    elemDiv.className = "callibri-module-area";
    elemDiv.id = "callibri-module-area";
    _callibri.widget_theme = _callibri.color_widget || ((_callibri.module_settings && _callibri.module_settings.widget_theme) ? _callibri.module_settings.widget_theme : 'callibri_default');
    _callibri.widget_theme_border = _callibri.widget_theme == 'callibri_default' ? '' : 'callibri_border_top';
    _callibri.widget_theme_phone = _callibri.widget_theme == 'callibri_default' ? 'callibri_default_text' : 'callibri_black_phone';
    if (_callibri.module_settings.tabs.chat) {
        bubl_image = (_callibri.chat_operator) ? _callibri.chat_operator.avatar_image : (callibri_image_path + 'avatar-unknown.png');
    } else {
        bubl_image = callibriTabs[Object.keys(_callibri.module_settings.tabs)[0]].tab_icon;
    }
    callibriSetHook();
    _callibri.internal_vars.blacklist = [];
    //генерация баблов новая
    var bubl_hook = Object.keys(_callibri.module_settings.tabs || {}),
        image = '',
        hook = '',
        robotimage = '',
        hook_text,
        bubl = '',
        open_tab = _callibri.module_settings.common.open_tab;
    _callibri.internal_vars.bubl_tabs = [];
    if (!hide_tabs) {
        var link_hook,
            chat = false;

        function boolean_hook_text(i) {
            return _callibri.module_settings.common.hook && _callibri.module_settings.common.hook[bubl_hook[i]]
        }
        var chat_wth_priority = (open_tab !== 'chat' && !_callibri.module_settings.common.hook);
        if ((open_tab !== 'chat' && Object.keys(_callibri.module_settings.tabs || {}).indexOf(open_tab) > -1) && ((_callibri.module_settings.tabs.chat && !_callibri.module_settings.common.hook) || !_callibri.module_settings.tabs.chat)) {
            for (var i = 0; i < bubl_hook.length; i++) {
                if (bubl_hook[i] == open_tab) {
                    bubl_hook.unshift(bubl_hook.splice(i, 1)[0]);
                }
            }
        }
        for (var i = 0; i < bubl_hook.length; i++) {
            var current_hook_text = boolean_hook_text(0) ? _callibri.module_settings.common.hook[bubl_hook[0]].replace('\n', '<br>') : "",
                link, img;
            hook_text = boolean_hook_text(i) ? _callibri.module_settings.common.hook[bubl_hook[i]].replace('\n', '<br>') : "";
            if (_callibri.internal_vars.blacklist.indexOf(current_hook_text) < 0) {
                callibriBallonText.unshift(current_hook_text);
            }
            function setLink(j) {
                return "onclick=\"callibriOpenWidgetClick({0},'{1}','#{2}', this,'{3}');\"".callibri_format(bubl_hook[i] === 'chat' || callibriCheckIE8_9() ? 'event' : 'event', callibriTabs[bubl_hook[j]].tab_switch, callibriTabs[bubl_hook[j]].tab_id);
            }
            link_hook = setLink(0);
            link = setLink(i);
            if (bubl_hook[i] == 'chat' && _callibri.chat_operator) {
                chat = true;
                hook_text = hook_text.replace("{NAME}", _callibri.chat_operator.name).replace("{Name}", _callibri.chat_operator.name);
                image = "<div class='callibri_hook_avatar' ><img  src='" + bubl_image + "' class='callibri_inner_picture' id='operator_picture'></div>";
                hook_img = "<img data-options='true' src='" + bubl_image + "' class='callibri_inner_picture'>";
            } else {
                img = "<div id='callibri_wrap_pict_tab_" + bubl_hook[i] + "' class='callibri_wrap_pict_tab'  " + link + ">" + callibriTabs[bubl_hook[i]].tab_icon + "</div>";
                _callibri.internal_vars.bubl_tabs.push(img);
            }
            hook = ("<div id='callibri_hook_{0}' class='callibri_hooktext_wrapper callibri_small_size callibri_hook' onmouseenter=callibriWrapPictHover(null,'in') onmouseleave=callibriWrapPictHover(null,'out') ><span class='callibri_hooktext_wrapper_close' onclick='callibriCloseHook()'></span><div " + link_hook + " data-options='true'><div id='callibri_text_in' data-options='true'>" + callibriBallonText[0] + "</div>" + (chat ? "<hr><div class='callibri_hooktext_subtext'>Написать в чат... </div>" : "") + "</div></div>").callibri_format(bubl_hook[0], link, hook_text);
        }
        var colorring = "<div class='callibri_wrap_pict_colorring_opacity' id='colorting'><div  class='callibri_anim_vibro_cr'><div class='callibri_wrap_pict_index callibri_wrap_pict_colorring '></div></div></div>";
        bubl = colorring;
        if (_callibri.chat_operator && !chat_wth_priority) {
            var hover;
            robotimage = ""; //"<div class='callibri_wrap_pict_name callibri_wrap_pict_name_robot' id='callibri_wrap_pict_name_robot'> Бот Говорун </div><div id='callibri_wrap_pict_robot' class='callibri_wrap_pict_index callibri_wrap_pict_robot callibri_wrap_pict_s" + (_callibri.mobile.isMobile ? '_mob' : '') + "' onmouseenter=callibriWrapPictHover('robot','in') onmouseleave=callibriWrapPictHover('robot','out')  onclick=\"" + link_hook + "\" ><div class='callibri_hook_avatar'><img data-options='true' src='" + callibri_image_path + 'autoanswer.png' + "' class='callibri_inner_picture' id='robot_picture'></div></div>";
            hover = !callibri_tablet_check() ? "onmouseenter=callibriWrapPictHover('operator','in') onmouseleave=callibriWrapPictHover('operator','out') " : "";
            bubl += "<div class='callibri_wrap_pict_name callibri_wrap_pict_name_operator' id='callibri_wrap_pict_name_operator'>" + _callibri.chat_operator.name + "</div><div id='callibri_wrap_pict_operator' " + hover + link_hook + " data-options='true'  class='callibri_wrap_pict_l callibri_wrap_pict_index callibri_anim_vibro' id='callibri_wrap_pict_index'>" + image + "</div>" + robotimage + hook;
        } else {
            bubl += "<div id='callibri_wrap_pict_img' data-options='true' class='callibri_wrap_pict_l callibri_wrap_pict_index'>" + _callibri.internal_vars.bubl_tabs[0] + "</div>" + robotimage + hook;
        }
        //мобильный бабл
        if (_callibri.mobile.isMobile) {
            if (_callibri.chat_operator) {
                bubl += "<div class='callibri_wrap_pict_index'" + link_hook + "><div class='callibri_shadow'><img data-options='true' src='" + bubl_image + "' class='callibri_inner_picture' id='operator_picture'></div></div> " + robotimage;
            } else {
                bubl += "<div id='callibri_wrap_pict_img' data-options='true' class='callibri_wrap_pict_index'>" + _callibri.internal_vars.bubl_tabs[0] + "</div>" + robotimage;
            }
        }
    };
    if (_callibri.module_settings.tabs.chat) {
        var hooks = _callibri.module_settings.common.hook,
            first_message = "Добрый день, меня зовут {NAME}. Давайте вместе решим вашу задачу. Спросите меня о чем-нибудь :)";
        if (hooks) {
            if (hooks.chat) {
                first_message = hooks.chat;
            } else if (hooks.feedback) {
                first_message = hooks.feedback;
            } else if (hooks.callback) {
                first_message = hooks.callback;
            }
        }
        _callibri.module_settings.tabs.chat.first_message = first_message;
    }
    var number = "";
    if (_callibri.number) {
        var formats = [],
            element, elements = _callibri.module_settings.elements;
        if (elements && elements.length > 0) {
            formats = _callibri.module_settings.elements.filter(function(i) {
                return (i.element === "#callibri-widget-header-phone");
            });
            if (formats.length === 0) {
                formats = _callibri.module_settings.elements.filter(function(i) {
                    return (i.format.length < 40);
                }); //если этого формата нет и это не огромный формат с версткой
            }
        }
        if (formats.length > 0 && formats[0]) {
            format = formats[0].format;
        } else {
            format = _callibri.objects.callibri.format;
        }
        if (_callibri.number.match(/^(7800)|(7804)/)) {
            format = format.replace("+7", "8");
        }
        number = callibriFormatPhone(_callibri.number.substr(1), format);
    }
    var widget = callibriWidgetDraw(number);
    var block_options_div = "<div data-options='true' id='callibri_soc' data-options='true' class='callibri_soc " + (tabs.chat ? 'callibri_in_pict' : 'callibri_in_pict_phone') + "'>  " + bubl + " " + (hide_tabs ? "" : "<div class='callibri_bg_soc callibri_bg_soc_l' data-options='true'><div class='callibri_bg_text_soc callibri_default_text' name='callibri_bg_text'>0</div></div>") + "</div>";
    elemDiv.innerHTML = "<div class='callibri_opacity' id='callibri_opacity' onclick='callibri_widget_toggle(this);callibri_opacity_toggle(event);'></div>" + (_callibri.mobile.isMobile ? "" : " <div class='callibri_micro' id='callibri_micro'><div class='callibri_overflow' style='position: fixed;' id='callibri_microHelper'><div class='callibri_micro_text'>Разрешите доступ к микрофону, чтобы совершить онлайн звонок</div><div class='callibri_arrow'><img src='" + callibri_image_path + 'arrowMicro.png' + "'></div></div><div class='callibri_wrap_big_phone' id='callibri_wrap_big_phone'><img src='" + callibri_image_path + 'bigPhone.png' + "' class='callibri_big_phone' id='callibri_big_phone'></div> </div>  <div class='callibri_micro' id='callibri_feedback'> <div class='callibri_thx'>Спасибо, что связались с нами!</div> <div class='callibri_blablabla'>Для нас очень важно помочь вам и надеемся, что оператору удалось это сделать.Будет прекрасно, если вы оцените качество его работы:</div> <div class=\"callibri_rating\"><span id='callibri_star0' onMouseOver=\"toolTip('5 баллов, все хорошо')\" style=\"font-size: 40px;\">☆</span> <span id='callibri_star1' onMouseOver=\"toolTip('4 балла, все почти хорошо')\" style=\"font-size: 35px;\">☆</span> <span id='callibri_star2' onMouseOver=\"toolTip('3 балла, могло быть и лучше')\" style=\"font-size: 30px;\">☆</span> <span id='callibri_star3' onMouseOver=\"toolTip('2 балла, все еще очень плохо')\" style=\"font-size: 25px;\">☆</span> <span id='callibri_star4' onMouseOver=\"toolTip('1 балл, все очень плохо')\" style=\"font-size: 20px;\">☆</span> </div> </div>") + " <!-- секция вариантов использования -->" + block_options_div + widget + "<div class='callibri_opacity' id='callibri_opacity_lvl2' onclick='callibri_show_original_image(event, \"close\")'><div class='callibri_original_img_wrapper'><div id='callibri_close_image' class='callibri_close_image'>&times;</div></div></div>";
    var exist_node = document.body || document.querySelector('html');
    exist_node.appendChild(elemDiv);
    var widget_width = callibriGetCookie(_callibri.cookie_prefix + "widget_width");
    callibri_internal_vars_in_init(widget_width);
    callibri_hideMSG(0);
    window.addEventListener('resize', function(event) {
        if (_callibri.internal_vars.container.classList.contains('callibri_widget_in')) {
            var minwidth = 'min-width:' + _callibri.internal_vars.container.style.minWidth + ';';
            var width = 'width:' + _callibri.internal_vars.container.style.width + ';';
            var coords = callibri_calc_position('resize');
            if (document.documentElement.clientWidth < _callibri.internal_vars.container.getBoundingClientRect().right)
                _callibri.internal_vars.docked = true;
            if (coords)
                _callibri.internal_vars.container.setAttribute('style', minwidth + width + coords);
        }
        callibri_setHeight(callibri_tabs_height);
    });
    var operator_image = document.getElementsByClassName('callibri_inner_picture')[0];
    if (operator_image) {
        operator_image.ondragdrop = function() { return false; };
        operator_image.ondragdrop = function() { return false; };
        operator_image.ondragstart = function() { return false; };
    }
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            callibri_manual_zoom();
        }, 200);
    }, false);
    for (var temp_key in _callibri.module_settings.tabs) {
        callibriTabEvent(temp_key, tabs[temp_key]);
    }
    callibriSetOutsideActions();
    if (!_callibri.mobile.isMobile)
        callibri_init_resize();

    function priority_tab(open_tab) {
        var tab = {
            'chat': {
                'tab': 'callibri_chatW',
                'id': '#switchForChat'
            },
            'feedback': {
                'tab': 'callibri_request',
                'id': '#switchForRequest'
            },
            'callback': {
                'tab': 'callibri_reqCallW',
                'id': '#switchForCall'
            },
            'contact': {
                'tab': 'callibri_map',
                'id': '#switchForMap'
            },
            'social': {
                'tab': 'callibri_social',
                'id': '#switch_for_social'
            }
        }
        if (open_tab) callibriOpenWidgetClick('evt', tab[open_tab].tab, tab[open_tab].id, this);
    }
    if (_callibri.module_settings.common.autoopen) {
        var function_autoopen = function() {
            var open_tab = _callibri.module_settings.common.open_tab;
            if (open_tab && Object.keys(_callibri.module_settings.tabs || {}).indexOf(open_tab) > -1) {
                priority_tab(open_tab);
            } else {
                var tab = document.querySelector('.callibri_modal_panel div:first-of-type');
                if (tab)
                    tab.click();
            }
        }
        callibri_autoopen = setTimeout(function_autoopen, Number(_callibri.module_settings.common.autoopen) * 1000);
    }
    var switch_for_social = document.getElementById('switch_for_social');
    if (switch_for_social) {
        _callibri.animation = document.getElementById('switch_for_social').getElementsByClassName('callibri_header_social_animation');
        _callibri.animation = [].slice.call(_callibri.animation);
        _callibri.animation.push(document.getElementById('switch_for_social').querySelector('#social_svg'));
        _callibri.animation = [].slice.call(_callibri.animation);
    }
    callibriInitLidCatcher();
    _callibri.hook_animation = { texts: {} };
    if (!_callibri.mobile.isMobile && typeof(callibri_hook_animation_interval) === 'undefined') {
        try {
            _callibri.hook_animation.texts = document.querySelectorAll('#callibri_soc .callibri_hooktext_wrapper');
            _callibri.hook_animation.texts = [].slice.call(_callibri.hook_animation.texts);
        } catch (e) {}
    }
    callibriHookAnimation();
    if (callibri_open_chat) {
        callibriInputChatOpen(false, true);
    } else {
        if (_callibri.module_settings.common.use_privacy && document.getElementById('callibri_callback_button_request')) document.getElementById('callibri_callback_button_request').disabled = true;
    }
    callibriCallMmask();
    callibri_manual_zoom();
    setTimeout(function() { callibri_old_msgs = false; }, 5000);
    setTimeout(function() {
        try {
            document.getElementById('callibri_chatW').style.height = (_callibri.internal_vars.container.offsetHeight - 168) + 'px';
        } catch (e) {}
    }, 1000);
    _callibri.internal_vars.fist_hook_show = false;
    _callibri.internal_vars.hook_show = false;
    var when = _callibri.module_settings.common.hook_when;
    callibri_show_hook(when ? when : 'in');
    if (!_callibri.mobile.isMobile) {
        var touchmove = false;
        (function() {
            //+задавать стартовые значения для первичного выставления высоты inner табов от позиции в параметрах
            var active = document.querySelector('#callibri_widget_phone');

            function drag(e) {
                var tablet = callibri_tablet_check();
                var pageX = e.pageX || e.targetTouches.pageX;
                var pageY = e.pageY || e.targetTouches.pageY;
                var coords = start_coordinates(active);
                var shiftX = pageX - coords.left;
                var shiftY = pageY - coords.top;

                function check_docked(left) {
                    var width = _callibri.internal_vars.container.offsetWidth;
                    if (parseInt(left) == 1 || parseInt(left) == document.documentElement.clientWidth - parseInt(width) - 1) {
                        _callibri.internal_vars.docked = true;
                    } else {
                        _callibri.internal_vars.docked = false;
                    }
                }

                function move(e) {
                    var countX, countY;
                    if (tablet) {
                        countX = e.targetTouches[0].clientX - shiftX;
                        countY = e.targetTouches[0].clientY - shiftY;
                    } else {
                        countX = e.clientX - shiftX;
                        countY = e.clientY - shiftY;
                    }
                    var chat_input_height = document.querySelector('div.callibri_chat_input') && document.querySelector('div.callibri_chat_input').offsetHeight || document.querySelector('input.callibri_chat_input') && document.querySelector('input.callibri_chat_input').offsetHeight || 50;
                    var min_height = _callibri.internal_vars.footer.offsetHeight + _callibri.internal_vars.modalPanel.offsetHeight + _callibri.internal_vars.header.offsetHeight + chat_input_height + 220 + parseInt(_callibri.internal_vars.container.style.bottom) || 0;

                    function setPosition(left, top) {
                        _callibri.internal_vars.container.style.left = left;
                        _callibri.internal_vars.container.style.top = top;
                        check_docked(_callibri.internal_vars.container.style.left);
                    }
                    if (countX >= document.documentElement.clientWidth - _callibri.internal_vars.container.offsetWidth || countX < 0 || countY < 0 || countY > window.innerHeight - min_height) {
                        if (countX >= document.documentElement.clientWidth - _callibri.internal_vars.container.offsetWidth && countY < 0) {
                            setPosition(document.documentElement.clientWidth - 1 - _callibri.internal_vars.container.offsetWidth + 'px', '1px');
                            return;
                        }
                        if (countX < 1 && countY < 0) {
                            setPosition('1px', '1px');
                            return;
                        }
                        if (countX >= document.documentElement.clientWidth - _callibri.internal_vars.container.offsetWidth && countY > window.innerHeight - min_height) {
                            setPosition(document.documentElement.clientWidth - _callibri.internal_vars.container.offsetWidth + 'px', window.innerHeight - 1 - min_height + 'px');
                            return;
                        }
                        if (countX >= document.documentElement.clientWidth - _callibri.internal_vars.container.offsetWidth) {
                            setPosition(document.documentElement.clientWidth - _callibri.internal_vars.container.offsetWidth + 'px', countY - 1 + 'px');
                            return;
                        }
                        if (countX < 1 && countY > window.innerHeight - min_height) {
                            setPosition('1px', window.innerHeight - 1 - min_height + 'px');
                            return;
                        }
                        if (countX < 1) {
                            setPosition('1px', countY - 1 + 'px');
                            return;
                        }
                        if (countY < 0) {
                            setPosition(countX - 1 + 'px', '1px');
                            return;
                        }
                        if (countY > window.innerHeight - min_height) {
                            countY = window.innerHeight - min_height - 1;
                        }
                    }
                    setPosition(countX + 1 + 'px', countY + 1 + 'px');
                    callibriSetLocalStoragePosition();
                    if (tablet) e.preventDefault();
                    touchmove = true;
                    if (tablet) callibri_setHeight(callibri_tabs_height);
                }

                function start_coordinates(elem) {
                    var box = elem.getBoundingClientRect();
                    var body = document.body;
                    var docEl = document.documentElement;
                    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
                    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
                    var clientTop = docEl.clientTop || body.clientTop || 0;
                    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
                    var top = box.top + scrollTop - clientTop;
                    var left = box.left + scrollLeft - clientLeft;
                    return { top: Math.round(top), left: Math.round(left) };
                }

                function callibriDisableSelect(e) {
                    e.preventDefault();
                    return false;
                }

                function reset(e) {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", reset);
                    document.removeEventListener("selectstart", callibriDisableSelect);
                    callibri_setHeight(callibri_tabs_height);
                }
                if (e.which != 1) {
                    if (!touchmove) {
                        active.addEventListener("touchmove", function(e) { move(e); });
                    }
                    return false;
                }
                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", reset);
                active.addEventListener("touchmove", function(e) { move(e); });
                active.addEventListener("touchstart", function(e) { move(e); });
                document.addEventListener("selectstart", callibriDisableSelect);
            };
            active.onmousedown = function(e) {
                drag(e);
            };
            active.addEventListener('touchmove', function(e) {
                drag(e);
            });
            active.addEventListener('touchstart', function(e) {
                drag(e);
            });
        })();
    }
    if (!_callibri.mobile.isMobile) {
        //_callibri.internal_vars.hook_rdy = !1;
        var callibri_chat_input = document.getElementById('callibri_chat_input');
        if (callibri_chat_input) {
            callibri_chat_input.addEventListener('blur', function() {
                if (callibri_chat_input.value.length > 0)
                    document.getElementById('callibri_chat_input_label').style.left = 'calc(100% - 17px)';
                else document.getElementById('callibri_chat_input_label').style.left = '';
            });
        }
    }
    callibri_setHeight(callibri_tabs_height);
    callibri_events_callback('callibri_onLoadCallback');
    if (document.getElementById('callibri_contact_fields-email')) {
        document.getElementById('callibri_contact_fields-email').addEventListener('blur', function() { callibriCheckInput(this, 'email'); });
        document.getElementById('callibri_contact_fields-email').addEventListener('focus', function() { callibriUnCheckInput(this); });
    }
    _callibri.internal_vars.scrollWidth = callibri_get_scroll_width();
    var style_position = JSON.parse(callibriGetItemLocalStorage("callibri_position"));
    var positon_bottom = 0;
    if (style_position.bottom)
        positon_bottom = style_position.bottom;
    if (_callibri.module_settings.common.bottom)
        positon_bottom = _callibri.module_settings.common.bottom;
    callibri_set_position(null, parseInt(positon_bottom));
    callibri_show_actions_btn();
    //хз с какого в мозилле работает только верхняя часть
    _callibri.internal_vars.fake_init_option = callibriGetCookie(_callibri.cookie_prefix + "widget_open") === 'true' ? true : false; //случай когда нужно проинитить опции тк начнут действовать с закрытия виджета
    callibri_set_events();
    widget_callibri_policy(false);
    if (_callibri.mobile.isMobile || typeof(callibri_hide_bubble) !== 'undefined') {
        return;
    }
    //вешаем показ на mouseup если есть соотв параметр
    if (_callibri.module_settings.common.text_select_or_click) {
        window.addEventListener('mouseup', callibri_show_widget);
    }
    //фикс от Константина скачущей каретки ввода текста на iOS
    if (callibri_ios_check()) {
        document.addEventListener('focusin', function(e) {
            if (e.target.classList.contains('callibri_text_inp') || e.target.classList.contains('callibri_textarea') || e.target.classList.contains('callibri-phone-mask')) {
                var container = document.body;
                if (!container) return;
                var org_styles = {};
                ['position', 'overflow', 'height', '-webkit-overflow-scrolling'].forEach(function(key) {
                    org_styles[key] = container.style[key];
                });
                document.body.style['-webkit-overflow-scrolling'] = 'touch';
                e.target.addEventListener('blur', function(v) {
                    callibri_restoreStyles(container, org_styles);
                    v.target.removeEventListener(v.type, arguments.callee);
                });
            }
        });

        function callibri_restoreStyles(body, styles) {
            for (var key in styles) {
                body.style[key] = styles[key];
            }
        }
    }
}

function callibriSetLocalStoragePosition() {
    var style_position = JSON.parse(callibriGetItemLocalStorage("callibri_position")),
        animationStyle = style_position.position || 'RIGHT_ANIMATION';
    var width = style('width') || style('minWidth'),
        top = style('top'),
        left = style('left'),
        bottom = style('bottom');
    animationStyle = '"position":"' + animationStyle + '"';
    callibriSetItemLocalStorage('callibri_position', '{' + width + top + left + bottom + animationStyle + '}');

    function style(item) {
        var container = _callibri.internal_vars.container,
            size = container.style[item];
        if (item == 'left') {
            if (parseInt(size) < (window.innerWidth / 2)) animationStyle = 'LEFT_ANIMATION';
            else animationStyle = 'RIGHT_ANIMATION';
        }
        return size ? ('"' + item + '":"' + size + '",') : '';
    }
}

function callibriOpenWidgetClick(event_type, div_id, switch_id, element) {
    var tab = div_id == 'callibri_chatW' ? 'chat' : (div_id == 'callibri_request' ? 'feedback' : (div_id == 'callibri_reqCallW' ? 'callback' : (div_id == 'callibri_map' ? 'contact' : (div_id == 'callibri_social' ? 'social' : ''))));
    callibri_widget_toggle(event_type, div_id);
    callibri_opacity_toggle(event_type);
    callibriShowDiv(div_id, document.querySelector(switch_id), element);
    if (tab && !_callibri.mobile.isMobile && _callibri.internal_vars.div_underline) {
        var num = Object.keys(_callibri.module_settings.tabs).indexOf(tab);
        _callibri.internal_vars.div_underline.style.transition = 'none';
        _callibri.internal_vars.div_underline.style.left = num * (100 / Object.keys(_callibri.module_settings.tabs).length) + '%';
        setTimeout(function() {
            _callibri.internal_vars.div_underline.style.transition = '';
        }, 1);
    }
    if (!_callibri.mobile.isMobile)
        callibriCloseHook();
    if (switch_id == '#switchForChat')
        callibriInputChatOpen(false, callibri_open_chat);
    if (div_id === 'callibri_map')
        callibriTabContact();
    if (!_callibri.mobile.isMobile)
        callibriSendVisitorEvent('hook', _callibri.module_settings.common.hook_id, true);
}
//hook_mode :
//0 показать через 2 секунды
//1 через 30 сек или прокрутки 2/3 страницы
function callibri_show_hook(hook_mode) {
    var scroll_event = false;
    switch (hook_mode) {
        case 'in':
            {
                callibri_show_widget(null, 2000);
            }
            break;
        case 'see':
            {
                setTimeout(function() {
                    try {
                        if (!_callibri.internal_vars.fist_hook_show) {
                            callibri_show_widget(null, 0);
                            _callibri.internal_vars.fist_hook_show = true;
                        }
                    } catch (e) {
                        if (typeof(callibriOnError) == "function") {
                            callibriOnError(callibriErrorInfo(e));
                        }
                    }
                }, 30000);
                if (!scroll_event) {
                    window.addEventListener('scroll', function() {
                        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                        var trigger_scroll_pos = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 3 * 2;
                        if (posTop >= trigger_scroll_pos && !_callibri.internal_vars.fist_hook_show) {
                            callibri_show_widget(null, 0);
                            _callibri.internal_vars.fist_hook_show = true;
                        }
                    });
                    scroll_event = false;
                }
            }
            break;
    }
}
//показ хуков виджета
function callibri_show_widget(e, time) {
    try {
        if (!_callibri.internal_vars.hook_show) {
            //_callibri.internal_vars.hook_rdy = !0;
            if (!time) time = 0;
            _callibri.internal_vars.hook_show = true;
            setTimeout(function() {
                if (_callibri.hook_animation && _callibri.hook_animation.texts) {
                    callibriHookInAnimation = setTimeout(function() { callibriHookState(null, _callibri.hook_animation.texts[0], 'in', 0); }, 0);
                    callibriHookOutAnimation = setTimeout(function() {
                        callibriHookState(null, _callibri.hook_animation.texts[0], 'out', 300);
                        _callibri.internal_vars.hook_show = false;
                        clearTimeout(callibriHookOutAnimation);
                        clearTimeout(callibriHookInAnimation);
                    }, 10000);
                }
            }, time);
            _callibri.internal_vars.hooks_animation = setTimeout(function() { callibri_show_widget(); }, 50000);
            if (e) e.target.removeEventListener(e.type, arguments.callee);
        }
    } catch (e) {
        if (typeof(callibriOnError) == "function") {
            callibriOnError(callibriErrorInfo(e));
        }
    }
}

function callibri_set_n_stop() {
    _callibri.internal_vars.stop_animation = true;
    if (typeof(callibri_hook_animation_interval) !== "undefined") {
        window.clearInterval(callibri_hook_animation_interval);
        var text = _callibri.internal_vars.bubl.querySelectorAll('.callibri_hooktext_wrapper');
        var chat_text = _callibri.internal_vars.bubl.querySelector('#callibri_hook_chat');
        var img = _callibri.internal_vars.bubl.querySelectorAll('svg, .callibri_hook_avatar');
        var chat_img = _callibri.internal_vars.bubl.querySelector('.callibri_hook_avatar');
        for (var i = 0; i < img.length; i++) {
            callibriHookState(img[i], text[i], 'out');
        }
    }
}
var hook_visible = false;

function callibriAddEllipsis(element, text) {
    var size = 90;
    if (element.innerHTML.length > size) {
        element.innerHTML = element.innerHTML.slice(0, size) + ' ...';
    }
    var arr = element.innerHTML.split('<br>');
    if (arr.length > 3) {
        element.innerHTML = arr[0] + "<br>" + arr[1] + "<br>" + arr[3] + '...';
    }
}

function callibriHookState(img, text, state, delay) {
    if (callibriBallonText[0] !== '' && !_callibri.mobile.isMobile) {
        if (!delay) {
            delay = 0;
        }
        if (state === "out") {
            if (text) { //_callibri.internal_vars.hook_rdy && 
                text.classList.remove('callibri_hooktext_in');
                setTimeout(function() { text.classList.add('callibri_hook'); }, delay);
                text.classList.add('callibri_hooktext_out');
                hook_visible = false;
            }
            if (img) {
                img.classList.remove('callibri_hookimage_in');
            }
        } else {
            var text_in = document.getElementById('callibri_text_in');
            if (callibriBallonText[0] !== undefined && text_in !== null && typeof(text_in) !== "undefined") { //_callibri.internal_vars.hook_rdy && 
                text_in.innerHTML = callibriBallonText[0];
                text.classList.remove('callibri_hooktext_out');
                text.classList.add('callibri_hooktext_in');
                text.classList.remove('callibri_hook');
                hook_visible = true;
                setTimeout(function() { callibriAddEllipsis(text_in, callibriBallonText[0]); }, 1);
            }
            if (img) {
                img.classList.remove('callibri_hookimage_out');
            }
        }
    }
}

function callibriColorringVisibly(state) {
    try {
        if (state == true) {
            function colorring() {
                try {
                    if (callibriColorring != undefined) {
                        try {
                            setTimeout(function() {
                                callibriColorring.classList.remove('callibri_wrap_pict_colorring_opacity');
                                callibriColorring.style.display = 'none';
                            }, 250);
                            setTimeout(function() {
                                callibriColorring.classList.add('callibri_wrap_pict_colorring_opacity');
                                callibriColorring.style.display = 'block';
                            }, 300);
                        } catch (e) { console.log(e); }
                    }
                } catch (e) { console.log(e); }
            }
            colorring();
            callibriColorRingAnimation = setInterval(function() { colorring(); }, 19850);
            try {
                if (callibriBallonText.length > 1 && !_callibri.mobile.isMobile) {
                    if (callibriBallonText[0] == '') callibriBallonText.push(callibriBallonText.shift());
                } else {
                    callibriHookInAnimation = '';
                    callibriHookOutAnimation = '';
                }
            } catch (e) {
                if (typeof(callibriOnError) == "function") {
                    callibriOnError(callibriErrorInfo(e));
                }
            }
            var text_in = document.getElementById('callibri_text_in');
            if (text_in !== null && typeof(text_in) !== "undefined") {
                text_in.innerHTML = callibriBallonText[0];
                setTimeout(function() { callibriAddEllipsis(text_in, callibriBallonText[0]); }, 1);
            }
        }
    } catch (e) {
        if (typeof(callibriOnError) == "function") {
            callibriOnError(callibriErrorInfo(e));
        }
    }
}

function callibriHookAnimation(state) {
    try {
        callibriColorring = document.getElementById('colorting');
        if (_callibri.chat_operator) {} else {
            var time = 3000;
            var time_fade = 0.5;
            var wrap_pict_img = document.getElementById('callibri_wrap_pict_img');
            var fade_function = function(launch) {
                var pict_img = wrap_pict_img.children[0].children[0];
                pict_img.style.transition = "opacity " + time_fade + "s";
                pict_img.style.opacity = launch ? 0 : '';
                setTimeout(function() { pict_img.style.opacity = 1; }, 10);
                setTimeout(function() {
                    pict_img.style.opacity = 0;
                }, time - 50 - time_fade * 1000);
                setTimeout(function() {
                    _callibri.internal_vars.bubl_tabs.push(_callibri.internal_vars.bubl_tabs.shift());
                    wrap_pict_img.innerHTML = _callibri.internal_vars.bubl_tabs[0];
                    wrap_pict_img.children[0].children[0].style.opacity = 0;
                }, time - 50);
            };
            (function() {
                fade_function(false);
                setTimeout(arguments.callee, time);
            })();
        }
        callibriColorringVisibly(true);
        callibriHookAllAnimation = setInterval(function() { callibriColorringVisibly(true); }, 40100);
    } catch (e) {
        console.log(e);
    }
}

function callibri_f8287(action) {
    if (!callibriDocumentHidden()) {
        setTimeout(action, 1);
    }
}

function callibriInitLidCatcher() {
    if (!_callibri.catcher && _callibri.segment_service && _callibri.segment_service.agree_segments && _callibri.module_settings.catchers_groups && _callibri.module_settings.catchers_groups.length > 0) {
        _callibri.module_settings.lcatcher = _callibri.segment_service.get_active_groups('catchers');
        var callback = function() {
            _callibri.catcher = new CallibriLidCatcher(_callibri.mobile.isMobile, _callibri.module_settings.lcatcher);
        };
        var path = _callibri.lid_catcher_path || ("//" + _callibri.cdn_host + "/lid_catcher_v2.min.js");
        callibriGetLibrary(path, callback, "CallibriLidCatcher");
    }
}

function callibri_subsubtoggle(img_option, sphere_option, data) {
    img_option.className = img_option.className.replace(/callibri_overrideOptions\d+/, '');
    sphere_option.className = sphere_option.className.replace(/callibri_overrideOptions\d+/, '');
    sphere_option.classList.add('callibri_overrideOptions' + data);
    img_option.classList.add('callibri_overrideOptions' + data);
}

function callibri_subtoggle(sphere_option, img_option, i) {
    sphere_option[i].classList.remove('callibri_close_options');
    img_option[i].classList.remove('callibri_close_optionsImg');
    sphere_option[i].classList.add('callibri_overrideOptions');
    img_option[i].classList.add('callibri_overrideOptionsImg');
}

function callibri_subtoggle_in(sphere_option, img_option, i) {
    callibri_subtoggle(sphere_option, img_option, i);
    callibri_subsubtoggle(img_option[i], sphere_option[i], i);
}

function callibri_subtoggle_out(sphere_option, img_option, i, l) {
    callibri_subtoggle(sphere_option, img_option, i);
    callibri_subsubtoggle(img_option[i], sphere_option[i], parseInt(l - 1 - i));
}
var mouseoverHook;

function callibriToggleOptions(event) {
    try {
        if (!callibriCheckIE8_9()) {
            if (!_callibri.mobile.isMobile) {
                var sphere_option = document.querySelectorAll('#modalPanel_options [name="callibri_sphere_option"]');
                var img_option = document.querySelectorAll('#modalPanel_options [name="callibri_image_for_options"]');
                var hook = document.querySelector('.callibri_hooktext_in');
                var l = sphere_option.length;
                var eventObj = event || window.event;
                if (eventObj == 'manual') {
                    var element = false;
                    if (callibriGetCookie('callbri_train_anim') != 'true') {
                        element = !element;
                    }
                } else if (event.type == 'mousemove') {
                    if (hook && !hook.classList.contains('callibri_hooktext_out')) {
                        return false;
                    }
                    var element = true;
                } else {
                    var element_from_point = '';
                    if (eventObj.clientX || eventObj.clientY) {
                        var element_from_point = document.elementFromPoint(eventObj.clientX, eventObj.clientY),
                            element = true;
                        if (element_from_point) {
                            var element = element_from_point.getAttribute('data-options') != 'true';
                        }
                    }
                }
                //мусор чтоб доставать хук когда стоят галки на открытие по времени или клику
                if (!hook) {
                    if (eventObj.type == 'mouseenter' && (_callibri.module_settings.common.text_select_or_click || _callibri.module_settings.common.after_seconds)) {
                        element_from_point = document.elementFromPoint(eventObj.clientX, eventObj.clientY);
                        elm = element_from_point.getAttribute('data-options') == 'true';
                        if (elm) {
                            callibri_show_widget();
                            element = false;
                            if (typeof(callibri_hide_bubble) !== 'undefined') return;
                            hook = document.querySelector('.callibri_hooktext_in');
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (eventObj == 'manual') {
                if (callibriGetCookie('callbri_train_anim') != 'true') {
                    callibriSetCookie('callbri_train_anim', 'true');
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
}

function callibri_show_original_image(event, self) {
    if (self.tagName === 'A') {
        self = self.outerHTML.replace(/<a/g, '<img');
        self = $(self)[0];
    }
    if (self == 'close') {
        if (event.target.classList.contains('callibri_image_preview')) {
            event.stopPropagation();
            return false;
        }
        callibri_opacity_toggle(event, true);
        setTimeout("document.querySelector('.callibri_original_img_wrapper').removeChild(document.querySelector('#callibri_displayed_picture'))", 150);
        return true;
    } else {
        self = self.cloneNode();
        self.id = 'callibri_displayed_picture';
        self.style.maxWidth = '90vw';
        self.classList.remove('callibri_img');
        self.style.maxHeight = '90vh';
        self.setAttribute('onclick', '');
        callibri_opacity_toggle(event, true);
        document.querySelector('.callibri_original_img_wrapper').insertAdjacentHTML('beforeend', self.outerHTML);
        return true;
    }
}

function callibriWebcall() {
    if (!_callibri.mobile.isMobile) {
        var callInProgress = false;
        var callButton = _callibri.mobile.isMobile ? document.querySelector('#callibri_call_link') : document.querySelector('.callibri_button_call .callibri_button');
        callButton.addEventListener("click", function(event) {
            if (callInProgress === false) {
                callInProgress = true;
                callibriMakeRequest('/module/click', {
                    session_id: _callibri.session_id,
                    key: _callibri.number,
                    client_id: _callibri.site_id,
                    event_type: 'webcall'
                });
                _callibri.web_phone = new CallibriWWP();
            } else {
                _callibri.web_phone.terminate();
                callInProgress = false;
            }
        }, false);
    }
}

function callibri_wout() {
    _callibri.internal_vars.bubl.style.display = 'block';
    var container = _callibri.internal_vars.container;
    if (!_callibri.mobile.isMobile) {
        setTimeout(function() { _callibri.internal_vars.bubl.style.opacity = '1'; }, 1);
        setTimeout(function() {
            container.style.display = 'none';
            _callibri.internal_vars.open_widget = false;
        }, 600);
        // callibriHookState(null, _callibri.hook_animation.texts[0], 'out', 0);
    } else {
        _callibri.internal_vars.bubl.style.opacity = '1';
        container.style.display = 'none';
    }
    container.classList.remove('callibri_widget_in');
    for (var id in callibri_tabs_height) {
        document.getElementById(callibri_tabs_height[id]).style.opacity = 0;
    }

    function set_side(side) {
        for (var id in callibri_tabs_height) {
            document.getElementById(callibri_tabs_height[id]).style.opacity = 0;
        }
        container.classList.add(side == 'left' ? 'callibri_widget_out_l' : 'callibri_widget_out_r');
        CallibriSwichAnimCss(side == 'left' ? 'LEFT_ANIMATION' : 'RIGHT_ANIMATION');
    }
    switch (getCallibriAngle()) {
        case 'left':
            set_side('left');
            break;
        case 'right':
            set_side('right');
            break;
        case 'bottom':
            container.classList.add('callibri_widget_out');
            break;
    }
}

function callibri_win(id) {
    var container = _callibri.internal_vars.container;
    if (!_callibri.mobile.isMobile) {
        _callibri.internal_vars.bubl.style.opacity = '0';
        container.style.display = '';
        document.getElementById(id).style.opacity = 0;
        setTimeout(function() {
            _callibri.internal_vars.bubl.style.display = 'none';
            _callibri.internal_vars.open_widget = true;
        }, 500);
        switch (getCallibriAngle()) {
            case 'left':
                setTimeout(function() {
                    document.getElementById(id).style.opacity = 1;
                }, 300);
                break;
            case 'right':
                setTimeout(function() {
                    document.getElementById(id).style.opacity = 1;
                }, 300);
                break;
            case 'bottom':
                for (var ids in callibri_tabs_height) {
                    document.getElementById(callibri_tabs_height[ids]).style.opacity = 0;
                    if (_callibri.internal_vars.container.offsetHeight > 168) {
                        document.getElementById(callibri_tabs_height[ids]).style.opacity = 0;
                    }
                    setTimeout(function() {
                        document.getElementById(callibri_tabs_height[ids]).style.opacity = 0;
                    }, 300);
                }
                break;
        }

    }
    container.classList.remove('callibri_widget_out', 'callibri_widget_out_l', 'callibri_widget_out_r');
    container.classList.add('callibri_widget_in');
    setTimeout(function() {
        try {
            if (_callibri.internal_vars.container.offsetHeight > 168) {
                if (!_callibri.mobile.isMobile && document.getElementById('callibri_chatW')) document.getElementById('callibri_chatW').style.height = (_callibri.internal_vars.container.offsetHeight - 168) + 'px';
                document.getElementById(id).style.opacity = 1;
                if (id == 'callibri_chatW') {
                    callibri_app.scrollTo('callibri_chat_input');
                }
            }
        } catch (e) { console.log(e); }
    }, 450);
}

function callibri_widget_toggle(event, id) {
    var e = (typeof(this.event) != 'undefined') ? this.event.currentTarget : event,
        container = _callibri.internal_vars.container;
    if (_callibri.mobile.isMobile) {
        if (!_callibri.internal_vars.container.classList.contains('callibri_widget_in')) { //без возврата по горизонтали
            if (callibri_ios_check()) {
                _callibri.reference_body_element.style.position = _callibri.fix_ios11_body_position;
            }
            callibri_overflow_save = document.getElementsByTagName('body')[0].style.overflow;
            callibri_width_save = document.getElementsByTagName('body')[0].style.width;
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementsByTagName('body')[0].style.width = document.documentElement.clientWidth + 'px';
            if (_callibri.mobile.bodyPosition === 0 || _callibri.mobile.bodyPosition === undefined)
                _callibri.mobile.bodyPosition = document.body.getBoundingClientRect().top;
            document.body.style.position = 'absolute';
            _callibri.internal_vars.container.style.display = 'block';
            _callibri.internal_vars.open_widget = false;
            callibri_events_callback('callibri_onClose');
        } else {
            document.getElementsByTagName('body')[0].style.overflow = callibri_overflow_save;
            document.body.style.position = _callibri.mobile.styleBodyPosition;
            document.getElementsByTagName('body')[0].style.width = callibri_width_save;
            window.scrollTo(0, -_callibri.mobile.bodyPosition);
            _callibri.internal_vars.open_widget = true;
            callibri_events_callback('callibri_onOpen');
        }
        _callibri.internal_vars.bubl.style.display = (_callibri.internal_vars.bubl.style.display == 'none') ? 'block' : 'none';
        document.getElementById('callibri_opacity').style.display = (document.getElementById('callibri_opacity').style.display == 'block') ? 'none' : 'block';
    }
    //скрывать крюк при открытии виджета и наоборот
    if (_callibri.internal_vars.bubl.style.display == '' || _callibri.internal_vars.bubl.style.display == 'block') {
        callibri_old_msgs = false;
        _callibri.internal_vars.badge_text[0].innerHTML = '0';
    }
    if (container.classList.contains('callibri_widget_in') && _callibri.internal_vars.open_widget) {
        if (e && e.id === 'callibri_mobile_close') {
            callibri_wout();
        } else if (_callibri.mobile.isMobile && typeof(e) !== 'undefined' && e.getElementsByTagName('path')[0] !== undefined && !e.getElementsByTagName('path')[0].classList.contains('callibri_active_color') && e.id != 'callibri_mobile_close') {
            callibri_wout();
            setTimeout(function() {
                container.classList.remove('callibri_widget_out');
            }, 50); //C1
            container.classList.add('callibri_widget_in');
        } else {
            callibriSetLocalStoragePosition();
            if (_callibri.internal_vars.fake_init_option) {
                callibriToggleOptions('manual');
                _callibri.internal_vars.fake_init_option = false;
            }
            callibriSetCookie(_callibri.cookie_prefix + "widget_open", '', undefined, true, -1);
            callibri_wout();
        }
        callibri_events_callback('callibri_onClose');
    } else if (!_callibri.internal_vars.open_widget) {
        //positionH = true - во всю высоту
        //изначально не тот формат выбрал
        var style_position;
        try {
            style_position = JSON.parse(callibriGetItemLocalStorage('callibri_position')) || '';
        } catch (e) {
            try {
                localStorage.removeItem('callibri_position');
                style_position = '';
            } catch (e) {
                console.log(e);
            }
        }
        if (!_callibri.mobile.isMobile) {
            var containerWidth = isNaN(parseInt(container.style.width, 10)) ? 435 : parseInt(container.style.width, 10);
            if (style_position.left) container.style.left = style_position.left;
            if (getCallibriAngle() == 'right_angle' || getCallibriAngle() == 'right') {
                container.style.left = '100vw';
            } else if (getCallibriAngle() == 'left_angle' || getCallibriAngle() == 'left') {
                container.style.left = ((container.style.width > 0) ? ((-1) * containerWidth) : '-435') + 'px';
            } else if (getCallibriAngle() == 'bottom') {
                container.style.top = window.innerHeight - parseInt(container.style.bottom) - _callibri.internal_vars.header.offsetHeight + 'px';
            }
            var testleft = style_position.left && style_position.left.length > 0 && document.documentElement.clientWidth > container.offsetWidth + parseInt(style_position.left, 10) && parseInt(style_position.left, 10) > 0;
            var testtop = style_position.top && parseInt(style_position.top, 10) < window.innerHeight;
            setTimeout(function() {
                container.classList.add('callibri_widget_anim');
                if (testtop) {
                    container.style.top = style_position.top;
                }
                if (style_position.width && style_position.width.length > 0) {
                    container.style.width = style_position.width;
                }
                if (testleft) {
                    container.style.left = style_position.left;
                    var width = parseInt(style_position.width, 10) || 435;
                    if (parseInt(style_position.left, 10) === 0 || parseInt(style_position.left, 10) == document.documentElement.clientWidth - parseInt(width, 10)) {
                        _callibri.internal_vars.docked = true;
                    }
                }
                if (!(testtop)) {
                    container.style.top = callibri_calc_position().replace(/top:(\d+px);left:(\d+px)/, '$1');
                }
                if (!(testleft)) {
                    if (parseInt(container.style.left) < 0) {
                        container.style.left = 0;
                    } else {
                        container.style.left = (_callibri.module_settings.common.right && document.documentElement.clientWidth - container.offsetWidth - _callibri.module_settings.common.right > 0) ? document.documentElement.clientWidth - container.offsetWidth - _callibri.module_settings.common.right + "px" : document.documentElement.clientWidth - container.offsetWidth + "px";
                    }
                }
            }, 1);
            container.classList.add('callibri_widget_anim');
            setTimeout(function() { container.classList.remove('callibri_widget_anim'); }, 900);
            callibriSetCookie(_callibri.cookie_prefix + "widget_open", true, undefined, true, 1);
        }
        if (id) callibri_win(id);
        callibri_events_callback('callibri_onOpen');
    }
    callibri_setHeight(callibri_tabs_height);
    clearTimeout(callibri_autoopen);
    try {
        if (event.className == 'callibri_tdb') {
            if (_callibri.internal_vars.fake_init_option) {
                callibriToggleOptions('manual');
                _callibri.internal_vars.fake_init_option = false;
            }
            callibriSetCookie(_callibri.cookie_prefix + "widget_open", '', undefined, true, -1);
            callibri_wout();
        }
    } catch (e) {
        console.log(e);
    }
    if (typeof(_callibri.module_settings.tabs.social) !== 'undefined' && typeof(callibri_animation_interval) === 'undefined') {
        callibri_animation_interval = setInterval('callibriAnimateSocial()', 1500);
    }
    callibri_manual_zoom();
}
//Смотрим куда прижат контейнер виджета
function getCallibriAngle() {
    var style_position;
    try {
        style_position = JSON.parse(callibriGetItemLocalStorage('callibri_position')) || '';
    } catch (e) {
        try {
            localStorage.removeItem('callibri_position');
            style_position = '';
        } catch (e) {
            console.log(e);
        }
    }
    if (isNaN(parseInt(style_position.left, 10))) {
        //Первый запуски виджета
        if (_callibri.module_settings.common.right == 0) {
            return 'right_angle';
        } else if (_callibri.module_settings.common.right == 721) {
            return 'left_angle';
        } else {
            return 'bottom';
        }
    } else {
        if (_callibri.internal_vars.container && _callibri.internal_vars.container.style) {
            var containerWidth = isNaN(parseInt(_callibri.internal_vars.container.style.width, 10)) ? 435 : parseInt(_callibri.internal_vars.container.style.width, 10);
            //Последуйщие запуски виджета
            if (parseInt(style_position.left, 10) < 2 || parseInt(_callibri.internal_vars.container.style.left, 10) < 5) {
                return 'left';
            } else {
                if (((_callibri.internal_vars.container.offsetWidth > 0 ? 0 : _callibri.internal_vars.container.offsetWidth) + parseInt(style_position.left, 10) + containerWidth + 2) > document.documentElement.clientWidth) {
                    return 'right';
                } else {
                    return 'bottom';
                }
            }
        }
    }
}

function callibri_get_scroll_width() {
    var div = document.createElement('div'),
        scrollWidth = 0;
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
}

function callibri_calc_position(resize) {
    var start_mrgn;
    var widget_width = _callibri.internal_vars.container.offsetWidth;
    var position = _callibri.internal_vars.position;
    var gbcr = _callibri.internal_vars.container.getBoundingClientRect();
    var scrollWidth = _callibri.internal_vars.scrollWidth;
    if (resize) {
        if (_callibri.internal_vars.docked) {
            if (gbcr.left === 0) {
                start_mrgn = 'top:' + gbcr.top + 'px;left:0px';
                return start_mrgn;
            } else {
                start_mrgn = 'top:' + gbcr.top + 'px;left:' + parseInt(document.documentElement.clientWidth - widget_width) + 'px';
                return start_mrgn;
            }
        }
        return;
    }
    if (position === 'right' && _callibri.internal_vars.positionH === 'true') {
        start_mrgn = 'top:0px;left:' + parseInt(document.documentElement.clientWidth - widget_width - (scrollWidth || 0)) + 'px';
    }
    if (position === 'left' && _callibri.internal_vars.positionH === 'true') {
        start_mrgn = 'top:0px;left:0px';
    }
    if (position === 'right' && _callibri.internal_vars.positionH === 'false') {
        start_mrgn = 'top:' + parseInt(window.innerHeight / 100 * 10) + 'px;left:' + parseInt(document.documentElement.clientWidth - widget_width - (scrollWidth || 0)) + 'px';
    }
    if (position === 'left' && _callibri.internal_vars.positionH === 'false') {
        start_mrgn = 'top:' + parseInt(window.innerHeight / 100 * 10) + 'px;left:1px';
    }
    if (parseInt(start_mrgn.replace(/top:\d+px;left:(\d+)px/, "$1")) == 0 || parseInt(start_mrgn.replace(/top:\d+px;left:(\d+)px/, "$1")) == document.documentElement.clientWidth - widget_width - scrollWidth) {
        _callibri.internal_vars.docked = true;
        return start_mrgn;
    }
    _callibri.internal_vars.docked = false;
    return start_mrgn;
}

function callibri_opacity_toggle(event, opacity_div) {
    var event = event || window.event || null;
    var img_opacity;
    if (opacity_div || opacity_div == 'true') {
        img_opacity = true;
        opacity_div = document.querySelector('#callibri_opacity_lvl2');
        var even_mobile = true;
    } else {
        var img_opacity = false;
        opacity_div = document.querySelector('#callibri_opacity');
        var even_mobile = false;
    }
    if ((_callibri.module_settings.common.use_opacity === "false" || !_callibri.module_settings.common.use_opacity) && !img_opacity) {
        return;
    }
    try {
        var e = callibriCheckIE8_9() ? event : (typeof(this.event) != 'undefined') ? this.event : event;
        if (!_callibri.mobile.isMobile || even_mobile) {
            if (opacity_div.classList.contains('callibri_opacity_in') && (opacity_div.style.display == 'block' || opacity_div.style.display == 'flex')) {
                opacity_div.classList.remove('callibri_opacity_in');
                opacity_div.classList.add('callibri_opacity_out');
                setTimeout(function() {
                    opacity_div.style.display = 'none';
                }, 100);
            } else {
                opacity_div.classList.remove('callibri_opacity_out');
                opacity_div.classList.add('callibri_opacity_in');
                setTimeout(function() {
                    opacity_div.style.display = callibriCheckIE8_9() ? 'block' : 'flex';
                }, 100);
            }
        } else {
            e ? e.stopPropagation() : '';
            return void(0);
        }
        e ? e.stopPropagation() : '';
    } catch (e) {
        console.log(e);
    }
}

function callibriCompareJq(v1, v2) {
    var v1parts = v1.split('.');
    var v2parts = v2.split('.');

    function isPositiveInteger(x) {
        return /^\d+$/.test(x);
    }
    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length === i) {
            return 1;
        }
        if (v1parts[i] === v2parts[i]) {
            continue;
        }
        if (parseInt(v1parts[i]) > parseInt(v2parts[i])) {
            return 1;
        }
        return -1;
    }
    if (v1parts.length != v2parts.length) {
        return -1;
    }
    return 0;
}
var callibriOldTabId = '';

function CallibriSwichAnimCss(position) {
    var animationStyle = document.getElementById('LEFT_ANIMATION');
    if (animationStyle === null) { animationStyle = document.getElementById('RIGHT_ANIMATION'); };
    if (position !== animationStyle.id) {
        animationStyle.id = (animationStyle.id == 'LEFT_ANIMATION') ? 'RIGHT_ANIMATION' : 'LEFT_ANIMATION';
        animationStyle.innerHTML = _callibri.css[animationStyle.id];
        var style_position = '';
        try {
            style_position = JSON.parse(callibriGetItemLocalStorage('callibri_position')) || '';
        } catch (e) {
            try {
                localStorage.removeItem('callibri_position');
                style_position = '';
            } catch (e) {
                console.log(e);
            }
        }
        var width = _callibri.internal_vars.container.style.width || style_position.width || '',
            topp = _callibri.internal_vars.container.style.top || style_position.top || '',
            left = _callibri.internal_vars.container.style.left || style_position.left || '',
            bottom = _callibri.internal_vars.container.style.bottom || style_position.bottom || '';
        width = width !== '' ? '"width":"' + width + '",' : '';
        topp = topp !== '' ? '"top":"' + topp + '",' : '';
        left = left !== '' ? '"left":"' + left + '",' : '';
        bottom = bottom !== '' ? '"bottom":"' + bottom + '",' : '';
        animationStyle = '"position":"' + animationStyle.id + '"';
        callibriSetItemLocalStorage('callibri_position', '{' + width + topp + left + bottom + animationStyle + '}');
    }
}

function callibriShowDiv(id, element, e, num) {
    var footer = _callibri.internal_vars.footer;
    if ((id == 'callibri_chatW' || id == 'callibri_request' || id == 'callibri_reqCallW' || id == 'callibri_map' || id == 'callibri_social') && callibriOldTabId != id && !_callibri.mobile.isMobile) {
        document.getElementById(id).style.opacity = 0;
        document.getElementById(id).style.transition = 'opacity .3s';
    }
    if (id == 'callibri_chatW') { //|| id == 'callibri_request'
        num = 0;
        callibri_hideMSG();
        document.getElementsByClassName('callibri_gradient')[0].style.paddingBottom = '0px';
        setTimeout(function() {
            var block = _callibri.mobile.isMobile ? document.getElementById('callibri_appendHere') : document.getElementById('callibri_chatW');
            block.scrollTop = block.scrollHeight;
        }, 1)
    } else {
        document.getElementsByClassName('callibri_gradient')[0].style.paddingBottom = '0px';
    }
    if (num !== undefined && !_callibri.mobile.isMobile) {
        _callibri.internal_vars.div_underline.style.left = num * (100 / Object.keys(_callibri.module_settings.tabs).length) + '%';
    }
    footer.style.backgroundColor = (id != 'callibri_chatW') ? '#FFF' : '';
    if (!footer.classList.contains('callibri_footer_map') && id == 'callibri_map' && !_callibri.internal_vars.footer.classList.contains(('callibri_footer_animate_open'))) {
        footer.classList.add('callibri_footer_map');
    } else {
        if (footer.classList.contains('callibri_footer_map') && id != 'callibri_map') footer.classList.remove('callibri_footer_map');
    }
    var divHide = document.getElementsByClassName('callibri_wrap_pict');
    for (var i = 0; i < divHide.length; i = i + 1) {
        var elm = divHide[i].childNodes[0];
        divHide[i].classList.remove('callibri_bttn_color');
        divHide[i].classList.remove('callibri_color_top_arrow');
        div_def_text = divHide[i].querySelector('.callibri_text_active');
        if (div_def_text)
            div_def_text.classList.remove('callibri_text_active');
        if (Object.keys(_callibri.module_settings.tabs).length !== 1) {
            elm.classList.remove('callibri_sph_active');
            elm.classList.add('callibri_sph_no_active');
            elm.classList.remove('callibri_bttn_active');
            /* default или нет зависит от текущей схемы */
            elm.classList.add('callibri_bttn_color');
        }
        try {
            var svgimages = divHide[i].getElementsByTagName('path');
            for (var j = 0; j < svgimages.length; j++) {
                svgimages[j].classList.remove('callibri_active_color');
            }
        } catch (e) {
            console.log(e);
        }
        /* default или нет зависит от текущей схемы */
    }
    if (element && element.getAttribute('name') != 'callibri_sphere_option') {
        element.classList.add('callibri_bttn_color');
        element.classList.add('callibri_color_top_arrow');
        div_def_text = element.querySelector('.callibri_text_color');
        if (div_def_text)
            div_def_text.classList.add('callibri_text_active');
        var elm = element.childNodes[0];
        if (Object.keys(_callibri.module_settings.tabs).length !== 1) {
            if (elm.getAttribute('name') !== 'callibri_image_for_options')
                elm.classList.add('callibri_bttn_active');
        }
        /* default или нет зависит от текущей схемы */
        if (Object.keys(_callibri.module_settings.tabs).length !== 1)
            elm.classList.add('callibri_sph_active');
    }
    var div = document.getElementById(id);
    divHide = document.querySelectorAll('[name="select"]');
    if (callibriOldTabId != id && !_callibri.mobile.isMobile) {
        for (var i = 0; i < divHide.length; i = i + 1) {
            divHide[i].style.opacity = 0;
        }
    }
    if (_callibri.mobile.isMobile) {
        if (id) div.style.opacity = 1;
        for (var i = 0; i < divHide.length; i = i + 1) {
            divHide[i].style.display = 'none';
        }
        if (div && _callibri.internal_vars.container.classList.contains('callibri_widget_in')) {
            div.style.display = 'block';
        }
    } else setTimeout(function() {
        if (callibriOldTabId != id) {
            for (var i = 0; i < divHide.length; i = i + 1) {
                divHide[i].style.display = 'none';
                divHide[i].style.transition = 'opacity .3s';
            }
            if (div && _callibri.internal_vars.container.classList.contains('callibri_widget_in')) {
                div.style.display = 'block';
                if (!_callibri.mobile.isMobile) setTimeout(function() { document.getElementById(id).style.opacity = 1; }, 50);
            }
            callibriOldTabId = id;
            callibri_setHeight(callibri_tabs_height);
        }
    }, 300);
    if (div && _callibri.internal_vars.container.classList.contains('callibri_widget_in')) {
        div.style.display = 'block';
    }
    callibri_setHeight(callibri_tabs_height);
    if (_callibri.mobile.isMobile) {
        var e = (typeof(this.event) != 'undefined') ? this.event.currentTarget : e;
    }
    try {
        if (_callibri.module_settings.tabs.chat)
            callibri_change_text_field_pos.chat();
        if (callibri_avatar_popup) callibri_avatar_popup.hide();
    } catch (e) {
        console.log(e);
    }
    try {
        if (element) {
            var svgimages = element.getElementsByTagName('path');
            var tabs = Object.keys(_callibri.module_settings.tabs).map(function(key) {
                return _callibri.module_settings.tabs[key];
            });
            if (tabs.length > 1) {
                for (var i = 0; i < svgimages.length; i++) {
                    if (svgimages[i].classList.contains('const'))
                        break;
                    svgimages[i].classList.add('callibri_active_color');
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    if (id == 'callibri_reqCallW' && _callibri.on_webcall) {
        try {
            callibriWebcall();
        } catch (e) {
            console.log(e);
        }
    }
    if (id == 'callibri_social') {
        callibri_sub_callibriShowDiv('add');
    } else if (document.getElementById('switch_for_social')) {
        callibri_sub_callibriShowDiv('remove');
    }
    callibri_open_chat_settings = document.getElementById('callibri_open_chat_settings');
    callibri_a = document.getElementById('callibri_a');
    if (id == 'callibri_chatW' && callibri_open_chat) {
        callibri_open_chat_settings.style.opacity = '1';
        callibri_open_chat_settings.style.visibility = 'visible';
        if (callibri_a) {
            callibri_a.style.opacity = '1';
            callibri_a.style.visibility = 'visible';
        }
    } else if (callibri_open_chat_settings) {
        callibri_open_chat_settings.style.opacity = '0';
        callibri_open_chat_settings.style.visibility = 'hidden';
    }
}

function callibri_sub_callibriShowDiv(action) {
    var a = document.getElementById('switch_for_social').getElementsByClassName('callibri_social_svg');
    for (i = 0; i < a.length; i++) {
        eval("a[i].classList." + action + "('callibri_border_social')");
        if (a[i].classList.contains('callibri_delay0')) {
            eval("a[i].classList." + action + "('callibri_border0_social')");
        }
    }
}

function callibriTimer() {
    if (_callibri.mobile.isMobile) {
        var thanks_div = '<div class="callibri_thx_for_feedback"><div class="callibri_ok callibri_bttn_color"><img src="//cdn.callibri.ru/callibri_ok.png" class="callibri_ok_pic"></div><div class="callibri_thx_up">Спасибо за обращение!</div><div class="callibri_thx_down">В течение 30 секунд к вам поступит звонок :)</div></div>';
        document.getElementById('callibri_reqCallW').innerHTML = thanks_div;
    } else {
        var timer = document.getElementById("callibri_timer");
        var time;
        if (timer.innerHTML === '')
            time = '(00:29,99)';
        else time = timer.innerHTML;
        var button_timer = document.getElementById("callibri_callback_button_timer");
        document.getElementById("callibri_callback_button_timer").setAttribute("disabled", "disabled");
        var hourMins = time.replace(/\(/, '').replace(/\)/, '').split(":");
        var minsMs = hourMins[1].split(",");
        var s = minsMs[1];
        var m = minsMs[0];
        if (parseInt(s) === 0) {
            if (parseInt(m) === 0) {
                document.getElementById("callibri_callback_button_timer").removeAttribute("disabled");
                callibriGetRatingJs('callibriSectionCallbackChange', 0);
                return;
            }
            m--;
            if (m < 10) m = "0" + m;
            s = 99;
        } else s--;
        if (s < 10) s = "0" + s;
        document.getElementById("callibri_timer").innerHTML = "(00:" + m + "," + s + ")";
        setTimeout(callibriTimer, 10);
    }
}

function callibriDoGetCaretPosition(e) {
    var i = 0;
    if (document.selection) {
        e.focudds();
        var t = document.selection.createRange();
        t.moveStart("character", -e.value.length), i = t.text.length;
    } else {
        (e.selectionStart || "0" == e.selectionStart) && (i = e.selectionStart);
    }
    return i;
}

function callibriSetCursor(e, i) {
    if (!e) return !1;
    if (e.createTextRange) {
        var t = e.createTextRange();
        return t.collapse(!0), t.moveEnd(i), t.moveStart(i), t.select(), !0;
    }
    return e.setSelectionRange ? (e.setSelectionRange(i, i), !0) : !1;
}

function callibriCallMmask() {
    try {
        ['callibri_phn_m1', 'callibri_phn_m2', 'callibri_phn_m3', 'callibri_phn_m4', 'callibri_info_input_phone'].forEach(function(i) {
            if (document.getElementsByClassName(i).length > 0) {
                var i = new callibrimasked(document.getElementsByClassName(i)[0]);
                var mask = _callibri.module_settings.mask_format || '+7 (___) ___-__-__';
                i.maskc(mask);
            }
        });
    } catch (e) {}
}
//todo переделать на именованые ивенты все что тут есть чтоб unmask тоже работал
function callibrimasked(input) {
    this.input = input;
    this.caretTimeoutId = '';
    this.ua = navigator.userAgent;
    this.iPhone = /iphone/i.test(this.ua);
    this.chrome = /chrome/i.test(this.ua);
    this.android = /android/i.test(this.ua);
    this.caret_pos = {
        "begin": 0,
        "end": 0
    };
    this.mask = {
        definitions: {
            "_": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: false,
        dataName: "rawMaskFn",
        placeholder: "_"
    };
    this.hidden = function(el) {
        el = el[0];
        return (el.offsetHeight === 0 && el.offsetWidth === 0);
    } //неполная проверка как в jq
    this.one = function(dom, event, callback) {
        function handler(e) {
            callback.call(this, e);
            this.removeEventListener(event, handler);
        }
        dom.addEventListener(event, handler);
    };
    this.extend = function(a, b) {
        return Object.assign({}, a, b);
    };
    this.caret = function(el, begin, end) {
        var range;
        el = [el];
        if (0 !== el.length && !this.hidden(el)) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
            el.forEach(function(i) {
                i.setSelectionRange ? i.setSelectionRange(begin, end) : i.createTextRange && (range = i.createTextRange(),
                    range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
                    range.select());
            })) : (el[0].setSelectionRange ? (begin = el[0].selectionStart, end = el[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), {
            begin: begin,
            end: end
        })
        else return begin = begin ? begin : 0, end ? end : 0;
    };
    this.unmask = function() {
        return this.trigger("unmask");
    };
    this.maskc = function(mask, settings) {
        var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
        if (!mask && document.getElementsByClassName(settings) > 0) {
            input = this.input;
            var fn = input.data(this.mask.dataName);
            return fn ? fn() : undefined;
        }
        var $th = this;
        settings = this.extend({
            autoclear: this.mask.autoclear,
            placeholder: this.mask.placeholder,
            completed: null
        }, settings);
        defs = this.mask.definitions;
        tests = [];
        partialPosition = len = mask.length;
        firstNonMaskPos = null;
        mask = String(mask);
        mask.split("").forEach(function(c, i) {
            if (c == '?') {
                len--;
                partialPosition = i;
            } else if (defs[c]) {
                tests.push(new RegExp(defs[c]));
                if (firstNonMaskPos === null) {
                    firstNonMaskPos = tests.length - 1;
                }
                if (i < partialPosition) {
                    lastRequiredNonMaskPos = tests.length - 1;
                }
            } else {
                tests.push(null);
            }
        });
        var unmaskevent = document.createEvent("HTMLEvents");
        unmaskevent.initEvent('unmask', true, true);
        this.input.dispatchEvent(unmaskevent);
        return [this.input].forEach(function() {
            var input = $th.input,
                buffer = Array.prototype.map.call(
                    mask.split(""),
                    function(c, i) {
                        if (c != '?') {
                            return defs[c] ? getPlaceholder(i) : c;
                        }
                    }),
                defaultBuffer = buffer.join('');

            function tryFireCompleted() {
                if (!settings.completed) {
                    return;
                }
                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
                    if (tests[i] && buffer[i] === getPlaceholder(i)) {
                        return;
                    }
                }
                settings.completed.call(input);
            }

            function getPlaceholder(i) {
                if (i < settings.placeholder.length)
                    return settings.placeholder.charAt(i);
                return settings.placeholder.charAt(0);
            }

            function seekNext(pos) {
                while (++pos < len && !tests[pos]);
                return pos;
            }

            function seekPrev(pos) {
                while (--pos >= 0 && !tests[pos]);
                return pos;
            }

            function shiftL(begin, end) {
                var i,
                    j;
                if (begin < 0) {
                    return;
                }
                for (i = begin, j = seekNext(end); i < len; i++) {
                    if (tests[i]) {
                        if (j < len && tests[i].test(buffer[j])) {
                            buffer[i] = buffer[j];
                            buffer[j] = getPlaceholder(j);
                        } else {
                            break;
                        }
                        j = seekNext(j);
                    }
                }
                writeBuffer();
                $th.caret(input, Math.max(firstNonMaskPos, begin));
            }

            function shiftR(pos) {
                var i,
                    c,
                    j,
                    t;
                for (i = pos, c = getPlaceholder(pos); i < len; i++) {
                    if (tests[i]) {
                        j = seekNext(i);
                        t = buffer[i];
                        buffer[i] = c;
                        if (j < len && tests[j].test(t)) {
                            c = t;
                        } else {
                            break;
                        }
                    }
                }
            }

            function androidInputEvent() {
                callibriUnCheckInput(input);
                var curVal = input.value,
                    pos = $th.caret(input);
                var proxy = function() {
                    $th.caret(input, pos.begin, pos.begin);
                };
                if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                    var nextPos = checkVal(true);
                    var curPos = pos.end;
                    while (curPos > 0 && !tests[curPos - 1]) {
                        curPos--;
                    }
                    if (curPos === 0) {
                        curPos = nextPos;
                    }
                    pos.begin = curPos;
                    setTimeout(function() {
                        proxy();
                        tryFireCompleted();
                    }, 0);
                } else {
                    pos.begin = checkVal(true);
                    setTimeout(function() {
                        proxy();
                        tryFireCompleted();
                    }, 0);
                }
            }

            function blurEvent() {
                var changeevent = document.createEvent("HTMLEvents");
                changeevent.initEvent('change', true, true);
                checkVal(), input.value != focusText && input.dispatchEvent(changeevent);
                if (checkVal() != 18) {
                    callibriCheckInput(input, 'tel');
                }
            }

            function keydownEvent(e) {
                if (!input.attributes.readonly) {

                    var pos, begin, end, k = e.which || e.keyCode;
                    oldVal = input.value, 8 === k || 46 === k || $th.iPhone && 127 === k ? (pos = $th.caret(input),
                        begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
                            end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
                        e.preventDefault()) : 13 === k ? blurEvent.call($th, e) : 27 === k && (input.val(focusText),
                        $th.caret(input, 0, checkVal()), e.preventDefault());
                    self.caret_pos = $th.caret(input);
                }
            }

            function keypressEvent(e) {
                var self = this;
                if (!input.attributes.readonly) {
                    var p, c, next, k = e.which || e.keyCode,
                        pos = $th.caret(input);
                    if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                        if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                            p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                            if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), $th.android) {
                                var proxy = function() {
                                    $th.caret(input, next);
                                };
                                setTimeout(proxy, 0);
                            } else $th.caret(input, next);
                            pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                        }
                        self.caret_pos = $th.caret(input);
                        e.preventDefault();
                    }
                }
            }

            function moveleaveEvent() {
                var self = this,
                    pos = $th.caret(input);
                if (pos && pos.begin !== mask.length)
                    self.caret_pos = pos;
            }

            function moveenterEvent() {
                if ($th.input.caret_pos) {
                    $th.caret(input, $th.input.caret_pos.begin, $th.input.caret_pos.end);
                }
            }

            function moveEvent(e) {
                if ($th.input.caret_pos && $th.input === document.activeElement && e.target !== $th.input) {
                    $th.caret(input, $th.input.caret_pos.begin, $th.input.caret_pos.end);
                }
            }

            function clearBuffer(start, end) {
                var i;
                for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
            }

            function writeBuffer() {
                input.value = buffer.join("");
            }

            function checkVal(allow, paste) {
                var test = $th.input.value;
                if (paste && paste.length >= 11) {
                    test = paste.substring(1);
                }
                var i, c, pos,
                    lastMatch = -1;
                for (i = 0, pos = 0; len > i; i++)
                    if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length;)
                            if (c = test.charAt(pos - 1),
                                tests[i].test(c)) {
                                buffer[i] = c, lastMatch = i;
                                break;
                            }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? ($th.input.value && ($th.input.value = ""),
                        clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), $th.input.value = $th.input.value.substring(0, lastMatch + 1)),
                    partialPosition ? i : firstNonMaskPos;
            }
            var input = $th.input,
                buffer = Array.prototype.map.call(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }),
                defaultBuffer = buffer.join(""),
                focusText = input.value;
            var dset = Array.prototype.map.call(buffer, function(c, i) {
                return tests[i] && c != getPlaceholder(i) ? c : null;
            }).join("");
            dset ? $th.input.dataset.rawMaskFn = dset : '', $th.one($th.input, "unmask", function() {
                $th.input.removeEventListener(".maskc", ''); //удалять все по намеспейс
                $th.input.delete.dataset.rawMaskFn; //?
            });
            $th.input.addEventListener("focus", function() {
                if (!input.attributes.readonly) {
                    clearTimeout(this.caretTimeoutId);
                    var pos;
                    focusText = $th.input.value, pos = checkVal(), this.caretTimeoutId = setTimeout(function() {
                        input === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? $th.caret(input, 0, pos) : $th.caret(input, pos));
                    }, 10);
                }
            });
            $th.input.addEventListener("blur", blurEvent);
            $th.input.addEventListener("focus", function() {
                callibriUnCheckInput(input);
            });
            $th.input.addEventListener("mouseleave", moveleaveEvent);
            $th.input.addEventListener("mouseenter", moveenterEvent);
            window.addEventListener("mousemove", moveEvent);
            $th.input.addEventListener("keydown", keydownEvent);
            $th.input.addEventListener("keypress", keypressEvent);
            $th.input.addEventListener("input", function() {
                if (!input.attributes.readonly) {
                    setTimeout(function() {
                        var pos = checkVal(true);
                        $th.caret(pos);
                        tryFireCompleted();
                    }, 0);
                }
            });
            $th.input.addEventListener("paste", function(e) {
                var paste = (e.clipboardData || window.clipboardData).getData('text');
                if (!input.attributes.readonly) {
                    setTimeout(function() {
                        var pos = checkVal(true, paste);
                        $th.caret(pos);
                        tryFireCompleted();
                    }, 0);
                }
            });
            if ($th.chrome && $th.android) {
                $th.input.removeEventListener("input", "inputmaskevent");
                $th.input.addEventListener("input", androidInputEvent);
            }
            checkVal();
        });
    };
}

function callibri_operator_name_over(e, name) {
    var operator = _callibri.internal_vars.operator_name;
    operator.innerHTML = name;
    operator.style.display = 'block';
    operator.style.left = e.clientX + 'px';
    operator.style.top = e.clientY + 'px';
}

function callibri_operator_name_out() {
    _callibri.internal_vars.operator_name.style.display = 'none';
}

function callibri_microphone_toggle(widget, opacity) {
    micro_div = document.getElementById('callibri_micro');
    micro_div.style.display = (micro_div.style.display == 'flex') ? 'none' : 'flex';
    if (widget) callibri_widget_toggle('micro');
    if (opacity) callibri_opacity_toggle(null);
}

function callibri_offer_soc() {
    if (_callibri.module_settings.tabs.social) {
        var sn = '';
        var current_tab = '';
        var socials_hash = callibri_links_to_client_social(),
            onclick;
        for (var i = 0; i < _callibri.module_settings.tabs.social.socials.length; i++) {
            current_tab = _callibri.module_settings.tabs.social.socials[i];
            var social = socials_hash[current_tab.type];
            var viber_href = !_callibri.mobile.isMobile && social.title === 'Viber' ? 'callibriShowDiv("callibri_social",document.getElementById("switch_for_social"), this)' : '';
            var link = social.link.replace("{username}", current_tab.username).replace("{session_id}", _callibri.session_id);
            onclick = ['vk', 'ok'].indexOf(current_tab.type) > -1 ? "onclick=\"callibriMakeRequest('/module/click', { session_id: _callibri.session_id, key: _callibri.site_id, client_id: _callibri.site_id, event_type: '" + current_tab.type + "' });\"" : "";
            sn = sn + "<a class='callibri_off_tab' href='" + link + viber_href + "'" + onclick + "target='_blank'><div class='callibri_wrapper_offer_social callibri_bttn_color_" + current_tab.type + "'>" + callibriTabs.social.messengers[current_tab.type].replace('callibri_social_svg', 'callibri_social_svg callibri_wrapper_offer_svg') + '</div><div class="callibri_off_tab_text">' + current_tab.type + '</div></a>';
        }
        var div = document.createElement('div');
        div.classList.add('callibri_off_social');
        div.innerHTML = sn;
        var chm = document.getElementsByClassName('callibri_chat_message callibri_manager');
        var el = chm[chm.length - 1];
        el.parentNode.insertBefore(div, el.nextSibling);
        callibri_change_text_field_pos.chat();
    }
}

function callibriChatRequestFields(element) {
    var chat = _callibri.module_settings.tabs.chat;
    if (chat.request && chat.request[element] && chat.request[element].fields) {
        var array = [],
            fields = chat.request[element].fields;
        for (var item in fields) {
            if (fields[item] == 'true') array.push(item)
        }
        return array;
    } else return false;
}

function callibriRobotextStage() {
    var chat = _callibri.module_settings.tabs.chat;
    if (!chat.request || !chat.request.robotext)
        return;
    var messages = document.querySelectorAll('.callibri_chat_wrapper > .callibri_wrapperField .callibri_chat_message');
    var last_message = messages[messages.length - 1];
    if (last_message !== undefined && last_message !== null && last_message.className.indexOf('callibri_client') > -1 && callibri_read_last_message === false) {
        var message_data = {
            channel: _callibri.session_id,
            text: chat.request.robotext.text,
            datetime: new Date(),
            author: "Client",
            has_manager: true,
            site_id: _callibri.site_id,
            author_name: 'Autoanswer',
            avatar_image: callibri_image_path + 'autoanswer.png',
            info_type: 'robotext'
        };
        if (callibri_check_message(message_data.text)) {
            CallibriChatWidget.prototype._save_message(message_data);
            CallibriChatWidget.prototype._show_message(message_data);
            _callibri.chat_widget._send_message(message_data, true);
            callibriUserInfoMask('robotext');
            callibri_robotext = undefined;
            check_disable_autoanswer(true);
        }
    }
}

function callibriChangeUserAvatar(file_path) {
    _callibri.chat_user_avatar = file_path;
    if (supports_callibri_storage()) {
        localStorage.setItem("callibri_chat_user_avatar", file_path);
    }
    var divs = document.querySelectorAll(".callibri_chat_pict_user");
    for (var i = 0; i < divs.length; i++) {
        divs[i].innerHTML = "<img src='" + file_path + "' class='callibri_avatar_confirmed'>";
        divs[i].className = divs[i].className.replace(/\bcallibri_bttn_color callibri_mt10\b/, '');
    }
    var filename = file_path.substring(file_path.lastIndexOf('/') + 1, file_path.length);
    callibriMakeRequest("/module/set_avatar", {
        site_id: _callibri.site_id,
        session_id: _callibri.session_id,
        avatar_name: filename
    });
}

function callibriSendNameUserChat(button) {
    input = button.parentNode.querySelector('.input-widget');
    if (input.value && input.value != input.defaultValue) {
        callibriMakeRequest("/module/set_avatar", {
            site_id: _callibri.site_id,
            session_id: _callibri.session_id,
            name: input.value
        });
    }
    button.parentNode.parentNode.querySelector('.widget-popup-closer').click();
}

//Все CSS виджета
function callibri_generate_css() {
    if (!_callibri.module_settings.common.theme || parseInt(_callibri.module_settings.common.theme) > (Object.keys(callibri_themes).length - 2)) {
        _callibri.module_settings.common.theme = 'callibri_default';
    }
    var theme = _callibri.module_settings.common.theme;
    var CallibriCssVars = {};
    CallibriCssVars.opac = 1;
    if (_callibri.internal_vars.border_type == 'shadow') {
        CallibriCssVars.border_gef_height = 'box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px;';
    } else {
        CallibriCssVars.border_gef_height = '';
    }
    var meta = document.querySelector('meta[name="viewport"]'),
        text_adjust = !(meta && meta.content && meta.content.indexOf("width=device-width") > -1) ? (callibri_ios_check() ? ((window.innerWidth / screen.width) * 100) >> 0 : 100) : 100;
    _callibri.css = { WIDGET_MIN: " .callibri_none{display:none;}.callibri_wrap_pict_tab{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.callibri_textarea:focus::-webkit-input-placeholder,.callibri_text_inp:focus::-webkit-input-placeholder{color:transparent}.callibri_textarea:focus::-moz-placeholder,.callibri_text_inp:focus::-moz-placeholder{color:transparent}.callibri_textarea:focus:-moz-placeholder,.callibri_text_inp:focus:-moz-placeholder{color:transparent}.callibri_textarea:focus:-ms-input-placeholder,.callibri_text_inp:focus:-ms-input-placeholder{color:transparent}svg{transform: translateZ(0);shape-rendering:geometricPrecision;}#callibri_switch_div_underline{transition: left .5s ease; top:78px;height:3px;z-index:9999999;left:0;background-color:" + callibri_themes[theme].controls + ";position:absolute;width:" + 100 / Object.keys(_callibri.module_settings.tabs).length + "%}#callibri_header{width:100%;position:relative}#social_svg{margin-left:2px!important}callibri_chat_block,.callibri_off_social,.callibri_policy{word-wrap:break-word}.callibri_off_social .callibri_off_tab,.callibri_overflow,.callibri_viber_in,.callibri_viber_in_pc{-moz-box-orient:vertical;-moz-box-direction:normal}.callibri_overflow,.callibri_social_wrapper,.callibri_viber_in,.callibri_viber_in_pc{-webkit-box-direction:normal}.callibri_soc{-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;transition: opacity .8s ease;bottom:0;width:170px;height:70px}#robot_picture{width:70%}.callibri_hook_avatar{display:flex;justify-content:center;align-items:center;width:100%;height:100%;}#callibri_request,#callibri_social,#callibri_reqCallW{position:absolute;top:80px!important;z-index:1}#callibri_request .callibri_input_chat_div_checkbox{z-index:2;display:flex; position:relative;background-color:transparent;margin-top:20px}@font-face{font-family:open sans;src:local(OpenSans-Regular),url('" + callibri_image_path + " OpenSans-Regular.eot') format('embedded-opentype'),url('" + callibri_image_path + "OpenSans-Regular.woff') format('woff'),url('" + callibri_image_path + "OpenSans-Regular.ttf') format('truetype')}#callibri_text_in br{line-height:16px!important}.callibri_bg_soc{font-family:open sans,Arial,sans-serif;position:fixed!important;background-color:red!important;z-index:99999999;width:20px!important;height:20px;-webkit-border-radius:50%!important;border-radius:50%!important;bottom:60px;text-align:center}.callibri_chat_text_field div,.callibri_chat_text_field li,.callibri_chat_text_field p{color:#000}clb_div{display:block}.callibri_social_button{width:130px!important;background:0 0;text-align:center;display:none}.callibri_chat_message strong{font-weight:800!important;font-weight:700!important}.callibri_socials_svg_main{width:10px!important;position:absolute;left:50%;}.callibri_social_svg_telegram{fill:#2CA5E0!important}.callibri_social_svg_vk{fill:#437BBE!important}.callibri_social_svg_viber{fill:#785099!important}.callibri_social_svg_fb{fill:#4E739B!important}.callibri_social_svg_ok{fill:#EB722E!important}.callibri_soc .callibri_wrap_pict_index{background-color:#fff;will-change: transform;box-shadow: 2px 3px 32px 0px rgba(0, 0, 0, 0.22);-webkit-transition:all .5s;-o-transition:all .5s;-moz-transition:all .5s;transition:all .5s;position:fixed;right:33px;bottom:15px;border:3px solid #fff ;opacity:1}.callibri_soc .callibri_wrap_pict_index path{fill:" + callibri_themes[theme].controls + "}.callibri_chat_message em{font-style:italic!important}.callibri_chat_text_field ol,.callibri_chat_text_field ul{margin-left:16px!important}.callibri_chat_text_field ol li,.callibri_chat_text_field ul li{margin-top:3px!important}.callibri_chat_message.callibri_connected_plugin{display:none;padding:0 30px;width:100%}.callibri-module-area .callibri_checkbox_left_social{width:8px;height:20px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:2px;left:2px;background-color:#3a3a3a;-webkit-border-radius:2px;border-radius:2px;position:absolute}.callibri-module-area .callibri_checkbox_right_social{width:8px;height:30px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:-6px;left:15px;background-color:#3a3a3a;-webkit-border-radius:2px;border-radius:2px;position:absolute}.callibri_checkbox{display: none;}.callibri_checkbox-custom{position: relative;width: 20px; height: 20px;}.callibri_checkbox-custom-label{padding-left:19px;padding-top:1px;text-decoration:underline}.callibri_checkbox-custom,.callibri_checkbox-custom-label{display: inline-block;vertical-align: middle;}.callibri_checkbox:checked + .callibri_checkbox-custom::before{content:''; display: block; width:14px; position: absolute;top: 4px;right: 2px;bottom: 2px;left: 2px;background:url('data:image/svg+xml;utf8," + callibri_svg.checkmark.icon + "') rgba(227,227,227,1) no-repeat;background-size: 100% 57%;background-position: 2px center; border-radius: 3px;}.callibri_checkbox_right,.callibri_tdb:before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg)}.callibri-module-area .callibri_checkbox_parent_social{height:30px;width:30px;background:0 0;margin:0 auto;z-index:12;position:relative}.callibri-module-area .social_connected_title{margin-top:5px;font-size:14px!important;text-align:center;font-weight:600}.callibri-module-area .social_connected_text{font-size:13px!important;text-align:center}.callibri-module-area .callibri_social_button iframe{width:inherit}.callibri-module-area .callibri_fb_chat{margin-right:20px}.callibri-module-area *{letter-spacing: 0.04em;-webkit-backface-visibility:visible;overflow:initial;-webkit-box-shadow:none;box-shadow:none;font:inherit;margin:0;border:none;font-size:inherit!important;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:open sans,Arial,sans-serif;letter-spacing:inherit;font-weight:inherit;background:0 0;text-indent:inherit;width:auto;line-height:normal!important;position:initial;color:inherit}.callibri_text .callibri_h2{padding:0!important;margin:0;font-size: 19px!important;font-weight:600!important}.callibri_text b{font-weight:600!important}.callibri_text span{color:#535353;font-size: 13px!important;font-weight:400}#callibri_OperatorName,.callibri-select-field-wrapper,#callibri_request_message,.callibri_alert,.callibri_alert_text,.callibri_blablabla,.callibri_bot,.callibri_callUs,.callibri_chat_block,.callibri_chat_input,.callibri_chat_text_field,.callibri_chat_text_field_right,.callibri_color_footer,.callibri_footer,.callibri_micro_text,.callibri_off_social,.callibri_over_text_stars,.callibri_phone_callme_phone,.callibri_policy,.callibri_review_chat,.callibri_selectors_input,.callibri_text,.callibri_text_inp,.callibri_text_panel,.callibri_text_stars,.callibri_text_wrap,.callibri_thx,.callibri_thx_for_feedback,.callibri_widget_phone,.callibte_text_panel_call,.emoji-wysiwyg-editor,div button.callibri_button,div button.callibri_button:focus,input.callibri_textarea,input.callibri_textarea[name=callibri_company],input.callibri_textarea[name=callibri_email][type=email],input.callibri_textarea[name=callibri_phone][type=tel],textarea.callibri_textarea{-webkit-font-smoothing:antialiased!important;box-shadow:none!important;}.callibri_review_chat,.callibri_text_stars{font-family:open sans,Arial,sans-serif;-moz-osx-font-smoothing:grayscale!important}.callibri_chat_message{margin-bottom:15px}.callibri-module-area:after,.callibri-module-area:before{content:none}.callibri_chat_message.callibri_social_plug{position:relative; padding: 5px 5px 30px 5px;overflow:hidden;font-size:13px!important;line-height:15px!important;color:rgba(0,0,0,.5);font-weight:600;display:inline-block;text-align:center!important;width:100%;margin:10px auto;border:1px solid #b6b6b6;-webkit-border-radius:8px;border-radius:8px;height:33px}.callibri_social_plug_btns{cursor: pointer;position:absolute;width:14px;height:14px;top: 10px;left: auto;right: 14px;overflow:hidden}.callibri_social_plug_btns .callibri_social_plug_arrow{position:absolute;transition: top .5s;top: 0;width: inherit;height: inherit;} .callibri_social_plug_btns .callibri_close{margin-top:16px;margin-right:1px;transition: margin .5s;}.callibri_social_plug_btns .callibri_tdb:after, .callibri_social_plug_btns .callibri_tdb:before {right: 6px;}#callibri_social_plug_text1{margin-top: -22px;margin-bottom: 7px;}.callibri_text,.callibri_thx_for_feedback{overflow:hidden;-moz-osx-font-smoothing:grayscale!important}.callibri_active_color{fill:" + callibri_themes[theme].controls + "!important;background-color:" + callibri_themes[theme].controls + "!important}.callibri_active_color_color{color:" + callibri_themes[theme].controls + "!important}.callibri_onetab{padding:0!important}.callibri_onetab svg{padding:9px}.callibri_onetab_wrpp .callibri_text_panel{font-size:20px!important;margin:0;width:inherit}.callibri_onetab_wrpp{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.callibri_passive_icon{transition:fill .5s!important;fill:#d2d2d2;background-color:#FFF}.callibri_chat_message.callibri_manager a{color:#3cbaf4}.callibri_place_holder_mail{width:34px;height:34px;background:#66b5d0}.callibri_soc_padd{padding:190px 220px 30px 30px!important}.callibri_text_wrap:after{right:100%;top:50%;border:solid transparent;content:' '!important;height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(136,183,213,0);border-right-color:rgba(0,0,0,.6);border-width:10px;margin-top:-10px}.callibri_review_chat,.callibri_thx_up,.callibri_text_stars{opacity:1;font-size:19px!important;color:#000;line-height: 24px!important;text-align:left;font-weight: 600;}.callibri_req_text{font-size:13px!important;width:100%;margin:13px 0 4px;color:#000;line-height:normal!important}.callibri_req_inp{width:100%;height:31px!important;padding:0 16px 0 8px!important}.callibri_rating_chat{unicode-bidi:bidi-override;direction:rtl;text-align:center;color:#8fca3c;width:100%;margin:30px 0}.callibri_rating_chat>span{position:relative;width:64px;height:64px;margin:0 8px;border: 1px solid #dbdbdb;border-radius:7px;display:inline-block;}.callibri_rating_chat>span>img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.callibri_rating_chat>span.active,.callibri_rating_chat>span.active:hover{background:" + callibri_themes[theme].balloon + ";border-color:" + callibri_themes[theme].controls + "}{background:#e9f3ff;border-color:#54a5ff}.callibri_rating_chat>span:hover{background-color:#f4f4f4}#callibri_timer{font-size:inherit!important;line-height:inherit!important}#callibri_request_message,input.callibri_textarea,input.callibri_textarea[name=callibri_company],input.callibri_textarea[name=callibri_email][type=email],input.callibri_textarea[name=callibri_phone][type=tel],textarea.callibri_textarea{-moz-appearance:none;appearance:none;-webkit-appearance:none;-moz-osx-font-smoothing:grayscale!important;height:110px;width:100%;resize:none;font-weight:600;font-size:13px!important;line-height:16px!important;padding:8px;color:#000}.callibri-module-area,.callibri_phone_callme_phone{-webkit-box-sizing:border-box;-moz-box-sizing:border-box}#callibri_request_message::focus,input.callibri_textarea::focus,input.callibri_textarea[name=callibri_company]::focus,input.callibri_textarea[name=callibri_email][type=email]::focus,input.callibri_textarea[name=callibri_phone][type=tel]::focus,textarea.callibri_textarea::focus{border-bottom:solid 2px " + callibri_themes[theme].controls + "}.callibri-select-field-wrapper,#callibri_request_message,.callibri_phone_callme_phone,.callibri_req_inp,input.callibri_textarea,input.callibri_textarea[name=callibri_company],input.callibri_textarea[name=callibri_email][type=email],input.callibri_textarea[name=callibri_phone][type=tel],textarea.callibri_textarea{outline:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;transition: border-bottom .3s,box-shadow .3s;background-color:#f9f9f9!important;border-bottom:2px solid #e2e2e2!important}#callibri_request_message:focus,.callibri_phone_callme_phone:focus,.callibri_req_inp:focus,input.callibri_textarea:focus,input.callibri_textarea[name=callibri_company]:focus,input.callibri_textarea[name=callibri_email][type=email]:focus,input.callibri_textarea[name=callibri_phone][type=tel]:focus,textarea.callibri_textarea:focus{border-bottom:solid 2px " + callibri_themes[theme].controls + "!important}.callibri_bot,.callibri_check_stars{font-size:18px!important;line-height:21px!important}.callibri_bot{-moz-osx-font-smoothing:grayscale!important;height:auto!important;padding:8px 0 8px 16px!important}.callibri_text_active{color:#000!important}.callibri_text_color{color:#77898f}.callibri_webcall_overImg{position:absolute!important;bottom:10px;left:100px!important;background-color:#E82D2D!important;float:right!important;padding:11px 17px!important;-webkit-border-radius:2px!important;border-radius:2px!important;line-height:inherit!important;border:none!important;min-width:inherit!important}.callibri_over_text_stars{margin-bottom:30px;}.callibri-module-area{margin:0;min-height:0;box-sizing:border-box;line-height:normal;letter-spacing:inherit}.callibri_operator_writes{margin-top:-36px;padding-top:0!important;color:#A1A1A1!important}.callibri_operator_change_text,.callibri_operator_writes_text{font-size:13px!important;font-family:open sans,Arial,sans-serif!important;width:100%;display:block;text-align:center}.callibri_operator_change_text{color:#A1A1A1!important;width:auto;margin:10px}.callibri_alert_text,.callibri_bg_widget,.callibri_color_footer,.callibri_phone_callme_phone,.callibri_text,.callibri_text_panel,.callibri_text_wrap,.callibri_thx_for_feedback,.callibri_widget_phone{font-family:open sans,Arial,sans-serif}.callibri_pencil_dots{font-size:30px!important}.callibri_mt31{margin-top:-30px;font-size:0!important;width:100%;display:block;text-align:center}.callibri_img_operator_writes{position:absolute;margin-left:2px;width:11px;bottom:9px}.callibri_place_holder_phoneOverride{width:114px!important;height:113px!important}.emoji-picker-icon.emoji-picker.fa.fa-smile-o{opacity:1!important;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxOCI+PHBhdGggZD0iTTguNTggMTcuNDlDNCAxNy40OS4yOSAxMy43Ny4yOSA5LjIuMjkgNC42MiA0IC45IDguNTguOWM0LjU3IDAgOC4yOSAzLjcyIDguMjkgOC4zIDAgNC41Ny0zLjcyIDguMjktOC4yOSA4LjI5em0wLTE1LjA1Yy0zLjcyIDAtNi43NiAzLjA0LTYuNzYgNi43NiAwIDMuNzEgMy4wNCA2Ljc1IDYuNzYgNi43NSAzLjcyIDAgNi43NS0zLjA0IDYuNzUtNi43NSAwLTMuNzItMy4wMy02Ljc2LTYuNzUtNi43NnptMy45MyA1LjUyYy0uMDkuMDMtLjE4LjA1LS4yNy4wNS0uMjQgMC0uNDktLjE0LS41OS0uMzktLjA3LS4xNS0uMjgtLjQ1LS40NS0uNDUtLjE4IDAtLjM5LjMtLjQ2LjQ1LS4xNC4zNC0uNTIuNDgtLjg0LjM0YS42MzcuNjM3IDAgMCAxLS4zMy0uODRjLjA3LS4xMi41OC0xLjIyIDEuNjQtMS4yMiAxLjA5IDAgMS41OSAxLjEgMS42MyAxLjIyLjE0LjMxIDAgLjctLjMzLjg0em0tMS4wNyAyLjkzYy4yNi0uMzMuNzUtLjM4IDEuMDgtLjEyLjMzLjI4LjM5Ljc1LjEzIDEuMDgtLjA3LjA5LTEuNDkgMS44LTQuMDcgMS44LTIuNTkgMC00LjAyLTEuNzMtNC4wNy0xLjhhLjc3NC43NzQgMCAwIDEgLjEyLTEuMDhjLjMzLS4yNi44Mi0uMjEgMS4wOC4xMi4wNC4wNSAxLjAzIDEuMjIgMi44NyAxLjIyIDEuODMgMCAyLjg0LTEuMiAyLjg2LTEuMjJ6TTcuMjMgNy45N2MtLjA4LjA0LS4xNy4wNi0uMjYuMDYtLjI0IDAtLjQ5LS4xNC0uNTktLjM5LS4wNy0uMTYtLjI4LS40NS0uNDYtLjQ1LS4xNyAwLS4zOC4yOS0uNDUuNDUtLjE0LjMzLS41Mi40Ny0uODQuMzNhLjY1Ni42NTYgMCAwIDEtLjM1LS44M2MuMDctLjEzLjU4LTEuMjMgMS42NC0xLjIzIDEuMDkgMCAxLjU5IDEuMSAxLjY1IDEuMjMuMTMuMzEgMCAuNjktLjM0LjgzeiIgZmlsbD0iI0EzQTFBMSIvPjwvc3ZnPg==);background-repeat:no-repeat;height:18px!important;width:18px!important;z-index:1}.fa-smile-o:before{content:''!important}.arrow_box_alert:after,.callibri_hooktext_wrapper:after,.callibri_tdb::after,.callibri_tdb::before{pointer-events:none;content:' '!important}.callibri_phone_callme_phone:active,.callibri_phone_callme_phone:focus{outline:0}.callibri_phone_callme_phone{-webkit-box-shadow:inherit!important;-moz-osx-font-smoothing:grayscale!important;font-size:28px!important;color:#000!important;line-height:40px!important;width:100%;height:45px;box-sizing:border-box;box-shadow:inherit!important;text-align:center}.callibri_text_wrap{-moz-osx-font-smoothing:grayscale!important}.callibri_chat_pict_user{background-color: " + callibri_themes[theme].controls + ";-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:50%!important;border-radius:50%!important;height:38px;width:38px;color:#fff;text-align:center;font-size:16px!important;border:none!important}.callibri_chat_pict_user img{width:100%;background:#fff}.callibri_chat_text_field,.callibri_panel_picture{-webkit-box-sizing:content-box!important;-moz-box-sizing:content-box!important}.callibri_hide{display:none}.callibri_mt10{padding-top:6px}.callibri_mt30{margin-top:30px}.callibri_widget_show_ok{left:0;opacity:1}.callibri_anchor{width:0;height:0}.callibri_tdb{border:0!important;font-size:10px!important;line-height:normal!important;display:inline}.callibri_tdb:after,.callibri_tdb:before{position:absolute;right:18px;height:18px;width:2px;background-color:#9a9a9a}.callibri_tdb:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.callibri_checkbox_left,.callibri_tdb:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.callibri_widget_phone{cursor:move;-moz-osx-font-smoothing:grayscale!important;padding-top:15px;padding-bottom:34px;font-size:18px;line-height:21px;text-align:center;position:static}.callibri_alert,.callibri_alert_text{line-height:14px;-moz-osx-font-smoothing:grayscale!important}.callibri_footer_map{background-color:transparent!important}.callibri_chat_wrapper{background-color:#fff;width:100%;position:inherit}.callibri_modal_panel_bubl{border-bottom:none!important}.callibri_modal_panel{cursor:pointer;width:100%;-webkit-box-align:start!important;-ms-flex-align:start!important;-webkit-align-items:flex-start!important;-moz-box-align:start!important;align-items:flex-start!important}.callibri_border_alert{border:1px solid #E82D2D!important}.callibri_alert_text{padding:15px 77px 0 4px;font-size:12px;color:#FFF}.callibri_alert_pic{padding-bottom:1px}.callibri_error{font-weight:700;margin-top:12px;color:#ef2c2c;font-size:13px;text-align:center}#callibri_request_message.callibri_error_data,input.callibri_textarea.callibri_error_data,input.callibri_textarea[name=callibri_company].callibri_error_data,input.callibri_textarea[name=callibri_email][type=email].callibri_error_data,input.callibri_textarea[name=callibri_phone][type=tel].callibri_error_data,textarea.callibri_textarea.callibri_error_data{border:1px solid red!important}.callibri_alert_pic_div{margin:15px;text-align:center;height:15px;width:15px;-webkit-border-radius:50%;border-radius:50%;border:1px solid #FFF;float:left}.callibri_alert{display:none;margin-top:-25px;margin-bottom:-35px;font-size:12px;color:#FFF;height:60px;z-index:2147483647;width:100%}.arrow_box_alert{position:relative;background:#E82D2D;-webkit-border-radius:2px;border-radius:2px}.arrow_box_alert:after{top:100%;left:50%;border:solid transparent;height:0;width:0;position:absolute;border-color:rgba(213,30,30,0);border-top-color:#E82D2D;border-width:7px;margin-left:-7px}.callibri_ok_pic{margin-top:26%}.callibri_text_inp{-moz-osx-font-smoothing:grayscale!important;-webkit-border-radius:2px!important;border-radius:2px!important;font-weight:600!important;font-size:13px!important;color:#000!important;box-shadow:none!important;}.callibri_text_inp:focus{-webkit-box-shadow:none;box-shadow:none;outline:0}.callibri_ok{-webkit-border-radius:50%;border-radius:50%;height:80px;width:80px;margin:30px auto 20px}.callibri_mb_center{text-align:center;margin-bottom:20px}.callibri_chatOver{font-size:16px!important}.callibri_thx_up{margin-bottom:10px}.callibri_panel_picture{width:15px;height:18px;box-sizing:content-box!important}.callibri_text_panel{font-weight:600!important;-moz-osx-font-smoothing:grayscale!important;text-align:center;font-size:13px!important;line-height:12px!important;color:#535353}.callibte_text_panel_call{-moz-osx-font-smoothing:grayscale!important;margin-left:21%}.callibri_left_lable{opacity:.4;font-size:11px;color:#000;line-height:12px;margin:20px 0 10px}.callibri_chat{background-color:#fff;width:100%;height:100%}.callibri_chatFirst{background-color:#595E60}.callibri_loren{text-align:right;width:90%;float:right}.callibri_webcall_timer{color:#A6A6A6!important;font-size:12px!important}.callibri_opacity{top:0;left:0;z-index:2147483645;width:100%;height:100%;background-color:#000;background:rgba(0,0,0,.5);position:fixed;display:none}.callibri_text{font-size:19px!important;color:#000;line-height:24px!important;font-weight:600}.callibri_wrapperField{padding:30px 18px 10px!important}.callibri_wrapper_chat{padding-bottom:0}.callibri_close{font-size:10px!important;line-height:normal!important;float:right;margin:-37px 10px 0 0;color:#d8d8d8;cursor:pointer;height:17px;width:17px}.callibri_bg_text_soc,.callibri_bg_text_widget{display:table;color:#fff;font-weight:700;vertical-align:middle}#callibri_user_chat_actions .callibri_gray_locomotive,.callibri_wrap_pict{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box}.callibri_bg_widget{font-size:8px!important;line-height:9px!important;position:absolute;background-color:red;width:16px;height:16px;-webkit-border-radius:50%;border-radius:50%;margin:0!important;top:-4px;right:-4px}.callibri_footer,.callibri_worked_on_color{background-color:#fff}.callibri_bg_text_widget{margin:3px auto}.callibri_bg_text_soc{width:100%;height:100%;font-size:13px!important}.callibri_wrap_pict{font-size:10px;text-align:center;border-bottom:3px solid #ececec;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;height:32px}.callibri_wrap_pict_flex{display:table-cell;width:20%}.callibri_code{color:#818689;float:left}.emoji-items-wrap1 .emoji-menu-tabs td{padding:0}.callibri_phone_ex{margin-top:-5px;text-align:center;color:#404040;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;float:left;width:100%;font-weight:600;font-size:18px!important;line-height:21px!important}.callibri_same_code{float:left}.callibri_chat_wrapper input[placeholder]{width:100%;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding:0!important;padding-left:4px!important}.callibri_chat_wrapper input::-webkit-input-placeholder{text-indent:0;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input::-moz-placeholder{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-overflow:ellipsis;padding:20px;text-indent:0;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input:-moz-placeholder{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-overflow:ellipsis;padding:20px;text-indent:0;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input:-ms-input-placeholder{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-overflow:ellipsis;padding:20px;text-indent:0;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input:focus::-webkit-input-placeholder{text-indent:500px;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input:focus::-moz-placeholder{text-indent:500px;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input:focus:-moz-placeholder{text-indent:500px;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_chat_wrapper input:focus:-ms-input-placeholder{text-indent:500px;-webkit-transition:text-indent .3s ease;-o-transition:text-indent .3s ease;-moz-transition:text-indent .3s ease;transition:text-indent .3s ease}.callibri_color_footer{text-align:center;margin-top:4px;-moz-osx-font-smoothing:grayscale!important;font-size:12px!important;color:#ACACAC;line-height:14px!important}.callibri_left{float:left}.callibri_footer{z-index: 9999;-moz-osx-font-smoothing:grayscale!important;color:#bcbdbd;position:absolute;bottom:0;width:100%;height:24px;font-size:15px}.callibri_chat_input{min-height:60px!important;width:100%!important;resize:none;max-height:105px;line-height:20px!important; overflow:auto;-webkit-box-flex:4;-ms-flex-positive:4;-webkit-flex-grow:4;-moz-box-flex:4;flex-grow:4;-webkit-background-origin:padding-box;background-origin:padding-box;-moz-osx-font-smoothing:grayscale!important;padding:20px;font-size:14px!important;width:inherit;border:0;outline:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;min-width:0;min-height:0;-webkit-box-shadow:none!important;box-shadow:none!important}#callibri_user_chat_actions{z-index:999; position:absolute;width:206px;right:-15px;bottom:40px;background-color:#fff;-webkit-box-shadow:0 0 25px 0 rgba(0,0,1,.1);box-shadow:0 0 25px 0 rgba(0,0,1,.1);-webkit-border-radius:8px;border-radius:8px}#callibri_user_chat_actions .callibri_gray_locomotive{position:relative;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;height:34px;width:100%;font-size:13px;font-weight:600;line-height:9.95px;color:#000}#callibri_user_chat_actions .callibri_gray_locomotive:hover{background-color:#e3e3e3}#callibri_user_chat_actions:after{top:100%;left:85%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:7px;margin-left:-5px}.callibri_input_chat_div{background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;width:-webkit-calc(100% - 20px);width:-moz-calc(100% - 20px);width:calc(100% - 20px);margin:0 10px;border:1px solid #b6b6b6;-webkit-border-radius:8px;border-radius:8px;float:left;position:absolute;bottom:24px;min-height:65px;overflow:hidden}.callibri_input_chat_div_checkbox{left:0;top:0;visibility:visible;opacity:1;-webkit-transition:visibility .3s,opacity .3s linear;-o-transition:visibility .3s,opacity .3s linear;-moz-transition:visibility .3s,opacity .3s linear;transition:visibility .3s,opacity .3s linear;padding:15px;position:absolute;width:100%;height:100%;background-color:#f7f7f7}.callibri_input_chat_div_checkbox input{display:block;float:left;-webkit-border-radius:3px;border-radius:3px;border-style:solid;border-width:1px;border-color:#b5b5b5;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#fff;width:18px;height:18px;margin:0!important}.callibri_big_phone,.callibri_chat_pict{-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.callibri_input_chat_div_checkbox span{width:90%; margin-top:-2px;margin-left:5px;display:block!important;float:left;color:#000;font-size:12px!important;font-weight:400;line-height:19px;text-align:left}.callibri_input_chat_div_checkbox .callibri_b{color:#000!important;font-size:12px;font-weight:600;line-height:19px;text-decoration:underline;text-align:left}.callibri_time{color:#b3b3b3;font-size:10px!important;text-align:center;margin-top:2px}.callibri_chat_pict{box-sizing:border-box;-webkit-border-radius:50%!important;border-radius:50%!important;height:43px!important;width:43px!important;padding:1px;vertical-align:baseline}.callibri_chat_text_field,.callibri_chat_text_field_right{height:100%;width:-webkit-calc(100% - 96px);font-weight: 600;width:-moz-calc(100% - 96px);width:calc(100% - 96px);word-wrap:break-word;-webkit-border-radius:8px;border-radius:8px;position:relative;padding: 14px 20px;font-size:13px!important;line-height: 19px!important;-moz-osx-font-smoothing:grayscale!important;float:left}.callibri_chatPict{overflow:visible;float:left;cursor:pointer}.callibri_chat_text_field{overflow: hidden;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;box-sizing:content-box;color:#000;margin-left:12px;background:" + callibri_themes[theme].balloon + ";-webkit-border-top-left-radius:0;border-top-left-radius:0}.callibri_chat_message pre{display:block;padding:9.5px;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px;overflow:auto;margin-top:5px;}.callibri_chat_text_field_right{overflow:hidden;-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text;user-select:text;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;color:#000;margin-right:14px;background:#ececec;-webkit-border-top-right-radius:0;border-top-right-radius:0}.callibri_button_call{height:60px;width:100%;margin-top:20px;outline:0}div button.callibri_button,div button.callibri_button:focus{background-color:" + callibri_themes[theme].controls + ";font-weight:600!important;line-height:normal!important;-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;padding: 11px 0;box-sizing:border-box!important;min-height:inherit!important;width:inherit!important;-webkit-border-radius:3px!important;border-radius:3px!important;border:0!important;font-size:16px!important;color:#FFF;outline:0!important;text-transform:none!important;-moz-osx-font-smoothing:grayscale!important;font-family:open sans,Arial,sans-serif!important;background-image:none}#callibri_OperatorName,.callibri_blablabla,.callibri_callUs,.callibri_micro_text,.callibri_overflow,.callibri_selectors_input,.callibri_thx{font-family:open sans,Arial,sans-serif}div button.callibri_button:active{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.callibri_call,.callibri_request,.callibri_request_a_call{background-color:#fff;width:100%;height:100%}.callibri_sph_active,.callibri_sph_no_active{height:18px;width:19px;position:relative;border:none!important}.callibri_phone_callme_button{min-height:40px;width:100%;margin-top:20px;outline:0}.callibri_clock{float:left}.callibri_border{width:-webkit-calc(100% + 40px);width:-moz-calc(100% + 40px);width:calc(100% + 40px);margin:9% 20px 9% -20px;opacity:.05;border:1px solid #000}.callibri_timer_callme{margin-top:28px}#callibri_OperatorName{-moz-osx-font-smoothing:grayscale!important;position:fixed;display:none;padding:4px;font-size:10pt;color:#333;background:#eff3aa;z-index:2147483647;line-height:14px}.emoji-menu{z-index:2147483647!important;position:fixed!important;bottom:60px!important}.emoji-wysiwyg-editor{padding:3px 15px 10px 14px!important;-o-text-overflow:ellipsis;text-overflow:ellipsis;background-color:#fff}.emoji-picker-icon{top:auto!important;right:0px!important;bottom:2px!important}.callibri_online{position:relative;margin-left:31px;margin-top:-16px;height:11px;width:11px;-webkit-border-radius:50%!important;border-radius:50%!important;background:#7af44f}.callibri_callUs{-moz-osx-font-smoothing:grayscale!important;font-size:14px;line-height:16px;color:#9d9d9d;text-align:center}.callibri_chatCallme{cursor:pointer}.callibri_micro{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;-moz-box-align:start;align-items:flex-start;margin-top:120px;top:0;z-index:2147483647;display:none;position:fixed;height:100%;width:100%}.callibri_big_phone,.callibri_wrap_big_phone{text-align:center;padding:40px;width:200px;background-color:#8fca3c;-webkit-border-radius:50%;border-radius:50%}.callibri_big_phone{box-sizing:border-box;-webkit-box-shadow:0 19px 38px 0 rgba(143,202,59,.3);box-shadow:0 19px 38px 0 rgba(143,202,59,.3);position:fixed;top:-webkit-calc(50% - 100px);top:-moz-calc(50% - 100px);top:calc(50% - 100px);left:-webkit-calc(50% - 100px);left:-moz-calc(50% - 100px);left:calc(50% - 100px)}#star-five:after,#star-five:before{position:absolute;content:''}.callibri_wrap_big_phone{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:18% auto;-webkit-box-shadow:0 19px 38px 0 rgba(143,202,59,.3);box-shadow:0 19px 38px 0 rgba(143,202,59,.3)}.callibri_off_social,.callibri_policy{-webkit-user-select:text;-webkit-box-sizing:content-box;-moz-box-sizing:content-box}.callibri_micro_text{-moz-osx-font-smoothing:grayscale!important;font-weight:700;font-size:24px;color:#FFF;line-height:28px;width:270px;margin-left:5px;margin-top:80px;float:left}#callibri_a{margin-top:-3px;visibility:hidden;position:absolute;left:16px;opacity:0;-webkit-transition:visibility 0s,opacity .3s linear;-o-transition:visibility 0s,opacity .3s linear;-moz-transition:visibility 0s,opacity .3s linear;transition:visibility 0s,opacity .3s linear}.callibri_a,.callibri_a:hover,.callibri_a:visited,div a.callibri_a:hover,div a.callibri_a:link,div a.callibri_a:visited{color:#ACACAC!important;border-bottom:0!important}.callibri_a,.callibri_a:hover,.callibri_a:visited{font-size:12px!important;line-height:14px!important}.callibri_selectors_input{-moz-osx-font-smoothing:grayscale!important;font-size:16px;width:150px;float:left;height:40px;margin-bottom:20px;margin-top:5px;padding-left:20px}.callibri_right{float:right}#star-five,.callibri_cloudsphere{float:left}.callibri_overflow{overflow:auto;height:inherit;background:inherit;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}@media (max-width:400px){.callibri_input_chat_div_checkbox span{font-size:11px!important}.callibri_widget{overflow:hidden;text-align:left;left:-100%;width:100%}.callibri_wrap_pict{margin:0 1% 0 0}}.header_phone{color:#1e2a2e}.index_grey{background-color:#dae0e3}.active_grey_button{background-color:#1e2a2e}.text_active{color:#fff}.text_non_active{color:#7a8286}.callibri_blablabla,.callibri_thx{color:#FFF;text-align:center;-moz-osx-font-smoothing:grayscale!important}.callibri_thx{margin-top:12%;font-size:38px;line-height:43px}.callibri_blablabla{margin-top:3%;margin-left:34%;width:33%;font-size:16px;line-height:18px}#star-five,#star-five:after{display:block;color:red;width:0;height:0;border-right:100px solid transparent;border-bottom:70px solid red;border-left:100px solid transparent}#star-five{margin:50px 0;position:relative;-moz-transform:rotate(35deg);-webkit-transform:rotate(35deg);-ms-transform:rotate(35deg);-o-transform:rotate(35deg)}#star-five:before{border-bottom:80px solid red;border-left:30px solid transparent;border-right:30px solid transparent;height:0;width:0;top:-45px;left:-65px;display:block;-webkit-transform:rotate(-35deg);-moz-transform:rotate(-35deg);-ms-transform:rotate(-35deg);-o-transform:rotate(-35deg)}#star-five:after{top:3px;left:-105px;-webkit-transform:rotate(-70deg);-moz-transform:rotate(-70deg);-ms-transform:rotate(-70deg);-o-transform:rotate(-70deg)}.callibri_stars{margin-top:30px}.callibri_out{background-color:#4b5154;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.12);box-shadow:0 0 10px 0 rgba(0,0,0,.12)}.callibri_text_panel_out{color:#73787a}.callibri_shadow{-webkit-border-radius:50%!important;border-radius:50%!important;font-size:0!important;line-height:0!important}.callibri_vert{vertical-align:middle;display:table-cell}.callibri_pict_seo{margin-top:5px}.callibri_rating{unicode-bidi:bidi-override;direction:rtl;text-align:center;color:#8fca3c}.callibri_rating>span{display:inline-block;position:relative;width:2.1em}.callibri_rating>span:hover:before,.callibri_rating>span:hover~span:before{content:'°5';position:absolute}#show_chat_rating{line-height:2!important;width:100%!important;padding: 6px 0;}#callibri_div_end_dialog{text-align:center;background-color:#fff;padding:5px;-webkit-border-radius:3px;border-radius:3px;margin-bottom:30px}.callibri_black_phone{color:#000!important}.callibri_border_top{border-bottom:1px solid rgba(88,95,96,.12)}.cursor_p{cursor:pointer}#callibri_text_in{line-break:strict;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;max-height:95px;padding:10px 15px;height:auto;font-weight:400;text-align:right;overflow:hidden;color:#000000;width:280px;font-size:17px!important}.callibri_color_top_arrow:after,.callibri_color_top_arrow:before{top:100%;left:50%;height:0;width:0;pointer-events:none;z-index:1}.callibri_bttn_color,.callibri_button.callibri_bttn_color,.callibri_button.callibri_bttn_color:focus{}.callibri_bttn_active{background-color:#fff!important}.callibri_color_top_arrow{position:relative}.callibri_button.callibri_color_star{color:" + callibri_themes[theme].controls + "}.callibri_gradient{font-size:10px!important;}#callibri_microHelper{overflow:hidden}.callibri_overrideOptionsImg{-webkit-border-radius:50%;border-radius:50%}.callibri_overrideOptionsImg path{fill:#fff!important}.callibri_bttn_color_telegram .callibri_overrideOptionsImg{background:#2CA5E0}.callibri_bttn_color_vk .callibri_overrideOptionsImg{background:#437BBE}.callibri_bttn_color_viber .callibri_overrideOptionsImg{background:#785099}.callibri_bttn_color_facebook .callibri_overrideOptionsImg{background:#4E739B}.callibri_bttn_color_ok .callibri_overrideOptionsImg{background:#EB722E}#switch_for_social .callibri_text_panel{transition: color .5s;margin-left:5px!important;margin-right:5px}#callibri_call_opt_img>svg{padding:0;height:15px}.callibri_li{list-style-type:none}.callibri_controls{width:100%;height:100%;-webkit-box-flex:1;-ms-flex:1 1 30px;-webkit-flex:1 1 30px;-moz-box-flex:1;flex:1 1 30px}.callibri_send{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMyI+PHBhdGggZD0iTTE0LjEyLjU2Yy0uNTIgMC0uOTQuNDItLjk0Ljk0djUuNTljMCAuNTItLjQxLjk0LS45My45NEg2Ljgxdi0yLjVMLjIyIDguOTZsNi41OSAzLjQzVjkuOWg1LjQ0YzEuNTUgMCAyLjgxLTEuMjYgMi44MS0yLjgxVjEuNWMwLS41Mi0uNDItLjk0LS45NC0uOTR6IiBmaWxsPSIjQTNBMUExIi8+PC9zdmc+);background-repeat:no-repeat;background-position:60% 50%;-webkit-background-size:15px 15px;background-size:15px 15px;float:right;height:15px;width:15px;position:absolute;bottom:5px;right:8px}#switch_for_social .callibri_sph_no_active,.callibri_original_img_wrapper{position:relative}.callibri_options .callibri_passive_icon{fill:#d2d2d2;background-color:#FFF}.callibri_social_a{padding:10px;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-bottom:1px solid #F2F2F2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:13px!important;padding-bottom:13px!important;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;font-size:15px!important;text-decoration:none;color:#000}.callibri_social_a:last-child{border-bottom:none}.callibri_social_a:hover{background-color:#f2f2f2;cursor:pointer;text-decoration:none;color:inherit!important}[name=callibri_image_for_options] img{display:none}.callibri_social_svg{width:50px;height:50px}.callibri_as_wrapper_field{margin:12px 0 7px}.callibri_ended_fantasy{display:none;margin-left:8px;font-size:15px;margin-top:13px}.callibri_border0_social{margin-left:0!important}.callibri_unread{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;font-size:9px;margin-top:8px}.callibri_chat_text_field_right.callibri_unread_padd{padding-bottom:14px!important}.callibri_unread_message{margin-left:3px;opacity:.5;font-size:11px!important;font-weight: 400!important;}.callibri_unread svg{height:12px;opacity:.7;width:12px}.callibri_viber_in,.callibri_viber_qr_code{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;width:100%}.callibri_answerphone{font-size:11px!important;opacity:.5;margin-bottom:2px}.callibri_answerphone_parent{padding-top:14px}.callibri_soc_title{font-size:16px; -ms-flex-preferred-size:80%;-webkit-flex-basis:80%;flex-basis:80%}.callibri_viber_in{display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.callibri_viber_qr_code{display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;margin:10px 0}.callibri-module-area .callibri_viber_qr_code rect{width:5px}.callibri_viber_in_pc{font-size:11px;color:#5d5d5d;width:100%;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;margin-left:0;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.callibri_viber_here{color:#696868;font-weight:700}.callibri_off_social{text-decoration:none;min-width:72%;-moz-user-select:text;-ms-user-select:text;user-select:text;box-sizing:content-box;-webkit-border-radius:4px;border-radius:4px;margin-left:45px;margin-top:-10px;position:relative;padding:0;font-size:10px;margin-bottom:15px;line-height:15px;display:inline-block;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start;width:-webkit-calc(100% - 38px)!important;width:-moz-calc(100% - 38px)!important;width:calc(100% - 38px)!important}.callibri_off_social .callibri_off_tab{-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;border:1px solid #ececec;-webkit-border-radius:5px;border-radius:5px;text-decoration:none;text-transform:capitalize;color:#000!important;display:inline-block;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:10px 0;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;width:80px;max-width:80px;min-width:80px;height:80px;text-align:center;font-size:13px;margin-top:9px}.callibri_off_tab{margin-left:8.7px}.callibri_off_tab:hover{background:#F1F5F5}.callibri-phone-mask::-webkit-input-placeholder{color:#7f7f7f!important}.callibri-phone-mask::-moz-placeholder{color:#7f7f7f!important}.callibri-phone-mask:-ms-input-placeholder{color:#7f7f7f!important}.callibri-phone-mask:-input-placeholder{color:red!important}.callibri-phone-mask:-moz-placeholder{color:#7f7f7f!important}#callibri_chat_input::-webkit-input-placeholder{color:#7f7f7f!important}#callibri_chat_input::-moz-placeholder{color:#7f7f7f!important}#callibri_chat_input:-ms-input-placeholder{color:#7f7f7f!important}#callibri_chat_input:-moz-placeholder{color:#7f7f7f!important}.emoji-menu-tabs a{background-color:inherit!important}.emoji-menu .emoji-items a{line-height:inherit!important}#modalPanel{display:inline-table}#callibri_request_phone{width:50%!important}.callibri_grey{color:#858585}.callibri_fs13{font-size:13.5px!important}#callibri_options>.callibri_modal_panel{height:40px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;width:inherit}.callibri_close_options>.callibri_close_optionsImg,.callibri_overrideOptions>.callibri_overrideOptionsImg{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;width:inherit;height:inherit;padding:0;line-height:40px!important;background-color:#464C4F;-webkit-border-radius:100px!important;border-radius:100px!important}.callibri_social_wrapper{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:inherit;-webkit-flex-direction:inherit;-moz-box-orient:inherit;-moz-box-direction:inherit;flex-direction:inherit}.callibri_image_preview{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-height:60px;margin-right:5px;margin-bottom:3px}.callibri_modal_panel_bubl>div,.callibri_social_wrapper>div{-webkit-border-radius:100px!important;border-radius:100px!important}.callibri_text_sphere_options{margin-right:10px;font-size:11px!important;overflow:hidden;line-height:inherit!important;color:#fff!important}#callibri_call_opt_img svg{padding:0;width:15px!important;margin-left:10px!important;margin-right:5px;height:40px}.callibri_bttn_color_telegram{background-color:#2CA5E0!important}.callibri_bttn_color_facebook{background-color:#437BBE!important}.callibri_bttn_color_vk{background-color:#4E739B!important}.callibri_bttn_color_viber{background-color:#785099!important}.callibri_bttn_color_ok{background-color:#EB722E!important}@media screen and (max-width:1050px){#callibri_option_social .callibri_default_button{min-width:40px}.callibri_social_text{display:none}#callibri_call_opt_img svg{margin-right:10px}.callibri_bttn_color_telegram{background-color:#2CA5E0!important}.callibri_bttn_color_facebook{background-color:#437BBE!important}.callibri_bttn_color_vk{background-color:#4E739B!important}#switch_for_social .callibri_bttn_color_vk #callibri_call_opt_img svg{width:19px!important;}.callibri_bttn_color_viber{background-color:#785099!important}.callibri_bttn_color_ok{background-color:#EB722E!important}}#callibri_social{padding: 0 }#callibri_social #callibri_call_opt.callibri_close_options,#callibri_social #callibri_call_opt.callibri_overrideOptions,#switch_for_social #callibri_call_opt.callibri_close_options,#switch_for_social #callibri_call_opt.callibri_overrideOptions{-webkit-animation-name:none;-moz-animation-name:none;animation-name:none;width:40px!important;height:40px!important;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;top:0;right:0;left:0;bottom:0;margin:auto}#callibri_social #callibri_call_opt_img svg{margin:0!important}#callibri_social .callibri_bttn_color_facebook,#callibri_social .callibri_bttn_color_ok,#callibri_social .callibri_bttn_color_telegram,#callibri_social .callibri_bttn_color_viber,#callibri_social .callibri_bttn_color_vk,#switch_for_social .callibri_bttn_color_facebook,#switch_for_social .callibri_bttn_color_ok,#switch_for_social .callibri_bttn_color_telegram,#switch_for_social .callibri_bttn_color_viber,#switch_for_social .callibri_bttn_color_vk{background-color:transparent!important}#switch_for_social .callibri_text_sphere_options.callibri_social_text{display:none}.callibri_social_svg path{fill:#FFF;background-color:#FFF}#switch_for_social #callibri_call_opt_img svg{margin:0!important;width:17px!important;height:19px}#switch_for_social .callibri_sph_no_active #callibri_call_opt.callibri_close_options.callibri_header_social_animation{bottom:1px;width:23px!important;height:23px!important;background-color:#fff!important}#switch_for_social .callibri_sph_active #callibri_call_opt.callibri_close_options.callibri_header_social_animation{width:23px!important;height:23px!important}#switch_for_social .callibri_bttn_color_viber #callibri_call_opt_img svg{width:16px!important;height:19px;margin-left:2px!important;margin-top:2px!important}#switch_for_social .callibri_bttn_color_telegram #callibri_call_opt_img svg{width:16px!important;height:19px;margin-left:1px!important;margin-top:3px!important}#callibri_social #callibri_call_opt,#callibri_social #callibri_call_opt #callibri_call_opt_img{width:50px!important;height:50px!important;position:relative}#switch_for_social .callibri_bttn_color_ok #callibri_call_opt_img svg{margin-left:2px!important;margin-top:2px!important}#callibri_social #callibri_call_opt{margin-left:0!important;z-index:0}#callibri_social #callibri_call_opt #callibri_call_opt_img svg{width:30px!important;height:30px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}#callibri_social #callibri_call_opt.callibri_bttn_color_telegram #callibri_call_opt_img svg{width:25px!important;height:25px;margin-left:0px!important;margin-top:2px!important}#callibri_social #callibri_call_opt.callibri_bttn_color_viber #callibri_call_opt_img svg{width:25px!important;height:25px;margin-top:3px!important}#callibri_social #callibri_call_opt.callibri_bttn_color_ok #callibri_call_opt_img svg{margin-left:2px!important}#modalPanel_options>.callibri_close_options,#modalPanel_options>.callibri_overrideOptions{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;justify-content:flex-start}#modalPanel_options .callibri_bttn_color:hover,#modalPanel_options .callibri_overrideOptions:hover.callibri_default_button,.callibri_close_options>.callibri_close_optionsImg:hover,.callibri_overrideOptions>.callibri_overrideOptionsImg:hover{background-color:" + callibri_themes[theme].controls + "!important}.callibri_chat_input[data-emojiable=callibri_emoji_input]{padding:0px 15px 8px 11px!important}#callibri_opacity_lvl2{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;-moz-box-orient:horizontal;-moz-box-direction:reverse;flex-direction:row-reverse;display:none;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;background:rgba(0,0,0,.7);z-index:2147483647}#callibri_displayed_picture,.callibri_img{background:#fff}#callibri_close_image{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;color:#fff;font-size:50px!important;position:absolute;top:-40px;right:-40px;padding:0!important;width:27px;height:27px;line-height:26px!important}.callibri_onetab_wrpp .callibri_bttn_color{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.callibri_options{padding-top:20px;margin-bottom:-25px;padding-bottom:25px}.callibri_hook{display:none!important}.callibri_hookimage_in,.callibri_hookimage_out{-webkit-animation-duration:350ms!important;-webkit-animation-iteration-count:1;-webkit-animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-duration:350ms!important;animation-duration:350ms!important;-moz-animation-iteration-count:1;animation-iteration-count:1;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-moz-animation-timing-function:cubic-bezier(0,0,0,0);animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_hooktext_in{display:block;-webkit-animation:hook_in .4s;-moz-animation:hook_in .4s;animation:hook_in .4s}.callibri_hooktext_out{-webkit-animation:hook_out .6s;-moz-animation:hook_out .6s;animation:hook_out .6s}.callibri_hookimage_in{-webkit-animation-name:hookimage_in!important;-moz-animation-name:hookimage_in!important;animation-name:hookimage_in!important}@-webkit-keyframes hookimage_in{0%{opacity:0}100%{opacity:1}}@-moz-keyframes hookimage_in{0%{opacity:0}100%{opacity:1}}@keyframes hookimage_in{0%{opacity:0}100%{opacity:1}}.callibri_hookimage_out{-webkit-animation-name:hookimage_out!important;-moz-animation-name:hookimage_out!important;animation-name:hookimage_out!important}@-webkit-keyframes hookimage_out{0%{opacity:1}100%{opacity:0}}@-moz-keyframes hookimage_out{0%{opacity:1}100%{opacity:0}}@keyframes hookimage_out{0%{opacity:1}100%{opacity:0}}.callibri_shadow svg{padding:20.5px!important}.callibri_shadow .callibri_social_svg{padding:15px!important;width:63px;height:63px;overflow:auto}.callibri_bttn_color_telegram_{padding:16px 8px 14px 6px!important}.callibri_bttn_color_ok_{padding:10px 10px 10px 15px!important}.callibri_hooktext_subtext{height:41px; color:  #7e7e7e;font-size: 15px!important;font-weight: 400;width:100%;text-align:left;padding:9px 15px;cursor:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBkPSJNNjggNS44YzAgMS44LjggMiAxMC44IDIuNCAxMS43LjQgMTUuOSAxLjggMTcuOSA1LjggMSAxLjkgMS4zIDEyLjQgMS4zIDQzLjJWOThoLTUuNWMtNC44IDAtNS41LjItNS41IDJzLjcgMiA1LjUgMkg5OHYzOS41YzAgNDMuOS0uMSA0NS02LjIgNDguMS0yLjMgMS4yLTYuNSAxLjktMTMuNSAyLjItOS41LjQtMTAuMy42LTEwLjMgMi41cy41IDEuOSAxMC4zIDEuNWMxMC45LS41IDE2LTIuMSAxOS42LTUuOWwyLjEtMi4zIDIuMSAyLjNjMy42IDMuOCA4LjcgNS40IDE5LjcgNS45IDkuNy40IDEwLjIuNCAxMC4yLTEuNXMtLjgtMi4xLTEwLjItMi41Yy03LjEtLjMtMTEuMy0xLTEzLjYtMi4yLTYuMS0zLjEtNi4yLTQuMi02LjItNDguMVYxMDJoNS41YzQuOCAwIDUuNS0uMiA1LjUtMnMtLjctMi01LjUtMkgxMDJWNTcuMmMwLTMwLjguMy00MS4zIDEuMy00My4yIDItNCA2LjItNS40IDE4LTUuOCA5LjktLjQgMTAuNy0uNiAxMC43LTIuNCAwLTItLjUtMi0xMS4yLTEuNi05IC40LTEyLjIuOS0xNS41IDIuNi0yLjIgMS4yLTQuNCAyLjctNC43IDMuNC0uNSAxLjEtLjcgMS4xLTEuMiAwLS4zLS43LTIuNS0yLjItNC43LTMuNC0zLjMtMS43LTYuNS0yLjItMTUuNC0yLjZDNjguNSAzLjggNjggMy44IDY4IDUuOHoiLz48L3N2Zz4=),text}.callibri_hooktext_wrapper_close{opacity:0;transition: opacity 1s ease;position:absolute;top:-29px;right:0;width:20px;height:20px;border-radius:50%;background-color:rgba(0, 0, 0, 0.1);}.callibri_hooktext_wrapper_close:before,.callibri_hooktext_wrapper_close:after{position: absolute;left: 9px;top:4px;content: ' ';height: 11px;width: 2px;background-color: rgba(255, 255, 255, 0.7);}.callibri_hooktext_wrapper_close:before{transform: rotate(45deg);}.callibri_hooktext_wrapper_close:after{transform: rotate(-45deg);}.callibri_hooktext_wrapper hr{width: calc(100% - 2px)!important;height:1px!important;border:1px solid #e8e8e8!important;margin-left: 1px;}.callibri_hooktext_wrapper{box-shadow: 2px 3px 32px 0px rgba(0, 0, 0, 0.22)!important;display:inline-block;width:303px;-webkit-border-radius:10px;border-radius:10px;max-height:138px;font-size:14px!important;line-height:16px!important}.callibri_hooktext_wrapper #callibri_text_in{width:305px; text-align:left}.callibri_hooktext_wrapper .callibri_inner_picture{width:43px!important;height:43px!important;margin-left:20px;-webkit-border-radius:50%;border-radius:50%}.callibri_hooktext_wrapper svg{width:25px;height:25px;margin-left:20px}.callibri_hooktext_wrapper svg path{fill:" + callibri_themes[theme].controls + "}#callibri_appendHere .callibri_overflow{flex-wrap:wrap;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:inherit!important;-webkit-flex-direction:inherit!important;-moz-box-orient:inherit!important;-moz-box-direction:inherit!important;flex-direction:inherit!important}.callibri_wrapper_offer_social{-webkit-border-radius:50%;border-radius:50%;width:40px;height:40px;margin:0 auto 5px!important;position:inherit!important}.callibri_wrapper_offer_social path{fill:#fff!important}.callibri_wrapper_offer_svg{width:40px;height:40px;position:static!important;display:inline!important}.callibri_hooktext_wrapper:after{top:100%;right:25px;height:0;width:0;z-index:1;border:solid transparent;position:absolute;border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:8px;margin-left:-8px}.callibri_off_tab .callibri_off_tab_text{letter-spacing:-.05em}.callibri_off_tab .callibri_bttn_color_telegram svg{width:25px;height:31px;padding-top: 10px;margin-left:6px!important}.callibri_off_tab .callibri_bttn_color_facebook svg{width:30px;height:30px;margin-top:5px}.callibri_off_tab .callibri_bttn_color_vk svg{width:30px;height:30px;margin-top:6px}.callibri_off_tab .callibri_bttn_color_viber svg{width:25px;height:25px;margin-top:9px}.callibri_off_tab .callibri_bttn_color_ok svg{width:30px;height:30px;margin-top:5px;margin-left:3px}#callibri_displayed_picture.callibri_image_preview{margin:0!important}.callibri_gif,.callibri_img{max-height:inherit;width:-webkit-calc(100% + 45px);width:-moz-calc(100% + 45px);width:calc(100% + 45px);margin: -17px -21px -18px -24px;-webkit-border-radius:5px;}.callibri_chat_text_field>div:only-child .callibri_image_preview{margin: -17px -21px -18px -24px;}.callibri_img:not(:first-child){margin-top:16px}.callibri_chat_text_field>.callibri_gif:first-child{margin-top:-14px}.callibri_color_footer.callibri_checkox_footer:before{content:'☑'!important;font-size:15px;display:inline-block;margin-right:2px;vertical-align:-1px}.callibri_font16{position:relative}.callibri_chat_settings_wrapper{width:30%;position:absolute;height:40px;bottom:-17px;right:30px}.callibri_gray_locomotive{color:#8a8989;font-size:12px!important;font-weight:400;line-height:16.5px;float:right;height:28px;min-width:28px;padding:0 13px 0 25px;cursor:pointer}.callibri_open_chat_settings,.callibri_send_dialoge_chat_sttings{-webkit-border-top-right-radius:0;border-top-right-radius:0;-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0;margin-right:0}.callibri_open_chat_settings{height:100%;line-height:25px !important ;visibility:hidden;width:40px;padding:0;opacity:0;-webkit-transition:opacity .3s linear;-o-transition:opacity .3s linear;-moz-transition:opacity .3s linear;transition:opacity .3s linear}.callibri_open_chat_settings>svg{width:11px;height:11px;top: 50% !important;transform: translateY(-50%);position:absolute !important;left:0!important;}.callibri_close_chat_settings{font-size:28px!important;font-weight:600;line-height:26px!important;color:#9aa2ab;padding:0 6px}.callibri_end_dialog_chat_settings{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iOTAwLjAwMDAwMHB0IiBoZWlnaHQ9IjkwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDkwMC4wMDAwMDAgOTAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjEwLCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxMQo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw5MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjYTNhYWIyIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTcwMyA4OTkzIGMxNCAtMTQgLTE3IC0zMyAtNTQgLTMzIC0yNSAwIC02MSAtMTEgLTk2IC0zMCAtMzEgLTE2Ci02MSAtMzAgLTY3IC0zMCAtNiAwIC0xOSAtOCAtMjcgLTE3IC05IC0xMCAtMzEgLTMxIC01MCAtNDggLTg1IC03NSAtMTQ4Ci0xOTIgLTE2MiAtMzA1IC0xNCAtMTEwIC0yMCAtMTI5NSAtNyAtMTMyMCAxMCAtMTkgMjIgLTIwIDM5MyAtMjAgMjg1IDAgMzg2CjMgMzk1IDEyIDkgOSAxMiAxMzAgMTIgNDg1IDAgNDU3IDEgNDczIDE5IDQ4MyAxNCA3IDczNiA5IDIyODggOCBsMjI2OCAtMyA1Ci0zNjYwIGMzIC0yMDEzIDIgLTM2NzEgLTEgLTM2ODUgbC01IC0yNSAtMjI2OCAtMyBjLTE1NTEgLTEgLTIyNzMgMSAtMjI4NyA4Ci0xOCAxMCAtMTkgMjYgLTE5IDQ4MCAwIDI1NyAtMyA0NzUgLTYgNDg0IC01IDE0IC01MCAxNiAtMzk1IDE2IGwtMzg5IDAgLTEwCi0yNiBjLTEzIC0zNCAtNyAtMTIyMSA3IC0xMzE5IDE1IC0xMDggNzkgLTIyNyAxNjIgLTMwMCAxOSAtMTYgNDEgLTM4IDUwIC00Nwo4IC0xMCAyMSAtMTggMjcgLTE4IDYgMCAzMyAtMTIgNjAgLTI3IDI3IC0xNCA3NCAtMzEgMTA0IC0zNiA4MCAtMTUgNTI5OCAtMTQKNTM2NSAwIDYyIDE0IDEyMiAzNiAxMzcgNTEgNyA3IDE2IDEyIDIwIDEyIDE0IDAgNzEgNDMgMTA2IDgwIDMzIDM1IDkyIDExNgo5MiAxMjYgMCA0IDYgMjAgMTQgMzcgOCAxOCAyMSA1MiAzMCA3NyAxNSA0MSAxNiAzODggMTQgNDExMCAtMiAzMDczIC02IDQwNzAKLTE1IDQwODUgLTE0IDI0IC00MyA5MSAtNDMgOTkgMCAyNCAtMTE2IDE2NCAtMTUwIDE3OSAtOCA0IC0yOCAxNiAtNDUgMjcgLTE2CjExIC0zNyAyMyAtNDUgMjYgLTggMyAtMjkgMTIgLTQ3IDIwIC0xNyA4IC00NSAxNCAtNjEgMTQgLTQwIDAgLTYyIDkgLTYyIDI2CjAgMTIgLTM4OSAxNCAtMjYzMiAxNCAtMTQ0NyAwIC0yNjI4IC0zIC0yNjI1IC03eiIvPgo8cGF0aCBkPSJNNzcwNSA4MTY3IGMtMyAtNiAtNCAtMTg4IC0zIC00MDIgbDMgLTM5MCAyNDAgLTUgMjQwIC01IDMgLTI4NTUgYzEKLTE1NzAgMCAtMjg2NSAtMyAtMjg3NyAtNSAtMjMgLTYgLTIzIC0yNDMgLTI1IGwtMjM3IC0zIDAgLTQwMCAwIC00MDAgNDI4IC0zCmMzNjUgLTIgNDMyIDAgNDU3IDEzIDE2IDggNDAgMTUgNTQgMTUgMTQgMCAyNyA0IDMxIDkgMyA2IDI2IDIwIDUyIDMzIDQ0IDIxCjE3MyAxMzYgMTczIDE1MyAwIDQgMTQgMjcgMzAgNTIgMTYgMjQgMzAgNTAgMzAgNTggMCAyNCAxMiA0NSAyNiA0NSAxMiAwIDE0CjQ4NyAxNCAzMzEwIDAgMjgyMyAtMiAzMzEwIC0xNCAzMzEwIC0xNCAwIC0yNiAyMSAtMjYgNDUgMCA4IC0xMyAzNCAtMzAgNTgKLTE2IDI1IC0zMCA0OCAtMzAgNTIgMCAxNyAtMTI5IDEzMiAtMTczIDE1MyAtMjYgMTMgLTQ5IDI3IC01MiAzMyAtNCA1IC0xOSA5Ci0zNCA5IC0xNSAwIC0zNiA3IC00NyAxNSAtMTYgMTIgLTg3IDE0IC00NTIgMTUgLTMzOCAwIC00MzQgLTMgLTQzNyAtMTN6Ii8+CjxwYXRoIGQ9Ik0zMjI1IDY1ODMgYy0xMSAtMyAtMjQgLTkgLTI5IC0xNCAtNiAtNSAtMTggLTkgLTI5IC05IC0yOSAwIC0xMTcKLTYzIC0xNjIgLTExNSAtNTcgLTY3IC02OCAtMTA0IC03MiAtMjM0IC00IC0xMTggLTMgLTEyNiA0NiAtMjMxIDkgLTIwIDIyOAotMjQ4IDUyNiAtNTQ3IDM1NiAtMzU5IDUwNiAtNTE2IDQ5OSAtNTIzIC04IC04IC01NjIgLTExIC0xODAwIC0xMSAtMTE1OCAwCi0xODExIC00IC0xODUyIC0xMCAtMzUgLTYgLTg0IC0yMCAtMTEwIC0zMSAtNjUgLTI5IC0xNTMgLTEyMiAtMTkxIC0yMDIgLTI4Ci02MCAtMzEgLTc1IC0zMSAtMTY2IDAgLTkxIDMgLTEwNiAzMSAtMTY2IDMyIC02NyAxNDcgLTE5NCAxNzYgLTE5NCA4IDAgMjQKLTYgMzYgLTE0IDU1IC0zNCAxNzAgLTM2IDE5NjAgLTM0IDEzNDAgMSAxNzcxIC0yIDE3ODAgLTExIDkgLTkgLTEwNyAtMTMwCi00ODkgLTUxNCAtMjc2IC0yNzYgLTUxMCAtNTE2IC01MjIgLTUzMyAtNDkgLTcxIC02MyAtMTM2IC01OSAtMjU2IDQgLTEyOSAxNQotMTY2IDcyIC0yMzMgNDUgLTUyIDEzMyAtMTE1IDE2MiAtMTE1IDExIDAgMjQgLTUgMjkgLTEwIDYgLTYgNDMgLTE0IDgxIC0xNwoxMDAgLTggMjExIDI2IDI5NSA4OSA0NiAzNiAxNjg1IDE2NzQgMTcyNyAxNzI2IDE3IDIyIDQ1IDY4IDYyIDEwMiAzMCA2MCAzMQo2OCAzMCAxODIgLTEgMTEyIC0zIDEyMyAtMzIgMTgxIC0xNiAzNCAtNDUgNzkgLTYzIDEwMiAtNDggNTggLTE2ODIgMTY5MQotMTcyNSAxNzIzIC05NCA3MSAtMjQ3IDEwOSAtMzQ2IDg1eiIvPgo8L2c+Cjwvc3ZnPgo=);background-repeat:no-repeat;-webkit-background-size:12px 12px;background-size:12px;background-position:8px}.callibri_send_dialoge_chat_sttings{background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg2NCIgdmlld0JveD0iMCAwIDkwMC4wMDAwMDAgNjQ4LjAwMDAwMCI+CiAgPGcgZmlsbD0iI2EzYWFiMiI+CiAgICA8cGF0aCBkPSJNNjguNSAzLjdjLTcuNiAxLTIxLjUgNi4yLTI2IDkuNy0xLjYgMS4zLTEuOCAxLjctLjYgMi41LjguNSA4NC4yIDgzLjcgMTg1LjUgMTg0LjkgMTk5IDE5OC45IDE4OC45IDE4OS4zIDIwNSAxOTQuNCA5LjUgMyAyNi4yIDMuMiAzNS4xLjQgOS0yLjggMTQuOS01LjggMjEuNy0xMC45IDIuMS0xLjUgMzYuMS0zNS4zIDc1LjYtNzUgMzkuNi0zOS43IDEyMS42LTEyMi4xIDE4Mi4zLTE4M0M4MDcuOCA2NS43IDg1Ny42IDE1LjUgODU3LjggMTVjLjktMi40LTE1LjEtOS40LTI1LjMtMTEtNC45LS44LTc1OC0xLjEtNzY0LS4zek03LjMgNTIuMkM2LjIgNTUuMSA0LjQgNjAgMy40IDYzYy0xLjggNS4zLTEuOSAxMi42LTEuOSAyNjJzLjEgMjU2LjcgMS45IDI2MmM0LjkgMTQuMSA1LjggMTYgNy43IDE0LjkgMS0uNSA2MC01OS4yIDEzMS4xLTEzMC41czEzMi44LTEzMyAxMzctMTM3LjNjNC41LTQuNCA3LjgtOC40IDcuOC05LjYgMC0xLjMtNDUuNC00Ny40LTEzNy44LTEzOS44QzczLjUgMTA5IDExIDQ3IDEwLjQgNDdjLS42IDAtMS45IDIuNC0zLjEgNS4yem04MzIuNiA0My41Yy0yNi43IDI2LjgtODguOCA4OS4yLTEzOCAxMzguNi00OS4xIDQ5LjQtODkuNSA5MC40LTg5LjcgOTEuMS0uNCAxLjYgMjc0LjQgMjc2LjEgMjc2LjQgMjc2LjEgMi42IDAgNi44LTEwLjMgOC0xOS44LjQtMi43IDEuMy01LjEgMi01LjQgMS4yLS40IDEuNC00MS41IDEuNC0yNTEuNCAwLTE4Ny42LS4zLTI1MC44LTEuMS0yNTAuNy0uNy4yLTEuNy0yLjUtMi40LTYuOC0uNy0zLjktMS44LTgtMi40LTkuMi0uNi0xLjEtMS4xLTIuOS0xLjEtMy45cy0xLTMuMS0yLjMtNC42bC0yLjItMi44LTQ4LjYgNDguOHoiLz4KICAgIDxwYXRoIGQ9Ik0yNzQgNDAwLjdjLTIzLjggMjQuMS04NiA4Ni43LTEzOC4xIDEzOS4xQzgzLjcgNTkyLjIgNDEgNjM1LjQgNDEgNjM1LjljMCAxIDEyLjQgNy4xIDE0LjQgNy4xLjcgMCAzLjEuOCA1LjIgMS44IDMuNyAxLjYgMjQuNCAxLjcgMzg4LjkgMS43aDM4NWw2LjUtMi4zYzkuNy0zLjUgMTctNy4yIDE3LTguNSAwLTEuOC0yNzYuMy0yNzcuNy0yNzgtMjc3LjctLjggMC0xNC4zIDEyLjktMzAgMjguNi0yNS4xIDI1LjEtMzMuOSAzMy4zLTQxLjUgMzguMi04LjUgNS41LTMwIDE0LjItMzUuMiAxNC4yLTEuMiAwLTQuOC43LTggMS41LTMuMS44LTkuOCAxLjUtMTQuOCAxLjVzLTExLjctLjctMTQuOC0xLjVjLTMuMi0uOC02LjgtMS41LTgtMS41LTUuNyAwLTI2LjctOC43LTM1LjYtMTQuNy03LjYtNS4xLTEyLjUtOS42LTQxLjEtMzgtMTkuNC0xOS4zLTMwLjItMjkuMy0zMS42LTI5LjMtMS40IDAtMTYuMyAxNC40LTQ1LjQgNDMuN3oiLz4KICA8L2c+Cjwvc3ZnPgo=);background-repeat:no-repeat;-webkit-background-size:14px 10px;background-size:14px 10px;background-position:8px}.callibri_input_dialog_to_email{border: 1px solid #d4d4d4;height:31px;background-color:#fff;padding:0 5px!important;display:block;width:-webkit-calc(100% - 37px)!important;width:-moz-calc(100% - 37px)!important;width:calc(100% - 37px)!important;margin-right:5px;margin-top:15px;float:left;outline:0;color:#000;-webkit-border-radius:3px;border-radius:3px;font-weight:600}.callibri_input_dialog_to_email-wrong{border-color: transparent!important;box-shadow: 0 0 0 1px red!important}.callibri_btn_send_dialog_to_email{width:31px;height:31px;background-color:#bccfe5;display:block;float:left;margin-top:15px;-webkit-border-radius:3px;border-radius:3px;cursor:pointer;line-height:24px!important;color:#515965;padding-top:8px;padding-left:5px}.callibri_info_btn_phoneemail{margin-top:10px}#callibri-module-area svg{;overflow:visible!important;display:block;position:initial;top:initial;left:initial;opacity:1}.callibri_continue_dialog{font-size:12px!important;color:#ACACAC;cursor:pointer}.callibri_policy{position:relative;width:-webkit-calc(100% - 28px);width:-moz-calc(100% - 28px);width:calc(100% - 28px);-moz-user-select:text;-ms-user-select:text;user-select:text;-moz-osx-font-smoothing:grayscale!important;box-sizing:content-box;-webkit-border-radius:4px;border-radius:4px;float:left;padding:14px;font-size:13px!important;line-height:15px!important;background-color:#F8F8F8;color:#000}.callibri_checkbox_parent{position:absolute;left:11px;height:18px;width:18px;background:#fff;border:1px solid #c7cad6;-webkit-border-radius:2px;border-radius:2px}.callibri_checkbox_left{width:4px;height:15px;top:2px;left:1px;display:none;background-color:#3a3a3a;-webkit-border-radius:2px;border-radius:2px;position:absolute}.callibri_ml25{margin-left:25px;display:block}.callibri_link_black{text-decoration:underline;font-size:12px!important;line-height:14px!important;color:#000!important;font-weight:700}.callibri_chat_block{width:-webkit-calc(100% - 40px);width:-moz-calc(100% - 40px);width:calc(100% - 40px);height:-webkit-calc(100% - 15px);height:-moz-calc(100% - 15px);height:calc(100% - 15px);position:absolute;background:#fff;z-index:1;padding:5px 20px 10px;-ms-user-select:text;-moz-user-select:text;-webkit-user-select:text;user-select:text;-moz-osx-font-smoothing:grayscale!important;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-size:15px!important;line-height:18px!important;text-align:center;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}#callibri_callback_button_request:disabled,#callibri_callback_button_timer:disabled{opacity:.3}.callibri_checkbox_right{width:4px;height:21px;-ms-transform:rotate(45deg);transform:rotate(45deg);top:-3px;left:11px;display:none;background-color:#3a3a3a;-webkit-border-radius:2px;border-radius:2px;position:absolute}.callibri_policy_wrapper{margin-bottom:15px}#callibri_request .callibri_policy{margin:15px 0}#callibri_vk_contact_us{width:184px!important;margin:0 5px;vertical-align:middle}.callibri-module-area path{opacity:1!important;stroke:none!important;}.callibri-module-area .callibri_fb_chat{width:180px!important;height:30px!important;margin:0 5px;vertical-align:middle}.callibri_social_text_style{letter-spacing:-.3px}.callibri_feedback_fields_wrapper .callibri_textarea{display:block;margin-bottom:10px;}.callibri_feedback_fields_wrapper .callibri_text_inp{width:-webkit-calc(50% - 5px);width:-moz-calc(50% - 5px)!important;width:calc(50% - 5px);margin:10px 0 0;display:inline-block;-webkit-border-radius:2px!important;border-radius:2px!important;border:0;}.callibri_feedback_fields_wrapper .callibri_text_inp:first-child~.callibri_text_inp:nth-child(2n),.callibri_feedback_fields_wrapper .callibri_textarea~.callibri_text_inp:nth-child(2n){margin-left:10px}.callibri_feedback_fields_wrapper .callibri_text_inp:first-child,.callibri_feedback_fields_wrapper .callibri_text_inp:first-child+.callibri_text_inp{margin-top:0}.callibri_feedback_fields_wrapper .callibri_text_inp:first-child:last-child,.callibri_feedback_fields_wrapper .callibri_text_inp:first-child~.callibri_text_inp:nth-child(2n - 1):last-child,.callibri_feedback_fields_wrapper .callibri_textarea~.callibri_text_inp:nth-child(2n):last-child{}.callibri_feedback_fields_wrapper{margin-top:10px}button{cursor:pointer}.callibri_button:after,.callibri_button:before{content:none!important}.callibri_checkmark_icon{fill:#fff}.checkmark_check{background-color:#91e573}#callibri_info_input_nameline{display:flex;width:100%}.callibri_info_input_phoneemailline{width:100%}.callibri_info_input_phone{width:40%!important}.callibri_info_input_email{width:-webkit-calc(60% - 42px)!important;width:-moz-calc(60% - 42px)!important;width:calc(60% - 42px)!important}.callibri_info_input_phoneemailline{display:none}.callibri_newOperator{margin-bottom:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.callibri_groups_line{padding:12px;height:47px;line-height:47px;border-bottom:solid 1px #ececec}.callibri_groups_line:hover{background-color:#ececec}.callibri_groups_name{float:left;color:#000;font-size:17px!important;font-weight:400}.callibri_groups_info{float:right;height:47px;line-height:47px;margin-top:-12px}.callibri_groups_img{width:24px;height:24px;-webkit-border-radius:50%;border-radius:50%;border:2px solid #fff;margin-top:12px;margin-left:-8px}.callibri_groups_online{float:right;height:47px;line-height:47px!important;margin-left:9px;font-size:13px;color:#a5a5a5}.callibri_wrap_pict_robot{background-color:#e7e7e7!important;overflow:hidden;z-index:1!important}.callibri_wrap_pict_colorring{width:71px;height:71px;z-index:12;position:fixed;bottom:12px!important;right:27px!important;border:none!important;background-color:#090!important;-webkit-box-shadow:-32px 0 100px -25px #0f0 inset;box-shadow:-32px 0 100px -25px #0f0 inset}.callibri_wrap_pict_colorring_opacity{opacity:0;z-index:12!important;position:fixed;bottom:0;right:0}.callibri_wrap_pict_name{z-index:15;font-size:15px!important;padding:7px 16px;box-shadow: 0px 0px 25px 0px rgba(0, 0, 1, 0.1);border-radius:8px;height:35px;background:#fff;right:28px;position:fixed;bottom:92px}.callibri_wrap_pict_name_robot{right:95px;bottom:77px}#callibri_wrap_pict_name_robot,#callibri_wrap_pict_name_operator{display:none}.callibri_chat_input_form{position: relative;overflow: hidden;width:100%!important;margin-top:5px}.callibri_chat_input_label{display:block !important; width:100%; position: absolute!important;top:0;pointer-events: none;left: -6px;padding-left:18px;background:#fff;height:100%; padding-top:5px;transition: .3s; color:#a9a9a9;font-weight:400;font-size:13px!important}.callibri_chat_input_label b{color:rgb(130,130,130)}.callibri_chat_input_label b{font-weight:600}.callibri_chat_input:focus~.callibri_chat_input_label {left:calc(100% - 17px)}.callibri-select-field-wrapper:after{content:'';width:0;height:0;border:5px solid transparent;border-color:#000 transparent transparent transparent ;position:absolute;top:12px;right:10px}.callibri-select-field-wrapper{position: relative!important;margin-bottom:10px;height:31px;padding-top:5px}.callibri-select-field-options{display:none;background:#fff; overflow:hidden; box-shadow: 0px 0px 13px 0px rgba(151, 151, 151, 0.59);border-radius:4px; position:absolute!important;top:0;left:0;flex-direction:column;width:100%}.callibri-select-field-options:after{content:'';width:0;height:0;border:5px;border-color: transparent transparent #000 transparent;position:absolute;top:12px;right:10px}.callibri-select-field-label,.callibri-select-option{text-align:left; width:100%;height:31px!important;font-weight: 600;font-size: 13px!important;color: #000!important;}.callibri-select-radio{display:none}.callibri-select-option:not(:first-child):hover{background:#f4f4f4}.callibri-select-option label{width:100%;height100%;display:block;padding: 5px 16px 0 8px!important;}.callibri-select-placeholder{color:#878787!important;display:block;padding-top:0!important;padding: 1px 16px 0 8px!important;}.callibri_feedback_fields_wrapper .callibri-select-field-wrapper:first-child{color:#878787!important}.callibri-full-width-field{margin-left:0!important;margin-bottom:10px!important;width:100%!important;}#callibri_wrap_pict_img{overflow:hidden} .callibri_wrap_pict_tab{background:" + callibri_themes[theme].controls + "}.callibri_wrap_pict_tab svg{width:28px !important;height:25px!important }.callibri_wrap_pict_tab.callibri_social_svg_telegram,.callibri_wrap_pict_tab .callibri_social_svg_vk,.callibri_wrap_pict_tab .callibri_social_svg_viber,.callibri_wrap_pict_tab .callibri_social_svg_fb,.callibri_wrap_pict_tab .callibri_social_svg_ok,.callibri_wrap_pict_tab path{fill:#fff!important }#callibri_wrap_pict_tab_socials{margin-left:-5px}.callibri_wrapperField{justify-content: flex-start!important;}.callibri_ok.callibri_bttn_color{display:none}#switch_for_social #callibri_call_opt.callibri_bttn_color_vk{top:6px!important}#switchForChat .callibri_bg_widget{width: 12px;height: 12px;right: 0px;}#switchForChat .callibri_bg_widget .callibri_bg_text_widget{margin: 1px 4px;}#callibri_request .callibri_wrapperField .callibri_text{margin-bottom:20px}#wrap_popup label.avatar_widget,#wrap_popup .widget-popup-checkbox{display:none;}.callibri_text_inp::placeholder{font-size:13px!important;color:#878787;}.callibri_text_inp::-webkit-input-placeholder{font-size:13px!important;color:#878787;}.callibri_text_inp::-moz-placeholder{font-size:13px!important;color:#878787;}.callibri_text_inp:-ms-input-placeholder{font-size:13px!important;color:#878787;}.callibri_text_inp:-moz-placeholder{font-size:13px!importantcolor:#878787;}.callibri_wrapper_chat .callibri_wrapperField{padding:0!important}.callibri_rating_chat>span:first-child{margin-right:0;}.callibri_rating_chat>span:last-child{margin-left:0;}.callibri_close_chat_btn{background:#ebebeb!important;color:#494949!important;margin-top:10px;}#chat_rating_comment[disabled],.callibri_button[disabled]{opacity:.5}#ok_svg{width: 20px;}.callibri_input_chat_emoji_noevent{display:block;position:absolute;right:0;bottom:0;width:50px;height:25px;z-index:5;}.emoji-picker-icon.emoji-picker.fa.fa-smile-o.callibri_svg_opacity,.callibri_svg_opacity{opacity:.3!important;}#callibri_chat_input{background-color:#fff}#callibri_wrap_pict_tab_social #social_svg{margin-left: -1px!important;}" };
    _callibri.css.MOBILE_MIN = "select,textarea,input {font-size: 16px;}.callibri_chat_message{margin-bottom:5px;}.callibri_input_chat_div_checkbox span{line-height:normal !important}@media (max-width: 982px) {.callibri_widget{max-width:100% !important }}.callibri_text span,.callibri_text .callibri_h2{display:block;width:100%;text-align:left;margin-bottom:10px;}.callibri_chat_input{margin-bottom:15px!important;}.callibri_wrap_pict_colorring{bottom: 7px!important;width: 66px!important;height: 66px!important;}.callibri_input_chat_div_checkbox{display:flex;justify-content:space-around}.callibri_chat_wrapper input[placeholder]{width:85%;}#callibri_chatW, #callibri_footer, #callibri_map, #callibri_options, #callibri_reqCallW, #callibri_request, #callibri_social{position:relative!important;top:60px!important;z-index:1}.callibri_soc .callibri_wrap_pict_index{z-index:13}@media(min-width:1000px){.callibri_callme_bkgr{background-size: 10%!important}}.callibri_passive_icon{background:transparent!important;transition:none}.callibri_wrap_pict_flex{height:100%;background-color: #f4f4f4!important}.callibri_wrap_pict_s_mob{z-index:1!important   ;width:50px!important;height:50px!important}.callibri_wrap_pict_l{z-index:2}.callibri_socials_svg_main{width:30px!important}.callibri_callme_bkgr {background-image: url(https://cdn.callibri.ru/callibri_okmobile.png)!important;background-repeat: no-repeat;background-position: 50%;background-size: 20%;}.callibri_chat_message,.callibri_map_mobile a{-webkit-box-orient:horizontal;-webkit-box-direction:normal}.callibri_off_social .callibri_off_tab{width:50px;max-width:50px;min-width:50px;height:50px;display:inline-block;margin-top:5px;margin-left:5px;font-size:8px;padding:5px 0}.callibri_off_social{margin-left:43px;width:calc(100% - 43px)!important;display:inline-block;text-align:left;margin-top:-10px}.callibri_soc_title{-ms-flex-preferred-size:initial;flex-basis:initial}.callibri_operator_writes{padding-top:0!important;margin-top:-36px}.callibri_widget_in,.callibri_widget_out{-webkit-animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_color1{background-color:#eee}.callibri_font16{text-align:left}.callibri_map_mobile a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex-direction:row;-moz-box-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0}.callibri_map_mobile,.callibri_map_mobile a{font-size:15px!important;padding:10px 5px;text-decoration:none;color:#000;text-align:left!important}.callibri_flex{-ms-flex-item-align:baseline;align-self:baseline}.callibri_mob_w{-ms-flex-item-align:center;align-self:center}.callibri_mob_w99{width:99%}.callibri_grthen{float:right;height:16px}.callibri_time_top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;font-size:9px!important;overflow:auto}.callibri_mobile_mapicon{width:13px;margin:2px 10px}[name=select].callibri_overflow{overflow:visible!important;background-color:#fff;height:calc(100% - 60px)}.callibri_input_chat_div{border-top: 1px solid #bababa!important;overflow:visible;position:fixed;bottom:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:inherit;margin:0 0 16px;width:100%;border:0;border-radius:0}#callibri_chatW{;max-height:100%; padding-bottom:0}#callibri_chat_input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;resize:none;width:100%;height:40px;margin:5px 0 5px 18px;background-image:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:9px 0 0 10px!important;background-color:#fff}.callibri_chat_text_field,.callibri_chat_text_field_right{margin-bottom:10px!important;}.callibri_tele_icon{margin-right:5px;padding:20px;height:60px;width:60px;margin-bottom:7px}.callibri_chat_message{text-align:left!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex-direction:row;-moz-box-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%}.callibri_chat_settings_wrapper{height:25px;width:100%;left:0;background-color:#e5e5e5}.callibri_open_chat_settings{width:80px;display:block;font-size:10px!important;padding-left:15px;position:relative}#callibri_user_chat_actions{right:5px}#callibri_user_chat_actions .callibri_gray_locomotive:hover{background-color:transparent;border-bottom:2px solid #e3e3e3}.callibri_image_preview{float:left}.callibri_left{text-align:left}.callibri_right{text-align:right}.callibri_chat_text_field_right{margin-right:8px!important}.callibri_chat_text_field{margin-left:12px}.callibri_wrapper_chat{padding-right:10px;padding-left:10px}.callibri_bg_text_soc{font-size:1.5em}#callibri_text_in{-webkit-box-flex:6;-ms-flex:6 1 auto;flex:6 1 auto;width:90%;width:calc(100% - 60px);padding:0;margin:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;line-height:inherit!important}.callibri_options{margin:0!important;padding:0!important;z-index:2147483646!important;display:block;bottom:12px!important;right:0!important;left:0!important;width:100%}#callibri_call_opt.callibri_close_options,#callibri_chat_opt.callibri_close_options,#callibri_req_call_opt.callibri_close_options{-webkit-animation-name:optionOutMobile!important;-webkit-animation-duration:.2s;-webkit-animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0}#callibri_call_opt_img.callibri_close_optionsImg,#callibri_chat_opt_img.callibri_close_optionsImg,#callibri_req_call_opt_img.callibri_close_optionsImg{animation-name:none;-webkit-animation-name:none!important}@-webkit-keyframes optionImgOut{0%,100%{height:15px;margin-bottom:10px}}@keyframes optionImgOut{0%,100%{height:15px;margin-bottom:10px}}.callibri_widget{z-index:-10;overflow-y:auto;min-width:initial!important;height:100%!important;top:initial;width:100%!important;left:50%!important;bottom:0; transform: translateX(-50%);}.callibri_text_sm{text-align:left; color:#535353;font-size:19px!important;font-weight: 600!important}.callibri_modal_panel{height:60px;background-color:#f4f4f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-line-pack:center;align-content:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border:0}.callibri_text{color:#434343}#callibri_callback_button_timer{height:40px!important;width:25%!important;margin-left:auto}.callibri_mobile_phone{font-size:32px!important;text-decoration:none;color:#000;position:relative}.callibri_mobile_phone::after{content:' '!important;position:absolute;width:100%;height:0;left:0;bottom:5px;border-bottom:1px dotted #000}.callibri_phone_callme{text-align:left!important;display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:20px;margin-bottom:8px}.callibri-phone-mask::-webkit-input-placeholder{line-height:normal;color:#7f7f7f!important}#callibri_callback_phone{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;font-size:18px!important;width:70%!important;padding:5px 0 5px 4%!important;height:40px!important}#callibri_callback_phone::-webkit-input-placeholder{margin:0;color:#CACACA;font-size:15px}#callibri_callback_phone::-moz-placeholder{margin:0;color:#CACACA;font-size:15px}#callibri_callback_phone:-moz-placeholder{margin:0;color:#CACACA;font-size:15px}#callibri_callback_phone:-ms-input-placeholder{margin:0;color:#CACACA;font-size:15px}#callibri_call_opt_img.callibri_close_optionsImg>svg,#callibri_chat_opt_img.callibri_close_optionsImg>svg,#callibri_req_call_opt_img.callibri_close_optionsImg>svg{animation-name:none!important;-webkit-animation-name:none!important}#callibri_call_opt_img.callibri_overrideOptionsImg>svg,#callibri_chat_opt_img.callibri_overrideOptionsImg>svg,#callibri_req_call_opt_img.callibri_overrideOptionsImg>svg{width:inherit;animation-name:none!important;-webkit-animation-name:none!important;position:inherit}#callibri_call_opt_img.callibri_overrideOptionsImg,#callibri_chat_opt_img.callibri_overrideOptionsImg,#callibri_req_call_opt_img.callibri_overrideOptionsImg,.callibri_close_optionsImg{width:initial;animation-name:none!important;-webkit-animation-name:none!important;padding:0!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.callibri_fdb{margin-top:-2px!important;margin-bottom:0}.callibri_bbl_times{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;float:right;font-weight:700;font-size:24px;margin:auto}.callibri_color_footer{font-size:9px!important;float:left;color:grey;background-color:inherit!important;padding-left:10px}.callibri_color_footer a{text-decoration:none}.callibri_color_footer span{text-decoration:none!important;font-weight:600;font-size:10px!important;color:#8a8989}.callibri_times_top{width:80%;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:40px!important;height:100%;color:#bfbfbf;font-weight:100;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.callibria_color{color:inherit}.callibri_opacity_lvl2{height:100%!important}#callibri_opacity_lvl2 .callibri_image_preview{max-width:85%!important;max-height:85%!important}#callibri_close_image{right:0}.callibri_opacity{bottom:0;top:0;position:fixed;display:none}.callibri_wrapperField{padding:15px 10px 5px!important;text-align:center!important}.callibri_mobile_hide{display:none}.calibri_separator{height:1px;margin:20px 0 15px -80%;background-color:#CACACA;width:300%}.callibri_widget_in{}@keyframes widget_in_mobile{from{opacity:0;bottom:-3000px;z-index:0}to{opacity:1;bottom:0;z-index:2147483646}}@-webkit-keyframes widget_in_mobile{from{opacity:0;bottom:-3000px;z-index:0}to{opacity:1;bottom:0;z-index:2147483646}}.callibri_widget_out{animation-name:widget_out_mobile!important;-webkit-animation-name:widget_out_mobile;-webkit-animation-duration:.3s!important}@keyframes widget_out_mobile{from{opacity:1;bottom:0;z-index:2147483646}to{opacity:0;bottom:-3000px;z-index:-10}}@-webkit-keyframes widget_out_mobile{from{opacity:1;bottom:0;z-index:2147483646}to{opacity:0;bottom:-3000px;z-index:-10}}.callibri_bubbl_center{margin:auto;padding:5px 10px;color:#fff}.callibri_overrideOptions:last-child{-ms-flex-preferred-size:500%;flex-basis:500%}.callibri_ended_fantasy{display:block}#callibri_call_opt.callibri_overrideOptions:hover,#callibri_chat_opt.callibri_overrideOptions:hover,#callibri_req_call_opt.callibri_overrideOptions:hover,#callibri_social_opt.callibri_overrideOptions:hover{height:0}.callibri_unread{margin-top:5px}.callibri_unread svg{opacity:1;height:9px}.callibri_unread svg path{fill:#000}.callibri_unread_message{opacity:1;margin-right:2px}.callibri_u{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.callibri_color_top_arrow:after,.callibri_color_top_arrow:before{content:initial!important}#modalPanel{position:fixed;z-index:2; display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.callibri_wrap_pict{padding-top:15px;padding-bottom:8px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}.callibri_text_panel{width:initial;}.callibri_panel_picture{width:18px}.callibri_sph_active,.callibri_sph_no_active{height:18px;width:100%;display:inline-table}.callibri_bg_widget{margin:-10px 0 0 10px}.callibri_social_svg{width:38px;height:38px;margin-top:0}.callibri_wrap_pict{margin:initial!important}#switch_for_social svg:first-child{margin-left:initial!important;position:absolute}#switch_for_social .callibri_sph_active #social_svg{left:-1px!important;height:16px}#callibri_request_phone{width:100%!important}.callibri_req_text{text-align:left}.callibri_wrapperField.callibri_map_mobile{padding:15px 0 5px!important}input.callibri_textarea{height:40px!important}.callibri_feedback_fields_wrapper .callibri_text_inp{-webkit-appearance:none;height:31px!important;float: left;}.callibri_text_color{color:#535353}.callibri_address_style{color: #535353;font-weight: 600;font-size:19px!important;margin-bottom:15px}.callibri_wrapperField_social{padding:9px 20px!important}.callibri_as_wrapper_field{margin:15px 0 7px}@-webkit-keyframes optionOutMobile{0%,90%{opacity:0}100%{opacity:1}}#callibri_options>.callibri_modal_panel{height:inherit;width:initial}.callibri_bttn_color{border:0!important}.callibri_bttn_color_vk:hover{background-color:#4E739B!important}.callibri_bttn_color_viber:hover{background-color:#785099!important}.callibri_bttn_color_ok:hover{background-color:#EB722E!important}@media screen and (max-width:2050px){.callibri_social_text{display:none}#callibri_call_opt_img svg{margin-right:10px!important}.callibri_panel_picture{padding:0;height:17px;margin:0 auto;}.callibri_social_svg{opacity:1!important}#modalPanel_options>.callibri_close_options,#modalPanel_options>.callibri_overrideOptions{margin-bottom:10px!important}#callibri_call_opt.callibri_overrideOptions,#callibri_chat_opt.callibri_overrideOptions,#callibri_req_call_opt.callibri_overrideOptions,#callibri_social_opt.callibri_overrideOptions{opacity:1!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in;-webkit-animation-name:optionInMobile!important;-webkit-animation-duration:.2s;-webkit-animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);margin-left:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes optionInMobile{0%,90%{opacity:1}100%{opacity:0}}.callibri_sphere_social_svg{width:38px;height:38px;margin-top:0;position:absolute}#switch_for_social svg{margin-right:0!important}.callibri_text_sphere_options.callibri_social_text{display:none}#switch_for_social #callibri_call_opt_img svg{position:static;width:25px!important;height:17px;margin:0 auto!important;}#switch_for_social .callibri_bttn_color_viber #callibri_call_opt_img svg,#switch_for_social .callibri_bttn_color_telegram #callibri_call_opt_img svg,#callibri_options #modalPanel_options .callibri_social_wrapper #callibri_call_opt_img svg,#callibri_options #modalPanel_options .callibri_social_wrapper .callibri_bttn_color_viber #callibri_call_opt_img svg,#switch_for_social .callibri_bttn_color_ok #callibri_call_opt_img svg{width:20px!important;height:17px;margin:0 auto!important}#callibri_options #modalPanel_options .callibri_social_wrapper .callibri_bttn_color_ok #callibri_call_opt_img svg{margin:0 auto!important}#callibri_options #modalPanel_options .callibri_social_wrapper .callibri_bttn_color_telegram #callibri_call_opt_img svg{width:15px!important;height:15px;margin-left:-2px!important;margin-top:3px!important}#callibri_call_opt.callibri_close_options,#callibri_call_opt.callibri_overrideOptions,#callibri_chat_opt.callibri_close_options,#callibri_chat_opt.callibri_overrideOptions,#callibri_req_call_opt.callibri_close_options,#callibri_req_call_opt.callibri_overrideOptions,#callibri_social_opt.callibri_overrideOptions{margin-right:5px!important}#modalPanel_options .callibri_bttn_color{background-color:#464C4F!important}#switch_for_social .callibri_sph_no_active{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}#social_svg{position:fixed;width:100%;}.callibri_social_wrapper .callibri_default_button{min-width:40px}.callibri_off_tab .callibri_wrapper_offer_social{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:25px;height:25px;margin-bottom:2px!important}.callibri_off_tab svg{height:20px;width:20px;padding:0!important}.callibri_off_tab .callibri_bttn_color_telegram svg{width:15px;height:15px;margin-top:1px;margin-left:-1px}.callibri_off_tab .callibri_bttn_color_facebook svg{width:15px;height:15px;margin-top:0}.callibri_off_tab .callibri_bttn_color_vk svg{width:20px;height:20px;margin-top:0}.callibri_off_tab .callibri_bttn_color_viber svg{height:15px;width:15px;margin-top:1px}.callibri_off_tab .callibri_bttn_color_ok svg{height:17px;width:17px;margin-left:1px;margin-top:0}#callibri_opacity_lvl2.callibri_opacity_in{height:100%!important}.callibri_text.callibri_text_sm.callibri_text_color{font-size:19px!important}#callibri_chatW,#callibri_footer,#callibri_map,#callibri_options,#callibri_reqCallW,#callibri_request,#callibri_soc,#callibri_social,#modalPanel{zoom:" + window.innerWidth / screen.width + "}#callibri_footer{position:absolute!important;width:100%;z-index:99999;top:auto!important;bottom:0; display:none}.callibri_mt31{margin-top:-9px}.callibri_policy{background-color:#D8D8D8!important}.callibri_button_block{bottom:0;margin-bottom:28px}.callibri-module-area .callibri_social_btns_wrapper{display:block!important}.callibri-module-area .callibri_social_button{margin:0 auto!important;width:100%!important}.callibri-module-area #callibri_fb_chat{height:35px!important}.callibri_chat_message.callibri_connected_plugin{padding:0!important}.callibri_request .callibri_policy{padding:14px!important}.callibri_request .callibri_policy .callibri_checkbox_parent{left:14px!important}.callibri_wrap_pict_flex{padding:0;width:100%;height:100%}.callibri_wrap_pict_flex .callibri_wrap_pict{border:none}#callibri_social .callibri_bttn_color_facebook,#callibri_social .callibri_bttn_color_ok,#callibri_social .callibri_bttn_color_telegram,#callibri_social .callibri_bttn_color_viber,#callibri_social .callibri_bttn_color_vk,#switch_for_social .callibri_bttn_color_facebook,#switch_for_social .callibri_bttn_color_ok,#switch_for_social .callibri_bttn_color_telegram,#switch_for_social .callibri_bttn_color_viber,#switch_for_social .callibri_bttn_color_vk,.callibri_passive_icon,.callibri_social_svg path{background-color:transparent!important}.callibri_header_social_animation .callibri_sphere_social_svg{background-color:#f4f4f4}#callibri_options #modalPanel_options .callibri_social_wrapper #callibri_call_opt_img svg{background-color:transparent!important} .callibri_color_top_arrow .callibri_sphere_social_svg{background-color:transparent}.callibri_color_top_arrow{background-color:" + callibri_themes[theme].controls + "!important}.callibri_color_top_arrow #callibri_call_opt,.callibri_color_top_arrow .callibri_bttn_active{background-color:transparent!important}#callibri_callback_button_request{margin-top:10px}.callibri_active_color{fill:#fff!important}.callibri_text_active{color:#fff!important}#switch_for_social .callibri_text_panel{z-index:2}#callibri_mobile_close{max-width:65px;}.callibri_phone_callme_phone{text-align:left}#callibri_social #callibri_call_opt, #callibri_social #callibri_call_opt #callibri_call_opt_img{position:relative}#callibri_social #callibri_call_opt_img svg{position:absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}#callibri_social #callibri_call_opt.callibri_bttn_color_telegram #callibri_call_opt_img svg,#callibri_social #callibri_call_opt.callibri_bttn_color_ok #callibri_call_opt_img svg,#callibri_social #callibri_call_opt.callibri_bttn_color_vk #callibri_call_opt_img svg,#callibri_social #callibri_call_opt.callibri_bttn_color_facebook #callibri_call_opt_img svg{margin:0!important;} #switch_for_social #callibri_call_opt.callibri_bttn_color_vk{top:0!important}#callibri_appendHere{height:inherit;overflow-y: auto;}#callibri_appendHere .callibri_overflow{height: auto}.callibri_groups_info{flex-shrink:0;margin:0;display: flex;align-items: center;height:auto}.callibri_groups_online{height:auto;line-height:0!important;}.callibri_groups_line{display:flex;justify-content: space-between;text-align: left;align-items: center;height:auto}.callibri_groups_img{margin-top:0}";
    _callibri.css.ALL_CSS_MOBILE_LEFT = ".callibri_wrap_pict_colorring{left:12px!important;right:auto!important}.callibri_wrap_pict_s_mob{left:65px!important}.callibri_soc .callibri_wrap_pict_index{width:60px;height:60px;left:15px !important;bottom:10px}.callibri_social_wrapper{z-index:2147483647;position:fixed;left:90px;right:initial;color:#fff;bottom:25px;flex-direction:row}#modalPanel_options{align-items:flex-start!important;z-index:2147483647;position:fixed;left:7px;right:initial;color:#fff;bottom:75px;flex-direction:column-reverse!important;width:initial;background-color:inherit}";
    _callibri.css.ALL_CSS_MOBILE_RIGHT = ".callibri_wrap_pict_colorring{left:auto!important;right:12px!important}.callibri_wrap_pict_s_mob{right:65px!important}.callibri_soc .callibri_wrap_pict_index{width:60px;height:60px;right:15px !important;bottom:10px}.callibri_social_wrapper{z-index:2147483647;position:fixed;right:90px;left:initial;color:#fff;bottom:25px;flex-direction:row-reverse}#modalPanel_options{align-items:flex-end!important;z-index:2147483647;position:fixed;right:7px;left:initial;color:#fff;bottom:75px;flex-direction:column-reverse!important;width:initial;background-color:inherit}";
    _callibri.css.MOBILE_IPHONE_TEXT = "textarea.callibri_textarea, input.callibri_textarea{font-size: 1.6vh !important}.callibri_req_inp{height:1% !important}#callibri_options,#callibri_soc,#modalPanel,#callibri_request,#callibri_reqCallW,#callibri_map,#callibri_chatW,#callibri_social,#callibri_callback_phone,.callibri_textarea,.callibri_color_footer:before{-moz-text-size-adjust:" + text_adjust + "%;-ms-text-size-adjust:" + text_adjust + "%;-webkit-text-size-adjust:" + text_adjust + "%;line-height:normal!important}.callibri_chat_text_field,.callibri_chat_text_field_right,.callibri_text,.callibri_req_text{line-height:inherit!important}#callibri_callback_phone{padding:0!important;padding-left:10px!important}";
    _callibri.css.AVATAR = 'label.avatar_widget{text-decoration:none!important;cursor:pointer!important}.block-popup{position:relative}.widget-popup-content{width:298px;height:auto;position:absolute;z-index:2;top:0;bottom:0;left:0;right:0;margin:auto;background-color:#fff;box-shadow:0 0 0 1px #c1c1c1,0 0 0 3px #fff;border-radius:6px;padding:8px 0 1px 8px;-moz-box-sizing:border-box;box-sizing:border-box}.widget-popup-shower{color:#00f;cursor:pointer;text-decoration:underline}.popup-shower:hover{color:#00a;text-decoration:underline}.widget-popup-closer{position:absolute;top:-8px;right:-6px;border:none;display:block;width:20px;height:20px;cursor:pointer}.widget-popup-checkbox:checked + .widget-popup{opacity:1;display:block}div.ava_widget{border:3px solid transparent;-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;float:left}div.ava_widget:hover,div.ava_widget:active{border:3px solid #51f91d;-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px}.autorization-ava-widget p,.autorization-ava-widget img{display:inline-block;vertical-align:middle;text-align:left}.autorization-ava-widget p{font-size:13px;color:#7f7f7f;padding-left:3px;padding-right:5px}.autorization-ava-widget img{padding-right:2px}.autorization-ava-widget{padding-left:3px}.block-input{display:table;padding:10px 0 10px 3px}input.input-widget{font-size:13px;padding:4.5px 8px!important;background-color:#fff;outline:none;border:1px solid #c5c5c5;border-radius:5px;color:#000;min-width:240px}input.input-widget::-webkit-input-placeholder{color:#7f7f7f!important}input.input-widget::-moz-placeholder{color:#7f7f7f}input.input-widget:-moz-placeholder{color:#7f7f7f}input.input-widget:-ms-input-placeholder{color:#7f7f7f}input.input-widget:focus{color:#000}input.input-widget,.button-input,.callibri_over_avatar{display:table-cell!important;vertical-align:middle}.callibri_over_avatar{width:5px}.button-input{cursor:pointer;padding-left:3px}.box-wid{position:relative;background:#fff}.callibri_avatar_confirmed{width:38px;height:38px;margin-left:-1px;cursor:pointer}.widget-border:after,.widget-border:before{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.widget-border:after{border-color:rgba(136,183,213,0);border-bottom-color:#88b7d5;border-width:11px;margin-left:-11px}.widget-border:before{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:15px;margin-left:-15px}div.ava_widget{margin-right:8px;margin-bottom:5px}input::-ms-clear{width:0;height:0}';
    _callibri.css.GENERAL_ANIMATION = ".callibri_widget_anim{will-change: all; transition: top .3s ease,left .3s ease,right .3s ease; animation: callibri_widget_opacity .2s ease}@keyframes callibri_widget_opacity{0%{opacity:0}100%{opacity:1}}.callibri_img_operator_writesAnim,.callibri_pencil_dots{-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_pencil_dots{opacity:0;-webkit-animation-name:pens_1;-moz-animation-name:pens_1;animation-name:pens_1;-webkit-animation-duration:1.06s;-moz-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes pens_1{0%,19%{opacity:0}100%,20%{opacity:1}}@-moz-keyframes pens_1{0%,19%{opacity:0}100%,20%{opacity:1}}@keyframes pens_1{0%,19%{opacity:0}100%,20%{opacity:1}}.callibti_anim2{-webkit-animation-name:pens_2!important;-moz-animation-name:pens_2!important;animation-name:pens_2!important}@-webkit-keyframes pens_2{0%,49%{opacity:0}100%,50%{opacity:1}}@-moz-keyframes pens_2{0%,49%{opacity:0}100%,50%{opacity:1}}@keyframes pens_2{0%,49%{opacity:0}100%,50%{opacity:1}}.callibti_anim3{-webkit-animation-name:pens_3!important;-moz-animation-name:pens_3!important;animation-name:pens_3!important}@-webkit-keyframes pens_3{0%,79%{opacity:0}100%,80%{opacity:1}}@-moz-keyframes pens_3{0%,79%{opacity:0}100%,80%{opacity:1}}@keyframes pens_3{0%,79%{opacity:0}100%,80%{opacity:1}}.callibri_img_operator_writesAnim{margin-left:2px;font-size:16px!important;font-smoothing:antialiased!important;-webkit-animation-name:pencilGoRight;-moz-animation-name:pencilGoRight;animation-name:pencilGoRight;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:1.06s;-moz-animation-duration:1.06s;animation-duration:1.06s;animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_footer_animate_open,.callibri_text_wrap{-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1}.callibri_blmb,.callibri_text_wrap{-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes pencilGoRight{0%{margin-left:2px}80%{margin-left:28px}100%{margin-left:30px}}@-moz-keyframes pencilGoRight{0%{margin-left:2px}100%,80%{margin-left:30px}}@keyframes pencilGoRight{0%{margin-left:2px}100%,80%{margin-left:30px}}.callibri_text_wrap{font-smoothing:antialiased!important;left:80px;bottom:20px;margin-left:12px;position:fixed;float:left;background:rgba(0,0,0,.7);-webkit-box-shadow:0 15px 12px 0 rgba(0,0,0,.22),0 19px 38px 0 rgba(0,0,0,.3);box-shadow:0 15px 12px 0 rgba(0,0,0,.22),0 19px 38px 0 rgba(0,0,0,.3);font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:13.99px;color:#FFF;line-height:16px;-webkit-animation-name:text_in;-moz-animation-name:text_in;animation-name:text_in;-webkit-animation-duration:.4s;-moz-animation-duration:.4s;animation-duration:.4s;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_widget_out{-webkit-animation-name:widget_out;-moz-animation-name:widget_out;animation-name:widget_out;}.callibri_widget_out_r{-webkit-animation-name:widget_out_r;-moz-animation-name:widget_out_r;animation-name:widget_out_r;}.callibri_widget_out,.callibri_widget_out_l,.callibri_widget_out_r{-webkit-animation-iteration-count: 1;-webkit-animation-duration:.5s;-moz-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;animation-timing-function:ease}.callibri_widget_out_l{-webkit-animation-duration:.9s;-moz-animation-duration:9s;animation-duration:.9s;-webkit-animation-name:widget_out_l;-moz-animation-name:widget_out_l;animation-name:widget_out_l;}@-webkit-keyframes widget_out{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;top:90vh;z-index:0;}}@-moz-keyframes widget_out{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;top:90vh;z-index:0}}@keyframes widget_out{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;top:90vh;z-index:0;}}@-webkit-keyframes widget_out_l{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;top:90vh;z-index:0;}}@-moz-keyframes widget_out_l{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;top:90vh;z-index:0}}@keyframes widget_out_l{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;left:-735px;z-index:0;}}@-webkit-keyframes widget_out_r{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;left:100vw;z-index:0;}}@-moz-keyframes widget_out_r{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;left:100vw;z-index:0}}@keyframes widget_out_r{0%{opacity:1;z-index:2147483647}25%{opacity:1;}100%{opacity:0;left:100vw;z-index:0;}}@-webkit-keyframes text_in{0%{width:0;height:0}50%{width:220px;height:60px}100%{width:170px;height:60px}}@-moz-keyframes text_in{0%{width:0;height:0}50%{width:220px;height:60px}100%{width:170px;height:60px}}@keyframes text_in{0%{width:0;height:0}50%{width:220px;height:60px}100%{width:170px;height:60px}}.callibri_wrap_pict_index{line-height:0;-webkit-border-radius:50%!important;border-radius:50%!important}.callibri_blmb{-webkit-border-radius:50%!important;border-radius:50%!important;-webkit-animation-name:blmb;-moz-animation-name:blmb;animation-name:blmb;-webkit-animation-duration:5s;-moz-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s;animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_footer_animate_close,.callibri_footer_animate_open{-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_footer_animate_open{-webkit-animation-name:footer_open;-moz-animation-name:footer_open;animation-name:footer_open;-webkit-animation-duration:.2s;-moz-animation-duration:.2s;animation-duration:.2s;animation-iteration-count:1;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes footer_open{0%{height:40px}100%{height:250px}}@-moz-keyframes footer_open{0%{height:40px}100%{height:250px}}@keyframes footer_open{0%{height:40px}100%{height:250px}}.callibri_footer_animate_close{-webkit-animation-name:footer_close;-moz-animation-name:footer_close;animation-name:footer_close;-webkit-animation-duration:.2s;-moz-animation-duration:.2s;animation-duration:.2s;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;animation-iteration-count:1;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes footer_close{0%{height:250px}100%{height:40px}}@-moz-keyframes footer_close{0%{height:250px}100%{height:40px}}@keyframes footer_close{0%{height:250px}100%{height:40px}}#callibri_wrap_pict_operator{overflow:hidden}#operator_picture.callibri_inner_picture{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:50%!important;border-radius:50%!important;width:100%;height:100%;object-fit:cover;}#callibri_call_opt.callibri_close_options,#callibri_chat_opt.callibri_close_options,#callibri_req_call_opt.callibri_close_options{text-align:center;background-color:#464C4F;margin-bottom:0;margin-right:10px;height:40px;width:inherit;-webkit-animation-name:optionOut;-moz-animation-name:optionOut;animation-name:optionOut;-webkit-animation-duration:.2s;-moz-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0);animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes optionOut{0%{width:inherit;opacity:1;margin-right:10px}99%{width:inherit;opacity:0;margin-right:0}100%{width:0;opacity:0;margin-right:0}}@-moz-keyframes optionOut{0%{width:inherit;opacity:1;margin-right:10px}99%{width:inherit;opacity:0;margin-right:0}100%{width:0;opacity:0;margin-right:0}}@keyframes optionOut{0%{width:inherit;opacity:1;margin-right:10px}99%{width:inherit;opacity:0;margin-right:0}100%{width:0;opacity:0;margin-right:0}}#callibri_call_opt.callibri_overrideOptions,#callibri_chat_opt.callibri_overrideOptions,#callibri_req_call_opt.callibri_overrideOptions,#callibri_social_opt.callibri_overrideOptions{opacity:0;text-align:center;background-color:#464C4F;margin-bottom:0;margin-right:10px;height:40px;-webkit-animation-delay:.2s;-moz-animation-delay:.2s;animation-delay:.2s;-webkit-animation-name:optionIn;-moz-animation-name:optionIn;animation-name:optionIn;-webkit-animation-duration:.2s;-moz-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0);animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_opacity_in,.callibri_opacity_out{-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes optionIn{0%{width:0;opacity:0;margin-left:-15px}1%{width:0;opacity:1;margin-left:-15px}100%{width:inherit;opacity:1;margin-left:0}}@-moz-keyframes optionIn{0%{width:0;opacity:0;margin-left:-15px}1%{width:0;opacity:1;margin-left:-15px}100%{width:inherit;opacity:1;margin-left:0}}@keyframes optionIn{0%{width:0;opacity:0;margin-left:-15px}1%{width:0;opacity:1;margin-left:-15px}100%{width:inherit;opacity:1;margin-left:0}}.callibri_overrideOptions0,.callibri_overrideOptions0>.callibri_panel_picture svg{-webkit-animation-delay:0!important;-moz-animation-delay:0!important;animation-delay:0!important;z-index:2147483646}.callibri_overrideOptions1,.callibri_overrideOptions1>.callibri_panel_picture svg{-webkit-animation-delay:50ms!important;-moz-animation-delay:50ms!important;animation-delay:50ms!important;z-index:2147483645}.callibri_overrideOptions2,.callibri_overrideOptions2>.callibri_panel_picture svg{-webkit-animation-delay:.1s!important;-moz-animation-delay:.1s!important;animation-delay:.1s!important;z-index:2147483644}.callibri_overrideOptions3,.callibri_overrideOptions3>.callibri_panel_picture svg{-webkit-animation-delay:150ms!important;-moz-animation-delay:150ms!important;animation-delay:150ms!important;z-index:2147483643}.callibri_overrideOptions4,.callibri_overrideOptions4>.callibri_panel_picture svg{-webkit-animation-delay:.2s!important;-moz-animation-delay:.2s!important;animation-delay:.2s!important;z-index:2147483642}.callibri_overrideOptions5,.callibri_overrideOptions5>.callibri_panel_picture svg{-webkit-animation-delay:250ms!important;-moz-animation-delay:250ms!important;animation-delay:250ms!important;z-index:2147483641}.callibri_overrideOptions6,.callibri_overrideOptions6>.callibri_panel_picture svg{-webkit-animation-delay:.3s!important;-moz-animation-delay:.3s!important;animation-delay:.3s!important;z-index:2147483640}.callibri_overrideOptions7,.callibri_overrideOptions7>.callibri_panel_picture svg{-webkit-animation-delay:350ms!important;-moz-animation-delay:350ms!important;animation-delay:350ms!important;z-index:2147483639}.callibri_overrideOptions8,.callibri_overrideOptions8>.callibri_panel_picture svg{-webkit-animation-delay:.4s!important;-moz-animation-delay:.4s!important;animation-delay:.4s!important;z-index:2147483639}.callibri_overrideOptions9,.callibri_overrideOptions9>.callibri_panel_picture svg{-webkit-animation-delay:450ms!important;-moz-animation-delay:450ms!important;animation-delay:450ms!important;z-index:2147483639}.callibri_overrideOptions10,.callibri_overrideOptions10>.callibri_panel_picture svg{-webkit-animation-delay:0s!important;-moz-animation-delay:0s!important;animation-delay:0s!important;z-index:2147483639}.callibri_opacity_out{-webkit-animation-name:opacity_out;-moz-animation-name:opacity_out;animation-name:opacity_out;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;animation-duration:.1s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes opacity_out{0%{background:rgba(0,0,0,.7)}100%{background:rgba(0,0,0,.3)}}@-moz-keyframes opacity_out{0%{background:rgba(0,0,0,.7)}100%{background:rgba(0,0,0,.3)}}@keyframes opacity_out{0%{background:rgba(0,0,0,.7)}100%{background:rgba(0,0,0,.3)}}.callibri_opacity_in{-webkit-animation-name:opacity_in;-moz-animation-name:opacity_in;animation-name:opacity_in;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;animation-duration:.1s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0,0,0,0)}@-webkit-keyframes opacity_in{0%{background:rgba(0,0,0,.3)}100%{background:rgba(0,0,0,.7)}}@-moz-keyframes opacity_in{0%{background:rgba(0,0,0,.3)}100%{background:rgba(0,0,0,.7)}}@keyframes opacity_in{0%{background:rgba(0,0,0,.3)}100%{background:rgba(0,0,0,.7)}}.callibri_close_options .callibri_text_sphere_options,.callibri_close_options>.callibri_panel_picture svg{-webkit-transition:all .1s ease-in;-o-transition:all .1s ease-in;-moz-transition:all .1s ease-in;transition:all .1s ease-in;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0,0,0,0);-moz-animation-timing-function:cubic-bezier(0,0,0,0);animation-timing-function:cubic-bezier(0,0,0,0)}.callibri_wrap_pict_s{width:50px!important;height:50px!important;z-index:1;right:89px!important}.callibri_wrap_pict_l{will-change: transform;width:65px!important;height:65px!important;z-index:13;right:30px!important}.callibri_anim_vibro{will-change: transform;-webkit-animation:move 3.3s infinite ease;-moz-animation:move 3.3s infinite ease; animation:move 3.3s infinite ease;-webkit-animation-delay:2s;-moz-animation-delay:2s;animation-delay:2s}.callibri_anim_vibro_cr{-webkit-animation:move_cr 3.3s infinite ease;-moz-animation:move_cr 3.3s infinite ease; animation:move_cr 3.3s infinite ease;-webkit-animation-delay:2s;-moz-animation-delay:2s;animation-delay:2s}@-webkit-keyframes colorring{from,to{background-color:#090;-webkit-box-shadow:-32px 0 100px -25px #0f0 inset;box-shadow:-32px 0 100px -25px #0f0 inset;-webkit-transform:rotate(0);transform:rotate(0)}33%{background-color:#f60;-webkit-box-shadow:-32px 0 100px -25px #ff0 inset;box-shadow:-32px 0 100px -25px #ff0 inset;-webkit-transform:rotate(-120deg);transform:rotate(-120deg)}66%{background-color:#06f;-webkit-box-shadow:-32px 0 100px -25px #0ff inset;box-shadow:-32px 0 100px -25px #0ff inset;-webkit-transform:rotate(-240deg);transform:rotate(-240deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-moz-keyframes colorring{from,to{background-color:#090;box-shadow:-32px 0 100px -25px #0f0 inset;-moz-transform:rotate(0);transform:rotate(0)}33%{background-color:#f60;box-shadow:-32px 0 100px -25px #ff0 inset;-moz-transform:rotate(-120deg);transform:rotate(-120deg)}66%{background-color:#06f;box-shadow:-32px 0 100px -25px #0ff inset;-moz-transform:rotate(-240deg);transform:rotate(-240deg)}100%{-moz-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes colorring{from,to{background-color:#090;-webkit-box-shadow:-32px 0 100px -25px #0f0 inset;box-shadow:-32px 0 100px -25px #0f0 inset;-webkit-transform:rotate(0);-moz-transform:rotate(0);transform:rotate(0)}33%{background-color:#f60;-webkit-box-shadow:-32px 0 100px -25px #ff0 inset;box-shadow:-32px 0 100px -25px #ff0 inset;-webkit-transform:rotate(-120deg);-moz-transform:rotate(-120deg);transform:rotate(-120deg)}66%{background-color:#06f;-webkit-box-shadow:-32px 0 100px -25px #0ff inset;box-shadow:-32px 0 100px -25px #0ff inset;-webkit-transform:rotate(-240deg);-moz-transform:rotate(-240deg);transform:rotate(-240deg)}100%{-webkit-transform:rotate(-360deg);-moz-transform:rotate(-360deg);transform:rotate(-360deg)}}.callibri_wrap_pict_colorring_opacity{-webkit-animation:colorring_opacity 6.6s 1;-moz-animation:colorring_opacity 6.6s 1;animation:colorring_opacity 6.6s 1}@-webkit-keyframes colorring_opacity{31%,from,to{opacity:0}36%,95%{opacity:1}}@-moz-keyframes colorring_opacity{31%,from,to{opacity:0}36%,95%{opacity:1}}@keyframes colorring_opacity{31%,from,to{opacity:0}36%,95%{opacity:1}}.callibri_wrap_pict_l{z-index:15!important}.callibri_opacity{opacity:0;}#callibri_chatW{transition: opacity 0.3s ease 0s;}.callibri_groups_online.callibri_groups_online_on{color:#25b10d;}#callibri_group_name{width:100%;text-align:center;padding:5px;background:#f6f6f6;color:#a3a3a3;border-radius: 7px;margin-top: -10px;margin-bottom: 18px;display:none;cursor:pointer;}#callibri_group_name:hover{background:#eeeeee;}";
    _callibri.css.RIGHT_ANIMATION = '@-webkit-keyframes move_cr{24%,from,to{-webkit-transform:matrix(1,0,0,1,0,0);}12%{-webkit-transform:matrix(1.04,0,0,1.04,2,2);}}@-moz-keyframes move_cr{24%,from,to{-moz-transform:matrix(1,0,0,1,0,0);}12%{-moz-transform:matrix(1.04,0,0,1.04,2,2);}}@keyframes move_cr{24%,from,to{transform:matrix(1,0,0,1,0,0)}12%{transform:matrix(1.04,0,0,1.04,2,2)}}@-webkit-keyframes move{24%,from,to{-webkit-transform:matrix(1,0,0,1,0,0)}12%{-webkit-transform:matrix(1.05,0,0,1.05,0,0);}}@-moz-keyframes move{24%,from,to{-moz-transform:matrix(1,0,0,1,0,0)}12%{-moz-transform:matrix(1.05,0,0,1.05,0,0)}}@keyframes move{24%,from,to{transform:matrix(1,0,0,1,0,0)}12%{transform:matrix(1.05,0,0,1.05,0,0)}}.callibri_wrap_pict_colorring{-webkit-animation:colorring 3s infinite;-moz-animation:colorring 3s infinite;animation:colorring 3s infinite;-webkit-animation-delay:2s;-moz-animation-delay:2s;animation-delay:2s}.callibri_soc{right:0}.callibri_bg_soc_l{right:30px}.widget-border{position:relative;background:0 0;-webkit-border-radius:6px;border-radius:6px;width:316px;height:297px}.widget-border:after,.widget-border:before{left:100%;top:45%;border:solid transparent;content:" "!important;height:0;width:0;position:absolute;pointer-events:none}.widget-border:after{border-color:rgba(136,183,213,0);border-left-color:#88b7d5;border-width:11px;margin-top:-11px}.widget-border:before{border-color:rgba(255,255,255,0);border-left-color:#fff;border-width:15px;margin-top:-15px}.widget-popup{position:fixed;z-index:10;height:inherit}.resizer{width:3px;height:100%;position:absolute;left:0;bottom:0;cursor:w-resize}.callibri_widget{overflow:hidden;opacity:1;background-color:#fff;min-width:435px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;right:-435px;top:inherit;bottom:0;width:350px;float:right;position:fixed;z-index:2147483647;font-smoothing:antialiased;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 20px 0;box-shadow:rgba(0,0,0,.2) 0 0 20px 0;max-height:100%}.callibri_options{z-index:2147483647;position:fixed;right:140px;color:#fff;bottom:20px;padding-right:20px}.callibri_hooktext_wrapper,.callibri_soc{font-smoothing:antialiased!important;position:fixed}.callibri_soc{padding-top:10px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;z-index:2147483645;cursor:pointer;font-size:0;padding-right:15px;padding-bottom:15px}.callibri_hooktext_wrapper{right:30px;bottom:100px;top:auto;-webkit-transform-origin:100% 50%;-moz-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;float:left;background:#fff;-webkit-box-shadow:0 0 33px 0 rgba(0,0,1,.1);box-shadow:0 0 33px 0 rgba(0,0,1,.1);font-family:open sans,Arial,sans-serif;color:#535353;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:space-between;-ms-flex-pack:space-between;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}#callibri_options>.callibri_modal_panel{margin-left:20px}.callibri_delay0{position:absolute;margin-left:0}@-webkit-keyframes hook_in{0%{-webkit-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:90% 100%;transform-origin:90% 100%;padding:0}1%{-webkit-transform:matrix(.8,0,0,.8,0,0);transform:matrix(.8,0,0,.8,0,0);opacity:0;-webkit-transform-origin:90% 100%;transform-origin:90% 100%;}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:85% 100%;transform-origin:85% 100%}}@-moz-keyframes hook_in{0%{-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-moz-transform-origin:90% 100%;transform-origin:90% 100%;}1%{-moz-transform:matrix(.8,0,0,.8,0,0);transform:matrix(.8,0,0,.8,0,0);opacity:0;-moz-transform-origin:90% 100%;transform-origin:90% 100%;}100%{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-moz-transform-origin:85% 100%;transform-origin:85% 100%}}@keyframes hook_in{0%{-webkit-transform:matrix(0,0,0,0,0,0);-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:90% 100%;-moz-transform-origin:90% 100%;transform-origin:90% 100%;}1%{-webkit-transform:matrix(.8,0,0,.8,0,0);-moz-transform:matrix(.8,0,0,.8,0,0);transform:matrix(.8,0,0,.8,0,0);opacity:0;-webkit-transform-origin:90% 100%;-moz-transform-origin:90% 100%;transform-origin:90% 100%;}100%{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:85% 100%;-moz-transform-origin:85% 100%;transform-origin:85% 100%}}@-webkit-keyframes hook_out{0%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:90% 100%;transform-origin:90% 100%}99%{-webkit-transform:matrix(.5,0,0,.5,0,0);transform:matrix(.5,0,0,.5,0,0);opacity:0;-webkit-transform-origin:90% 100%;transform-origin:90% 100%}100%{-webkit-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:90% 100%;transform-origin:90% 100%;padding:0}}@-moz-keyframes hook_out{0%{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-moz-transform-origin:90% 100%;transform-origin:90% 100%}99%{-moz-transform:matrix(.5,0,0,.5,0,0);transform:matrix(.5,0,0,.5,0,0);opacity:0;-moz-transform-origin:90% 100%;transform-origin:90% 100%}100%{-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-moz-transform-origin:90% 100%;transform-origin:90% 100%;padding:0}}@keyframes hook_out{0%{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:90% 100%;-moz-transform-origin:90% 100%;transform-origin:90% 100%}99%{-webkit-transform:matrix(.5,0,0,.5,0,0);-moz-transform:matrix(.5,0,0,.5,0,0);transform:matrix(.5,0,0,.5,0,0);opacity:0;-webkit-transform-origin:90% 100%;-moz-transform-origin:90% 100%;transform-origin:90% 100%}100%{-webkit-transform:matrix(0,0,0,0,0,0);-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:90% 100%;-moz-transform-origin:90% 100%;transform-origin:90% 100%;padding:0}}';
    _callibri.css.LEFT_ANIMATION = '.callibri_hooktext_wrapper_close{right:auto;left:0}.callibri_wrap_pict_colorring_opacity{left:0!important;right:auto}@-webkit-keyframes move_cr{24%,from,to{-webkit-transform:matrix(1,0,0,1,0,0)}12%{-webkit-transform:matrix(1.04,0,0,1.04,-2,2)}}@-moz-keyframes move_cr{24%,from,to{-moz-transform:matrix(1,0,0,1,0,0)}12%{-moz-transform:matrix(1.04,0,0,1.04,-2,2)}}@keyframes move_cr{24%,from,to{transform:matrix(1,0,0,1,0,0)}12%{transform:matrix(1.04,0,0,1.04,-2,2);}}.callibri_wrap_pict_name{left:35px;right:auto}.callibri_wrap_pict_name_robot{left:100px;right:auto}.callibri_hooktext_wrapper:after{left:11%!important}.callibri_wrap_pict_colorring{-webkit-animation:colorring 3s infinite;-moz-animation:colorring 3s infinite;animation:colorring 3s infinite;-webkit-animation-delay:2s;-moz-animation-delay:2s;animation-delay:2s}@-webkit-keyframes move{24%,from,to{-webkit-transform:matrix(1,0,0,1,0,0);}12%{-webkit-transform:matrix(1.05,0,0,1.05,0,0)}}@-moz-keyframes move{24%,from,to{transform:matrix(1,0,0,1,0,0)}12%{transform:matrix(1.05,0,0,1.05,0,0)}}@keyframes move{24%,from,to{transform:matrix(1,0,0,1,0,0)}12%{transform:matrix(1.05,0,0,1.05,0,0);}}.callibri_wrap_pict_s{left:92px!important;right:auto!important}.callibri_wrap_pict_l{left:35px!important;right:auto!important}.callibri_soc{left:0}.callibri_bg_soc{left:36px}.widget-border{position:relative;background:0 0;-webkit-border-radius:6px;border-radius:6px;width:316px;height:297px}.widget-border:after,.widget-border:before{left:100%;top:45%;border:solid transparent;content:" "!important;height:0;width:0;position:absolute;pointer-events:none}.widget-border:after{border-color:rgba(136,183,213,0);border-left-color:#88b7d5;border-width:11px;margin-top:-11px}.widget-border:before{border-color:rgba(255,255,255,0);border-left-color:#fff;border-width:15px;margin-top:-15px}.widget-popup{position:fixed;z-index:10;height:inherit}.resizer{width:3px;height:100%;position:absolute;left:0;bottom:0;cursor:w-resize}.callibri_widget{overflow:hidden;opacity:1;background-color:#fff;min-width:435px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;right:calc(100vw + 435px);top:inherit;bottom:0;width:350px;float:left;position:fixed;z-index:2147483647;font-smoothing:antialiased;-webkit-box-shadow:rgba(0,0,0,.2) 0 0 20px 0;box-shadow:rgba(0,0,0,.2) 0 0 20px 0;max-height:100%}.callibri_options{z-index:2147483647;position:fixed;left:140px;color:#fff;bottom:20px;padding-left:20px}.callibri_hooktext_wrapper,.callibri_soc{font-smoothing:antialiased!important;position:fixed}.callibri_soc{padding-top:10px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;z-index:2147483645;cursor:pointer;font-size:0;padding-left:15px;padding-bottom:15px}.callibri_hooktext_wrapper{left:35px;bottom:100px;top:auto;-webkit-transform-origin:100% 50%;-moz-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;float:left;background:#fff;-webkit-box-shadow:0 0 33px 0 rgba(0,0,1,.1);box-shadow:0 0 33px 0 rgba(0,0,1,.1);font-family:open sans,Arial,sans-serif;color:#535353;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:-moz-box;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:space-between;-ms-flex-pack:space-between;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}#callibri_options>.callibri_modal_panel{margin-left:20px}.callibri_delay0{position:absolute;margin-left:0}@-webkit-keyframes hook_in{0%{-webkit-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:15% 100%;transform-origin:15% 100%;}1%{-webkit-transform:matrix(.8,0,0,.8,0,0);transform:matrix(.8,0,0,.8,0,0);opacity:0;-webkit-transform-origin:15% 100%;transform-origin:15% 100%;}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:15% 100%;transform-origin:15% 100%}}@-moz-keyframes hook_in{0%{-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-moz-transform-origin:15% 100%;transform-origin:15% 100%;}1%{-moz-transform:matrix(.8,0,0,.8,0,0);transform:matrix(.8,0,0,.8,0,0);opacity:0;-moz-transform-origin:15% 100%;transform-origin:15% 100%;}100%{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-moz-transform-origin:15% 100%;transform-origin:15% 100%}}@keyframes hook_in{0%{-webkit-transform:matrix(0,0,0,0,0,0);-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:15% 100%;-moz-transform-origin:15% 100%;transform-origin:15% 100%;}1%{-webkit-transform:matrix(.8,0,0,.8,0,0);-moz-transform:matrix(.8,0,0,.8,0,0);transform:matrix(.8,0,0,.8,0,0);opacity:0;-webkit-transform-origin:15% 100%;-moz-transform-origin:15% 100%;transform-origin:15% 100%;}100%{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:15% 100%;-moz-transform-origin:15% 100%;transform-origin:15% 100%}}@-webkit-keyframes hook_out{0%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:15% 100%;transform-origin:15% 100%}99%{-webkit-transform:matrix(.5,0,0,.5,0,0);transform:matrix(.5,0,0,.5,0,0);opacity:0;-webkit-transform-origin:15% 100%;transform-origin:15% 100%}100%{-webkit-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:15% 100%;transform-origin:15% 100%;padding:0}}@-moz-keyframes hook_out{0%{-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-moz-transform-origin:15% 100%;transform-origin:15% 100%}99%{-moz-transform:matrix(.5,0,0,.5,0,0);transform:matrix(.5,0,0,.5,0,0);opacity:0;-moz-transform-origin:15% 100%;transform-origin:15% 100%}100%{-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-moz-transform-origin:15% 100%;transform-origin:15% 100%;padding:0}}@keyframes hook_out{0%{-webkit-transform:matrix(1,0,0,1,0,0);-moz-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0);opacity:1;-webkit-transform-origin:15% 100%;-moz-transform-origin:15% 100%;transform-origin:15% 100%}99%{-webkit-transform:matrix(.5,0,0,.5,0,0);-moz-transform:matrix(.5,0,0,.5,0,0);transform:matrix(.5,0,0,.5,0,0);opacity:0;-webkit-transform-origin:15% 100%;-moz-transform-origin:15% 100%;transform-origin:15% 100%}100%{-webkit-transform:matrix(0,0,0,0,0,0);-moz-transform:matrix(0,0,0,0,0,0);transform:matrix(0,0,0,0,0,0);opacity:0;-webkit-transform-origin:15% 100%;-moz-transform-origin:15% 100%;transform-origin:15% 100%;padding:0}}';
    _callibri.css.SPRITE_MIN = '.callibrispr-0,.callibrispr-1,.callibrispr-10,.callibrispr-11,.callibrispr-12,.callibrispr-13,.callibrispr-14,.callibrispr-15,.callibrispr-16,.callibrispr-17,.callibrispr-18,.callibrispr-19,.callibrispr-2,.callibrispr-20,.callibrispr-21,.callibrispr-23,.callibrispr-24,.callibrispr-25,.callibrispr-26,.callibrispr-27,.callibrispr-28,.callibrispr-29,.callibrispr-3,.callibrispr-4,.callibrispr-5,.callibrispr-6,.callibrispr-7,.callibrispr-8,.callibrispr-9,.callibrispr-addNew{width:50px;height:50px}.callibrispr{background-image:url(' + callibri_image_path + 'callibri_avatars.png);background-repeat:no-repeat;display:block}.callibrispr-0{background-position:-8px -5px}.callibrispr-1{background-position:-8px -65px}.callibrispr-10{background-position:-8px -125px}.callibrispr-11{background-position:-8px -185px}.callibrispr-12{background-position:-5px -245px}.callibrispr-13{background-position:-6px -305px}.callibrispr-14{background-position:-8px -365px}.callibrispr-15{background-position:-8px -425px}.callibrispr-16{background-position:-8px -485px}.callibrispr-17{background-position:-8px -545px}.callibrispr-18{background-position:-8px -605px}.callibrispr-19{background-position:-8px -665px}.callibrispr-2{background-position:-8px -725px}.callibrispr-20{background-position:-8px -785px}.callibrispr-21{background-position:-8px -845px}.callibrispr-22{width:50px;height:50px;background-position:-8px -905px}.callibrispr-23{background-position:-8px -965px}.callibrispr-24{background-position:-8px -1025px}.callibrispr-25{background-position:-8px -1085px}.callibrispr-26{background-position:-8px -1145px}.callibrispr-27{background-position:-8px -1205px}.callibrispr-28{background-position:-8px -1265px}.callibrispr-29{background-position:-8px -1325px}.callibrispr-3{background-position:-8px -1385px}.callibrispr-4{background-position:-8px -1445px}.callibrispr-5{background-position:-8px -1505px}.callibrispr-6{background-position:-8px -1565px}.callibrispr-7{background-position:-9px -1625px}.callibrispr-8{background-position:-8px -1685px}.callibrispr-9{background-position:-8px -1745px}.callibrispr-addNew{background-position:-5px -1805px}.callibrispr-close_widget_smiles{width:22px;height:22px;background-position:-5px -1865px}.callibrispr-ok{border-radius:4px;width:29px;height:14px;background-position:0 -1890px}';
    _callibri.css.IE_GENERAL_FIX = '.callibri_hooktext_out{display:none}.callibri_hooktext_in{display:block}.callibri_widget_out{opacity:0;right:-350px;z-index:0}';
    _callibri.css.IE_891011 = '#switch_for_social #callibri_call_opt_img svg{margin-top:6px!important}#callibri_social a{width:100%;display:inline-block}#callibri_social #callibri_call_opt{float:left}.callibri_soc_title{margin-top:10px}.callibri_inner_picture,.callibri_panel_picture{float:right;}.callibri_phone_ex{}'; //'#callibri_text_in{margin-bottom:10px}.callibri_hooktext_wrapper hr{width:320px!important;height:1px!important;border:1px solid #f0f0f0!important;margin-left:-20px;margin-top:10px;margin-bottom:10px}.callibri_chat_text_field,.callibri_chat_text_field_right{width:80%}.callibri_unread svg{width:12px;margin-bottom:-3px} #callibri_text_in{float:left}.callibri_hooktext_wrapper .callibri_inner_picture{width:40px!important;height:40px!important;margin-left:5px;} .callibri_hooktext_wrapper .callibri_social_svg{margin-left:0px;width:45px;padding-left:20px;}.callibri_gradient{filter:none}#callibri_user_chat_actions .callibri_gray_locomotive{line-height:34px!important} .callibri_wrap_pict .callibri_sph_no_active{float:left} .callibri_wrap_pict .callibri_sph_active,.callibri_sph_no_active{margin-top:10px} .callibri_wrap_pict{line-height:50px!important;margin_top:10px;height:45px} .callibri_text_panel{width:50%;float:left; height:100%;line-height:50px!important} .callibri_wrap_pict_flex{width:20%} .callibri_header_social_animation{top:8px!important}.callibri_header_social_animation .callibri_social_svg{position:absolute;top:0;left:3px;margin:0!important;background-color:#FFF} #social_svg{padding-right:10px}.callibri_wrapperField_social .callibri_header_social_animation .callibri_social_svg{position:relative!important;background-color:transparent}.callibri_btn_send_dialog_to_email .callibri_panel_picture{margin-top:0px!important;float:left}';
    _callibri.css.IE_LEFT = '.callibri_widget_in{opacity:1;left:0;z-index:2147483647}';
    _callibri.css.IE_RIGHT = '.callibri_widget_in{opacity:1;right:0;z-index:2147483647}';
    _callibri.css.TABLET = '#callibri-widget-header-phone{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.callibri_close{padding-top: 10px;width: 40px;height:30px;margin: -50px 0px 0 0;}';
}

function callibriTabSwitchs(key, tab, num) { //все можно сократить до цикла
    var div = "";
    var hide_msg = key == 'chat' ? 'callibri_hideMSG()' : "";
    hide_msg = key == 'contact' ? "callibriTabContact()" : "";
    var social_header = key == 'social' ? callibri_get_social_tabs('header') : "";
    var chat = key == 'chat' ? "<div class='callibri_bg_widget' id='callibri_badge'><div class='callibri_bg_text_widget' name='callibri_bg_text'>+1</div></div>" : "";
    div = "<div class='callibri_wrap_pict_flex'><div class='callibri_wrap_pict callibri_passive_icon" + (callibri_onetab ? 'callibri_onetab' : '') + "' id='" + callibriTabs[key].tab_id + "' onclick='callibriShowDiv(\"" + callibriTabs[key].tab_switch + "\",this, this," + num + ");" + hide_msg + "'>" + (callibri_onetab ? '<div class=\'callibri_onetab_wrpp\'>' : '') + "<div name='sphere' class='callibri_sph_active'>" + callibriTabs[key].tab_icon + chat + social_header + "</div><div " + ((_callibri.mobile.isMobile && !callibri_ios_check()) ? ' style=margin-top:5px;' : '') + " class='callibri_text_panel callibri_text_color' >" + tab.name + " " + (callibri_onetab ? '</div>' : '') + "</div></div></div>";
    if (!_callibri.number && key === 'callback') {
        div = '';
    }
    return div;
}

function callibri_get_social_tabs(header, click) {
    var divs = '',
        social_type;
    var cltcs = callibri_links_to_client_social();
    var socials = _callibri.module_settings.tabs.social.socials;
    if (header === 'header') {
        for (i = 0; i < socials.length; i++) {
            divs += "<div style='position:absolute;" + (_callibri.mobile.isMobile ? 'left:0;width:100%!important;height:38px!important;margin-right:0!important;' : '') + "' data-options='true' id='callibri_call_opt' name='callibri_sphere_option' onclick=\"callibriShowDiv('callibri_social',this, this)\" class='callibri_header_social_animation " + _callibri.widget_theme + "_button callibri_bttn_color_" + socials[i].type + " " + (_callibri.mobile.isMobile ? '' : 'callibri_close_options') + "'><div style='width:100%;height:100%;display:" + (callibriCheckIE8_9_10_11() ? 'inline' : 'block') + ";' data-options='true' name='callibri_image_for_options' class=\"callibri_sphere_social_svg callibri_social_svg callibri_border_social\" id='callibri_call_opt_img'>" + callibriTabs.social.messengers[socials[i].type] + "<div class='callibri_text_sphere_options callibri_social_text' data-options='true'>" + cltcs[socials[i].type].title + "</div></div></div>";
        }
    } else {
        for (i = 0; i < socials.length; i++) {
            social_type = socials[i].type;
            var link = social_type == 'viber' && !_callibri.mobile.isMobile ? 'callibri_widget_toggle(this);callibri_opacity_toggle(event);callibriShowDiv(\'callibri_social\',document.getElementById(\'switch_for_social\',this));' + cltcs[socials[i].type].link.replace(/"/g, '\'').replace('javascript:', '').replace('{username}', socials[i].username) : 'window.open(\'' + cltcs[socials[i].type].link.replace(/"/g, '\\\'').replace('{username}', socials[i].username).replace('{session_id}', _callibri.session_id) + '\',\'_blank\');';
            if (click) link += "callibriSendVisitorEvent('hook',_callibri.module_settings.common.hook_id,true);";
            if (['vk', 'ok'].indexOf(social_type) > -1) link += "callibriMakeRequest('/module/click', { session_id: _callibri.session_id, client_id: _callibri.site_id, key: _callibri.site_id, event_type: '" + social_type + "' });";
            divs += "<div " + (_callibri.mobile.isMobile ? 'style="display:none"' : '') + " data-options='true' id='callibri_call_opt' name='callibri_sphere_option' onclick=\"" + link + "\" class='callibri_overrideOptions " + (_callibri.mobile.isMobile ? 'callibri_overrideOptions' + parseInt(socials.length - i) : '') + " " + _callibri.widget_theme + "_button callibri_bttn_color_" + socials[i].type + "'><div data-options='true' name='callibri_image_for_options' class=\"callibri_panel_picture callibri_overrideOptionsImg callibri_bttn_color_" + socials[i].type + "\" id='callibri_call_opt_img'>" + callibriTabs.social.messengers[socials[i].type] + "<div class='callibri_text_sphere_options callibri_social_text' data-options='true'>" + cltcs[socials[i].type].title + "</div></div></div>";
        }
    }
    return divs;
}

function callibri_viber_toggle(username) {
    var aviber = _callibri.internal_vars.container.querySelector('#callibri_viber');
    var viberin = document.createElement('div');
    viberin.innerHTML = '<div>Отсканируйте картинку, выбрав в </div><div>меню Viber пункт QR-код:</div>';
    viberin.classList.add('callibri_viber_in');
    var viberqr = document.createElement('div');
    viberqr.classList.add('callibri_viber_qr_code');
    viberqr.innerHTML = '<img src = "' + callibri_image_path + 'viber-' + _callibri.site_id + '.png">';
    var viberinPC = document.createElement('div');
    viberinPC.classList.add('callibri_viber_in_pc');
    viberinPC.innerHTML = '<div>Если на вашем ПК установлен Viber,</div><div>нажмите <a class="callibri_viber_here" target="_blank" href="viber://pa?chatURI=' + username + '&context=' + _callibri.session_id + '">сюда</a></div>';
    aviber.appendChild(viberin);
    aviber.appendChild(viberqr);
    aviber.appendChild(viberinPC);
    aviber.style.backgroundColor = '#f2f2f2';
    aviber.style.cursor = 'default';
    aviber.href = 'javascript:void(0)';
}

function callibriSocialDivs(tab) {
    var div = "",
        key_field, social, link;
    var socials_hash = callibri_links_to_client_social(),
        onclick;
    for (var i = 0; i < tab.socials.length; i++) {
        key_field = tab.socials[i];
        social = socials_hash[key_field.type];
        if (social) {
            link = social.link.replace("{username}", key_field.username).replace("{session_id}", _callibri.session_id);
            var viber_id = social.title === 'Viber' ? 'id="callibri_viber"' : '';
            var svg = callibriTabs.social.messengers[key_field.type].replace(/callibri_sphere_social_svg/, '');
            onclick = 'onclick="' + (['vk', 'ok'].indexOf(key_field.type) > -1 ? "callibriMakeRequest('/module/click', { session_id: _callibri.session_id, key: _callibri.site_id, client_id: _callibri.site_id, event_type: '" + key_field.type + "' });" : "") + 'callibri_events_callback(\'callibri_' + key_field.type + 'Click\');"'
            div += "<a " + viber_id + " href='" + link + "'" + onclick + (social.title === 'Viber' ? '' : 'target = \"_blank\"') + " class='callibri_wrapperField callibri_social_a callibri_wrapperField_social " + (i % 2 == 0 ? 'callibri_color1' : '') + "'><div style='width:38px;height:38px;margin-right: 15px;' data-options='true' id='callibri_call_opt' name='callibri_sphere_option' class='callibri_header_social_animation callibri_overrideOptions-" + i + " " + _callibri.widget_theme + "_button callibri_bttn_color_" + key_field.type + "'><div style='width:38px;height:38px;display:" + ((_callibri.internal_vars.browsers.ie1011 || _callibri.internal_vars.browsers.ie89) ? 'inline' : 'block') + "; padding:0' data-options='true' name='callibri_image_for_options' class=\"callibri_panel_picture callibri_overrideOptionsImg\" id='callibri_call_opt_img'>" + svg + "</div></div><div class='callibri_soc_title'>" + social.title + "</div></a>";
        }
    }
    return div;
}

function callibriCustoListVis(el) {
    var block = document.getElementById('callibri-select-field-options');
    if (block.style.display === 'none' || block.style.display === '') {
        block.style.display = 'flex';
    } else { block.style.display = 'none'; }
    if (el) {
        document.getElementById('callibri-select-placeholder').innerHTML = el.id;
    }
}

function callibriFeedbackFieldsDiv(tab) {
    var blocks = {},
        message_and_custom_fields = "",
        key_field;
    var contact_fields = (tab.fields.show.length > 0) ? "<div>" : "";
    for (var i = 0; i < tab.fields.show.length; i++) {
        key_field = tab.fields.show[i];
        switch (key_field) {
            case "message":
                message_and_custom_fields += "<textarea placeholder='{0}".callibri_format(CALLIBRI_LOCALIZTION_OBJ['localization_2'][_callibri.module_settings.common.locale]) + (tab.fields.required.indexOf(key_field) > -1 ? '*' : '') + "...' name='callibri_message' data-name='Сообщение' id='callibri_request_message' class='skip-fields callibri_textarea'  style='width: 100%;height: 96px;'></textarea>";
                break;
            case "name":
                contact_fields += "<input placeholder='{0}".callibri_format(CALLIBRI_LOCALIZTION_OBJ['localization_3'][_callibri.module_settings.common.locale]) + (tab.fields.required.indexOf(key_field) > -1 ? '*' : '') + "...' name='callibri_name' data-name='Имя' class='skip-fields callibri_text_inp callibri_req_inp' maxlength='255'>";
                break;
            case "phone":
                contact_fields += "<input placeholder='Телефон" + (tab.fields.required.indexOf(key_field) > -1 ? '*' : '') + "...' type='tel' name='callibri_phone' data-name='Телефон' class='skip-fields callibri_text_inp callibri_req_inp callibri-phone-mask callibri_phn_m3' placeholder='" + (_callibri.module_settings.mask_format || '+7 (___) ___-__-__') + "' maxlength='255'>";
                break;
            case "email":
                contact_fields += "<input placeholder='{0}".callibri_format(CALLIBRI_LOCALIZTION_OBJ['localization_4'][_callibri.module_settings.common.locale]) + (tab.fields.required.indexOf(key_field) > -1 ? '*' : '') + "...' type='email' name='callibri_email' data-name='Email' id='callibri_contact_fields-email' class='skip-fields callibri_text_inp callibri_req_inp' maxlength='255'>";
                break;
            case "company":
                contact_fields += "<input placeholder='Компания" + (tab.fields.required.indexOf(key_field) > -1 ? '*' : '') + "...' name='callibri_company' data-name='Компания' class='skip-fields callibri_text_inp callibri_req_inp' maxlength='255'>";
                break;
            case "custom_field":
                message_and_custom_fields += "<input placeholder='" + tab.custom_field + (tab.fields.required.indexOf(key_field) > -1 ? '*' : '') + "...' name='callibri_custom_field' data-name='custom_field' class='skip-fields callibri_text_inp callibri_req_inp callibri-full-width-field' maxlength='255'>";
                break;
            case "custom_list":
                message_and_custom_fields += "<div class='callibri-select-field-wrapper'><label id='callibri-select-placeholder' class='callibri-select-field-label callibri-select-placeholder' onclick='callibriCustoListVis()'>" + tab.custom_list + "</label><div class='callibri-select-field-options' id='callibri-select-field-options' style.display='none'><div class='callibri-select-option'><label class='callibri-select-placeholder'>" + tab.custom_list + "</label></div>";
                for (var j = 0; j < tab.custom_list_items.length; j++) {
                    message_and_custom_fields += " <div class='callibri-select-option'><input class='callibri-select-radio' name='callibri-select-radio' id='" + tab.custom_list_items[j] + "' type='radio'  onclick='callibriCustoListVis(this)'><label for='" + tab.custom_list_items[j] + "'>" + tab.custom_list_items[j] + "</label> </div>";
                }
                message_and_custom_fields += '</div></div>';
                break;
            default:
                break;
        }
    }
    blocks.message_and_custom_fields = message_and_custom_fields;
    if (tab.fields.show.length > 0) contact_fields = contact_fields + "</div>";
    blocks.contact_fields = contact_fields;
    return blocks;
}

function callibri_window_click(e) {
    var e = e || window.event;
    if (e.target.classList.contains('callibri_end_dialog_chat_settings')) {
        messages_length = document.querySelectorAll('.callibri_chat_message').length;
        callibriSetItemLocalStorage('callibri_operator', null);
        if (messages_length > 1) {
            callibriMakeRequest("/chat/widget/closed", { channel: _callibri.session_id, client_id: _callibri.site_id });

            function callback() {
                var f = window.callibri_restore_chat;
                callibriShowChatEndButton();
                window.callibri_restore_chat = function() {
                    setTimeout(function() {
                        callibriInputChatSetHeight(_callibri.chat_widget.message_input_element);
                        callibri_setHeight(callibri_tabs_height);
                        callibri_app.scrollTo('callibri_chat_input');
                    }, 1);
                    f();
                };
            }
            callibriGetRatingJs(callback);
        }
    } else if (e.target.classList.contains('callibri_send_dialoge_chat_sttings')) {
        callibriEnterEmailForSaveDialog();
    }
    document.querySelector('#callibri_user_chat_actions').style.display = 'none';
    document.querySelector('#callibri_open_chat_settings').style.display = 'flex';
    document.removeEventListener('click', callibri_window_click_wrapper);
}

function callibri_user_chat_actions(e) {
    var e = e || window.event;
    e.stopPropagation();
    if (document.querySelector('#callibri_user_chat_actions').style.display == 'block') {
        document.querySelector('#callibri_user_chat_actions').style.display = 'none';
    } else { document.querySelector('#callibri_user_chat_actions').style.display = 'block'; }
    document.querySelector('#callibri_open_chat_settings').style.display = 'flex';
    document.addEventListener('click', callibri_window_click_wrapper = function(e) {
        callibri_window_click(e);
    }, false);
}

function callibriInputChatOpen(elem, open) {
    try {
        var div_checkbox = document.getElementById('callibri_input_chat_div_checkbox');
        var div_checkbox_req = document.getElementById('callibri_input_chat_div_checkbox_req');
        var callibri_a = document.getElementById('callibri_a');
        var callibri_open_chat_settings = document.getElementById('callibri_open_chat_settings');
        if (div_checkbox_req) {
            div_checkbox_req.style.display = open ? 'none' : 'block';
            div_checkbox_req.style.visibility = open ? 'hidden' : 'visible';
        }
        if (div_checkbox) {
            div_checkbox.style.display = open ? 'none' : 'block';
            div_checkbox.style.visibility = open ? 'hidden' : 'visible';
        }
        if (!_callibri.mobile.isMobile && callibri_a) {
            callibri_a.style.display = open ? 'block' : 'none';
            callibri_a.style.visibility = open ? 'visible' : 'hidden';
            callibri_a.style.opacity = open ? '1' : '0';
            document.getElementById('callibri_checkbox_priv').checked = open ? true : false;
        }
        if (elem != 'callibri_req_checkbox') {
            if (callibri_open_chat_settings) {
                callibri_open_chat_settings.style.visibility = open ? 'visible' : 'hidden';
                callibri_open_chat_settings.style.opacity = open ? '1' : '0';
            }
        }
        callibri_open_chat = open ? true : false;
        var svg = ['#callibri_send', '.emoji-picker-icon.emoji-picker.fa.fa-smile-o'];
        svg.forEach(function(element) {
            element = document.querySelector(element);
            if (element) {
                if (callibri_open_chat) {
                    element.classList.remove('callibri_svg_opacity');
                } else {
                    element.classList.add('callibri_svg_opacity');
                }
            }
        });
        if (document.getElementById('callibri_checkbox')) document.getElementById('callibri_checkbox').checked = open ? true : false;
        if (document.getElementById('callibri_req_checkbox')) document.getElementById('callibri_req_checkbox').checked = open ? true : false;
        if (_callibri.module_settings.common.use_privacy && document.getElementById('callibri_callback_button_request')) document.getElementById('callibri_callback_button_request').disabled = open ? false : true;
        if (!open) {
            callibriSetCookie(_callibri.cookie_prefix + "accepted_the_rules", '', undefined, false, -1);
            callibriSetCookie(_callibri.cookie_prefix + "accepted_the_rules", '', undefined, true, -1);
        }
    } catch (e) { console.log(e); }
}

function callibriTabDivs(key, tab) {
    var div = "",
        text;
    switch (key) {
        case 'chat':
            var privacy = _callibri.module_settings.common.use_privacy ? ("<div id='callibri_input_chat_div_checkbox' class='callibri_input_chat_div_checkbox'><span class='callibri_input_chat_emoji_noevent'></span><input type='checkbox' onclick='callibri_widget_checked_privacy(this)' id='callibri_checkbox'>" + CALLIBRI_LOCALIZTION_OBJ['localization_1'][_callibri.module_settings.common.locale].callibri_format(link_agreement, link_privacy) + "</div>") : "";
            div = "<div class='callibri_chat_wrapper callibri_overflow skip-fields' name='select' id='callibri_chatW' style='display: block;'><div class='callibri_wrapperField callibri_wrapper_chat' id='callibri_appendHere'></div><div class='callibri_wrapperField callibri_wrapper_chat callibri_operator_writes' id='callibri_operator_writes' style='display: none;'><div class='callibri_font16'><div class='callibri_mt31'><span class='callibri_pencil_dots'>.</span><span class='callibri_pencil_dots callibti_anim2'>.</span><span class='callibri_pencil_dots callibti_anim3'>.</span></div><span class='callibri_operator_writes_text'>" + _callibri.chat_operator.name + " набирает сообщение...</span></div></div><div id='anchor' class='callibri_anchor'></div><div class='callibri_input_chat_div' id='callibri_input_chat_div'><div class='callibri_chat_input_form'><textarea class='callibri_chat_input callibri_text_inp skip-fields' id='callibri_chat_input' onchange='callibri_hideMSG(0)' data-emojiable='callibri_emoji_input'></textarea><label class='callibri_chat_input_label' id='callibri_chat_input_label'>Напишите сообщение и нажмите <b>enter...</b></label></div>" + privacy + " <ul class='callibri_controls'><li class='callibri_li callibri_send' id = 'callibri_send'></li></ul></div></div>";
            div = CallibriMobileVersion.operator_mssg(div);
            break;
        case 'feedback':
            blocks = callibriFeedbackFieldsDiv(tab);
            var privacy = _callibri.module_settings.common.use_privacy ? ("<div id='callibri_input_chat_div_checkbox_req' class='callibri_input_chat_div_checkbox' ><input type='checkbox' onclick='callibri_widget_checked_privacy(this)' id='callibri_req_checkbox'>" + CALLIBRI_LOCALIZTION_OBJ['localization_1'][_callibri.module_settings.common.locale].callibri_format(link_agreement, link_privacy) + "</div> ") : "";
            text = _callibri.module_settings.tabs.feedback.header ? "<p class='callibri_h2'>" + _callibri.module_settings.tabs.feedback.header + "</p> <span>" + _callibri.module_settings.tabs.feedback.label + "</span>" : _callibri.module_settings.tabs.feedback.label ? ("<p class='callibri_h2'>" + _callibri.module_settings.tabs.feedback.label + "</p>") : "<p class='callibri_h2'>Напишите нам</p> <span>и мы перезвоним вам в течение <b>30 секунд.</b></span>";
            div = "<div class='callibri_request callibri_overflow' name='select' id='callibri_request' style='display: none;'><div class=\"callibri_wrapperField\"><div class='callibri_text callibri_text_sm callibri_text_color'>" + text + "</div><div class='callibri_feedback_fields_wrapper'>" + blocks.message_and_custom_fields + blocks.contact_fields + "</div><div class=\"callibri_phone_callme_button\" style='margin-top:24px;'><button class=\"callibri_button\" id=\"callibri_callback_button_request\">" + tab.button + "</button></div>" + privacy + "<div id='callibri_error_request_tab' style='display:none;' class='callibri_error'></div></div></div>";
            break;
        case 'callback':
            text = _callibri.module_settings.tabs.callback.header ? "<p class='callibri_h2'>" + _callibri.module_settings.tabs.callback.header + '</p> <span>' + _callibri.module_settings.tabs.callback.text + '</span>' : _callibri.module_settings.tabs.callback.text ? ("<p class='callibri_h2'>" + _callibri.module_settings.tabs.callback.text + "</p>") : "<p class='callibri_h2'>Оставьте свой номер телефона</p> <span>если не хотите платить за разговор. Мы сами перезвоним вам в течение <b>30 секунд.</b></span>";
            var div_webcall = "<div class='callibri_border'></div><div class='callibri_text'>{0}</div><div class='callibri_button_call callibri_phone_callme_button' style='margin-top:24px;' id='callibri_button'><button class='callibri_button' >{1}</button></div><div class='callibri_text callibri_text_sm callibri_text_color'>" + text + "</div>";
            var div_callback = "<div class='callibri_text callibri_text_sm callibri_text_color'>" + text + "</div><div class='callibri_phone_callme callibri_mt30'><input id='callibri_callback_phone' class='callibri_phone_callme_phone callibri-phone-mask callibri_phn_m2' placeholder='" + (_callibri.module_settings.mask_format || '+7 (___) ___-__-__') + "'></div><div class='callibri_phone_callme_button'><button class='callibri_button'  id='callibri_callback_button_timer'>{0}<span style='height:100%;margin:0;font-size:inherit!important;line-height:inherit!important'><span id='callibri_timer' class='callibri_timer'></span></span></button><div id='callibri_error_callback_tab' style='display:none;' class='callibri_error'></div></div>".callibri_format(CALLIBRI_LOCALIZTION_OBJ['localization_5'][_callibri.module_settings.common.locale]);
            div_callback = CallibriMobileVersion.div_callback(div_callback, _callibri.on_webcall);
            div_webcall = CallibriMobileVersion.div_webcall(div_webcall);
            if (_callibri.number) {
                div = "<div class='callibri_request_a_call callibri_overflow' name='select' id='callibri_reqCallW' style='display: none;'><div class='callibri_wrapperField'>" + (tab.type.indexOf('callback') > -1 ? div_callback : '') + " " + ((tab.type.indexOf('webcall') > -1 && _callibri.on_webcall) ? div_webcall : '') + "</div></div>";
                div = CallibriMobileVersion.div_call(div, div_callback, _callibri.on_webcall, div_webcall, tab);
            } else {
                div = "";
                _callibri.tabscount--;
            }
            break;
        case 'contact':
            div = "<div class='callibri_request_a_call callibri_overflow' name='select' id='callibri_map' style='display: none;'></div>";
            break;
        case 'social':
            if (!tab.label) {
                tab.label = CALLIBRI_LOCALIZTION_OBJ['localization_8'][_callibri.module_settings.common.locale];
            }
            div = "<div class='callibri_request callibri_overflow' name='select' id='callibri_social' style='display: none;'><div class=\"callibri_wrapperField\"><div class='callibri_text callibri_text_sm callibri_text_color'>" + tab.label + "</div></div><div class='callibri_as_wrapper_field'>" + callibriSocialDivs(tab) + "</div></div>";
            break;
        default:
            break;
    }
    return div;
}

function callibri_checkmark_check(type, element, button, element_two) {
    type = type ? "_" + type : "";
    if (element) element = document.getElementById(element + type);
    if (button) button = document.getElementById(button + type);
    if (element_two) element_two = document.getElementById(element_two + type);
    var element_two_value = false;

    function check(element) {
        if (element.id.indexOf('phone') > -1 && element.value.replace(/[^\d]/gi, '').length == 11) return true
        if (element.id.indexOf('email') > -1 && (/.{1,}@.{1,}\..{1,}/.test(element.value))) return true
        return false
    }

    function btn(param) {
        if (param) {
            button.classList.add('checkmark_check');
            button.style.pointerEvents = 'auto';
        } else {
            button.classList.remove('checkmark_check');
            button.style.pointerEvents = 'none';
        }
    }
    if (element_two) {
        btn(check(element) && check(element_two));
    } else {
        btn(check(element) || (element.id.indexOf('name') > -1 && element.value.length > 0));
    }
}

function callibriTabEvent(key, tab) {
    var div_id = "",
        switch_id = "";
    switch (key) {
        case 'chat':
            div_id = "callibri_chatW";
            switch_id = "switchForChat";
            callibriTabChat(tab);
            break;
        case 'feedback':
            div_id = "callibri_request";
            switch_id = "switchForRequest";
            callibriTabFeedback(tab);
            break;
        case 'callback':
            div_id = "callibri_reqCallW";
            callibriTabCallback(tab);
            if (_callibri.number) {
                switch_id = "switchForCall";
            }
            break;
        case 'contact':
            div_id = "callibri_map";
            switch_id = "switchForMap";
            break;
        case 'social':
            div_id = "callibri_social";
            switch_id = "switch_for_social";
            break;
        default:
            break;
    }
    if (div_id && switch_id && tab.actions && tab.actions.length > 0) { //FIXME временно
        callibriOutsideAction(div_id, switch_id, tab.actions, key);
    }
}

function callibriSetOutsideActions() {
    if (_callibri.module_settings.common.actions) {
        var tabs = Object.keys(_callibri.module_settings.tabs);
        var priority = ['feedback', 'chat', 'social', 'callback', 'contact'].filter(function(i) {
            return tabs.indexOf(i) > -1;
        })[0];
        var lost_tabs = ['feedback', 'chat', 'social', 'callback', 'contact'].filter(function(i) {
            return tabs.indexOf(i) < 0;
        });
        var priority_tab = callibriTabs[priority],
            actions;
        for (var temp_key in _callibri.module_settings.tabs) { //сначала по действиям где навешаны есть табы, у многих указаны одни и теже селекторы в расчете что один круглосуточный и всегда покажется
            actions = _callibri.module_settings.common.actions[temp_key];
            if (actions && actions.length > 0) callibriOutsideAction(callibriTabs[temp_key].tab_switch, callibriTabs[temp_key].tab_id, actions, temp_key);
        }
        var lost_tabs_length = lost_tabs.length;
        for (var i = 0; i < lost_tabs_length; i++) { //селекторы табов нерабочего времени или выключенных
            temp_key = lost_tabs[i];
            actions = _callibri.module_settings.common.actions[temp_key];
            if (actions && actions.length > 0) callibriOutsideAction(priority_tab.tab_switch, priority_tab.tab_id, actions, priority);
        }
    }
}

function callibriOutsideAction(div_id, switch_id, actions, tab) {
    try {
        var elements, element;
        for (var i = 0; i < actions.length; i++) {
            elements = document.querySelectorAll(actions[i]);
            for (var j = 0; j < elements.length; j++) {
                element = elements[j];
                if (!element.dataset.callibri_outside_action && !(element.id && element.id == 'callibri-widget-header-phone')) {
                    element.dataset.callibri_outside_action = true;
                    element.addEventListener("click", function(event) {
                        if (['chat', 'feedback'].indexOf(tab) > -1) {
                            var el = event.target,
                                field, tab_field;
                            if (el.dataset['callibriField']) { //если есть поле для ввода которое надо взять
                                field = document.querySelector(el.dataset['callibriField']); //FIXME брать из одного контейнера
                                if (field && field.value) {
                                    if (tab == 'feedback' && el.dataset['callibriFieldType']) {
                                        //поле заявки
                                        tab_field = document.querySelector("#callibri_request *[name=" + el.dataset['callibriFieldType'] + "]");
                                        if (tab_field) tab_field.value = field.value;
                                    }
                                }
                            }
                            if (el.dataset['callibriMessage']) {
                                var text = el.dataset['callibriMessage'];
                                text = text.replace("{FIELD}", (field ? field.value : ''));
                                if (tab == 'chat') {
                                    tab_field = document.querySelector('.callibri_chat_input.emoji-wysiwyg-editor') || document.querySelector('#callibri_chat_input');
                                    if (tab_field) {
                                        tab_field.innerHTML = text;
                                        setTimeout(function() {
                                            tab_field.focus();
                                        }, 1);
                                    }
                                } else tab_field = document.querySelector('#callibri_request_message');
                                if (tab_field) tab_field.value = text;
                            }
                        }
                        callibriOpenWidgetClick(event, div_id, switch_id, this);
                        if (div_id === 'callibri_map') callibriTabContact();
                    });
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
}

function callibriTabChat(tab) {
    var callback = function() {
        _callibri.chat_widget = new CallibriChatWidget();
        var emoji_init = function() {
            _callibri.libs_loaded = true;
            try {
                if (!_callibri.mobile.isMobile && !callibri_tablet_check()) {
                    var css = document.createElement("link");
                    css.setAttribute("rel", "stylesheet");
                    css.setAttribute("type", "text/css");
                    css.setAttribute("href", callibri_image_path + "emoji.css");
                    document.getElementsByTagName("head")[0].appendChild(css);
                    if (typeof jQuery == 'undefined' || typeof $ == 'undefined' || typeof $.fn == 'undefined' || callibriCompareJq($.fn.jquery, '1.11.3') === -1) {
                        if (typeof $ == 'function' && typeof $.fn == 'function' && callibriCompareJq($.fn.jquery, '1.11.3') === 1) {
                            callibri_load_emoji_libs();
                        }
                    } else {
                        callibri_load_emoji_libs();
                    }
                }
            } catch (e) {
                console.log(e);
            }
        };
        if (typeof(_callibri.libs_loaded) === 'undefined') emoji_init();
    };
    //загрузка чата без пушера нет никого чата
    var onerror = function() {
        callibriGetLibrary("//" + _callibri.server_host + "/js/pusher.min.js", function() { _callibri.chat_widget = new CallibriChatWidget(); });
    };
    callibriGetLibrary("//js.pusher.com/4.2/pusher.min.js", callback, "Pusher", onerror);
}

function callibriTabFeedback(tab) {
    if (document.getElementById('callibri_callback_button_request')) {
        document.getElementById('callibri_callback_button_request').onclick = function() {
            var errors = [],
                name_field;
            var inputs = document.querySelectorAll("#callibri_request input,#callibri_request textarea"),
                input;
            var required_fields = _callibri.module_settings.tabs.feedback.fields.required;
            var email = document.querySelector("#callibri_request input[type='email']");
            var feedback = {
                site_id: _callibri.site_id,
                number: _callibri.number,
                session_id: _callibri.session_id,
                segment_id: _callibri.segment_service.active_segments.hooks,
                widget_form: true,
                hook_id: (_callibri.module_settings.common.hook_id || '')
            };
            try { removeClass(inputs, 'callibri_error_data'); } catch (e) {}
            for (var i = 0; i < inputs.length; i++) {
                input = inputs[i];
                name_field = input.name.replace("callibri_", "");
                if (required_fields.indexOf(name_field) > -1 && (input.value == null || !input.value || (name_field == "phone" && input.value.replace(/[^\d]/gi, '').length < 11))) {
                    errors.push(input);
                }
                feedback[name_field] = callibriRemoveTags(input.value);
            }
            var email_error = '';
            if (email !== null && email.value.length > 0 && (!/.{1,}@.{1,}\..{1,}/.test(email.value))) {
                email_error = '<br>Неверный формат Email';
                email.classList.add('callibri_error_data');
            }
            if (errors.length > 0 || email_error) {
                var error_string = "";
                for (var i = 0; i < errors.length; i++) {
                    if (i !== 0) {
                        error_string += ", ";
                    }
                    errors[i].className += " callibri_error_data";
                    error_string += '"' + errors[i].dataset.name + '"';
                }
                if (error_string) error_string = ('Не заполнены поля ' + error_string);
                document.getElementById('callibri_error_request_tab').innerHTML = error_string + email_error;
                document.getElementById('callibri_error_request_tab').style.display = 'block';
                return false;
            }
            var module_feedback_data = {
                feedback: feedback
            };
            var text;
            try {
                text = _callibri.module_settings.tabs.feedback.thx || "Мы постараемся вам перезвонить сразу, как только сможем. Не теряйтесь :)";
            } catch (e) {
                text = "Мы постараемся вам перезвонить сразу, как только сможем. Не теряйтесь :)";
            }
            document.querySelector("#callibri_request").innerHTML = "<div class='callibri_wrapperField callibri_overflow'><div class='callibri_thx_for_feedback'><div class='callibri_ok callibri_bttn_color'><img src='" + callibri_image_path + 'callibri_ok.png' + "' class=\"callibri_ok_pic\"></div><div class='callibri_thx_up'>Спасибо за вашу заявку!</div><div class='callibri_thx_down'>" + text + "</div></div></div>";
            module_feedback_data.feedback.page = (document.location.protocol + "//" + document.location.host + document.location.pathname);
            callibriMakeRequest('/module/contactus', module_feedback_data);
            callibri_events_callback('callibri_onSendFeedback');
        };
    }
}

function callibriTabCallback(tab) {
    if (_callibri.number && tab.type.indexOf('callback') > -1) {
        //обратный звонок
        var function_callback = function(event) {
            var phone = callibriRemoveTags(document.getElementById('callibri_callback_phone').value);
            if (phone.length > 0) {
                phone = phone.replace(/[^\d]/gi, '');
                if (phone.match(/\d{11}/)) {
                    data = {
                        number: _callibri.number,
                        phone: phone,
                        session_id: _callibri.session_id,
                        site_id: _callibri.site_id,
                        hook_id: _callibri.module_settings.common.hook_id,
                        ymclid: callibriGetMetrikaClientID(true),
                        gaclid: callibriGetGaClientID(true),
                        clbvid: _callibri.clbvid || null,
                        segment_id: _callibri.segment_service.active_segments.hooks
                    };
                    document.getElementById('callibri_error_callback_tab').style = 'display:none;';
                    event.target.removeEventListener("click", arguments.callee, true);
                    callibriTimer();
                    callibriMakeRequest('/module/callibri_callback', data);
                    callibri_events_callback('callibri_onSendCallback');
                }
            } else {
                document.getElementById('callibri_error_callback_tab').innerHTML = 'Укажите номер телефона.';
                document.getElementById('callibri_error_callback_tab').style = 'display:block;';
            }
        };
        document.getElementById('callibri_callback_button_timer').addEventListener('click', function_callback, false);
    }
}

function callibriTabContact() {
    if (_callibri.internal_vars.map_ready === true)
        return;
    var tab = _callibri.module_settings.tabs.contact;
    var script_ymaps = document.querySelector('script[src*="api-maps.yandex.ru"]:not([src*=".xml"])');
    var longlat = script_ymaps && script_ymaps.src.indexOf('coordorder=longlat') !== -1;
    if (tab.contacts && tab.contacts.length > 0 && !_callibri.mobile.isMobile && !_callibri.internal_vars.map_ready) {
        try {
            var coordinates;
            func_ymap_callibri = function(coordinates, longlat) {
                var current_coordinates;
                if (longlat === true) {
                    coordinates.reverse();
                }
                callibriMap = new ymaps.Map(document.getElementById("callibri_map"), {
                    center: coordinates,
                    zoom: 15,
                    controls: [] //без елементов управления
                }, { autoFitToViewport: 'always' });
                //высчитывание ближайшей точки
                var sx = coordinates[0],
                    sy = coordinates[1],
                    min = Math.pow(sx, 2) + Math.pow(sy, 2),
                    px = 0,
                    py = 0;
                for (var i = 0; i < tab.contacts.length; i++) {
                    var point = [],
                        d1, d2, distance;
                    var contact = tab.contacts[i];
                    point.push(contact.latitude);
                    point.push(contact.longitude);
                    d1 = Math.pow((sx - point[0]), 2);
                    d2 = Math.pow((sy - point[1]), 2);
                    distance = d1 + d2;
                    if (distance < min) {
                        min = distance;
                        px = point[0];
                        py = point[1];
                    }
                }
                //отрисовка геообъектов
                for (var i = 0; i < tab.contacts.length; i++) {
                    var contact = tab.contacts[i];
                    var info = contact.info ? "<br>" + contact.info.replace(/(\S+@\S+)/, "<a href=\"mailto:$1\">$1</a>") : "";
                    current_coordinates = longlat === true ? [contact.longitude, contact.latitude] : [contact.latitude, contact.longitude];
                    var myPlacemark = new ymaps.Placemark(current_coordinates, {
                        balloonContent: contact.address + "<br>" + (_callibri.number_formatted && !_callibri.only_widget ? ("<a class=\"cursor_p\" tel:\"" + _callibri.number + "\">" + _callibri.number_formatted + "</a>") : "") + info,
                        closeButton: false
                    });
                    callibriMap.geoObjects.add(myPlacemark);
                    if (px == contact.latitude && py == contact.longitude) {
                        myPlacemark.balloon.open();
                        if (typeof(ymaps.geolocation.latitude) === "undefined")
                            myPlacemark.hint.open();
                    }
                }
                //про запас, 2й вариант поиска центра и зума
                //var centerAndZoom = ymaps.util.bounds.getCenterAndZoom(callibriMap.geoObjects.getBounds(),callibriMap.container.getSize(),callibriMap.options.get('projection'))
                // Кнопка изменения масштаба.
                if (ymaps.meta) { //объект meta добавлен в версии 2.1 ymaps, содержит в себе поле version со строкой версии API. В 2.1 SetBounds возвращает Promise, в ранних версиях возвращает объект тип Map
                    callibriMap.setBounds(callibriMap.geoObjects.getBounds(), { checkZoomRange: true }).then(function() {
                        if (callibriMap.getZoom() > 15 || callibriMap.getZoom() === 0)
                            callibriMap.setZoom(15);
                    });
                } else {
                    if (callibriMap.setBounds(callibriMap.geoObjects.getBounds(), { checkZoomRange: true })) {
                        if (callibriMap.getZoom() > 15 || callibriMap.getZoom() === 0) {
                            callibriMap.setZoom(15);
                        }
                    }
                }
                callibriMap.controls.add('zoomControl', { left: 5, top: 5 });
                var layer = callibriMap.layers.get(0).get(0);
                // Отслеживаем событие окончания отрисовки тайлов.
                try {
                    callibriWaitForTilesLoad(layer).then(function() {
                        setTimeout("document.getElementById(\"callibri_map\").style.height=\"100%\";", 300);
                    });
                } catch (e) {
                    document.getElementById("callibri_map").style.height = "100%";
                }
                _callibri.internal_vars.map_ready = true;
                return;
            };
            if (typeof ymaps === "undefined") {
                var node = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "//api-maps.yandex.ru/2.1/?lang=ru-RU";
                node.parentNode.insertBefore(script, node);
                script.onload = function() {
                    ymaps.ready(callibri_ymaps);
                };
            } else {
                ymaps.ready(function() {
                    if (ymaps.geolocation && typeof(ymaps.geolocation.latitude) !== "undefined") { //в новой версии отдается undefined
                        coordinates = [ymaps.geolocation.latitude, ymaps.geolocation.longitude];
                        func_ymap_callibri(coordinates, longlat);
                    } else {
                        callibri_ymaps();
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    } else if (tab.contacts && tab.contacts.length > 0 && _callibri.mobile.isMobile && !_callibri.internal_vars.map_ready) {
        var node = document.createElement('div');
        node.className = 'callibri_wrapperField callibri_map_mobile';
        document.getElementById('callibri_map').insertBefore(node, document.getElementById('callibri_map').firstChild);
        var target = document.getElementById('callibri_map').getElementsByClassName('callibri_wrapperField')[0];
        for (var i = 0; i < tab.contacts.length; i++) {
            var contact = tab.contacts[i];
            var node = document.createElement('a');
            node.className = 'callibri_map_wrapp ' + (i % 2 == 0 ? 'callibri_color1' : '');
            node.href = 'https://maps.google.com/?q=' + contact.address + '&center=' + contact.latitude + ',' + contact.longitude;
            node.target = "_blank";
            node.innerHTML = '<div class="callibri_flex"><img src = "' + callibri_image_path + 'callibri_mapicon.png" class = "callibri_mobile_mapicon"></div><div class="callibri_mob_w99">' + contact.address + '</div><div class = "callibri_mob_w"><img src = "' + callibri_image_path + 'callibri_arrowrght.png" class = "callibri_grthen"></div>';
            target.insertBefore(node, target.firstChild);
        }
        var node = document.createElement('div');
        node.innerHTML = 'Наши адреса';
        node.className = 'callibri_address_style';
        target.insertBefore(node, target.firstChild);
        _callibri.internal_vars.map_ready = true;
    }
}

function callibri_ymaps() {
    var geolocation = ymaps.geolocation.get({
        autoReverseGeocode: false,
        provider: 'yandex'
    }).then(function(result) {
        var coordinates = result.geoObjects.position;
        var script_ymaps = document.querySelector('script[src*="api-maps.yandex.ru"]');
        var longlat = script_ymaps && script_ymaps.src.indexOf('coordorder=longlat') !== -1;
        func_ymap_callibri(coordinates, longlat);
    });
}

function callibriGetTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
                layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
    return null;
}

// Определить, все ли тайлы загружены.
function callibriWaitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function(resolve, reject) {
        var tc = callibriGetTileContainer(layer),
            readyAll = true;
        tc.tiles.each(function(tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function() {
                resolve();
            });
        }
    });
}

function callibriSetCurrentUrl() {
    var landing = document.location.href,
        old_landing = callibriGetCookie('chat_landing');
    if (landing != old_landing) {
        var post_data = { channel: _callibri.session_id, client_id: _callibri.site_id, url: landing };
        callibriSetCookie('chat_landing', landing);
        callibriMakeRequest('/module/current_url', post_data);
    }
}

function callibriSetHook() {
    try {
        for (key in _callibri.module_settings.common.hook) {
            if (_callibri.module_settings.common.hook[key].match(/\{utm_keyword\}|\{utm_term\}/)) _callibri.module_settings.common.hook[key] = callibriHookChangeVariable(_callibri.module_settings.common.hook[key]);
        }
        var chat_hash = _callibri.module_settings.tabs.chat;
        if (chat_hash && chat_hash.first_message.match(/(\{utm_keyword\})|(\{utm_term\})/)) _callibri.module_settings.tabs.chat.first_message = callibriHookChangeVariable(chat_hash.first_message);
    } catch (e) {
        console.log(e);
    }
}

function callibriHookChangeVariable(text) {
    var search;
    if (location.search.match(/(utm_keyword)|(utm_term)/)) {
        search = location.search;
        callibriSetItemLocalStorage("callibri_search", search);
    } else search = callibriGetItemLocalStorage("callibri_search");
    if (search) {
        var parametrs = search.slice(1, location.search.length).split('&'),
            params, i;
        for (i = 0; i < parametrs.length; i++) {
            params = parametrs[i].split('=');
            if (params[0] == "utm_keyword" || params[0] == "utm_term") {
                text = text.replace("{" + params[0] + "}", decodeURI(params[1]));
            }
        }
    }
    return text;
}

function callibriSendVisitorEvent(target_type, target_id, is_click_action) {
    // отправляем события
    if (!callibriDocumentHidden() && _callibri.pw) { //отсылаем только с активной вкладки
        var ping_data = "/event?s=" + _callibri.session_id + "&c=" + _callibri.site_id;
        if (is_click_action === true) {
            ping_data = ping_data + "&a=click";
        }
        ping_data = ping_data + (target_type == 'hook' ? "&h=" : "&l=") + (target_id || "-1");
        callibriGetRequest("//" + _callibri.ws_server_host + ping_data);
    }
}

CallibriWWP = function() {
    this.init();
};

CallibriWWP.prototype = {
    init: function() {
        var self = this;
        self.callibri_webphone = null;
        self.remoteAudio = document.createElement('audio');
        self.call_options = { media: { constraints: { audio: true, video: false }, render: { remote: self.remoteAudio } } };
        self.current_call = null;
        //при ините грузим либу звонков, регаемся и звоним
        var callback = function() {
            var user = 'cwc-' + _callibri.site_id.toString();
            self.callibri_webphone = new SIP.UA({
                userAgentString: 'Callibri',
                traceSip: false,
                builtinEnabled: false,
                register: true,
                uri: user + '@fsc.callibri.ru',
                wsServers: ['wss://fsc.callibri.ru:7443'],
                authorizationUser: user,
                password: 'OIHgtIO5cHQe'
            });
            self.callibri_webphone.on('registered', function() {
                self.make_call();
            });
            self.callibri_webphone.start();
        };
        callibriGetLibrary("//cdn.callibri.ru/sip_rtc.min.js", callback, "SIP");
        return true;
    },

    register: function() {
        if (this.current_call === null) {
            this.callibri_webphone.register();
        }
    },

    logout: function() {
        if (this.current_call !== null) {
            this.current_call.rejected();
            this.current_call = null;
        }
        this.callibri_webphone.unregister();
        var cwcUI = document.getElementById('callibri_text_in');
        cwcUI.innerHTML = this.standart_html;
    },

    terminate: function() {
        if (this.current_call !== null) {
            this.current_call.terminate();
        }
        var cwcUI = document.getElementById('callibri_text_in');
        cwcUI.innerHTML = this.standart_html;
    },

    make_call: function() {
        var self = this;
        var cwcUI = document.getElementById('callibri_text_in');
        self.standart_html = cwcUI.innerHTML;
        var callButton = document.querySelector('.callibri_button_call .callibri_button');
        var callibri_phone_number = 'web' + _callibri.number; // составляем из callibri._number
        this.current_call = self.callibri_webphone.invite(callibri_phone_number + '@fsc.callibri.ru', self.call_options);
        this.current_call.on('accepted', function() {
            self.callInProgress = true;
            cwcUI.classList.add('callibri_left');
            cwcUI.innerHTML = _callibri.chat_operator.name + "<br><div id='callibri_webcall_timer' class='callibri_webcall_timer'>00:00</div><button class='callibri_webcall_overImg' id='callibri_btn_webcall' onclick='_callibri.web_phone.terminate()'><img src='" + callibri_image_path + 'phonedown.png' + "'></button>";
            callibri_webcall_timer();
        });
        this.current_call.mediaHandler.on('userMedia', function() {
            callibri_microphone_toggle(false, true);
        });
        this.current_call.mediaHandler.on('userMediaRequest', function() {
            callibri_microphone_toggle(true);
        });
        this.current_call.mediaHandler.on('userMediaFailed', function() {
            callibri_microphone_toggle(true);
        });
        this.current_call.on('terminated', function(message, cause) {
            callButton.innerHTML = 'Позвонить оператору';
            self.logout();
            callibri_widget_toggle(event);
        });
    },
};
CallibriLandingService = function(landing_groups) {
    this.init(landing_groups);
};
CallibriLandingService.prototype = {
    init: function(landing_groups) {
        var self = this;
        self.landing_groups = landing_groups;
        this.replaceAll();
    },
    replaceAll: function() {
        var self = this;
        var segments = _callibri.segment_service.agree_segments;
        segments.push(_callibri.segment_service.default_segment);
        this.landing_groups.some(function(group) {
            var page = document.location,
                page_visit = self.getLocation(group.landing);
            if ((group.condition == '=' && (page.origin == page_visit.origin) && (page.pathname == page_visit.pathname) && (page.search.indexOf(page_visit.search) > -1)) || (group.condition == '>' && window.location.href.indexOf(group.landing) > -1)) {
                group.page_segments.some(function(page_segment) {
                    var active_page_segment = false;
                    if (self.containsInArray(segments, page_segment.segment_ids)) {
                        var seo_contents = page_segment.seo_contents;
                        seo_contents.forEach(function(content) {
                            var index = page_segment.ab_test ? (Math.round(1 - 0.5 + Math.random() * (content.new_value.length - 1 + 1)) - 1) : 0;
                            try {
                                self.replaceItem(content.selector, content.new_value[index]);
                            } catch (e) {}
                            active_page_segment = page_segment;
                        })
                        return true;
                    }
                    return active_page_segment;
                })

            }
        })
    },
    getLocation: function(href) {
        var l = document.createElement("a");
        l.href = href;
        return l;
    },
    containsInArray: function(where, what) {
        return what.some(function(item) {
            var a = false;
            where.some(function(segment) {
                if (segment.id == item) {
                    a = item;
                    return true;
                }
            });
            return a;
        })
    },
    replaceItem: function(selector, replace) {
        var self = this;
        selectors = document.querySelectorAll(selector);
        selectors.forEach(function(element) {
            element.innerHTML = self.replaceUtm(replace);
        });
    },
    replaceUtm: function(text) {
        var utms = {
            "utm_campaign": "",
            "utm_term": ""
        }
        if (location.search.match(/(utm_campaign)|(utm_term)/)) {
            var search = location.search,
                parametrs = search.slice(1, location.search.length).split('&'),
                params, i;
            for (i = 0; i < parametrs.length; i++) {
                params = parametrs[i].split('=');
                if (params[0] == "utm_campaign" || params[0] == "utm_term") {
                    utms[params[0]] = decodeURI(params[1]);
                }
            };
        };
        for (utm in utms) {
            text = text.replace(new RegExp("{" + utm + "}", 'gi'), utms[utm]);
        };
        return text;
    }
}