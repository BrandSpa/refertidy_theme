<?php

if(function_exists('wp_scripts')) {
  $wp_scripts = wp_scripts();

  foreach ($wp_scripts->queue as $script) {
    echo ABSPATH . $script->src;
  }

}
