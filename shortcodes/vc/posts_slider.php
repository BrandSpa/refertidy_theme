<?php

function ra_posts_slider_vc() {
	vc_map([
		'name' => 'Posts Slider',
		'base' => 'ra_posts_slider',
		'category' => 'RA'
	]);
}

add_action('vc_before_init', 'ra_posts_slider_vc');
