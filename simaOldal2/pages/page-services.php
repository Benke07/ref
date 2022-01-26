
					<!-- MAIN CONTENT -->
					
					<h1>Quisque interdum nec turpis in volutpat</h1>
					
					<p>Phasellus hendrerit malesuada pulvinar. Nulla imperdiet et orci in vehicula. Sed tincidunt imperdiet augue a pellentesque. Aliquam dignissim dignissim scelerisque. Sed at ante ut nulla feugiat pellentesque nec eget turpis. Sed tempor ex a dignissim semper.</p>
					
					<section>
					
						<h2>Suspendisse mollis nisl quis</h2>
					
						<table>
							<thead>
								<tr>
									<th>Ssz.</th>
									<th>Csomag neve</th>
									<th>Amit tartalmaz</th>
									<th>Vételár</th>
								</tr>
							</thead>
							<tbody>
<?php
		
		$services = file("data/services.txt");
		$x = 1;

		foreach($services as $service){
				
			$service = trim($service);
			$record = explode(";", $service);

			$title = $record[0];
			$desc = $record[1];
			$price = $record[2];

			echo		'<tr>
							<th>'. $x .'</th>
								<td>'. $title .'</td>
								<td class="italic">'. $desc .'</td>
								<td>'. $price .' HUF</td>
							</tr>';
			$x++;

		}
?>
							</tbody>
						</table>
						
					</section>
						
					<article>
						
						<h2>Phasellus hendrerit malesuada pulvinar</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan maximus quam vel venenatis. Suspendisse vitae tempus velit, at gravida neque. Mauris ac nisi felis. Fusce imperdiet ultricies iaculis. Suspendisse bibendum felis nisi, quis scelerisque est rutrum eget. Cras vitae risus lobortis, tempus mi non, finibus ante. Etiam non leo nec mi tristique rhoncus. Sed rhoncus ligula in sollicitudin dapibus. Suspendisse mollis nisl quis velit consectetur, consectetur aliquam urna volutpat. Donec eget neque sollicitudin, iaculis arcu at, viverra sapien. Donec venenatis magna neque, at rhoncus dolor varius non. Fusce finibus ullamcorper vestibulum.</p>
						
						
					</article>
					
					<!-- END: MAIN CONTENT -->
