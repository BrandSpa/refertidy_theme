<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>RentAdvisor</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/fonts/aktiv.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css">	
	<!--wordpress files-->
<?php wp_header() ?>
<!-- /wordpress files-->
</head>
<body>
	
<header id="app-header">
	<div class="container">
		<img src="<?php echo get_template_directory_uri() ?>/imgs/logo.svg" alt="">
		<ul>
			<?php
			$nav = wp_nav_menu([
					'theme_location' => 'header',
					'container' => false,
					'echo' => false
				]);
				echo clean_menu($nav);
   	 ?>
		</ul>
	</div>
</header>

<form action="" style=" background: #6031BA; position: fixed; bottom: 0; z-index: 998; height: 100px; max-width: 1140px; margin: 0 auto; left: 0; right: 0">
<div class="row">
	<div class="col-lg-3">
		<input type="text" placeholder="Nombre" />
	</div>
	<div class="col-lg-3">
		<input type="text" placeholder="Email" />
	</div>
	<div class="col-lg-3">
		<input type="text" placeholder="Télefono" />
	</div>
	<div class="col-lg-3">
		<button class="btn">Cotizar</button>
	</div>
	</div>
	
</form>

