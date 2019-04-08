<?
	if ($_POST) {
		header("Content-Type: text/html; charset=utf-8");
		if($_SERVER["REQUEST_METHOD"] == "GET")
		exit;

		$email = "ne31oi@gmail.com"; //------ тут почта
		$title = "заявка";
		$text = $_POST["message"];
		
		
		if(mail($email, $title, $text)) {
			echo "<h3 class=\"text-center\">Спасибо! Ваша заявка отправлена, в самое ближайшее время с Вами свяжется наш менеджер!</h3>";
		} else {
			echo "<h3 class=\"text-center\">Временный сбой системы отправки! Пожалуйста, попробуйте позднее</h3>";
		}
	}
?>