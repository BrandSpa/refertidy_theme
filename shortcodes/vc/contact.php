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
			],
			[
				"type" => "textfield",
				"heading" => "To",
				"param_name" => "to",
				"value" => ""
			],
			[
				"type" => "checkbox",
				"heading" => "Redirigir",
				"param_name" => "redirect",
				"value" => array(
					"" => "true"
				),
			],
			[
				"type" => "textfield",
				"heading" => "Pagina de agradecimiento",
				"param_name" => "thanks_page",
				"value" => "",
				"dependency" => array(
					"element" => "redirect",
					"value" => "true"
				)
			]
		]
	]);
}

add_action('vc_before_init', 'ra_contact_vc');
