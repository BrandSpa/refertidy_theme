<?php

function ra_contacts_migration() {
	global $wpdb;

	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE contacts (
				id mediumint(9) NOT NULL AUTO_INCREMENT,
            name varchar(55),
            phone varchar(55),
            email varchar(55),
            company varchar(155),
            question TEXT,
            privacy BOOLEAN DEFAULT 0,
						created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            UNIQUE KEY id (id)
        ) $charset_collate;";

  if ( ! function_exists('dbDelta') ) {
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
  }

  dbDelta( $sql );
}

add_action('after_switch_theme', 'ra_contacts_migration' );
