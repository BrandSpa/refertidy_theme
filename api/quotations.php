<?php

function store_quotation() {
	global $wpdb;
	$gump = new GUMP();

	$rules = array(
		'name'  => 'required',
		'email' => 'required|valid_email',
	);

	$data = $gump->sanitize($_POST['data']);

	$data = [
		'name' => $data['name'],
		'email' => $data['email'],
		'phone' => isset($data['phone']) ? $data['phone'] : '',
		'product' => isset($data['product']) ? $data['product'] : ''
	];

	GUMP::set_error_messages(array(
    "validate_required"     => "{field} es requerido",
     "validate_valid_email"  => "{field} debe ser un email valido",
  ));

	GUMP::set_field_name("name", "Nombre");

	$isValid = GUMP::is_valid($data, $rules);

	if($isValid === true) {
		$res = $wpdb->insert( 'questions',
			$data,
			array( '%s', '%s', '%s', '%s' )
		);

		responseJson($data);
	} else {
		responseJson($isValid);
	}

	die();
}

add_action( 'wp_ajax_nopriv_store_quotation', 'store_quotation' );
add_action( 'wp_ajax_store_quotation', 'store_quotation' );
