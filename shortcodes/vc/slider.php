<?php

 function ra_slider_vc() {
	 $subparams = [
     [
       "type" => "colorpicker",
       "heading" => "Background color",
       "param_name" => "bg_color"
     ],
		  [
        "type" => "attach_image",
        "heading" => "Background image",
        "param_name" => "bg_img"
      ],
      [
        "type" => "attach_image",
        "heading" => "Background image mobile",
        "param_name" => "bg_img_mobile"
      ],
			[
        "type" => "attach_image",
        "heading" => "Model image",
        "param_name" => "model_img"
      ],
      [
        "type" => "attach_image",
        "heading" => "Model image mobile",
        "param_name" => "model_img_mobile"
      ],
			[
        "type" => "attach_image",
        "heading" => "Object image",
        "param_name" => "object_img"
      ],
			[
        "type" => "attach_image",
        "heading" => "Object image mobile",
        "param_name" => "object_img_mobile"
      ],
			[
				"type" => "textarea",
				"heading" => "Slide content",
				"param_name" => "slide_content"
			],
      [
        "type" => "textfield",
				"heading" => "Button link",
				"param_name" => "btn_link"
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
      ],
      [
        "type" => "textfield",
				"heading" => "Button 2 link",
				"param_name" => "btn_2_link"
      ],
      [
        "type" => "textfield",
				"heading" => "Button 2 text",
				"param_name" => "btn_2_txt"
      ],
      [
        "type" => "colorpicker",
				"heading" => "Button 2 color",
				"param_name" => "btn_2_color"
      ]
      
	 ];

	 $params = [
		  [
        'type' => 'param_group',
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
