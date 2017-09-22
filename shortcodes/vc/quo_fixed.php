<?php

function ra_quo_fixed_vc() {
	vc_map([
		'name' => 'quotation fixed',
		'base' => 'ra_quo_fixed',
		'category' => 'RA',
		'params' => [
			[
				"type" => "dropdown",
				"heading" => "pre selected product",
				"param_name" => "propduct",
				"value" => getProducts()
			]
		]
	]);
}

add_action('vc_before_init', 'ra_quo_fixed_vc');
