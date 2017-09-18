<?php
 $to = "webmaster@p446588.for-test-only.ru";
 $email =$_POST['email'];
 $msg=$_POST['msg'];
 $subject = "=?utf-8?B?.base64_encode("ЗАКАЗ")."?=";
 $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
 $success = mail($to,$subject,$msg,$headers);
 echo $success;
 ?>
