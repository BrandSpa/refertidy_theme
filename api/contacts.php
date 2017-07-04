<?php

function store_contact() {
	global $wpdb;
	$gump = new GUMP();

	$rules = array(
		'name'  => 'required',
		'email' => 'required|valid_email',
		'question' => 'required'
	);

	$data = $gump->sanitize($_POST['data']);

	$data = [
		'name' => $data['name'],
		'email' => $data['email'],
		'question' => $data['question'],
		'phone' => isset($data['phone']) ? $data['phone'] : '',
		'company' => isset($data['company']) ? $data['company'] : ''
	];

	$gump->set_error_messages([
    "validate_required" => "{field} es requerido",
     "validate_valid_email" => "{field} debe ser un email valido",
  ]);

	$gump->set_field_name("name", "Nombre");
	$gump->set_field_name("question", "Duda");

	$gump->validation_rules($rules);
	$isValid = $gump->run($data);

	if($isValid === false) {
		responseJson( $gump->get_errors_array() );
	} else {
		$res = $wpdb->insert( 'contacts', $data, [ '%s', '%s', '%s', '%s', '%s' ] );
		responseJson( ['data' => $data, 'is valid' => $isValid] );
	}

	die();
}

add_action( 'wp_ajax_nopriv_store_contact', 'store_contact' );
add_action( 'wp_ajax_store_contact', 'store_contact' );
