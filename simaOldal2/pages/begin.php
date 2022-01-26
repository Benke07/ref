<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="UTF-8">
		<title>Az oldal címe</title>
		<link href="res/style.css" rel="stylesheet" type="text/css">
	</head>
	<body>

		<header>
			<div id="siteTitle">
				<a href="">Az oldal címe</a>
			</div>
			<div class="headerImage" style="background-image:url(media/hd/skyscraper-slider.jpg)">
				<div class="centerBox">
<?php

$data =[ 
	[
		'title' => "Morbi scelerisque, odio nec euismod tincidunt",
		'text' => "Morbi scelerisque, odio nec euismod tincidunt, odio lectus vehicula tortor, at pretium urna ligula et odio. Nulla vel dui dignissim sem malesuada mattis nec quis odio."
	],
	[
		'title' => "Második ajánlat",
		'text' => "Második scelerisque, odio nec euismod tincidunt, odio lectus vehicula tortor, at pretium urna ligula et odio. Nulla vel dui dignissim sem malesuada mattis nec quis odio."
	],
	[
		'title' => "Harmadik ajánlat",
		'text' => "Harmadik scelerisque, odio nec euismod tincidunt, odio lectus vehicula tortor, at pretium urna ligula et odio. Nulla vel dui dignissim sem malesuada mattis nec quis odio."
	],
	[
		'title' => "Negyedik ajánlat",
		'text' => "Negyedik scelerisque, odio nec euismod tincidunt, odio lectus vehicula tortor, at pretium urna ligula et odio. Nulla vel dui dignissim sem malesuada mattis nec quis odio."
	]
];

$r = rand(0,count($data) -1);

$record = $data[$r];



	echo				'<section>
							<h3>'. $record['title'] .'</h3>
							<p>'. $record['text'] .'</p>
							<a href="">Megtekintem</a>
						</section>';



?>
				</div>
			</div>
			<nav>
				<ul class="centerBox">
					<?php PrintMenu(); ?>
				</ul>
			</nav>
		</header>
		
		<div id="page">
			<div class="centerBox">
				<main id="content">
				