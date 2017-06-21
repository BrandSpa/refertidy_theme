<?php

 function ra_slider_vc() {
	 $subparams = [
		  [
        "type" => "image",
        "heading" => "Background image",
        "param_name" => "bg_img"
      ],
			[
        "type" => "image",
        "heading" => "Model image",
        "param_name" => "model_img"
      ],
			[
        "type" => "image",
        "heading" => "Object image",
        "param_name" => "object_img"
      ],
			[
				"type" => "textarea",
				"heading" => "Slide content",
				"param_name" => "slide_content"
			]
	 ];

	 $params = [
		  [
        'type' => 'param_group',
        'value' => '',
        'param_name' => 'slides',
        'params' => $subparams
      ]
	 ];

	 vc_map($params);
 }

 add_action( 'vc_before_init', 'ra_slider_vc' );