<?php

function ra_widgets_init() {

	register_sidebar( array(
		'name'          => 'Header right sidebar',
		'id'            => 'header_widget',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	) );

}

add_action( 'widgets_init', 'ra_widgets_init' );
