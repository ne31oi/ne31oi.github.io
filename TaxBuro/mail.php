


<?php
// Check for empty fields
if(empty($_POST['name'])        ||
   empty($_POST['email'])       ||
   empty($_POST['message']) )
   {
  echo "No arguments Provided!";
  return false;
   }

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'taxburo@protonmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Новый заказ";
$email_body = "С сайта поступил новый заказ, надо бы перезвонить.\n\n"."Данные клиента:\n\nИмя: $name\n\nСообщение: $message\n\nEma: $email";
$headers = "From: taxburo@protonmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: email";
mail($to,$email_subject,$email_body,$headers);
return true;
?>