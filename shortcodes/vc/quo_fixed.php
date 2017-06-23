<?php

function ra_quo_fixed_vc() {
	vc_map([
		'base' => 'ra_quo_fixed',
		'name' => 'Contact fixed',
		'category' => 'RA'
	]);
}

add_action('vc_before_init', 'ra_quo_fixed_vc');