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
	<?php wp_head(); ?>
	<!-- /wordpress files-->
</head>
<body>
	
<header id="app-header">
	<div class="container">
		<img src="<?php echo get_template_directory_uri() ?>/imgs/logo.svg" alt="">
		
		<?php if ( is_active_sidebar( 'header_widget' ) ) : ?>
			<div class="header__widget">
				<?php dynamic_sidebar( 'header_widget' ); ?>
			</div><!-- #primary-sidebar -->
		<?php endif; ?>

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
