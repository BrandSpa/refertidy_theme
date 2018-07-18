<?php

function ra_contact_vc() {
	vc_map([
		'name' => 'Contact fixed',
		'base' => 'ra_contact',
		'category' => 'RA',
		'params' => [
			[
				"type" => "textfield",
				"heading" => "success message",
				"param_name" => "message",
				"value" => "Gracias, pronto un asesor se pondrá en contacto con usted."
			]
		]
	]);
}

add_action('vc_before_init', 'ra_contact_vc');
