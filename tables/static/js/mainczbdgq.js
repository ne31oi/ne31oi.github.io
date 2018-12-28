console.log('init')
$(document).ready(function() {
    $('#login_btn').click(function() {
        //функция на чек логина
        var url = "table.html";
        $(location).attr('href', url);
    });
    $('header .user .name').click(function() {
        document.querySelector('header .help .info').style.display = 'none'
        document.querySelector('header .user .info').style.display = (document.querySelector('header .user .info').style.display == 'flex') ? 'none' : 'flex'
    });
    $('header .user .avatar').click(function() {
        document.querySelector('header .help .info').style.display = 'none'
        document.querySelector('header .user .info').style.display = (document.querySelector('header .user .info').style.display == 'flex') ? 'none' : 'flex'
    });
    $('header .help i').click(function() {
        document.querySelector('header .user .info').style.display = 'none'
        document.querySelector('header .help .info').style.display = (document.querySelector('header .help .info').style.display == 'flex') ? 'none' : 'flex'
    });
    $('header .exit').click(function() {
        var url = "index.html";
        $(location).attr('href', url);
    });
    $('header .settings').click(function() {
        var url = "settings.html";
        $(location).attr('href', url);
    });
    $('header #help_o').click(function() {
        document.querySelector('header #help_info').style.display = (document.querySelector('header #help_info').style.display == 'flex') ? 'none' : 'flex'
        document.querySelector('header .help .info').style.display = (document.querySelector('header .help .info').style.display == 'flex') ? 'none' : 'flex'
    });
    $('.close').click(function() {
        document.querySelector('header #help_info').style.display = 'none'
    });
    $('.tab').click(function() {
        for (var i = 0; i < this.parentNode.children.length; i++) {
            this.parentNode.children[i].classList.remove('on')
        }
        this.classList.add('on')
    });
    $('.left .back').click(function() {
        window.history.back();
    });
    if (typeof($("#tree").fancytree) == 'function') {
        $("#tree").fancytree({
            icon: function(event, data) {
                if (data.node.type == 'scheme') {
                    return "scheme-icon";
                } else
                if (data.node.type == 'service') {
                    return "service-icon";
                } else
                if (data.node.isFolder()) {
                    return "dot3-icon";
                } else {
                    var obj = '';
                    if (data.node.type.indexOf('con_obj') > -1) {
                        obj = "dot2-icon";
                    } else obj = "dot-icon";
                    var tt = '';
                    ['obj_work', 'obj_project', 'obj_test', 'obj_not', 'obj_obs', 'obj_ogr', 'obj_neo', 'obj_deact'].forEach(function(item) {
                        if (data.node.type.indexOf(item) > -1) {
                            tt = item;
                        }
                    })
                    return obj + " " + tt;
                }
            },
            source: [
                { title: "Cхема", key: "1", type: 'scheme' },
                { title: "Сервис", key: "2", type: 'service' },
                {
                    title: "Группа объектов",
                    key: "3",
                    folder: true,
                    children: [
                        { title: "Объект в работе", key: "3", myOwnAttr: "abc", type: 'obj_work' },
                        { title: "Объект проектируемый", key: "3", myOwnAttr: "abc", type: 'obj_project' },
                        { title: "Объект тестовый", key: "3", myOwnAttr: "abc", type: 'obj_test' },
                        { title: "Объект недоступен", key: "3", myOwnAttr: "abc", type: 'obj_not' },
                        { title: "Обследование", key: "3", myOwnAttr: "abc", type: 'obj_obs' },
                        { title: "Ограничен", key: "3", myOwnAttr: "abc", type: 'obj_ogr' },
                        { title: "Неопределен", key: "3", myOwnAttr: "abc", type: 'obj_neo' },
                        { title: "Деактивирован", key: "3", myOwnAttr: "abc", type: 'obj_deact' },
                    ]
                },
                {
                    title: "Группа связанных объектов",
                    key: "4",
                    folder: true,
                    children: [
                        { title: "Объект в работе", key: "3", myOwnAttr: "abc", type: 'con_obj_work' },
                        { title: "Объект проектируемый", key: "3", myOwnAttr: "abc", type: 'con_obj_project' },
                        { title: "Объект тестовый", key: "3", myOwnAttr: "abc", type: 'con_obj_test' },
                        { title: "Объект недоступен", key: "3", myOwnAttr: "abc", type: 'con_obj_not' },
                        { title: "Обследование", key: "3", myOwnAttr: "abc", type: 'con_obj_obs' },
                        { title: "Ограничен", key: "3", myOwnAttr: "abc", type: 'con_obj_ogr' },
                        { title: "Неопределен", key: "3", myOwnAttr: "abc", type: 'con_obj_neo' },
                        { title: "Деактивирован", key: "3", myOwnAttr: "abc", type: 'con_obj_deact' },
                    ]
                }
            ],
            activate: function(event, data) {
                var url = "table.html";
                if (data.node.type == 'scheme') {
                    url = "scheme.html";
                } else
                if (data.node.isFolder()) {
                    url = "table.html";
                } else {
                    url = "table2.html";
                }
                $(location).attr('href', url);
            }
        });
    }
    var data1 = [
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Google</a>', 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Apple</a>', 1976, 116.52, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
        ['<a href="table2.html">Yahoo</a>', 1994, 38.66, 1998, 807.80, 'text', 'text', 807.80, 'text', 'text'],
    ];
    var data2 = [
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
    ];
    var data3 = [
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
        ['Google', 1998],
    ];
    if (typeof($.fn.jexcel) == 'function') {
        $('#table1').jexcel({
            data: data1,
            minDimensions: [10, 30],
            colHeaders: ['Заголовок1', 'Длинный Заголовок2', 'Заголовок3', 'Заголовок4', 'Заголовок5', 'Заголовок6', 'Заголовок7', 'Заголовок8', 'Заголовок9', 'Заголовок10'],
            colWidths: [40, 80, 100, 80, 100, 80, 100, 80, 100, 200],
            colAlignments: ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'],
        });
        $('#table2').jexcel({
            data: data2,
            minDimensions: [2, 30],
            colHeaders: ['Параметр', 'Значение'],
            colWidths: [140, 800],
            colAlignments: ['left', 'left'],
            columns: [{ readOnly: true }, { readOnly: true }]
        });
        $('#table3').jexcel({
            data: data3,
            minDimensions: [9, 30],
            colHeaders: ['ID', 'Тип Заявки', 'Имя автора заявки', 'Назначено', 'Срок', 'Состояние', 'Дата создания', 'Подразделение', 'Приоритет'],
            colWidths: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
            colAlignments: ['left', 'left'],
            columns: [{ readOnly: true }, { readOnly: true }]

        });
        $('#table3').jexcel('updateSettings', {
            table: function(instance, cell, col, row, val, id) {
                // Number formating
                if (col == 0) {
                    var label = cell[0].parentNode.children[0]
                    label.innerHTML = '<i class="far fa-envelope top" ><div class="tooltip ">Отправить заявку</div></i> <i class="far fa-edit"><div class="tooltip ">Редактировать заявку</div></i><i class="far fa-copy"><div class="tooltip ">Копировать заявку</div></i><i class="fas fa-download"><div class="tooltip ">Сохранить заявку в PDF</div></i>'

                    $('#' + instance[0].id + ' #row-' + row + ' .fa-envelope').click(function() {
                        console.log('send', row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-edit').click(function() {
                        console.log('edit', row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-copy').click(function() {
                        console.log('copy', row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-download').click(function() {
                        console.log('download', row)
                    })
                }



            }
        });
        $('#table4').jexcel({
            data: data3,
            minDimensions: [9, 30],
            colHeaders: ['ID', 'Тип Заявки', 'Имя автора заявки', 'Назначено', 'Срок', 'Состояние', 'Дата создания', 'Подразделение', 'Приоритет'],
            colWidths: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
            colAlignments: ['left', 'left'],
            columns: [{ readOnly: true }, { readOnly: true }]

        });
        $('#table4').jexcel('updateSettings', {
            table: function(instance, cell, col, row, val, id) {
                // Number formating
                if (col == 0) {
                    var label = cell[0].parentNode.children[0]
                    label.innerHTML = '<i class="far fa-eye top" ><div class="tooltip ">Посмотерть наряд</div></i><i class="fas fa-download"><div class="tooltip ">Сохранить наряд в PDF</div></i><i class="far fa-eye top" ><div class="tooltip ">Посмотерть заявку</div></i><i class="fas fa-download"><div class="tooltip ">Сохранить заявку в PDF</div></i>'

                    $('#' + instance[0].id + ' #row-' + row + ' .fa-envelope').click(function() {
                        console.log('send', row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-edit').click(function() {
                        console.log('edit', row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-copy').click(function() {
                        console.log('copy', row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-download').click(function() {
                        console.log('download', row)
                    })
                }



            }
        });
    }






});

function anichange(objName) {
    if ($(objName).css('display') == 'none') {
        $(objName).animate({ height: 'show' }, 400);
    } else {
        $(objName).animate({ height: 'hide' }, 200);
    }
}
var id_menu = new Array('sub_menu_1', 'sub_menu_2', 'sub_menu_3');
startList = function allclose() {
    for (i = 0; i < id_menu.length; i++) {
        if (document.getElementById(id_menu[i]))
            document.getElementById(id_menu[i]).style.display = "none";
    }
}

function openMenu(id) {
    for (i = 0; i < id_menu.length; i++) {
        if (id != id_menu[i]) {
            if (document.getElementById(id_menu[i]))
                document.getElementById(id_menu[i]).style.display = "none";
        }
    }
    if (document.getElementById(id))
        if (document.getElementById(id).style.display == "block") {
            document.getElementById(id).style.display = "none";
        } else {
            document.getElementById(id).style.display = "block";
        }
}
window.onload = startList;
