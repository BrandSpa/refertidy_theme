<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>RentAdvisor</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/fonts/aktiv.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/fonts/gotham_rounded.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/client/dist/index.css?v=<?php echo filemtime(get_template_directory() . '/client/dist/index.css') ?>">

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
		<?php  require('templates/logo.php') ?>
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
