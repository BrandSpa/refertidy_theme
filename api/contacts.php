<?php
require_once get_template_directory() . '/lib/response_json.php';

add_action( 'wp_ajax_nopriv_store_contact', 'store_contact' );
add_action( 'wp_ajax_store_contact', 'store_contact' );

function store_contact() {
	global $wpdb;
	$data = [
		'name' => $_POST['name'],
		'email' => $_POST['email'],
		'phone' => $_POST['phone'],
		'product' => $_POST['product']
	];

	$res = $wpdb->insert( 'contacts', 
		$data, 
		array( '%s', '%s', '%s', '%s' ) 
	);

	responseJson($res);
	die();
}
