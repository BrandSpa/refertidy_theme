<?php

function store_contact() {
	global $wpdb;

	$gump = new GUMP();

	$data = $gump->sanitize($_POST['data']);

	$message = '
		<html>
			<style>
				*{font-family: Arial, Helvetica, sans-serif}
				body{
					background: #b7e3fd
				}
			</style>
			<body>
				<table cellspadding="0" cellspacing="0" style="width: 600px; margin: 0 auto; border: 1px solid #d3d3d3; border-radius: 10px; padding: 0; background: #FFF" >
					<tr>
						<td style="text-align: center; padding: 10px">
							<h2 style="font-size: 22px; color: #6853cb;">Gana3 Rentadvisor</h2>
						</td>
					</tr>
					<tr>
						<td style="padding-bottom: 30px">
							<table cellspadding="0" cellspacing="0" style="width: 600px;">
								<tr>
									<td style="text-align: right; padding: 10px; width: 300px;">Nombre</td><td style="width: 300px">'.$data["nombre"].'</td>
								</tr>
								<tr>
									<td style="text-align: right; padding: 10px; width: 300px;">Email</td><td style="width: 300px">'.$data["email"].'</td>
								</tr>
								<tr>
									<td style="text-align: right; padding: 10px; width: 300px;">Pregunta</td><td style="width: 300px">'.$data["question"].'</td>
								</tr>
								<tr>
									<td style="text-align: right; padding: 10px; width: 300px;">Teléfono</td><td style="width: 300px">'.$data["phone"].'</td>
								</tr>
								<tr>
									<td style="text-align: right; padding: 10px; width: 300px;">Empresa</td><td style="width: 300px">'.$data["company"].'</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</body>
		</html>
	';

	$rules = array(
		'name'  => 'required',
		'email' => 'required|valid_email',
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
		responseJson(["errors" => $gump->get_errors_array(), "success" => false ]);
	} else {
		$res = $wpdb->insert( 'contacts', $data, [ '%s', '%s', '%s', '%s', '%s', '%s' ] );
		$status = false;
		if($data['to'] != ""){
			$status = wp_mail($data['to'], "Nuevo mensaje de contacto",  $message);
		}
		
		responseJson(["success" => true, "status" => $data['to']]);
	}

	die();
}

add_action( 'wp_ajax_nopriv_store_contact', 'store_contact' );
add_action( 'wp_ajax_store_contact', 'store_contact' );

function get_contacts() {
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
