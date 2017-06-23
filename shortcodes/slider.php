<?php

function parseSlides($slides) {
	$parseAtts = function_exists('vc_param_group_parse_atts') ? vc_param_group_parse_atts( $slides ) : [];

	$arrResult = array_map(function($slide) {
		if(!empty($slide)) {
			$slide['bg_img'] = wp_get_attachment_url($slide['bg_img']);			
			$slide['model_img'] = wp_get_attachment_url($slide['model_img']);			
			$slide['object_img'] = wp_get_attachment_url($slide['object_img']);			
		}
		
		return $slide;
		
	}, $parseAtts);

	return $arrResult;
}

function ra_slider_sc( $atts , $content) {
  $at = shortcode_atts( [ 'slides' => '' ], $atts );
		
	$slides = parseSlides($at['slides']); 
	// $slides = vc_param_group_parse_atts($atts['slides']); 
	$slidesJson = json_encode($slides);
	
  ob_start();
	?>
	<!--ra_slider html-->
		<div class="ra-slider" data-props='{"slides": <?php echo $slidesJson ?>}'></div>
	<!--/ra_slider html-->
	<?php
	return ob_get_clean();
}

add_shortcode(	'ra_slider', 'ra_slider_sc' );