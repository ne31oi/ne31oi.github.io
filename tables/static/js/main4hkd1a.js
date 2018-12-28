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
                if (data.node.isFolder()) {
                    return "dot3-icon";
                } else {
                    return "dot-icon";
                }
            },
            source: [
                { title: "Node 1", key: "1", type: 'scheme' },
                {
                    title: "Folder 2",
                    key: "2",
                    folder: true,
                    children: [
                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                        { title: "Node 2.2", key: "4" }
                    ]
                },
                {
                    title: "Folder 2",
                    key: "3",
                    folder: true,
                    children: [
                        { title: "Node 2.1", key: "3", myOwnAttr: "abc", type: 'scheme' },
                        {
                            title: "Folder 2",
                            key: "2",
                            folder: true,
                            children: [
                                { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                {
                                    title: "Folder 2",
                                    key: "2",
                                    folder: true,
                                    children: [
                                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                        {
                                            title: "Folder 2",
                                            key: "2",
                                            folder: true,
                                            children: [
                                                { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                {
                                                    title: "Folder 2",
                                                    key: "2",
                                                    folder: true,
                                                    children: [
                                                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                        {
                                                            title: "Folder 2",
                                                            key: "2",
                                                            folder: true,
                                                            children: [
                                                                { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                {
                                                                    title: "Folder 2",
                                                                    key: "2",
                                                                    folder: true,
                                                                    children: [
                                                                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                        {
                                                                            title: "Folder 2",
                                                                            key: "2",
                                                                            folder: true,
                                                                            children: [
                                                                                { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                                {
                                                                                    title: "Folder 2",
                                                                                    key: "2",
                                                                                    folder: true,
                                                                                    children: [
                                                                                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                                        {
                                                                                            title: "Folder 2",
                                                                                            key: "2",
                                                                                            folder: true,
                                                                                            children: [
                                                                                                { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                                                {
                                                                                                    title: "Folder 2",
                                                                                                    key: "2",
                                                                                                    folder: true,
                                                                                                    children: [
                                                                                                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                                                        {
                                                                                                            title: "Folder 2",
                                                                                                            key: "2",
                                                                                                            folder: true,
                                                                                                            children: [
                                                                                                                { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                                                                {
                                                                                                                    title: "Folder 2",
                                                                                                                    key: "2",
                                                                                                                    folder: true,
                                                                                                                    children: [
                                                                                                                        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
                                                                                                                        { title: "Node 2.2", key: "4" }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
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
                        console.log('send',row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-edit').click(function() {
                        console.log('edit',row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-copy').click(function() {
                        console.log('copy',row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-download').click(function() {
                        console.log('download',row)
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
                        console.log('send',row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-edit').click(function() {
                        console.log('edit',row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-copy').click(function() {
                        console.log('copy',row)
                    })
                    $('#' + instance[0].id + ' #row-' + row + ' .fa-download').click(function() {
                        console.log('download',row)
                    })
                }



            }
        });
    }



});
