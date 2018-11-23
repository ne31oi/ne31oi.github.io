function callibriViewRating(text) {
    var rating = (_callibri.module_settings.tabs.chat && _callibri.module_settings.tabs.chat.rating) ? callibriRatingLoc.text('rating') : { 5: 'все хорошо', 4: 'все почти хорошо', 3: 'могло быть и лучше', 2: 'все еще очень плохо', 1: 'все очень плохо' }
    return "<div class='callibri_wrapperField'><div class='callibri_review_chat'>" + text + "</div><div class='callibri_rating_chat callibri_color_star'><span id='callibri_star0' onclick=\"toolTip_stars(5, '" + rating[5] + "', this)\" style='font-size: 40px!important;'>☆</span><span id='callibri_star1' onclick=\"toolTip_stars(4, '" + rating[4] + "', this)\" style='font-size: 35px!important;'>☆</span><span id='callibri_star2' onclick=\"toolTip_stars(3, '" + rating[3] + "', this)\" style='font-size: 30px!important;'>☆</span><span id='callibri_star3' onclick=\"toolTip_stars(2, '" + rating[2] + "', this)\" style='font-size: 25px!important;'>☆</span><span id='callibri_star4' onclick=\"toolTip_stars(1, '" + rating[1] + "', this)\" style='font-size: 20px!important;'>☆</span><input type='hidden' id='chat_rating_value'></div><div class='callibri_over_text_stars'><div id='callibri_text_stars' class='callibri_text_stars'></div></div><textarea id='chat_rating_comment' cols='40' rows='10' maxlength='250' placeholder='" + callibriRatingLoc.text('rating_placeholder') + "' class='callibri_textarea callibri_text_inp'></textarea><div class='callibri_phone_callme_button'><button id='callibri_chat_rating_send' class='callibri_button callibri_check_def_button'>" + callibriRatingLoc.text('rating_chat') + "</button></div></div>";
}

function callibriViewThxRating(text, no_chat) {
    var button = no_chat ? '' : "<div class='callibri_phone_callme_button' style='margin-top:50px;'><button class='callibri_button' id='restore_chat' onclick='callibri_restore_chat();'>" + callibriRatingLoc.text('resume_chat') + "</button></div>";
    return "<div class='callibri_overflow callibri_wrapperField'><div class='callibri_thx_for_feedback'><div class='callibri_ok callibri_bttn_color'><img src='" + callibri_image_path + "callibri_ok.png' class=\"callibri_ok_pic\"></div><div class='callibri_thx_up'>" + callibriRatingLoc.text('thx_up') + "</div><div class='callibri_thx_down'>" + text + "</div></div>" + button + "</div>";
}

function showChatRating() {
    callibriRatingLoc = new CallibriRatingLocalization();
    var text = callibriRatingLoc.text('rating_thx');
    var message = callibriViewRating(text);
    var element = document.querySelector('.callibri_chat_wrapper > .callibri_wrapperField');
    element.innerHTML = message;
    callibri_setHeight(callibri_tabs_height);
    var button = document.querySelector('#callibri_chat_rating_send');
    button.onclick = function() {
        var rating = document.querySelector('#chat_rating_value').value;
        if (rating) {
            var callback = function() {
                //вьюшка отправленого отзыва
                var text = " ";
                document.querySelector('.callibri_chat_wrapper > .callibri_wrapperField').innerHTML = callibriViewThxRating(text);
            };
            var post_data = {
                channel: _callibri.session_id,
                rating: rating,
                client_id: _callibri.site_id,
                comment: document.querySelector('#chat_rating_comment').value
            };
            callibriMakeRequest('/module/rating', post_data, callback);
            _callibri.chat_widget._chat_channel.trigger('client-send_rating', post_data);
            //юзер сделал все что мог отписываем от канала
            _callibri.chat_widget._pusher.unsubscribe("presence-" + _callibri.session_id.toString());
        }
    };
}

function callibri_restore_chat() {
    document.querySelector('.callibri_chat_wrapper > .callibri_wrapperField').innerHTML = _callibri.chat_data;
    var input_chat = document.querySelector('.callibri_input_chat_wrap') || document.querySelector('.callibri_input_chat_div');
    input_chat.style.display = '';
    _callibri.load_chat_history = false;
    _callibri.chat_was_closed = true;
    if (_callibri.chat_widget && _callibri.chat_widget._pusher) _callibri.chat_widget._pusher.unsubscribe("presence-" + _callibri.session_id.toString());
    _callibri.chat_widget = new CallibriChatWidget();
    callibri_setHeight(callibri_tabs_height);
    if (!_callibri.mobile.isMobile && typeof(EmojiPicker) == 'function') {
        callibri_init_emoji();
    }
    var hooks = document.querySelectorAll('.callibri_hooktext_wrapper');
    for (var i = 0; i < hooks.length; i++) {
        hooks[i].style.display = 'block';
    }
}

function toolTip_stars(value, msg, self) {
    document.querySelector('#callibri_chat_rating_send').classList.add('callibri_bttn_color');
    document.querySelector('#callibri_chat_rating_send').classList.remove('callibri_check_color');
    document.querySelector('#callibri_chat_rating_send').classList.remove('callibri_check_def_button');
    document.getElementById("callibri_text_stars").innerHTML = msg;
    document.querySelector("#chat_rating_value").value = value;
    var stars = document.querySelectorAll('.callibri_rating_chat span'),
        star;
    callibriRemoveClass(stars, 'active');
    for (var i = stars.length - 1; i != -1; i--) {
        star = stars[i];
        star.className = 'active';
        if (star.id == self.id)
            break;
    }
}
var callibriRatingLoc;

function showChatEndButton() {
    callibriRatingLoc = new CallibriRatingLocalization();
    var rating_show = _callibri.module_settings.tabs.chat.rating_show != "false";
    _callibri.chat_data = document.querySelector('.callibri_chat_wrapper > .callibri_wrapperField').innerHTML;
    _callibri.user_actions = document.querySelector('.callibri_chat_settings_wrapper').innerHTML;
    var input_chat = document.querySelector('.callibri_input_chat_wrap') || document.querySelector('.callibri_input_chat_div');
    input_chat.style.display = 'none';
    var wrapper = document.querySelector('.callibri_chat_wrapper > .callibri_wrapperField');
    callibri_setHeight(callibri_tabs_height);
    //todo передавать имя последнего чатившего оператора с необходимым склонением в data
    if (wrapper.querySelector("#callibri_div_end_dialog") === null) {
        var button_text = rating_show ? callibriRatingLoc.text('rating_chat') : callibriRatingLoc.text('resume_chat');
        var restore_chat = rating_show ? "<div style='margin-top:8px;'><a href='javascript:;' onclick='callibri_restore_chat()' class='callibri_continue_dialog'>" + callibriRatingLoc.text('continue_chat') + "</a></div>" : "";
        wrapper.innerHTML += "<div id='callibri_div_end_dialog'><div class='callibri_dark_text callibri_chatOver'>" + callibriRatingLoc.text('end_dialog_text').replace('#USERNAME#', _callibri.chat_operator.name) + (rating_show ? callibriRatingLoc.text('rate_it') : "") + "</div><br><button class='callibri_button callibri_bttn_color' id='show_chat_rating'>" + button_text + "</button>" + restore_chat + "</div>";
        if (rating_show) {
            document.querySelector('#show_chat_rating').onclick = function() { showChatRating(); };
        } else {
            document.querySelector('#show_chat_rating').onclick = function() { callibri_restore_chat(); };
        }
        callibri_app.scrollTo('callibri_chat_input');
    }
    var hooks = document.querySelectorAll('.callibri_hooktext_wrapper');
    for (var i = 0; i < hooks.length; i++) {
        hooks[i].style.display = 'none';
    }
    clearTimeout(callibri_check_reply);
    callibri_check_reply = undefined;
    clearTimeout(callibri_robotext);
    callibri_robotext = undefined;
}

function callibriSectionCallbackChange(number) {
    var wrapper = document.querySelector('#callibri_reqCallW');
    switch (number) {
        case 0:
            _callibri.phone_callback = document.getElementById('callibri_callback_phone').value.replace(/[^\d]/gi, '');
            wrapper.innerHTML = callibriViewRating("");
            var button = wrapper.querySelector('#callibri_chat_rating_send');
            button.onclick = function() {
                var rating = document.querySelector('#chat_rating_value').value;
                if (rating) {
                    var callback = function() {
                        //вьюшка отправленого отзыва
                        var text = " ";
                        document.querySelector('#callibri_reqCallW .callibri_wrapperField').innerHTML = callibriViewThxRating(text, true);
                        setTimeout(function() {
                            callibriSectionCallbackChange(1);
                        }, 5000);
                    };
                    var post_data = {
                        number: _callibri.number,
                        phone: _callibri.phone_callback,
                        rating: rating,
                        comment: document.querySelector('#chat_rating_comment').value
                    };
                    callibriMakeRequest('/module/cdr_rating', post_data, callback);
                }
            };
            break;
        case 1:
            var tab = _callibri.module_settings.tabs.callback;
            wrapper.innerHTML = callibriTabDivs('callback', tab);
            wrapper.innerHTML = document.querySelector('#callibri_reqCallW #callibri_reqCallW').innerHTML; //отдается теперь дивом wrappera
            callibriTabCallback(tab);
            call_mask();
            break;
        case 2:
    }
}

CallibriRatingLocalization = function() {
    this.init();
};
CallibriRatingLocalization.prototype = {
    init: function() {
        var self = this,
            loc = _callibri.localization,
            chat = _callibri.module_settings.tabs.chat,
            rating = (chat && chat.rating);
        self.rating_chat = loc ? loc.getText('chat', 'rating_chat') : 'Оценить этот чат';
        self.rating_placeholder = loc ? loc.getText('chat', 'rating_placeholder') : 'Вам есть что добавить? Не стесняйтесь — пишите в комментарии :)';
        self.resume_chat = loc ? loc.getText('chat', 'resume_chat') : 'Возобновить чат';
        self.continue_chat = loc ? loc.getText('chat', 'continue_chat') : 'Продолжить диалог';
        self.end_dialog_text = loc ? loc.getText('chat', 'end_dialog_text') : 'Чат с #USERNAME# окончен.';
        self.rate_it = loc ? loc.getText('chat', 'rate_it') : 'Оцените его, пожалуйста.';
        self.thx_up = loc ? loc.getText('chat', 'thx_up') : 'Спасибо за ваш отзыв!';
        self.rating_thx = loc ? loc.getText('chat', 'rating_thx') : 'Оцените чат с нашим сотрудником. Заранее спасибо!';
        self.rating_1 = loc ? loc.getText('chat', 'rating_1') : rating ? chat.rating[1] : 'Спасибо за сигнал. Обязательно разберемся и отрубим виновному голову.';
        self.rating_2 = loc ? loc.getText('chat', 'rating_2') : rating ? chat.rating[2] : 'Грустно слышать. Немедленно приступим к работе над ошибками.';
        self.rating_3 = loc ? loc.getText('chat', 'rating_3') : rating ? chat.rating[3] : 'Спасибо! В следующий раз будет еще лучше.';
        self.rating_4 = loc ? loc.getText('chat', 'rating_4') : rating ? chat.rating[4] : 'Спасибо! Пишите нам еще.';
        self.rating_5 = loc ? loc.getText('chat', 'rating_5') : rating ? chat.rating[5] : 'Спасибо! Вы нам тоже ужасно нравитесь.';
        self.rating = { 5: self.rating_5, 4: self.rating_4, 3: self.rating_3, 2: self.rating_2, 1: self.rating_1 };
    },
    text: function(item) {
        var self = this;
        return self[item];
    }
};