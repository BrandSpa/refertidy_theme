<?php


function ra_quo_fixed_sc( $atts ) {
	$at = shortcode_atts([], $atts);
	ob_start();
	?>
		<!--ra_quo_fixed-->
		<div class="ra-quo-fixed" data-props="{}"></div>
		<!--/ra_quo_fixed-->
	<?php
	return ob_get_clean();
}

add_shortcode( 'ra_quo_fixed', 'ra_quo_fixed_sc' );
