<?php
header("content-type: text/javascript; charset: UTF-8");

function combine_js() {

  $wp_scripts = wp_scripts();
  foreach ($wp_scripts->queue as $script) {
    echo ABSPATH . $script->src;
  }

}

combine_js();
