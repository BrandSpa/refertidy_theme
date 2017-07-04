<?php

function ra_contact_vc() {
	vc_map([
		'name' => 'Contact fixed',
		'base' => 'ra_contact',
		'category' => 'RA'
	]);
}

add_action('vc_before_init', 'ra_contact_vc');
