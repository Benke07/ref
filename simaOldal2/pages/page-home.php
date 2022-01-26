					<!-- MAIN CONTENT -->
					
					<h1>Lorem ipsum dolor sit amet</h1>
					
					<article>
						
						<h2 class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan maximus quam vel venenatis. Suspendisse vitae tempus velit, at gravida neque. Mauris ac nisi felis. Fusce imperdiet ultricies iaculis. Suspendisse bibendum felis nisi, quis scelerisque est rutrum eget.</h2>
						
						<img src="media/business-wallpaper-hd-free.jpg" alt="Mauris ac nisi felis">
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan maximus quam vel venenatis. Suspendisse vitae tempus velit, at gravida neque. Mauris ac nisi felis. Fusce imperdiet ultricies iaculis. Suspendisse bibendum felis nisi, quis scelerisque est rutrum eget. Cras vitae risus lobortis, tempus mi non, finibus ante. Etiam non leo nec mi tristique rhoncus. Sed rhoncus ligula in sollicitudin dapibus. Suspendisse mollis nisl quis velit consectetur, consectetur aliquam urna volutpat. Donec eget neque sollicitudin, iaculis arcu at, viverra sapien. Donec venenatis magna neque, at rhoncus dolor varius non. Fusce finibus ullamcorper vestibulum.</p>
						
						<h2>Phasellus hendrerit malesuada pulvinar</h2>
						<p>Phasellus hendrerit malesuada pulvinar. Nulla imperdiet et orci in vehicula. Sed tincidunt imperdiet augue a pellentesque. Aliquam dignissim dignissim scelerisque. Sed at ante ut nulla feugiat pellentesque nec eget turpis. Sed tempor ex a dignissim semper. Praesent ullamcorper finibus arcu, quis scelerisque augue pulvinar id. Nulla vitae ante vitae massa vestibulum consequat ac eu risus. Pellentesque id fringilla tellus. Donec quis velit sapien. Quisque interdum quis magna vitae dictum. Nunc purus ligula, elementum dapibus vestibulum at, lacinia in est. Duis fringilla sapien massa, in consectetur purus condimentum at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dui massa, dictum non nisl eget, facilisis convallis nisi. Etiam ac leo malesuada, luctus nisl vitae, sollicitudin risus.</p>
						
					</article>



<?php

$why = [
	"Mert mi vagyunk a legjobbak",
	"Mert senki nem jobb nálunk",
	"Mert aki jobb, az is tuti hazudik",
	"Mert olcsók vagyunk",
	"Mert nem vagyunk drágák",
	"Mert amúgy meg kuss"
];

echo '<section>
		<h3>Miért érdemes minket választani</h3>
			<ul>';

foreach($why as $txt){		
	echo '<li>'. $txt .'</li>';
}
echo		'</ul>
	</section>';

?>


					
					<!-- END: MAIN CONTENT -->
		