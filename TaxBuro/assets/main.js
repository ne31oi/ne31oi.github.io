function sm() {
    var name = document.querySelector("#name"),
        email = document.querySelector("#email"),
        msg = document.querySelector("#msg"),
        i = 0;
    name.style.outline = 'none';
    if (name.value.length > 0) {
        i++;
    } else {
        name.style.outline = '1px solid red';
    }
    email.style.outline = 'none';
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if (email.value.length > 0 && re.test(email.value)) {
        i++;
    } else {
        email.style.outline = '1px solid red';
    }
    msg.style.outline = 'none';
    if (msg.value.length > 0) {
        i++;
    } else {
        msg.style.outline = '1px solid red';
    }
    if (i == 3) {
        var s = new URLSearchParams;
        s.append("title", "Заказ");
        s.append("name", name.value);
        s.append("email", email.value);
        s.append("message", msg.value);
        var t = new XMLHttpRequest;
        t.open("POST", "mail.php"), t.send(s);
        document.querySelector('.js-callback-open-main-01-wrapper').style.display = 'none';
        document.querySelector('.js-callback-open-main-02-wrapper').style.display = 'block';
        document.querySelector('.js-callback-open-main-02-wrapper').style.opacity = '1';
        document.querySelector('.js-callback-open-main-02-wrapper').style.transition = "all 0.5s";
        setTimeout(function() {
            document.querySelector('.js-callback-open-main-02-wrapper').style.opacity = '0';
            setTimeout(function() {
                document.querySelector('.js-callback-open-main-02-wrapper').style.display = 'none';
            }, 500)
        }, 2000)
        // alert('Спасибо ваше сообщение отправлено, мы свяжемся с вами в ближайшее время!')
    }
}