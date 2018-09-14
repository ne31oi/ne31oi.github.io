var app = new Vue({
    el: '#app',
    data: {
        feedback: false,
        slider1_1: true,
        slider1_2: false,
        slider1_3: false,
        slider2_1: true,
        slider2_2: false,
        slider2_3: false,
        slider3_1: true,
        slider3_2: false,
        slider3_3: false,
        slider4_1: true,
        slider4_2: false,
        slider4_3: false,
        slider5_1: true,
        slider5_2: false,
        slider5_3: false,
        slider6_1: true,
        slider6_2: false,
        slider6_3: false,
        slider7_1: true,
        slider7_2: false,
        slider7_3: false,
        slider8_1: true,
        slider8_2: false,
        slider8_3: false,
    },
    methods: {
        fb: function(b) {
            var f = document.getElementById('feed');
            if (f.classList.contains('show')) {
                f.classList.remove('show')
            } else f.classList.add('show')
        },
        slide1: function(b) {
            if (b == 1) {
                this.slider1_1 = true;
                this.slider1_2 = false;
                this.slider1_3 = false;
            }
            if (b == 2) {
                this.slider1_1 = false;
                this.slider1_2 = true;
                this.slider1_3 = false;
            }
            if (b == 3) {
                this.slider1_1 = false;
                this.slider1_2 = false;
                this.slider1_3 = true;
            }
        },
        slide2: function(b) {
            if (b == 1) {
                this.slider2_1 = true;
                this.slider2_2 = false;
                this.slider2_3 = false;
            }
            if (b == 2) {
                this.slider2_1 = false;
                this.slider2_2 = true;
                this.slider2_3 = false;
            }
            if (b == 3) {
                this.slider2_1 = false;
                this.slider2_2 = false;
                this.slider2_3 = true;
            }
        },
        slide3: function(b) {
            if (b == 1) {
                this.slider3_1 = true;
                this.slider3_2 = false;
                this.slider3_3 = false;
            }
            if (b == 2) {
                this.slider3_1 = false;
                this.slider3_2 = true;
                this.slider3_3 = false;
            }
            if (b == 3) {
                this.slider3_1 = false;
                this.slider3_2 = false;
                this.slider3_3 = true;
            }
        },
        slide4: function(b) {
            if (b == 1) {
                this.slider4_1 = true;
                this.slider4_2 = false;
                this.slider4_3 = false;
            }
            if (b == 2) {
                this.slider4_1 = false;
                this.slider4_2 = true;
                this.slider4_3 = false;
            }
            if (b == 3) {
                this.slider4_1 = false;
                this.slider4_2 = false;
                this.slider4_3 = true;
            }
        },
        slide5: function(b) {
            if (b == 1) {
                this.slider5_1 = true;
                this.slider5_2 = false;
                this.slider5_3 = false;
            }
            if (b == 2) {
                this.slider5_1 = false;
                this.slider5_2 = true;
                this.slider5_3 = false;
            }
            if (b == 3) {
                this.slider5_1 = false;
                this.slider5_2 = false;
                this.slider5_3 = true;
            }
        },
        slide6: function(b) {
            if (b == 1) {
                this.slider6_1 = true;
                this.slider6_2 = false;
                this.slider6_3 = false;
            }
            if (b == 2) {
                this.slider6_1 = false;
                this.slider6_2 = true;
                this.slider6_3 = false;
            }
            if (b == 3) {
                this.slider6_1 = false;
                this.slider6_2 = false;
                this.slider6_3 = true;
            }
        },
        slide7: function(b) {
            if (b == 1) {
                this.slider7_1 = true;
                this.slider7_2 = false;
                this.slider7_3 = false;
            }
            if (b == 2) {
                this.slider7_1 = false;
                this.slider7_2 = true;
                this.slider7_3 = false;
            }
            if (b == 3) {
                this.slider7_1 = false;
                this.slider7_2 = false;
                this.slider7_3 = true;
            }
        },
        slide8: function(b) {
            if (b == 1) {
                this.slider8_1 = true;
                this.slider8_2 = false;
                this.slider8_3 = false;
            }
            if (b == 2) {
                this.slider8_1 = false;
                this.slider8_2 = true;
                this.slider8_3 = false;
            }
            if (b == 3) {
                this.slider8_1 = false;
                this.slider8_2 = false;
                this.slider8_3 = true;
            }
        },
        click: function(b) {
            var x;
            if (b.target.nodeName == "IMG")
                x = b.target.parentElement
            else x = b.target
            x.parentElement.childNodes.forEach(function(a) {
                if (a.nodeName == "DIV") a.classList.remove("dot_active")
            })
            x.classList.add("dot_active")
        }

    }
})
