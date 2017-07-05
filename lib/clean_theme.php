<?php

function modify_jquery() {
	if (!is_admin()) {
    $wp_scripts = wp_scripts();

    foreach ($wp_scripts->queue as $name) {
      wp_deregister_script($name);
    }

	}
}

add_action('init', 'modify_jquery');
