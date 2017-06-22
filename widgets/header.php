<?php

class ra_Header_Widget extends WP_Widget {

	public function __construct() {
		$widget_ops = array( 
			'classname' => 'header_widget',
			'description' => 'My Widget is awesome',
		);

		parent::__construct( 'header_widget', 'Header Content', $widget_ops );
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

	/**
	 * Outputs the options form on admin
	 *
	 * @param array $instance The widget options
	 */
	public function form( $instance ) {
		// outputs the options form on admin

	}

	/**
	 * Processing widget options on save
	 *
	 * @param array $new_instance The new options
	 * @param array $old_instance The previous options
	 */
	public function update( $new_instance, $old_instance ) {
		// processes widget options to be saved
		
	}

}


function register_foo_widget() {
    register_widget( 'ra_Header_Widget' );
}

add_action( 'widgets_init', 'register_foo_widget');
