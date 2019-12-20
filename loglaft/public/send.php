<?
$email_to='dubrovskiy.1979@yandex.ru';
$email_dop ='alexandr@brandmaker.ru';
$page = $_SERVER['HTTP_REFERER'];
$from = 'sovadom.ru <no-replay@sovadom.ru>';
$headers = "From: sovadom.ru <no-replay@sovadom.ru>";
$headers .= "\nReply-To: <no-replay@sovadom.ru>";
$headers .= "\nReturn-Path: <no-replay@sovadom.ru>";
$headers .= "\nDate: " . date('r');
$headers .= "\nX-Mailer: PHP 5.2";
$headers .= "\nContent-type: text/html; charset=utf-8 \r\n";
$spamcheck = false;
if ($_POST["form-check"] ==="sovadom.ru"){
    $spamcheck = true;
}
if ($spamcheck) {
    if (isset($_POST['topform_submit']) || isset($_POST['lineform_submit'])) {
        $mail = htmlspecialchars($_POST['sovamail']);
        $phone = htmlspecialchars($_POST['sovaphone']);
        $subject = 'Заявка на расчет';
        $message = "Заявка на расчет: <br/>E-mail: " . $mail . "<br/>Телефон: " . $phone;
        mail($email_to, $subject, $message, $headers);
        mail($email_dop, $subject, $message, $headers);
    }

    if (isset($_POST['projectform_submit'])) {
        $mail = htmlspecialchars($_POST['sovamail']);
        $phone = htmlspecialchars($_POST['sovaphone']);
        $project = htmlspecialchars($_POST['projectform_submit']);
        $subject = 'Заявка на расчет';
        $message = "Заявка на расчет: <br/>E-mail: " . $mail . "<br/>Телефон: " . $phone . "<br/>Проект: " . $project;
        mail($email_to, $subject, $message, $headers);
        mail($email_dop, $subject, $message, $headers);
    }
    if (isset($_POST['photos-modal'])) {
        $mail = htmlspecialchars($_POST['sovamail']);
        $phone = htmlspecialchars($_POST['sovaphone']);
        $subject = 'Заявка на консультацию по лафетным домам с травяной крышей';
        $message = "Заявка на консультацию по лафетным домам с травяной крышей: <br/>E-mail: " . $mail . "<br/>Телефон: " . $phone;
        mail($email_to, $subject, $message, $headers);
        mail($email_dop, $subject, $message, $headers);
    }
    echo '<script type="text/javascript">location.href = "/?message=ok";</script>';
} else {
    echo 'Вы не прошли проверку на спам!';
    echo '<script type="text/javascript">location.href = "/?message=spam";</script>';
}
?>