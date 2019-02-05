Cards = function(id, dates, options) {
    this.init(id, dates, options);
};
//сервис для определения сегмента
Cards.prototype = {
    init: function(id, dates, options) {
        var self = this;
        self.container = document.getElementById(id)
        var style = ''
        if (self.container) {
            for (var i = 1; i <= 78; i++) {
                style += ".bgi" + ((i < 10) ? ("0" + i) : i) + "{background-image: url(img/Image" + ((i < 10) ? ("0" + i) : i) + ".jpg);}"
            }
        }
        console.log(style)

    }

}

var wt1 = new Cards('cards')