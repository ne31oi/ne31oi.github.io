<?php
  if ($_POST) {
    header("Content-Type: text/html; charset=utf-8");
    if($_SERVER["REQUEST_METHOD"] == "GET")
    exit;
    $headers = "Заявка с сайта ".$_POST["page"]."\r\n";
    $headers .= "Content-type: text/html; charset=\"utf-8\"";
    $email = "one@pesam.ru"; //------ тут почта
    $title = "Заявка с сайта ".$_POST["page"];
    $text = "Name: ".$_POST["name"]."\nPhone: ".$_POST["phone"]."\nОткуда пришел: ".$_POST["referrer"]."\nСтраница заявки: ".$_POST["page"]."\n".$_POST["utms"];
    ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="images/thank-you-page.css">
    <style type="text/css">
    body {
        line-height: 1;
        height: 100%;
        font-family: Arial;
        font-size: 15px;
        color: #313e47;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 27px;
        line-height: 38px;
        color: #313e47;
        text-align: center;
        font-weight: 700;
        padding-bottom: 20px
    }

    a {
        color: #69B9FF
    }

    .list_info li span {
        width: 150px;
        display: inline-block;
        font-weight: 700;
        font-style: normal
    }

    .list_info {
        text-align: center;
        display: block;
        list-style: none;
        margin-bottom: -11px;
        margin-top: 20px
    }

    .list_info li {
        margin: 11px 0
    }

    .fail {
        margin: 10px 0 20px;
        text-align: center
    }

    .email {
        position: relative;
        text-align: center;
        margin-top: 40px
    }

    .email input {
        height: 30px;
        width: 200px;
        font-size: 14px;
        padding-right: 10px;
        padding-left: 10px;
        outline: none;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #B6B6B6;
        margin-bottom: 10px
    }

    .block_success {
        max-width: 960px;
        padding: 20px 10px 70px;
        margin: -50px auto
    }

    .success {
        text-align: center
    }
    </style>
    <title>Спасибо!</title>
</head>
<?php if(mail($email, $title, $text)) {?>
      
<body>
    <div class="container">
        <div class="row mt-5" style="width: 100%;">
            <div class="block_success" style="width: 100%;">
                <h2 style="text-transform: uppercase;">Ваш заказ принят!</h2>
                <p class="success">
                    В ближайшее время с вами свяжется оператор для подтверждения заказа. Держите телефон рядом.<br>
                    Наш колл центр работает с 09:00 до 21:00
                </p>
                <h3 class="success">
                    Пожалуйста, проверьте правильность введенной Вами информации:
                </h3>
                <div class="success">
                    <ul class="list_info">
                        <li><strong>Ф.И.O.: <?php echo $_POST["name"] ?></strong></li>
                        <li><strong>Телефон: <?php echo $_POST["phone"] ?></strong></li>
                    </ul>
                    <br /><span id="submit"></span>
                </div>
                <p class="fail success">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="index.html">заполните заявку еще раз</a></p>
            </div>
        </div>
    </div>
</body>

</html>
<?php    
    
    } else {
      echo "<h3 class=\"text-center\">Временный сбой системы отправки! Пожалуйста, попробуйте позднее</h3>";
    }
  }
?>