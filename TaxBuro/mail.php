<?php
        // $_POST['title'] содержит данные из поля "Тема"
                $title = 'TEST';

                $mess =  $_POST['name']\n$_POST['email']\n$_POST['msg'];
        // $to - кому отправляем
                $to = 'mail@gmail.com';
        // $from - от кого
                $from='mail@gmail.com';
        // функция, которая отправляет наше письмо.
                mail($to, $title, $mess, 'from:'.$from, '-f'.$from);
                echo 'Спасибо! Ваше письмо отправлено.'; ?>
