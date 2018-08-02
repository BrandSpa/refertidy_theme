<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="theme-color" content="#6031ba">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>RentAdvisor</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/fonts/aktiv.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/fonts/gotham_rounded.css">
	<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/client/dist/index.css?v=<?php echo filemtime(get_template_directory() . '/client/dist/index.css') ?>">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css?v=<?php echo filemtime(get_template_directory() . '/style.css') ?>">
	<!--wordpress files-->
	<?php wp_head(); ?>
	<!-- /wordpress files-->
		<script>
      function onLoad(cb) {
        if (window.addEventListener)
          window.addEventListener("load", cb, false);
        else if (window.attachEvent) {
          window.attachEvent("onload", cb);
        } else {
          window.onload = cb;
        }
      }
  </script>

</head>
<body>
	<script>
		onLoad(function() {
			jQuery(window).on('scroll', function(e) {
				var $header = jQuery('.app-header');
				if(jQuery(window).scrollTop() > $header.height()) {
					$header.addClass('app-header--scrolling');
				} else {
					$header.removeClass('app-header--scrolling');
				}
			});
		});
	</script>

<header class="app-header">
	<div class="container">
		<a href="/" class="">
			<?php  require('templates/logo.php') ?>
		</a>
		<?php if ( is_active_sidebar( 'header_widget' ) ) : ?>
			<div class="header__widget">
				<?php dynamic_sidebar( 'header_widget' ); ?>
			</div><!-- #primary-sidebar -->
		<?php endif; ?>

			<?php
				$nav = wp_nav_menu([
						'theme_location' => 'header',
						'menu_class' => 'app-header__menu',
						'menu_id' => '',
						'container' => false,
						'echo' => false
					]);

				echo clean_menu($nav);
   	 ?>

		 <?php
		 	$menuProps = [
				'links' => getMenuArr('header')
			];
		 ?>

		 <div class="ra-menu-mobile" data-props='<?php echo json_encode($menuProps) ?>'></div>
	</div>
</header>


