<?php

function register_foo_widget() {
  register_widget( 'ra_Header_Widget' );
}

add_action( 'widgets_init', 'register_foo_widget');

class ra_Header_Widget extends WP_Widget {

	public function __construct() {
		$widget_ops = array( 
			'classname' => 'header_widget',
			'description' => 'My Widget is awesome'
		);

		parent::__construct( 'header_widget', 'Header right Content', $widget_ops );
	}

	/**
	 * Outputs the content of the widget
	 *
	 * @param array $args
	 * @param array $instance
	 */
	public function widget( $args, $instance ) {
		// outputs the content of the widget

	}

}

