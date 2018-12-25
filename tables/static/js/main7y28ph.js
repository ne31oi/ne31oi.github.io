console.log('init')
$(document).ready(function() {
    $('#login_btn').click(function() {
        //функция на чек логина
        var url = "table.html";
        $(location).attr('href', url);
    });
    $('header .user .name').click(function() {
    	document.querySelector('header .help .info').style.display = 'none'
        document.querySelector('header .user .info').style.display = (document.querySelector('header .user .info').style.display == 'flex')?'none':'flex'
    });
    $('header .user .avatar').click(function() {
    	document.querySelector('header .help .info').style.display = 'none'
        document.querySelector('header .user .info').style.display = (document.querySelector('header .user .info').style.display == 'flex')?'none':'flex'
    });
    $('header .help i').click(function() {
    	document.querySelector('header .user .info').style.display = 'none'
        document.querySelector('header .help .info').style.display = (document.querySelector('header .help .info').style.display == 'flex')?'none':'flex'
    });
    $('header .exit').click(function() {
        var url = "index.html";
        $(location).attr('href', url);
    });
    $('header .settings').click(function() {
        var url = "settings.html";
        $(location).attr('href', url);
    });
    $('header #help_o').click(function() {
    	document.querySelector('header #help_info').style.display = (document.querySelector('header #help_info').style.display == 'flex')?'none':'flex'
    	document.querySelector('header .help .info').style.display = (document.querySelector('header .help .info').style.display == 'flex')?'none':'flex'
    });
    $('.close').click(function() {
    	document.querySelector('header #help_info').style.display = 'none'
    });
});
