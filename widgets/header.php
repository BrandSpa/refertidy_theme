<?php

class Header_Widget extends WP_Widget {

	/**
	 * Sets up the widgets name etc
	 */
	public function __construct() {
		$widget_ops = array( 
			'classname' => 'header__widget',
			'description' => 'header content'
		);
		parent::__construct( 'header_content', 'Header Content', $widget_ops );
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

add_action('widgets_init', function() { 
	register_widget( 'Header_Widget' );
});
