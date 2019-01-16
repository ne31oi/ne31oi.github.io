<?php
        // $_POST['title'] содержит данные из поля "Тема"
                $title = 'TEST';

                $mess =  $_POST['msg'];
        // $to - кому отправляем
                $to = 'ne31oi@gmail.com';
        // $from - от кого
                $from='ne31oi@gmail.com';
        // функция, которая отправляет наше письмо.
                mail($to, $title, $mess, 'from:'.$from, '-f'.$from);
                echo 'Спасибо! Ваше письмо отправлено.'; ?>
