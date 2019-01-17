

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
    if (email.value.length > 0) {
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
        s.append("msg", name);
        s.append("msg", email);
        s.append("msg", msg);
        var t = new XMLHttpRequest;
        t.open("POST", "mail.php"), t.send(s)
    }
}