<?php

function ra_quo_fixed_vc() {
	vc_map([
		'name' => 'Contact fixed',
		'base' => 'ra_quo_fixed',
		'category' => 'RA'
	]);
}

add_action('vc_before_init', 'ra_quo_fixed_vc');