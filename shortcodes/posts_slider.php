<?php


function ra_posts_slider_sc( $atts ) {
	$at = shortcode_atts([], $atts);
	ob_start();
	?>
		<!--ra-posts-slider-->
		<div class="ra-posts-slider" data-props='{"posts": []}'></div>
		<!--/ra-posts-slider-->
	<?php
	return ob_get_clean();
}

add_shortcode( 'ra_quo_fixed', 'ra_posts_slider_sc' );
