Vue.component('v-select', VueSelect.VueSelect);
var app = new Vue({
    el: '#app',
    data: {
        menu2: false,
        select1: null,
        
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
    },
    computed: {
       
    }
})
