<?php

/*
Plugin Name: The Combiner
Plugin URI: http://dd32.id.au/wordpress-plugins/?plugin=combine-css-js
Description: Combine CSS & JS into one large monolithic file
Author: DD32
Version: 1.0
Author URI: http://dd32.id.au/
*/

add_action('admin_init', 'combine_init');
function combine_init() {
	//Handler
	add_action('admin_post_css', 'combine_css');
	add_action('admin_post_js', 'combine_js');

	//Styles
	//remove_action('wp_head', 'wp_print_styles', 9); //non-admin
	remove_action('admin_print_styles', 'wp_print_styles', 20);
	//add_action('wp_head', 'combine_css_link');//non-admin
	add_action('admin_print_styles', 'combine_css_link', 20);

	//Scripts
	//remove_action('wp_head', 'wp_print_scripts', 9); //non-admin
	remove_action('admin_print_scripts', 'wp_print_scripts', 20);
	//add_action('wp_head', 'combine_js_link'); //non-admin
	add_action('admin_print_scripts', 'combine_js_link', 20);
	add_filter('print_scripts_array','combine_script_loader_src', 20);
}

function combine_script_loader_src($src) {
	//var_dump($src);
	return $src;
}

function combine_css() {
	global $wp_styles;
	if ( !is_a($wp_styles, 'WP_Styles') )
		$wp_styles = new WP_Styles();

	$wp_styles->all_deps(array_keys($wp_styles->registered));

	header('content-type: text/css; charset: UTF-8');

	$content = '';
	foreach ( (array)$wp_styles->to_do as $style ) {
		$style = $wp_styles->registered[$style];
		if ( file_exists(ABSPATH . $style->src) )
			$content .= file_get_contents(ABSPATH . $style->src);
		$content .= "\n\n";
	}
	echo $content;
}

function combine_css_link() {
	echo '<link rel="stylesheet" type="text/css" media="all" href="' . admin_url('admin-post.php?action=css' . (is_admin() ? '&admin=true' : '') ) . '" />' . "\n";
}

function combine_js() {
	global $wp_scripts;
	if ( !is_a($wp_scripts, 'WP_Scripts') )
		$wp_scripts = new WP_Scripts();

	$wp_scripts->all_deps(array_keys($wp_scripts->registered));
	//var_dump($wp_scripts->to_do);
	header("content-type: text/javascript; charset: UTF-8");

	$content = '';
	foreach ( (array)$wp_scripts->to_do as $script ) {
		$script = $wp_scripts->registered[$script];
		if ( file_exists(ABSPATH . $script->src) )
			$content .= file_get_contents(ABSPATH . $script->src) . "\n\n";
		if ( isset($script->extra['l10n']) ) {
			$object_name = $script->extra['l10n'][0];

			$content .= "\t$object_name = {\n";
			$eol = '';
			foreach ( $script->extra['l10n'][1] as $var => $val ) {
				$content .= "$eol\t\t$var: \"" . js_escape( $val ) . '"';
				$eol = ",\n";
			}
			$content .= "\n\t}\n\n";
		}
	}
	echo $content;
}

function combine_js_link() {
	echo '<script type="text/javascript" src="' . admin_url('admin-post.php?action=js' . (is_admin() ? '&admin=true' : '') ) . '"></script>' . "\n";
}
?>
