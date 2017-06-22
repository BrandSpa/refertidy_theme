<?php

//SHORTCODES
include_once 'shortcodes/slider.php';
//VISUALCOMPOSER
include_once 'shortcodes/vc/slider.php';
//LIBS
include_once 'lib/clean_menu.php';
//MENUS
register_nav_menus(
  array(
    'header' => 'Header Nav'
  )
);
