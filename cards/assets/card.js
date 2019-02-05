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
            cardsW: 600,
            cardW: 100
        };
        if (self.container) {
            self.container.style.width = self.options.cardsW + "px";
            self.cards = document.querySelectorAll('.card');
            self.cards.forEach(function(card) {
                card.innerHTML = "<div class='innerBackCard' ></div>";
                card.style.left = "calc(50% - " + self.options.cardW / 2 + "px)";
                card.style.width = self.options.cardW + "px";
                card.style.zIndex = '1';
            });
            if (window.getCookie('cardNumber')) {

            } else {
                var i = 0;
                setTimeout(function() {
                    self.shiffle();
                    interval = setInterval(function() {
                        if (i == 3) {
                            clearInterval(interval);
                            self.start()
                        } else {
                            self.shiffle();
                            i++;
                        }
                    }, 1500);
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
    },
    shiffle: function() {
        var self = this,
            current_left = self.cards[0].style.left;
        self.cards[0].style.zIndex = '2';
        self.cards[0].style.left = "calc(50% + " + self.options.cardW + "px)";
        setTimeout(function() {
            self.cards[0].style.zIndex = '1';
            self.cards[0].style.left = current_left;
        }, 500)
    }



};
window.getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
};

var wt1 = new Cards('cards');