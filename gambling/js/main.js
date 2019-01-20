$(document).ready(function() {
    //CLASS ACTIVE
    $('body').on('click', '.btn-mobile-nav a', function() {
        $('.header_title .box-btn').slideToggle(200);
        $('.overlay').toggleClass("active");
        $('body').toggleClass("hid");
        $(this).toggleClass("active");
    });
    $('body').on('click', '.overlay', function() {
        $('.header_title .box-btn').slideUp(200);
        $('.overlay').removeClass("active");
        $('body').removeClass("hid");
        $('.btn-mobile-nav a').toggleClass("active");
        $(this).removeClass("active");
    });
    //END CLASS ACTIVE

    $('#progress_jackpot').animate({ num: 1000000 - 10 /* - начало */ }, {
        duration: 9000000000,
        step: function(num) {
            this.innerHTML = (num + 1).toFixed(6)
        }
    });

    //BUTTON EFFECT
    $(function() {
        $('.btn-effect')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
        // $('[href=#]').click(function(){return false});
    });
    //END BUTTON EFFECT

    var stop = false;
    var demo_balance = 1;

    $(function() {
        function random(min, max, l) {
            var arr = [],
                m = [],
                n = 0;
            if (max - min < l - 1) return;
            for (var i = 0; i <= (max - min); i++) m[i] = i + min;
            for (var i = 0; i < l; i++) {
                n = Math.floor(Math.random() * (m.length));
                arr[i] = m.splice(n, 1)[0];
            };
            return arr
        }


        var arr = random(0, 7, 8, ),
            carusel = $('#spinner');

        function rand(min, max, integer) {
            var r = Math.random() * (max - min) + min;
            return integer ? r | 0 : r;
        }

        //$.each(arr,function(index, el){
        //    $('<li/>',{data : {i : el}}).appendTo(carusel)
        //});
        var t = carusel.children().length
        for (var i = 0; i < t; i++) {
            $('#spinner .list_item:nth-child(' + i + ')').clone().appendTo(carusel);
        }
        for (var i = 0; i < t; i++) {
            $('#spinner .list_item:nth-child(' + i + ')').clone().appendTo(carusel);
        }
        var audio = document.getElementById('audio') // new Audio('crate_scroll.wav');
        //audio.type = 'audio/wav';
        var lottot = true

        function lotto() {
            //carusel.stop();
            if (lottot) {
                var a = Math.floor(Math.random() * (100 - 30)) + 30;
                lottot = false
                for (var i = 0; i <= a; i++) {
                    var z = (a == i) ? 1000 : (a - i) < 3 ? 300 : (a - i) < 7 ? 220 : (a - i) < 12 ? 180 : (a - i) < 17 ? 150 : 80;
                    carusel.animate({
                            left: '-=190',
                        }, z, (i !== a) ? "linear" : "easeOutSine",
                        function() {
                            try {
                                audio.pause()
                                audio.currentTime = 0
                                audio.play()
                            } catch (n) { console.log(n) }
                            if (carusel.css("left") == '-1900px') {
                                carusel.css({
                                    left: '0px'
                                });
                            }
                            if (stop == false) {
                                lottot = false
                            } else {
                                lottot = true
                            }
                        })
                }


            }
            /*

            (function go() {
                console.log(stop)
                carusel.animate({
                        left: '-=188',
                    }, stop == false ? i : 1500, stop == false ? "linear" : "easeOutSine",
                    function() {
                        var li = $('#spinner>li:first');
                        data = $('#spinner>li:eq(5)').data('i');
                        console.log($('#spinner>li:eq(5)'))
                        if (data == n) r--;

                        //console.log('ok');
                        li.appendTo(carusel)
                        carusel.css({
                            left: '0px'
                        });
                        console.log(n, a)
                        a++

                        i = a > 5 ? i <400 ? i + 40 : i : i;
                        console.log(n, r, stop, i)
                        if (stop == false) {
                            r && go();
                        } else {
                            carusel.animate({
                                left: '-=188',
                            }, stop == false ? i : 1000, stop == false ? "linear" : "easeOutSine")
                            withdraw();
                        }
                    })
            }())*/

        }
        //$('.case-spin_box-btn a').on({click : lotto})

        $('.case-spin_box-btn a').click(function(e) {
            //отмена
            e.preventDefault();
            stop = false;
            demo_balance -= 0.3;
            update_balance();
            lotto();
            setTimeout(stop_game, rand(500, 5000, true));
        });

        function stop_game() {
            stop = true;
        }

        function withdraw() {
            var win_sum = 0;
            var str = $('#spinner>li:eq(5)').text();
            if (str.indexOf(' 0.01 ') + 1) {
                //alert('0.01');
                win_sum = 0.01;
            }

            if (str.indexOf(' 0.1 ') + 1) {
                //alert('0.1');
                win_sum = 0.1;
            }

            if (str.indexOf(' 1 ') + 1) {
                //alert('1');
                win_sum = 1;
            }

            if (str.indexOf(' 3 ') + 1) {
                //alert('3');
                win_sum = 3;
            }

            if (str.indexOf(' 10 ') + 1) {
                //alert('10');
                win_sum = 10;
            }
            demo_balance += win_sum;
            update_balance();
        }

        function update_balance() {
            $('#demo_balance').text(round(demo_balance) + ' ETH');
        }

    })

    function round(val) {
        return Math.ceil((val) * 100) / 100;
    }

});