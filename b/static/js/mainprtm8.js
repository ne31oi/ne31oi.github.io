(function($) {
    $(function() {

        $('select').styler();

    });
})(jQuery);
window.vedro = '';
$('#vedro').click(function() {
    console.log($('#v').value);
});

Vue.component('v-select', VueSelect.VueSelect);


Vue.use(PrettyCheckbox);
var app = new Vue({
    el: '#app',
    data: {
        m1: false,
        m2: false,
        menu2: false,
        select1: 1,
        select2: null,
        select3: null,
        select4: null,
        select5: null,
        win1: false,
        win2: false,
        win3: false,
        win4: false,
        win5: false,
        win6: false,
        win6num: 0,
        banner: true,
        katalog_aside: true,
        review_slide: 1,
        slide2: 0,
        menu2show: 0,
        mobile: false,
        demo3: {
            value: [1200, 12000],
            width: '100%',
            height: 8,
            dotSize: 16,
            min: 0,
            max: 120000,
            disabled: false,
            show: true,
            useKeyboard: true,
            tooltip: 'none',
            formatter: '{value}',
            overlapFormatter: '{value1} ~ {value2}',
            bgStyle: {
                backgroundColor: '#000',

            },
            tooltipStyle: {
                backgroundColor: '#666',
                borderColor: 'none'
            },
            processStyle: {
                backgroundColor: '#da0812'
            }
        },
    },
    methods: {
        openMenu1: function(event) {
            this.m1 = true
        },
        openMenu2: function(event) {
            this.m2 = true
            //var item = document.getElementById('menu2')
            //item.style.marginTop = '0px'
        },
        closeMenu: function(event) {
            this.m2 = false
            this.m1 = false
            //var item = document.getElementById('menu2')
            //item.style.marginTop = '-300%'
        },
        closeWindows: function(event) {
            this.win6 = false
            this.win5 = false
            this.win4 = false
            this.win3 = false
            this.win2 = false
            this.win1 = false
        },
        showWin: function(n) {
            this.closeWindows()
            switch (n) {
                case 1:
                    this.win1 = true
                    break;
                case 2:
                    this.win2 = true
                    break;
                case 3:
                    this.win3 = true
                    break;
                case 4:
                    this.win4 = true
                    break;
                case 5:
                    this.win5 = true
                    break
                case 6:
                    this.win6 = true
                    break
            }
        },
        win6plus: function() {
            this.win6num++;
        },
        win6minus: function() {
            if (this.win6num > 1)
                this.win6num--;
        },
        totop: function(t) {
            var that = this;
            if (t > 0) {
                setTimeout(function() {
                    document.documentElement.scrollTop = document.documentElement.scrollTop - 10
                    that.totop(document.documentElement.scrollTop)
                }, 1)
            }
        },

        scrollToTop: function() {


            this.totop(document.documentElement.scrollTop)
            //document.documentElement.scrollTop = 0;
        },
        slidePlus: function(slide) {
            if (slide < 3)
                slide++
        },
        slideMinus: function(slide) {
            console.log(this.review_slide)
        }

    },
    components: {
        'vueSlider': window['vue-slider-component'],
    },
    mounted: function() {
        var that = this;

        document.documentElement.addEventListener('click', function(event) {
            if (event.target.classList.contains('sel')) {
                if (event.target.innerText == 'Ведро 20 л - рекомендуем')
                    that.select1 = 1
                else that.select1 = 2
            }
        });
        (function(a, b) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                that.mobile = true;
                that.katalog_aside = false;
                that.banner = false
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        document.querySelectorAll('.dropdown-toggle').forEach(function(item) {

            var i = item.getElementsByTagName('input')
            for (var j = 0; j < i.length; j++) {
                i[j].disabled = 'disabled'
                i[j].readOnly = true
            }


        })
    }
})