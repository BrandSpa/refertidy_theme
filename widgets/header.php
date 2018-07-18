<?php

function ra_widgets_init() {

	register_sidebar( array(
		'name'          => 'Header right',
		'id'            => 'header_widget',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => 'Footer fixed mobile',
		'id'            => 'footer_fixed_widget',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );

}

add_action( 'widgets_init', 'ra_widgets_init' );
