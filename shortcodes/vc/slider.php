<?php

 function ra_slider_vc() {
	 $subparams = [
		  [
        "type" => "attach_image",
        "heading" => "Background image",
        "param_name" => "bg_img"
      ],
			[
        "type" => "attach_image",
        "heading" => "Model image",
        "param_name" => "model_img"
      ],
			[
        "type" => "attach_image",
        "heading" => "Object image",
        "param_name" => "object_img"
      ],
			[
				"type" => "textarea",
				"heading" => "Slide content",
				"param_name" => "slide_content"
			],
      [
        "type" => "textfield",
				"heading" => "Button text",
				"param_name" => "btn_txt"
      ],
      [
        "type" => "colorpicker",
				"heading" => "Button color",
				"param_name" => "btn_color"
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

	 vc_map([
     'name' => 'Slider',
     'base' => 'ra_slider',
     'category' => 'RA',
     'params' => $params
     ]);
 }

 add_action( 'vc_before_init', 'ra_slider_vc' );