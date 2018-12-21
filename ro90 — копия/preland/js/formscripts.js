$(function() {
    // Прокрутка по странице к форме заказа\
    $(".scrollToForm").on('click', function(event) {
    	event.preventDefault();
        $('html, body').stop().animate({ scrollTop: ($('#scroll').offset().top) }, 1500);
    });

    // Запуск таймера
	var fiveSeconds = new Date().getTime() + 27000000;
	$('#clock').countdown(fiveSeconds, {
		elapse: true
	}).on('update.countdown', function(event) {
		var $this = $(this);
		if (event.elapsed) {
			$this.html("время истекло");
		} else {
			$this.html(event.strftime('<span class="units">%H</span> <b>:</b> <span class="units">%M</span> <b>:</b> <span class="units">%S</span>'));
		}
	});
})
