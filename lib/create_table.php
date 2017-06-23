<?php

register_activation_hook( __FILE__, 'prefix_create_table' );

function prefix_create_table() {
	global $wpdb;

	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE contacts (
				id mediumint(9) NOT NULL AUTO_INCREMENT,
            name varchar(55) NOT NULL,
            phone varchar(55) NOT NULL,
            email varchar(55) NOT NULL,
            product varchar(55) NOT NULL,
            UNIQUE KEY id (id)
        ) $charset_collate;";

  if ( ! function_exists('dbDelta') ) {
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
  }

  dbDelta( $sql );
}