<?php

function store_quotation() {
	global $wpdb;
	$gump = new GUMP();

	$rules = array(
		'name'  => 'required',
		'email' => 'required|valid_email'
	);

	$data = $gump->sanitize($_POST['data']);

	$data = [
		'name' => $data['name'],
		'email' => $data['email'],
		'phone' => isset($data['phone']) ? $data['phone'] : '',
		'product' => isset($data['product']) ? $data['product'] : ''
	];

	$gump->set_error_messages(array(
    "validate_required"     => "{field} es requerido",
     "validate_valid_email"  => "{field} debe ser un email valido"
  ));

	$gump->set_field_name("name", "Nombre");

	$gump->validation_rules($rules);
	$isValid = $gump->run($data);

	if($isValid === false) {
		responseJson(["errors" => $gump->get_errors_array(), "success" => false ]);
	} else {
		$res = $wpdb->insert( 'quotations', $data, [ '%s', '%s', '%s', '%s' ] );
		responseJson(["success" => true]);
	}

	die();
}

add_action( 'wp_ajax_nopriv_store_quotation', 'store_quotation' );
add_action( 'wp_ajax_store_quotation', 'store_quotation' );
