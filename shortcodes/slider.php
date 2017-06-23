<?php
$dir_base = get_template_directory();
require_once $dir_base . '/vendor/autoload.php';

function checkParam($param) {
	return isset($param) ? $param : '';
}

function parseSlides($slides) {
	$parseAtts = function_exists('vc_param_group_parse_atts') ? vc_param_group_parse_atts( $slides ) : [];

	$arrResult = array_map(function($slide) {
		if(!empty($slide)) {
			$slide['bg_img'] = wp_get_attachment_url(checkParam($slide['bg_img']));			
			$slide['bg_img_mobile'] = wp_get_attachment_url(checkParam($slide['bg_img_mobile']));			
			$slide['model_img'] = wp_get_attachment_url(checkParam($slide['model_img']));
			$slide['model_img_mobile'] = wp_get_attachment_url(checkParam($slide['model_img_mobile']));			
			$slide['object_img'] = wp_get_attachment_url(checkParam($slide['object_img']));
			$slide['object_img_mobile'] = wp_get_attachment_url(checkParam($slide['object_img_mobile']));			
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
	$detect = new Mobile_Detect;

  ob_start();
	?>

	<!--ra_slider html-->
	<?php if(!$detect->isMobile()): ?>
		<div class="ra-slider" data-props='{"slides": <?php echo $slidesJson ?>}'></div>
		<?php else: ?>
		<div class="ra-slider-mobile" data-props='{"slides": <?php echo $slidesJson ?>}'></div>
	<?php endif ?>
	<!--/ra_slider html-->
	<?php
	return ob_get_clean();
}

add_shortcode(	'ra_slider', 'ra_slider_sc' );