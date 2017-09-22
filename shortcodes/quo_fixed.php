<?php

function ra_quo_fixed_sc( $atts ) {
	$at = shortcode_atts([
		"product" => ""
	], $atts);

	$props = [
		'products' => getProducts(),
		'product' => $at['product']
	];

	ob_start();
	?>
		<!--ra_quo_fixed-->
		<div class="ra-quotation-form-fixed" data-props="<?php echo json_encode($props); ?>"></div>
		<!--/ra_quo_fixed-->
	<?php
	return ob_get_clean();
}

add_shortcode( 'ra_quo_fixed', 'ra_quo_fixed_sc' );
