
				</main>
				<aside>
				
<?php

date_default_timezone_set("Europe/Budapest");

$open = 10;
$close = 16;
$now = date("H");

$message = "Ügyfélszolgálatunk jelenleg elérhető";

if($now < $open)
{
	$next = $open - $now;
	$message = "Ügyfélszolgálatunk jelenleg még zárva van,". $next ." óra múlva léphet ismét kapcsolatba velünk.";
}
else
if($now > $close )
{
	$next =(24 - $now) + $open;
	$message = "Ügyfélszolgálatunk a mai napon már nem elérhető elérhető ". $next ." óra múlva léphet ismét kapcsolatba velünk.";
}


echo '<section>
		<h3>Ügyfélszolgálat</h3>
		<p>Telefon: +36 30 123 4567</p>
		<p>Nyitvatartás: '. $open .' -'. $close .' óra</p>
		<p>'. $message .' </p>
		</section>';

?>

					<section>
						<h3>Phasellus hendrerit</h3>
						<p>
							Phasellus hendrerit malesuada pulvinar. Nulla imperdiet et orci in vehicula. Sed tincidunt imperdiet augue a pellentesque. Aliquam dignissim dignissim scelerisque.
						</p>
					</section>
				
					<section>
						<h3>Quisque interdum</h3>
						<img src="media/business-graph.jpg" alt="Nulla imperdiet et orci in vehicula">
						<p>Quisque interdum nec turpis in volutpat. Cras sollicitudin magna non diam tristique, id tincidunt tortor accumsan.</p>
						<p><a href="index.html">Bővebben</a></p>
					</section>
				
					<section>
						<h3>Partnereink</h3>
						<ul>
							<li><a href="http://lipsum.com" target="_blank">Lorem ipsum</a></li>
							<li><a href="http://lipsum.com" target="_blank">Dolor sit amet</a></li>
							<li><a href="http://lipsum.com" target="_blank">Consectetur</a></li>
							<li><a href="http://lipsum.com" target="_blank">Adipiscing elit</a></li>
							<li><a href="http://lipsum.com" target="_blank">Maecenas</a></li>
						</ul>
					</section>
				
				</aside>
			</div>
		</div>
		
		<footer>
			<div class="centerBox">
				<div class="left">
					<h4>Praesent nec nulla ac</h4>
					<p>Nam ac risus et tellus rhoncus iaculis sit amet non ipsum. Pellentesque non posuere mi. Sed elementum est purus, in consectetur leo euismod sit amet.</p>
					<p>Praesent nec nulla ac sem tristique tincidunt quis eu quam. Curabitur ac massa id diam aliquet consectetur.</p>
				</div>
				<div class="right">
					<h4>Oldaltérkép</h4>
					<ul>
					<?php PrintMenu(); ?>
					</ul>
				</div>
			</div>
		</footer>
		

	</body>
</html>