var app = new Vue({
    el: '#app',
    data: {
        menu2: false,
    },
    methods: {
        openMenu1: function(event) {
        },
        openMenu2: function(event) {
            var item = document.getElementById('menu2')
            if (!item.classList.contains('back')) {
                item.classList.add('back')
            } else item.classList.remove('back')

        },
    }
})
