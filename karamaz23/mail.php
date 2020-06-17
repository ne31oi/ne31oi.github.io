


<?php
// Check for empty fields

$name = $_POST['name'];
$phone = $_POST['phone'];
$type = $_POST['type'];

// Create the email and send the message
$to = 'ne31oi@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Новый заказ";
$email_body = "С сайта поступил новый заказ, надо бы перезвонить.\n\n"."Данные клиента:\n\nИмя: $name\n\nСообщение: $type\n\nEma: $phone";
$headers = "From: ne31oi@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: email";
mail($to,$email_subject,$email_body,$headers);
return true;
?>