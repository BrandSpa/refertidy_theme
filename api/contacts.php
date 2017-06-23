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
	);

	$data = $gump->sanitize($_POST['data']);

	$data = [
		'name' => $data['name'],
		'email' => $data['email'],
		'phone' => isset($data['phone']) ? $data['phone'] : '',
		'product' => isset($data['product']) ? $data['product'] : ''
	];

	$isValid = GUMP::is_valid($data, $rules);

	if($isValid === true) {
		$res = $wpdb->insert( 'contacts', 
			$data, 
			array( '%s', '%s', '%s', '%s' ) 
		);

		responseJson($data);
	} else {
		responseJson(['validation', $isValid]);
	}
	
	die();
}
