<?php

function modify_jquery() {
	if (!is_admin()) {
    $wp_scripts = wp_scripts();

		wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', false, '3.1.1', true);
		wp_enqueue_script('jquery');


    foreach ($wp_scripts->queue as $name) {
      wp_deregister_script($name);
    }


	}
}

add_action('init', 'modify_jquery');
