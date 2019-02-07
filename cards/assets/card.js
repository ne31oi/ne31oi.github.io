var Cards = function(id) {
    this.init(id);
};
//сервис для определения сегмента
Cards.prototype = {
    init: function(id) {
        var self = this;
        self.container = document.getElementById(id);
        self.options = {
            cardLeft: 50,
            cardsW: 900,
            cardW: 204
        };
        self.ready = false;
        if (self.container) {
            self.container.style.width = self.options.cardsW + "px";
            self.cards = document.querySelectorAll('.card');
            self.cards.forEach(function(card) {
                card.innerHTML = "<div class='innerBackCard' ></div>";
                card.style.left = "calc(50% - " + self.options.cardW / 2 + "px)";
                card.style.width = self.options.cardW + "px";
                card.style.zIndex = '1';
            });
            if (getCookie('cardNumber')) {
                var el = self.cards[0],
                    number = getCookie('cardNumber'),
                    j = 0;
                setTimeout(function() {
                    self.shiffle();

                    interval = setInterval(function() {
                        if (j == 3) {
                            clearInterval(interval);
                            setTimeout(function() {
                                self.cards[0].style.left = self.options.cardLeft + "px";
                                console.log(self.cards[0].style.left)
                                var cardsL = self.cards.length,
                                    cardsW = parseInt(self.container.style.width) - parseInt(self.cards[0].style.left) - parseInt(self.cards[0].style.width),
                                    cardsMargin = cardsW / cardsL;
                                for (var i = 0; i < cardsL; i++) {
                                    console.log(i, self.cards[i].style.left)
                                    self.cards[i].style.left = parseInt(self.cards[0].style.left) + cardsMargin * i + 'px';
                                }
                                setTimeout(function() {
                                    var el = document.getElementById(getCookie('cardId'));
                                    el.style.zIndex = 3
                                    var bg = document.getElementById('bg');
                                    bg.style.zIndex = 2;
                                    bg.style.opacity = 1;
                                    el.innerHTML += '<div class="imgCard bgi' + number + '"></div>'
                                    el.style.transform = 'translateY(-50%) translateX(-50%) scale(1.8) rotateY(-180deg)';
                                    el.style.left = "50%";
                                }, 1500)
                            }, 500)
                        } else {
                            self.shiffle();
                            j++;
                        }
                    }, 500);
                }, 1000);


            } else {
                var i = 0;
                setTimeout(function() {
                    self.shiffle();
                    interval = setInterval(function() {
                        if (i == 3) {
                            clearInterval(interval);
                            setTimeout(function() {
                                self.start()
                            }, 500)
                        } else {
                            self.shiffle();
                            i++;
                        }
                    }, 500);
                }, 1000);
            }
        }

    },
    start: function() {
        var self = this;
        self.cards[0].style.left = self.options.cardLeft + "px";
        self.cards.forEach(function(card) {
            card.classList.add('cardhover');
        });
        var cardsL = self.cards.length,
            cardsW = parseInt(self.container.style.width) - parseInt(self.cards[0].style.left) - parseInt(self.cards[0].style.width),
            cardsMargin = cardsW / cardsL;
        for (var i = 0; i < cardsL; i++) {
            self.cards[i].style.left = parseInt(self.cards[0].style.left) + cardsMargin * i + 'px';
        }
        self.ready = true;
    },
    shiffle: function() {
        var self = this,
            current_left = self.cards[0].style.left;
        self.cards[0].style.zIndex = '2';
        self.cards[0].style.left = "calc(50% + " + self.options.cardW + "px)";
        setTimeout(function() {
            self.cards[0].style.zIndex = '1';
            self.cards[0].style.left = current_left;
        }, 300)
    },
    click: function(el) {
        var self = this;
        if (self.ready && el.id) {
            self.random = Math.floor(Math.random() * (78 - 1 + 1)) + 1;
            self.random = (self.random < 10) ? ('0' + self.random) : self.random
            el.style.transform = 'translateY(-50%) translateX(-50%) scale(1.8) '
            el.style.zIndex = '3';
            el.style.left = "50%";
            el.classList.remove('cardhover');
            var bg = document.getElementById('bg');
            bg.style.zIndex = '2';
            bg.style.opacity = 1;
            el.innerHTML += '<div class="imgCard bgi' + self.random + '"></div>'
            setCookie('cardNumber', self.random, 1)
            setCookie('cardId', el.id, 1)
            el.onclick = '';
            setTimeout(function() {
                el.style.transform = 'translateY(-50%) translateX(-50%) scale(1.8) rotateY(-180deg)';
            }, 500)
        }
    }



};

function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays == null || nDays == 0)
        nDays = 1;
    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) +
        ";expires=" + expire.toGMTString() +
        ";path=/";

}


function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

var wt1 = new Cards('cards');