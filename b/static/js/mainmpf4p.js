Vue.component('v-select', VueSelect.VueSelect);


Vue.use(PrettyCheckbox);
var app = new Vue({
    el: '#app',
    data: {
        m1: false,
        m2: false,
        menu2: false,
        select1: null,
        win1: false,
        win2: false,
        win3: false,
        win4: false,
        win5: false,
        win6: false,
        win6num: 0,
        review_slide: 1,
        slide2: 0,
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
        openMenu1: function(event) {},
        openMenu2: function(event) {
            this.m2 = true
            //var item = document.getElementById('menu2')
            //item.style.marginTop = '0px'
        },
        closeMenu2: function(event) {
            this.m2 = false
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
            if (this.win6num > 0)
                this.win6num--;
        },
        scrollToTop: function() {
            document.documentElement.scrollTop = 0;
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
    computed: {

    }
})
