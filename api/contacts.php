<?php
$dir_base = get_template_directory();
require_once $dir_base . '/vendor/autoload.php';
require_once $dir_base . '/lib/response_json.php';

add_action( 'wp_ajax_nopriv_store_contact', 'store_contact' );
add_action( 'wp_ajax_store_contact', 'store_contact' );

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

	GUMP::set_error_messages(array(
    "validate_required"     => "{field} es requerido",
     "validate_valid_email"  => "{field} debe ser un email valido",
  ));

	GUMP::set_field_name("name", "Nombre");
	GUMP::set_field_name("question", "Duda");

	$isValid = GUMP::is_valid($data, $rules);

	if($isValid === true) {
		$res = $wpdb->insert( 'contacts',
			$data,
			array( '%s', '%s', '%s', '%s', '%s' )
		);

		responseJson($data);
	} else {
		$errors = GUMP::get_errors_array();
		responseJson( [ 'errors' => $errors ] );
	}

	die();
}
