<?php


function ra_quo_fixed_sc( $atts ) {
	$at = shortcode_atts([], $atts);
	ob_start();
	?>
		<!--html-->
		<div class="ra-quo-fixed" data-props="{}"></div>
		<!--/html-->
	<?php
	return ob_get_clean();
}

add_shortcode('ra_quo_fixed', 'ra_quo_fixed_sc');