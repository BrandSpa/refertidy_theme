<?php

// function register_foo_widget() {
//   register_widget( 'ra_Header_Widget' );
// }

// add_action( 'widgets_init', 'register_foo_widget');

// class ra_Header_Widget extends WP_Widget {

// 	public function __construct() {
// 		$widget_ops = array( 
// 			'classname' => 'header_widget',
// 			'description' => 'My Widget is awesome'
// 		);

// 		parent::__construct( 'header_widget', 'Header right Content', $widget_ops );
// 	}

// 	/**
// 	 * Outputs the content of the widget
// 	 *
// 	 * @param array $args
// 	 * @param array $instance
// 	 */
// 	public function widget( $args, $instance ) {
// 		// outputs the content of the widget

// 	}

// }

/**
 * Register our sidebars and widgetized areas.
 *
 */
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