<?php
if(isset($_POST['name']) and isset($_POST['phone']) and $_POST['name'] and $_POST['phone']){
	$order = array (
		'campaign_id' => 'вставляем свой',
		'ip' => $_SERVER['REMOTE_ADDR'],
		'name' => $_POST['name'],
		'phone' => $_POST['phone'],
		'country_code' => 'PL',
		'sid1' => 'pl'
	);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "https://tracker.everad.com/conversion/new" );
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
	curl_setopt($ch, CURLOPT_POST,           1 );
	curl_setopt($ch, CURLOPT_POSTFIELDS,     http_build_query($order) );
	curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/x-www-form-urlencoded'));
	$result=curl_exec ($ch);
	if ($result === 0) {
		echo "Timeout! Everad CPA 2 API didn't respond within default period!";
	} else {
		$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		if ($httpCode === 200) {
			header("location: ../thankyou.php");
		} else if ($httpCode === 400) {
			echo "Order data is invalid! Order is not accepted!";
		} else {
			echo
			"Unknown error happened! Order is not accepted! Check campaign_id, probably no landing exists for your campaign!";
		}
	}
}
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ru-RU" data-scrapbook-source="http://lifes-portal.com/raznotrav/gypertony/blagotrav/?id=9877740" data-scrapbook-create="20181201133806305">
<head profile="http://gmpg.org/xfn/11">
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<title>Cum un tânăr de 95 de ani din satul Ropcea m-a salvat de hipertensiune: "De îndată ce sa uitat la mine, a determinat rădăcina problemei și ceea ce a urmat a șocat și pe doctorul meu, pentru că după o lună am uitat ce tensiune ridicată este ... "</title>

<link media="all" href="index_1.css" tppabs="http://altai-source-znahar.ibloggers.ru/index_1.css" type="text/css" rel="stylesheet">
<link href="adapt.css-851.css" tppabs="http://vrachgroup.com/alykey/blog/adapt.css-851.css" media="all" rel="stylesheet" type="text/css">





<script type="text/javascript"></script>
<script></script>
<style type="text/css">
    .close {
        position: absolute;
        top: 1px;
        right: 5px;
        font-size: 40px;
        cursor: pointer;
    }
	.screenLock { position: fixed; width: 100%; background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%; top: 0px; left: 0px; z-index: 99999; display: none; }
.msg { position: absolute; width: 640px; height: 300px; top: 150px; left: 50%; margin-left: -300px; background: #FFF9CD none repeat scroll 0% 0%; border: 1px solid rgb(238, 238, 238); }
.msg > h1 { color: rgb(255, 255, 255); text-align: center; font-size: 24px; margin-bottom: 30px; margin-top: 30px; }
.msg > h2 { color: rgb(255, 255, 255); text-align: center; font-size: 20px; margin-bottom: 30px; margin-top: 30px; }
.close { position: absolute; top: 1px; right: 5px; font-size: 40px; cursor: pointer; }
.submit { margin-top: 10px; height: 50px; width: 200px; background-color: #00AB00;; color: rgb(255, 255, 255); font-size: 20px; border-radius: 15px;font-weight:bold; }

</style>




</head>
<body style="text-align: center;">
<div class="screenLock" style="height: 11622px; display: none;">
<div class="msg">
<div class="close">X</div>
<img src="05.png" style="float:left;margin-top:60px;">
<img src="raznotrav.png" style="float:left;width:500px;">
<p style="background-color: #B93300;padding:10px;float:left;margin-left:35px;font-size:18px;color:#fff;">Успейте получить персональную скидку до 75%!<br>

Акция продлится до <script type="text/javascript"></script>1 декабря 2018.</p>
<a target="_blank" href="#" class="scrollToForm" style="text-decoration: none; color: white;" action="http://raznotrav.com/n8/?id=9877740"><center><button type="submit" class="submit">Получить скидку!</button></center></a>
</div>
</div>
<div class="container" id="container">

<div class="header_box">
	<div class="regions_list">
	<div class="cont_center">
		<a class="closer" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"></a>
		<ul>
			<li><a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">ФЕДЕРАЛЬНЫЙ</a></li>
			<li><a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">САНКТ-ПЕТЕРБУРГ</a></li>



					</ul>
	</div>
</div>
<header class="header">
	<div class="cont_center">
		<div class="left_header_box">

			<div class="logo">
		<a class="logo_img" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><img src="blagologo.png" tppabs="http://altai-source-znahar.ibloggers.ru/blagologo.png"></a>

</div>

			<nav class="main_menu_box">

				<ul class="main_menu">
																	<li class="active" data-id="rubrics">
						</li>
						<li data-id="specprojects"><span>Nowości<i class="black_angle_down"></i></span></li>
						<li class="hide_on_479"><a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Artykuły</a></li>
									</ul>
			</nav>
		</div>
		<div class="right_header_box">

				<div class="auth_user_status">
					<a class="exit auth_link_logout" href="#" class="scrollToForm" style="display: none;" target="_blank" action="http://raznotrav.com/n8/?id=9877740"></a>
					<a class="fright auth_link_profile" href="#" class="scrollToForm" style="display: none;" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><i class="user_icon"></i>ПРОФИЛЬ</a>
					<a class="fright auth_link_login _auth_open" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><i class="user_icon"></i>Wejście</a>
				</div>

				<div class="sharings_box">
					<a class="show_shar_icon" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"></a>

					<ul class="soc">
						<li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="f6ca3315502b25e51806bdc6f204c0f3.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/f6ca3315502b25e51806bdc6f204c0f3.jpg" alt="" width="20" height="20"><img class="on_hover" src="0c518318f84860bc9d0f02be9eb0e9ec.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/0c518318f84860bc9d0f02be9eb0e9ec.jpg" alt="" width="20" height="20"> &nbsp;</a></li><li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="d67cc533d331cc7f4adf5ce3a689d45e.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/d67cc533d331cc7f4adf5ce3a689d45e.jpg" alt="" width="20" height="20"><img class="on_hover" src="c31d16ecff6709de1805a3e6b1440aee.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/c31d16ecff6709de1805a3e6b1440aee.jpg" alt="" width="20" height="20"> &nbsp;</a></li><li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="cb647cd762c4fce14b3ed7458442986c.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/cb647cd762c4fce14b3ed7458442986c.jpg" alt="" width="20" height="20"><img class="on_hover" src="54b37dbb348d23346350204a75215868.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/54b37dbb348d23346350204a75215868.jpg" alt="" width="20" height="20"> &nbsp;</a></li><li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="588a5cdec7c31c26c120f04f0d7889b2.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/588a5cdec7c31c26c120f04f0d7889b2.jpg" alt="" width="20" height="20"><img class="on_hover" src="6c250cf3185bf781251479844c4ca3bc.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/6c250cf3185bf781251479844c4ca3bc.jpg" alt="" width="20" height="20"> &nbsp;</a></li><li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="735b295f332708a1c9dc64a6e7da7e95.png" tppabs="http://altai-source-znahar.ibloggers.ru/735b295f332708a1c9dc64a6e7da7e95.png" alt="" width="20" height="20"><img class="on_hover" src="9cb76d3577496c5935da3c40aa075dc1.png" tppabs="http://altai-source-znahar.ibloggers.ru/9cb76d3577496c5935da3c40aa075dc1.png" alt="" width="20" height="20"> &nbsp;</a></li><li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="7ecc132a9517f6ae681c943bc69170d5.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/7ecc132a9517f6ae681c943bc69170d5.jpg" alt="" width="20" height="20"><img class="on_hover" src="f76e212f225fab3a182f2f2c9c991856.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/f76e212f225fab3a182f2f2c9c991856.jpg" alt="" width="20" height="20"> &nbsp;</a></li>
						<li>
							<a class="rss_button_black" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"></a>
						</li>
					</ul>

					<ul>
						<li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="ad7bba00abf5a4f86f346f78fa7c5ebd.png" tppabs="http://altai-source-znahar.ibloggers.ru/ad7bba00abf5a4f86f346f78fa7c5ebd.png" alt="" width="20" height="20"><img class="on_hover" src="38416d66f3c44b25a34e59fb3195847d.png" tppabs="http://altai-source-znahar.ibloggers.ru/38416d66f3c44b25a34e59fb3195847d.png" alt="" width="20" height="20"> &nbsp;</a></li><li><a target="_blank" href="#" class="scrollToForm" action="http://raznotrav.com/n8/?id=9877740"><img class="not_hover" src="61a19fac1a03da59113825bfff8fdebe.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/61a19fac1a03da59113825bfff8fdebe.jpg" alt="" width="20" height="20"><img class="on_hover" src="0e41b7f62107597d5ddd97bf99b02308.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/0e41b7f62107597d5ddd97bf99b02308.jpg" alt="" width="20" height="20"> &nbsp;</a></li>					</ul>
				</div>
					</div>
	</div>
	<div class="fixed_menu">
		<div class="cont_center">

			<div class="logo">
		<a class="logo_img" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><img src="logo.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/logo.jpg"></a>

		<a class="region" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><img src="aif-0.png" tppabs="http://altai-source-znahar.ibloggers.ru/aif-0.png" alt="aif.ru"></a>
</div>

			<ul class="rubrics_menu_list" id="rubrics">
    <li>
        <a title="Главная " href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Главная </a>
    </li>
    <li>
        <a title="Свежий номер " href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Свежий номер </a>
    </li>
    <li data-rubric_id="4">
        <a title="Общество" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Общество</a>
    </li>
    <li data-rubric_id="15">
        <a title="Происшествия" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Происшествия</a>
    </li>
    <li data-rubric_id="1">
        <a title="Политика" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Политика</a>
    </li>
    <li data-rubric_id="16">
        <a title="Деньги" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Деньги</a>
    </li>
    <li data-rubric_id="23">
        <a title="Культура" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Культура</a>
    </li>
    <li data-rubric_id="32">
        <a title="Спорт" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Спорт</a>
    </li>
    <li data-rubric_id="42">
        <a title="Кухня" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Кухня</a>
    </li>
    <li data-rubric_id="54">
        <a title="Дача " href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Дача </a>
    </li>
    <li class="active " data-rubric_id="61">
        <a title="Здоровье" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Здоровье</a>
    </li>
    <li data-rubric_id="68">
        <a title="Авто" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Авто</a>
    </li>
    <li data-rubric_id="77">
        <a title="Недвижимость" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Недвижимость</a>
    </li>
    <li data-rubric_id="96">
        <a title="Мнения" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Мнения</a>
    </li>
</ul>
			<div class="fixed_rubrics_link">
				<a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Еще...</a>
			</div>
		</div>
	</div>
	<div class="fixPoint"></div>
</header>	<div class="rubricator">
	<div class="rubrics_menu">
		<div class="cont_center">

			<ul class="rubrics_menu_list" id="rubrics">
    <li>
        <a title="Главная " href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Главная </a>
    </li>
    <li>
        <a title="Свежий номер " href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Свежий номер </a>
    </li>
    <li data-rubric_id="4">
        <a title="Общество" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Общество</a>
    </li>
    <li data-rubric_id="15">
        <a title="Происшествия" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Происшествия</a>
    </li>
    <li data-rubric_id="1">
        <a title="Политика" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Политика</a>
    </li>
    <li data-rubric_id="16">
        <a title="Деньги" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Деньги</a>
    </li>
    <li data-rubric_id="23">
        <a title="Культура" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Культура</a>
    </li>
    <li data-rubric_id="32">
        <a title="Спорт" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Спорт</a>
    </li>
    <li data-rubric_id="42">
        <a title="Кухня" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Кухня</a>
    </li>
    <li data-rubric_id="54">
        <a title="Дача " href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Дача </a>
    </li>
    <li class="active " data-rubric_id="61">
        <a title="Здоровье" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Здоровье</a>
    </li>
    <li data-rubric_id="68">
        <a title="Авто" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Авто</a>
    </li>
    <li data-rubric_id="77">
        <a title="Недвижимость" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Недвижимость</a>
    </li>
    <li data-rubric_id="96">
        <a title="Мнения" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Мнения</a>
    </li>
</ul>
			<ul class="rubrics_menu_list" id="specprojects">
    <li class="navigation-page-red">
        <a title="«Поехали!»" class="navigation-page-red" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">«Поехали!»</a>
    </li>
    <li>
        <a title="Алло, цивилизация" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Алло, цивилизация</a>
    </li>
    <li>
        <a title="Великий пост" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Великий пост</a>
    </li>
    <li>
        <a title="Сделано в Крыму. Культура" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Сделано в Крыму. Культура</a>
    </li>
    <li>
        <a title="Острый угол" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Острый угол</a>
    </li>
    <li>
        <a title="Детская книга войны" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Детская книга войны</a>
    </li>
    <li>
        <a title="Война на Украине" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Война на Украине</a>
    </li>
    <li>
        <a title="Я устал, я ухожу" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Я устал, я ухожу</a>
    </li>
    <li class=" not_show_on_screen">
        <a title="Все спецпроекты" class=" not_show_on_screen" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Все спецпроекты</a>
    </li>
</ul>			<div class="rubricator_menu_link">
				<a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Еще...</a>
			</div>
		</div>
	</div>






</div><div class="count_box_nodisplay">
</div><div class="content_overlay">
</div></div><div class="subrubrics"><div class="rubrics_menu"><div class="cont_center"><ul class="rubrics_menu_list"><li class="active "><a title="Здоровая жизнь" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Rady czytaczy</a></li><li><a title="Правильное питание" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Zdrowe odżywianie</a></li><li><a title="Здоровье ребенка" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Zdrowie dziecka</a></li><li><a title="Секреты красоты" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Sekrety Piękna</a></li><li><a title="Психология жизни" href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Psychologia życia</a></li></ul><div class="subrubric_menu_link showLink"><a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740">Еще...</a></div></div></div></div><div class="content_overlay"></div><div class="cont_center"><div class="content_body"><div class="content"><div class="material_box"><section class="material_header"><div class="material_topline_info"><div class="zoom_min_press"><a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><i class="zoom_icon"></i></a><a href="#" class="scrollToForm" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><i class="min_icon"></i></a><a href="#" class="scrollToForm" class="top_print_button" target="_blank" action="http://raznotrav.com/n8/?id=9877740"><i class="press_icon"></i></a></div></div><h1 class="material_title increase_text">Până când vasul din cap nu a izbucnit și un accident vascular cerebral a lovit,rezolvați problemele cu vasele și presiunea o dată pentru totdeauna.</h1><h1 class="material_title increase_text">Cum un tânăr de 95 de ani din satul Ropcea m-a salvat de hipertensiune:"De îndată ce sa uitat la mine, a determinat rădăcina problemei și ceea ce a urmat a șocat și pe doctorul meu, pentru că după o lună am uitat ce tensiune ridicată este ... "</h1><p class="increase_text"><i>Inginerul român Konstantin Boraș,cu o experiență de 24 de ani în domeniul hipertensiunii arteriale,despre cum să scapi complet de probleme cu tensiunea și să te întorci la viață</i></p></section><article class="material_content increase_text"><center><img src="01a.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/im/01a.jpg"><p>Nikolai Semenovici,un medic din satul Ropcea</p></center><p>Aveam 42 de ani când am ajuns la concluzia că hipertensiunea arterială dintr-o problemă obișnuită devenise o problemă serioasă.Din câte îmi amintesc,tensiunea a fost întotdeauna deasupra normei,de la vârsta de 18 ani sa făcut un diagnostic pe hartă-hipertensiune arterială de gradul I(140-159  90-99 mm Hg),dar am trăit cu ea și nu am acordat prea multă atenție interferență.Ei bine,da,adesea o durere de cap,mai ales când ridic greutăți,zboară în fața ochilor mei,robinete de inimă,dacă sunt nervos.În general,la fel ca oricine altcineva,ceva durează un pic undeva,dar m-am împotmolit,nu am acordat importanță,dar sunt un țăran,sprijinul familiei mele,ceea ce înseamnă că trebuie să fiu puternic.</p><p>Am trăit așa,am bătut periodic medicamente de tensiune,când nu am putut tolera deloc,până când sa întâmplat ceva care ma făcut să-mi regândesc atitudinea față de această problemă aparent trivială și obișnuită pentru noi,ca hipertensiunea.</p><h3>znikąd pomocy czekać</h3><p>A fost o dimineață obișnuită.M-am trezit în jurul orei 7:30,am luat micul dejun și am început să mă pregătesc să lucrez.Faptul că tensiunea era crescută,m-am simțit imediat,dar din obișnuință nu am acordat nici o importanță acestui lucru.De atâția ani a devenit normă.Ei adesea râdeau cu prietenii,încât am putut ghici valoarea exactă fără un tonometru,de obicei ținut în jur de 145/90,dar a fost redus la normal până la prânz.Prin urmare,nu a existat niciun motiv pentru a suna alarma.Cu toate acestea,în acea zi totul a devenit complet diferit.</p><p>Am ajuns la locul de muncă cu autobusul sau mergeam pe jos,pentru prevenirea și menținerea formei fizice,beneficiul companiei noastre este la doar trei stații de acasă.În acea dimineață,am decis să merg cu transportul.Autobuzul era plin de oameni și era foarte aglomerat,de vârf.La doar câteva minute mai târziu,dezastrul a lovit:sa început să fie palmele transpirate,amețeli,am început să ma piard în spațiu,aproape că nu vedeam nimic.Îmi amintesc cum am vrut să spun ceva,cer șoferului să oprească autobuzul și lasă-mă să plec,dar mormăi ceva neinteligibil,iar pasagerii surprins priviri în direcția mea.A durat doar câteva minute,dar păreau o eternitate.</p><p>De îndată ce ușile se deschise și m-am trezit pe stradă,într-o clipă ochii mi s-au întunecat,capul meu a fost greu și ca și cum ar fi fost umplut de sânge,picioarele mele erau slabe,chiar trebuia să mă ghemuiesc pe coatele mele pentru a nu cădea.Totul sa intamplat foarte repede,nu eram gata,m-am panicat,m-am gandit ca era un atac de cord sau un accident vascular cerebral si ca am murit...M-am așezat in mijlocul strazii pana ma lăsat să plec,incercând să-mi controlez respirația:respiram adanc,respira,inhalat,respiram</p><center><img src="02.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/im/02.jpg"></center><p>Am fost foarte norocoas în acea zi,puterea mea sa întors destul de repede,sanatatea mea sa imbunatațit și am ajuns acasă.De la realizarea a ceea ce sa întâmplat de mult timp,am tremurat,am devenit înfricoșat că data viitoare totul se putea sfârși în tragedie,pentru că în timp ce stăteam acolo,oamenii tocmai trecuseră,nimeni nu se apropia,nu întrebă,te simți prost?Oamenii nu au vrut să intervină,probabil că au crezut că sunt doar beat.Niciodată în viața mea nu am simțit o astfel de nedreptate,niciodată înainte nu am simțit o astfel de poftă de viață.</p><p>În restul zilei,am stat în pat,câștigând putere.Îmi amintesc cum m-am hotărât că trebuie doar să împiedic un al doilea atac,pentru că dacă se va întâmpla ceva,ce se va întâmpla cu soția me-a,ce va aduce să crească copiii singură...</p><p>Minął rok, i z pewnością mogę powiedzieć, że znalazłem sposób na nadciśnienie tętnicze.</p><h3>Okrutna rzeczywistość</h3><p>Dacă de multe ori suferiți de tensiune arterială crescută,în primul rând,trebuie să recunoașteți că hipertensiunea arterială este pentru toată viața.Spune doctorii.De asemenea,am crezut în asta și am pierdut ani deoarece am fost inactiv,l-am îndurat și,uneori,am bătut pastile de tensiune.De ce nu beau droguri tot timpul,așa cum a recomandat medicul?Nu am vrut să-mi distrug articulațiile,stomacul,rinichii și alte organe.În plus,dacă nu știați,pastilele de hipertensiune arterială nu sunt tratate pentru hipertensiune arterială.Acestea scade tensiunea numai în timp ce luați medicamentul.Dar,de îndată ce opriți să beți aceste pastile,presiunea sare la aceleași numere mari.</b>.</p><p>Asta este,pastilele de presiune sunt un tratament pur simptomatic care nu afectează cauzele hipertensiunii arteriale și NU elimină aceste cauze.Pur și simplu pune:Atunci când iau droguri de la destinatar este întotdeauna o stare bună.Când luăm pastile pentru tensiune,avem întotdeauna tensiune normală.</p><center><img src="03.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/im/03.jpg"><p>Uboczne działania popularnych tabletek od ciśnienia tętniczego</p></center><p>După cum vă puteți imagina,dacă luați pastilele de tensiune,efectele secundare se acumulează.Aceste reacții adverse subminează treptat starea de sănătate.În primul rând,există o somnolență „inofensiv“ sau insomnie,viziune scade,ritmul cardiac este deranjat,hemoglobina apoi se reduce,se dezvolă artrita,guta agravarea,perturbat functiei renale.La doar câțiva ani de medicamente de inalta tensiune arteriala provoca daune ireparabile corpului,este greu de negat.Luați doar inșertul de la orice medicament și citiți contraindicațiile.</p><p>Din păcate,medicina modernă nu poate oferi o alternativă.Prin urmare,pentru a controla hipertensiunea,trebuie să ieșiți cumva,să aflați mai multe despre caracteristicile corpului și cum să îl influențați.Din experiența mea,pot spune că mersul,exercițiile elementare și plantele medicinale,care au devenit o adevărată descoperire pentru mine,mă ajută bine.</p><h3>Toate problemele de la...</h3><p>După atac,problema sănătății a fost acută.Timp de cîteva luni consecutiv,l-am agresat în mod activ pe medici de diferite nivele,am stabilit mai mult de 3000 de lei pe preparate manecinale și pe diferite șarlatane cu metodele lor psiho-emoționale de tratament,dar niciuna nu a dat un rezultat,hipertensiunea nu a dispărut,sănătatea mea sa înrăutățit.În acel moment,am auzit despre vindecătorii folclorici,dar eram sceptic în privința acestui fapt,totuși,după sfatul unei cunoștințe pe care un doctor o ajutase să scape de gastrită,am decis să încerc.</p><p>Astfel,am venit la recepția vindecătorului din satul Ropcea(acest sat este în Ucraina,sora mea locuiește acolo,care ma chemat de mult să vizitez și în același timp să ajung la recepția acestui vindecător).Omul de medicină,Nikolai Semenovici,sa dovedit a fi unul dintre aceia care,după cesa-u uitat la tine și au pus câteva întrebări,știu deja de ce fel de tratament ai nevoie.Îmi amintesc că a spus următoarele:<b>«"Dacă hipertensiunea suferă, înseamnă că nivelul colesterolului este ridicat și dacă nivelul colesterolului este ridicat, înseamnă că vasele sunt înfundate cu plăci care se așează pe pereții vaselor și creează o obstrucție a fluxului sanguin și fac mai dificilă funcționarea inimii uzură. Dar este ușor să reparăm ... "</b></p><p>"Fără îndoială despre ce vorbește, Nikolai Semionovici a scos o sticlă de lichid dintr-un piedestal și l-a turnat într-un borcan mic pentru mine. a spus medicul și a dorit o recuperare rapidă.Acest fluid este un extract gata făcut din plante speciale și ierburi cultivate exclusiv în pădurile ucrainene. cât de multe ingrediente care nu sunt un fitoterapeut mi-a spus.</p><p>Z jego slow, zażywanie tej nalewki sprzyja odnowie krwionośnego systemu: rozpuszczeniu blaszek, zanikowi skrzeplin, usuwaniu gniewliwego efektu i odbudowie naczyn krwionosnych</p><article class="material_content increase_text"><center><img src="01b.jpg" tppabs="http:<h3>Każdemu człowiekowi, starszemu nawet o 40 lat! </h3><p>O astfel de băutură este utilă pentru fiecare persoană de peste 40 de ani,deoarece cauza principală a bolilor asociate vârstei este vasele uzate.Imaginați-vă cât de mult colesterol și alte grăsimi sub formă de plăci și plăci au fost depuse pe pereții lor în toată viața lor.Și,potrivit statisticilor,până la vârsta de 40 de ani,vasele treptat devin greu,își pierd elasticitatea și,prin urmare,se limitează,ceea ce reduce accesul sângelui la organe.În cele din urmă,vasul se poate închide complet,care este cauza formei acute de atac de mușchi cardiac,accident vascular cerebral și tromboză la nivelul extremităților inferioare.Prin urmare,concluzia...</p><p><b style="text-decoration: underline;">Cu o creștere a nivelului sanguin de colesterol-riscul de deces subită,după vârsta de 35 de ani,crește de 8 ori.</b></p><p>Oamenii de stiinta ai Institutului de Cercetari de Cardiologie au demonstrat acest lucru,in 1976,cand au efectuat studii masive de boli cardiovasculare(hipertensiune arteriala,ateroscleroza,boala coronariana,boala cerebrovasculara,accident vascular cerebral,boala arteriala periferica,defecte cardiace dobandite).</p><h3>Naukowcy udowodniły to, jeszcze w 1976 roku, kiedy przeprowadziły masowe badania chorób sercowo-naczyniowych  (hipertonia, ateroskleroza, niedokrwienna choroba serca, naczyniowe choroby mózgu, udar mózgu, choroba tętnic obwodowych, nabyte wady serca).</h3><p>Privind înapoi,regret că am făcut greșeala pe care majoritatea oamenilor o fac-a fost foarte târziu să descoperi puterea plantelor medicinale.De obicei,acestea sunt abordate doar ca o ultimă soluție,când tratamentul principal,tradițional,nu a produs rezultate.Ei și-au pus ultimele speranțe,nu luând în serios,așteptând un miracol.Și în zadar!În mod literal,după o lună de utilizare zilnică a acestui miljoc pe bază de plante de la un medic din Ucraina-am uitat că o astfel de presiune crescută,a simțit o creștere incredibilă a vitalității,capul meu a lucrat ca în 25 de ani.O încărcătură uriașă a căzut de pe umeri,pe care m-am purtat de mai bine de 20 de ani.</p><p>De aceea,dacă simțiți că hipertensiunea a devenit o problemă serioasă,dacă sunteți obosit de a trăi o viață încompletă și de a fi în mod constant dependentă de medicamente-vă sfătuiesc din toată inima să încercați acest extract de vindecare de la medicul meu de plante medicinale.</p><p>Până de curând,a fost posibilă achiziționarea acestei băuturi numai în satul Ropcea din Ucraina,în farmacia locală,dar în toamna anului 2018,remediul numit "Normalife" a fost lansat în România.A creat rețeta exactă,menținând toate regulile.Aceasta este o mare oportunitate pentru cei care nu sunt capabili să vină în Ucraina pe cont propriu.</p><center><img src="05.jpg" tppabs="http://altai-source-znahar.ibloggers.ru/im/05.jpg"><p>Używając tego środka, znacznie zwiększycie jakość życia, zapomnicie o bólach głowy, nadciśnienia, bólach serca i osłabieniu mięśni. Znikną worki pod oczami, zniknie problem z nadwagą, a najważniejsze — zapewnicie siebie od przedwczesnej śmierci od zawału serca albo udaru mózgu.</p></center><p>Dar drogul nu este încă vândut în farmacii,deci poate fi comandat numai prin Internet(la sfârșitul articolului voi împărtăși cu cititorii contactul în care<a class="scrollToForm" href="#">eu comand Norma în România</a>)Ultima dată când am comandat acest remediu.Și într-adevăr,prin efectele asupra corpului și chiar prin gust-aceasta este aceeași infuzie pe care mi-o dăduse-o odată medicul de plante Nikolai Semenovici.</p><p>Apropo,zvonurile unei astfel de oportunități s-au răspândit rapid pe întreg teritoriul României.Accesibilitatea ușoară a făcut ca produsul să nu fie deja cel mai masiv,o lipsă reală.În fiecare toamnă,oamenii din toată Ucraina,România și Rusia-cumpără aceste pasitle,calculate pentru un an întreg,deoarece știu că volumul producției vindecătoare nu este mare și mai mare,în acest an nu va mai exista o astfel de oportunitate.</p><p>După ce ați făcut acest lucru,veți îmbunătăți în mod semnificativ calitatea vieții,veți uita de dureri de cap,hipertensiune arterială,durere în inimă(angina)și slăbiciune la nivelul picioarelor atunci când vă plimbați.Edemas,saci sub ochi,excesul de greutate va dispărea.Corpul va "revigora",veți simți acest lucru din cauza bunăstării generale și a unui nivel sporit de eficiență și cel mai important-vă veți proteja de moartea prematură dintr-un atac de cord sau un accident vascular cerebral.</p><p>În doar o lună,aceste pastile m-au transformat dintr-o persoană hipertensivă cronică într-o persoană sănătoasă.Dureri de cap,dificultăți de respirație,stare de sufocare,lipsă de amețeală și fără mișcare a mâinilor,și cel mai important timp de trei ani nu au existat atacuri repetate.Dacă știți ce este hipertensiunea arterială,simțiți acest stigmat al speranței,atunci mă înțelegeți bine ce fericire este să deveniți din nou o persoană sănătoasă și sănătoasă!</p><p>"Așa cum am promis, vă voi da contactele pentru care puteți comanda Normalife în România. Pentru a face acest lucru, introduceți numele și numărul de telefon de mai jos și faceți clic pe "PLASEAZĂ COMANDA".Un specialist vă va contacta și vă va spune unde puteți obține medicamentul. "</p><script src="./js/jquery.min.js"></script><script src="./js/jquery.countdown.min.js"></script><script src="./js/validation.min.js"></script><script src="./js/formscripts.js"></script><link rel="stylesheet" href="./css/form.css"><div class="zakaz_form_wrap" id="scroll"><div class="image"><img alt="" class="prod_ph" src="./img/zdorov_min.png"><div class="price"><span class="old_price">278 RON.</span><span class="new_price">139 RON.</span></div></div><div id="zakaz"><form action="/pl80/preland/index.php" class="order-form" method="post"><label>Alegeți țara::<select class="country country_select form_group" id="country_code_selector" name="country"><option value="ro">România</option></select></label><label>Numele:<input class="lv-input-fio form_group" name="name" placeholder="" type="text"></label><label>Telefon de contact:<input class="lv-input-phone only_number form_group" name="phone" placeholder="" type="text"></label><button class="botBut js_pre_toform button__text" type="submit">PLASEAZĂ COMANDA</button><div class="toform"></div><input type="hidden" name="time_zone" value="2"><label></label></form></div><div class="text_timer">Puteți să comandați pastilele<br>"Normalife" cu o reducere de 50%:<br><span id="clock"><span class="units">07</span><b>:</b><span class="units">29</span><b>:</b><span class="units">43</span></span><div class="time"><span class="hour">óra</span><span class="min">perc</span><span class="sec">másodperc</span></div></div></div></article><section class="bordered_top mbottom10"><h3>Komentarze</h3><div class="comment-block"><div class="com"><div class="author">Delia Lascăr</div><div class="comment">Konstantin,Dumnezeu să te binecuvânteze!A supraviețui acestui lucru și a nu pierde inima este o adevărată faptă.Totul este pe propria spate,pe cont propriu...Și eu sunt hipertensivi,știu foarte bine atitudinea medicilor noștri la oameni ca noi,câteodată se pare că nu ne consideră oameni,niște pastile prescrise și tot ce trebuie să știm și faptul că aceste medicamente ne distrug atât de mult<br><img src="cont12.jpg"></div></div><div class="com"><div class="author">Marius Pintilie</div><div class="comment">Din scoală îmi amintesc-mișcarea vieții.Dacă nu sunteți leneși și luați timp pentru a exerciții fizice și mers pe jos totul va fi bine.Este clar că ierburile medicinale sunt utile,dar mai întâi de toate nu trebuie să începeți,atunci trebuie să cheltuiți mai puțini bani pentru tratament.<br><img src="cont05.jpg"></div></div><div class="com"><div class="author">Ninela Urziceanu</div><div class="comment">Recent,am vrut mereu să dorm,nu am înțeles deloc nimic.Performanța a scăzut la zero.Mai mult,nu aveam deloc apetitul și tensiunea a sărit.Pentru a ști exact ce se întâmplă cu mine,a fost necesar să mă consulte un doctor,ceea ce am făcut.După testare,sa dovedit că am colesterol ridicat.Nu era nimic de mâncat produse dăunătoare,în ea era cauza sănătății mele proaste.Desigur,am devenit corect imediat,am trecut la dieta corectă.Dar,nu totul este atât de simplu,corpul trebuie să ajute la eliminarea excesului de colesterol cât mai repede posibil.În acest scop,am văzut Normalife,a spus bunicul singur la locul de muncă.Acum totul este bine.</div></div><div class="com"><div class="author">Valeria Toma</div><div class="comment">Bună ziua Mulți oameni au un nivel ridicat de colesterol sau este cronic,la fel ca la mine.Acest Normalife mi-a fost prescris acum o lună de către un medic pentru a avea mai puțină bilă în vezica biliară.Mi-a plăcut că este natural,fără substanțe chimice dăunătoare.De asemenea,curăță sângele și limfa bine și reduce cantitatea de colesterol rău.Doar câteva zile în urmă am terminat so iau.Cursul de tratament durează o lună.În acest timp,ar trebui să se restabilească circulația sanguină,iar cantitatea de colesterol să fie redusă.Am început să observ că mă simt mult mai bine și nu mai doare atât de mult în partea mea.Îi recomand tuturor celor cărora le pasă de corpul lor.<br><img src="cont14.jpg"></div></div><div class="com"><div class="author">Andrei Cernea</div><div class="comment">Am cumpărat aceste pastile pentru bunica mea-are probleme cardiace.Ea însăși nu reușește să comande ceva pe Internet,chiar prin telefon.Prin urmare,eu însumi.A ajutat,trebuie să spun că la 100%,deși problemele au fost de lungă durată și la nivel mondial-ea a stat pe droguri foarte puternic de mai mulți ani.Acum,când vasele sunt curățate,ea a devenit mult mai sănătoasă.<br><img src="cont15.jpg"></div></div><div class="com"><div class="author">Mădălina T.</div><div class="comment">Prima dată când fac o comandă prin Internet.Dar este atât de simplu.Am introdus datele mele,la mai puțin de cinci minute după ce telefonul a sunat.Omu plăcut,detaliile mi-a clarificat,adresa de livrare și etc.A promis că într-o săptămână aș avea coletul.Acesta este un serviciu super,în timpurile noastre,acest lucru nu a fost nici măcar visat.<br><img src="cont16.jpg"></div></div><div class="com"><div class="author">Cecilia Daban</div><div class="comment">Sper că medicamentul va continua să coste atât,dar nu mai mult ca 2000 de lei pe curs.</div></div><div class="com"><div class="author">Delia Buzoianu</div><div class="comment">În timp ce prețul nu este ridicat am comandat.Este o rușine că totul este așa.Farmaciile vinde doar analgezice și vitamine.Și într-adevăr fondurile necesare trebuie să ne găsim singuri greu!</div></div><div class="com"><div class="author">Jan Cernat</div><div class="comment">Din moment ce această viață este deja prea grea,să renunți totuși la toate bucuriile,dar trebuie să renunțați la toate bunatatile.Mi-a fost prescris o grămadă de medicamente,împreună cu dieta și băutura de ovăz!Nu puteam să stau!Pentru fiecare organism avea propriul medicament!Așadar,ați putea strica întregul stomac.Apoi am dat peste un articol științific dintr-un jurnal,au scris despre acest tip de Normalife doar pentru colesterolul ridicat și hipertensiunea arterială!Am fugit la doctor,sa-l aprobez.Am început să beau pastilele Normalife.Ceea ce este cel mai plăcut nu este un medicament,este un lucru care pur și simplu nu permite absorbția colesterolului și determină organismul să producă colesterolul deja stocat din organe,acolo unde este inuțil!Mănânc tot ce vreau,beau câteva cursuri și totul este bine!</div></div><div class="com"><div class="author">Diana Cinpoiașu</div><div class="comment">La un moment dat,de îndată ce nu am suferit de hipertensiune arterială,am fost mereu în pastile,le-am schimbat în fiecare lună și nu aveam nici un rost.Prietena mamei mele,baba Marina,dintr-un sat vecin,a salvat-o cu iarbă în doar o lună!Deci nimeni nu știe organismul nostru mai bine decât natura,nu am încredere în comprimate toată viața.<br><img src="cont13.jpg"></div></div><div class="com"><div class="author">Sebastian Hadaciu</div><div class="comment">Normalife este un remediu foarte bine cunoscut în țara noastră,a fost pregătit pentru o lungă perioadă de timp,probabil și străbunul meu a văzut-o,iar acum băieții fac o faptă bună,cred,deschizând ocazia oamenilor din toată țara de a obține acest produs magic.</div></div></div><br><br><button type="button" class="botBut js_pre_toform button__text scrollToForm ">PLASEAZĂ COMANDA</button></section><section class="comments_block"><div id="comments_block_top"></div></section></article></div></div><div class="right_column"><!-- Актуальные вопросы --></div></div></div><!-- segment footer --><footer class="footer"><div class="cont_center"><div class="footer_text"><p><b>© 2018 Toate datele sunt protejate</b></p></div><div class="footer_counters clearfix"></div></div></footer></div><script type="text/javascript">
</script>
</body>
</html>
