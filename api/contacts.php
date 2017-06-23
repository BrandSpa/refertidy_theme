<?php
require_once get_template_directory() . '/lib/response_json.php';

add_action( 'wp_ajax_nopriv_store_contact', 'store_contact' );
add_action( 'wp_ajax_store_contact', 'store_contact' );

function store_contact() {
	global $wpdb;
	$data = $_POST['data'];
	$data = [
		'name' => $data['name'],
		'email' => $data['email'],
		'phone' => isset($data['phone']) ? $data['phone'] : '',
		'product' => isset($data['product']) ? $data['product'] : ''
	];

	$res = $wpdb->insert( 'contacts', 
		$data, 
		array( '%s', '%s', '%s', '%s' ) 
	);

	responseJson($data);
	die();
}
