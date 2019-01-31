WorkTimer = function(id, dates, options) {
    this.init(id, dates, options);
};
//сервис для определения сегмента
WorkTimer.prototype = {
    init: function(id, dates, options) {
        var self = this;
        self.container = document.getElementById(id)
        if (self.container) {
            self.currentTime = new Date();
            self.options = {
                icons: {
                    dayoff: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>',
                    arrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>',
                    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z"/></svg>'
                },
                colors: {
                    main: options && options.main_color ? options.main_color : '#65d027',
                    second: options && options.second_color ? options.second_color : '#e2667b',
                    select: options && options.select_color ? options.select_color : '#c0e1ac',
                },
                speed: options && options.speen ? options.speen : 500

            }
            self.dates = [
                { text: "Пн", start: "9:00", end: "18:00", work: true },
                { text: "Вт", start: "9:00", end: "18:00", work: true },
                { text: "Ср", start: "9:00", end: "18:00", work: true },
                { text: "Чт", start: "9:00", end: "18:00", work: true },
                { text: "Пт", start: "9:00", end: "18:00", work: true },
                { text: "Cб", start: "9:00", end: "18:00", work: true },
                { text: "Вс", start: "9:00", end: "18:00", work: true },
            ]
            if (dates)
                dates.forEach(function(date, i) {
                    if (date[0]) {
                        self.dates[i].start = date[0]
                        self.dates[i].end = date[1]
                    } else if (date[0] == false) {
                        self.dates[i].work = false;
                    }
                })
            self.initStyle()
            self.initDraw()
            self.show = true;
            document.querySelector("#" + id + " .wt_day_arrow").addEventListener("click", function() {
            	if(self.show){
            		document.querySelector("#" + id + " .wt_week").style.marginTop = '-130px';
            		document.querySelector("#" + id + " .wt_day_arrow").style.transform = 'rotate(90deg)';
            		self.show = false;
            	}
            	else{
            		document.querySelector("#" + id + " .wt_week").style.marginTop = '';
            		document.querySelector("#" + id + " .wt_day_arrow").style.transform = '';
            		self.show = true;
            	}
            });
        }
    },
    getMSC: function(data, type) {
        var options = { timeZone: "Europe/Moscow" }
        if (type)
            options[type] = 'numeric'
        return data.toLocaleString('ru-RU', options)
    },
    initStyle: function() {
        var self = this;
        if (!document.getElementById('wt_style')) {
            var style = '.WorkTimer_main{display:flex;flex-direction:column;position:relative;max-width:500px;overflow:hidden}.WorkTimer_main *{box-sizing:border-box}' +
                '.wt_week{display:flex;justify-content: space-between;font-size:18px;position:relative;z-index:1;transition:margin ' + self.options.speed + 'ms;}' +
                '.wt_day{display:flex;flex-direction:column;justify-content: space-between;align-items:center;width: calc(100% / 7);flex-shrink: 0;}' +
                '.wt_active_day{background-color:' + self.options.colors.select + ';}' +
                '.wt_day_line{width:95%;height:3px;background-color:' + self.options.colors.main + ';}' +
                '.wt_day_head{height:40px;width:100%;display:flex;justify-content: center;align-items:center;}' +
                '.wt_day_start,.wt_day_end{height:40px}.wt_day_start,.wt_day_end,.wt_day_dayoff{display:flex;justify-content: center;}' +
                '.wt_day_start{align-items:flex-end;padding-bottom:5px}' +
                '.wt_day_end{align-items:flex-start;padding-top:5px}' +
                '.wt_day_dayoff{height:80px;align-items:center;}.wt_dayoff .wt_day_line{background-color:' + self.options.colors.second + ';}' +
                '.wt_day_clock,.wt_day_arrow{position:absolute;top:5px;z-index:3}' +
                '.wt_day_clock{left:0;height: 20px;}.wt_day_clock svg{fill:' + self.options.colors.main + ';height: 20px;}' +
                '.wt_day_arrow{right:0;transform: rotate(-90deg);height: 20px;cursor:pointer;transition:transform ' + self.options.speed + 'ms;}.wt_day_arrow svg{fill:gray;height: 20px;}' +
                '.wt_day_dayoff svg{fill:gray;height: 20px;}' +
                '.wt_day_work{font-size:24px;text-align:left;padding-left:30px;padding-bottom: 20px;position:relative;z-index:2;background-color:#fff}',
                css = document.createElement('style');
            css.setAttribute("id", 'wt_style');
            css.setAttribute("type", "text/css");
            css.appendChild(document.createTextNode(style));
            document.getElementsByTagName("head")[0].appendChild(css);
        }
    },
    initDraw: function() {
        var self = this,
            inner = '';
        if (!self.container.classList.contains("WorkTimer_main")) self.container.classList.add("WorkTimer_main");
        var current_day = '<div class="wt_day_clock">' + self.options.icons.clock + '</div><div class="wt_day_arrow">' + self.options.icons.arrow + '</div>',
            day = self.getMSC(self.currentTime.getDay(), 'day') - 1,
            current_day_start = self.dates[day].start.split(':'),
            current_day_end = self.dates[day].end.split(':');
        if (self.dates[day].work && (parseInt(self.getMSC(self.currentTime, 'hour')) >= parseInt(current_day_start[0]) && parseInt(self.getMSC(self.currentTime, 'minute')) >= parseInt(current_day_start[1] || 0)) && (parseInt(self.getMSC(self.currentTime, 'hour')) <= parseInt(current_day_end[0]) && parseInt(self.getMSC(self.currentTime, 'minute')) >= parseInt(current_day_end[1] || 0))) {
            current_day += '<div class="wt_day_work">Cегодня ' + self.dates[day].start + ' - ' + self.dates[day].end + '</div>'
        } else {
            next_work_day = (day + 1) == 7 ? 0 : day + 1;
            var nwd = false
            for (var i = 0; i < self.dates.length; i++) {
                if (!nwd) {
                    if (self.dates[next_work_day].work) {
                        nwd = true;
                    } else next_work_day = (next_work_day + 1) == 7 ? 0 : next_work_day + 1;
                }
            }
            current_day += '<div class="wt_day_work">Закрыто, откроемся в ' + self.dates[next_work_day].text + ' в ' + self.dates[next_work_day].start + '</div>'
        }
        self.dates.forEach(function(date, i) {
            var time = '<div class="wt_day_dayoff">' + self.options.icons.dayoff + '</div>';
            if (date.work) {
                time = '<div class="wt_day_start">' + date.start + '</div><div class="wt_day_end">' + date.end + '</div>'
            }
            inner += '<div class = "wt_day' + (!date.work ? " wt_dayoff" : "") + (i == day ? " wt_active_day" : "") + '"><div class="wt_day_head">' + date.text + '</div><div class="wt_day_line"></div>' + time + '</div>'
        })
        self.container.innerHTML = current_day + '<div class = "wt_week">' + inner + '</div>';
    }

}
var dates = [
    ["10:00", "16:00"],
    ["10:00", "16:00"],
    ["10:00", "16:00"],
    ["10:00", "16:00"],
    [false, "16:00"],
    [false],
    [false]
]
var wt1 = new WorkTimer('wt1', dates)