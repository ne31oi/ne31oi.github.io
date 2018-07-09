Vue.component('v-select', VueSelect.VueSelect);
var app = new Vue({
    el: '#app',
    data: {
        menu2: false,
        select1: null,
        win1:false,
        win2:false,
        win3:false,
        win4:false,
        win5:false,
        win6:false,
        
    },
    methods: {
        openMenu1: function(event) {},
        openMenu2: function(event) {
            var item = document.getElementById('menu2')
            item.style.marginTop = '0px'
        },
        closeMenu2: function(event) {
            var item = document.getElementById('menu2')
            item.style.marginTop = '-100%'
        },
        closeWindows: function(event) {
            this.win6=false
            this.win5=false
            this.win4=false
            this.win3=false
            this.win2=false
            this.win1=false
        },
    },
    computed: {
       
    }
})
