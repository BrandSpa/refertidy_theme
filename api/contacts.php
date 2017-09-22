<?php

function store_contact() {
	global $wpdb;

	$gump = new GUMP();

	$data = $gump->sanitize($_POST['data']);

	$rules = array(
		'name'  => 'required',
		'email' => 'required|valid_email',
		'question' => 'required',
		'privacy' => 'contains, 1'
	);

	$data = [
		'name' => $data['name'],
		'email' => $data['email'],
		'question' => $data['question'],
		'privacy' => $data['privacy'] === 'true' ? 1 : 0,
		'phone' => isset($data['phone']) ? $data['phone'] : '',
		'company' => isset($data['company']) ? $data['company'] : ''
	];

	$gump->set_error_messages([
    "validate_required" => "{field} es requerido",
    "validate_valid_email" => "{field} debe ser valido",
		"validate_boolean" => "debe aceptar"
   ]);

	$gump->set_field_name("name", "Nombre");
	$gump->set_field_name("question", "Duda");

	$gump->validation_rules($rules);
	$isValid = $gump->run($data);

	if($isValid === false) {
		responseJson( $gump->get_errors_array() );
	} else {
		$res = $wpdb->insert( 'contacts', $data, [ '%s', '%s', '%s', '%s', '%s', '%s' ] );
		responseJson( $data );
	}

	die();
}

add_action( 'wp_ajax_nopriv_store_contact', 'store_contact' );
add_action( 'wp_ajax_store_contact', 'store_contact' );

function getContacts() {
	global $wpdb;

	$gump = new GUMP();

	$data = $gump->sanitize($_POST['data']);

	$limit = $data['limit'] ? $data['limit'] : 25;
	$offset = $data['offset'] ? $data['offset'] : 0;

	$contacts = $wpdb->get_results( "SELECT id, name, email, question FROM contacts LIMIT ". $limit ." OFFSET " . $offset);

	responseJson($contacts);
	die();
}

add_action( 'wp_ajax_get_contacts', 'get_contacts' );
