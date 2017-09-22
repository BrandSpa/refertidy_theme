<?php

function ra_quo_fixed_vc() {
	$products = array_merge(['product'], getProducts());
	vc_map([
		'name' => 'quotation fixed',
		'base' => 'ra_quo_fixed',
		'category' => 'RA',
		'params' => [
			[
				"type" => "dropdown",
				"heading" => "pre selected product",
				"param_name" => "product",
				"value" => $products
			],
			[
				"type" => "textfield",
				"heading" => "success message",
				"param_name" => "message",
				"value" => "Gracias, pronto un asesor se pondrá en contacto con usted."
			]
		]
	]);
}

add_action('vc_before_init', 'ra_quo_fixed_vc');
