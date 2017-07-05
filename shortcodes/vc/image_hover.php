<?php

function ra_image_hover_vc() {
	vc_map([
		'name' => 'Image hover',
		'base' => 'ra_image_hover',
		'category' => 'RA',
    'params' => [
      [
        'type' => 'attach_image',
        'heading' => 'Image base',
        'param_name' => 'image'
      ],
      [
        'type' => 'attach_image',
        'heading' => 'Image overlay',
        'param_name' => 'image_overlay'
      ],
      [
        'type' => 'colorpicker',
        'heading' => 'background',
        'param_name' => 'bg_color'
      ]
    ]
	]);
}

add_action('vc_before_init', 'ra_image_hover_vc');
