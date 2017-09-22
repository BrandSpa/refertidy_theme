<?php

function ra_quo_fixed_vc() {
	vc_map([
		'name' => 'quotation fixed',
		'base' => 'ra_quo_fixed',
		'category' => 'RA',
		'params' => [
			[
				"type" => "textfield",
				"holder" => "div",
				"class" => "",
				"heading" => "pre selected product",
				"param_name" => "propduct",
				"value" => ""
			]
		]
	]);
}

add_action('vc_before_init', 'ra_quo_fixed_vc');
