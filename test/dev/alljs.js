// Particle
// $(document).ready(function(){$("#particles").particleground({dotColor:"#363a49",lineColor:"#363a49"}),$(".intro").css({"margin-top":-($(".intro").height()/3)})});

// Flexslider settings
$(document).ready(function(){$(".banner-area").flexslider({animation:"fade",start:function(){$("body").removeClass("loading")}});});
// IE10 viewport hacks
$(document).ready(function () {'use strict';if (navigator.userAgent.match(/IEMobile\/10\.0/)){
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
        document.querySelector('head').appendChild(msViewportStyle)}});
// Testimonial carousel
!function(){"use strict";$(".carousel").carousel({interval:5e3})}(jQuery);
//
/*
$(document).ready(function () {
	$('#contact-form').validate({
	
		submitHandler: function (){
			alert('Ваша заявка отправлена!');
		},
		rules: {
			userEmail: {
				email: true,
				required: true
			}
		},
		messages: {
			userEmail: {
				email: "Please enter your email",
				required: "*"
			}
		}
	)};
});
*/