<?php
header("content-type: text/javascript; charset: UTF-8");

function combine_js() {

  $wp_scripts = wp_scripts();
  foreach ($wp_scripts->queue as $script) {
    if ( file_exists(ABSPATH . $script->src) ) {
      echo file_get_contents(ABSPATH . $script->src);
    }
  }

}

combine_js();
