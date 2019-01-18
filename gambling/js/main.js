$(document).ready(function(){
//CLASS ACTIVE
    $('body').on('click', '.btn-mobile-nav a', function () {
        $('.header_title .box-btn').slideToggle(200);
        $('.overlay').toggleClass("active");
        $('body').toggleClass("hid");
        $(this).toggleClass("active");
    });
    $('body').on('click', '.overlay', function () {
        $('.header_title .box-btn').slideUp(200);
        $('.overlay').removeClass("active");
        $('body').removeClass("hid");
        $('.btn-mobile-nav a').toggleClass("active");
        $(this).removeClass("active");
    });
//END CLASS ACTIVE

//BUTTON EFFECT
    $(function() {
        $('.btn-effect')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        // $('[href=#]').click(function(){return false});
    });
//END BUTTON EFFECT

    $(function () {
        function random(min,max,l)
        {var arr = [],m = [],n = 0;
            if (max - min < l-1) return;
            for (var i=0; i<=(max-min); i++)m[i] = i + min;
            for (var i=0; i<l; i++) {n = Math.floor(Math.random()*(m.length)); arr[i]=m.splice(n,1)[0];};
            return arr
        }


        var arr = random(0 ,7, 8,), carusel = $('#spinner');
        function rand(min, max, integer) {
            var r = Math.random() * (max - min) + min;
            return integer ? r|0 : r;
        }

        $.each(arr,function(index, el){
            $('<li/>',{data : {i : el}}).appendTo(carusel)
        });
        function lotto()
        {
            var n = rand(0 ,arr.length, true);

            r = rand( 2, 5, 7, true);

            carusel.stop();
            (function go() {
                carusel.animate({
                        left: '-=50',
                    },50,
                    function () {
                        var li = $('#spinner>li:first');
                        data = $('#spinner>li:eq(5)').data('i');
                        if (data == n) r--;


                        li.appendTo(carusel)
                        carusel.css({
                            left: '0px'
                        });
                        r && go();
                    })
            }())

        }
        $('.case-spin_box-btn a').on({click : lotto})

    })

});

