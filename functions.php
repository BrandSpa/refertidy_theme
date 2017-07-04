<?php

//MIGRATIONS
include_once 'migrations/contacts.php';
include_once 'migrations/quotations.php';

//WIDGETS
include_once 'widgets/header.php';

//SHORTCODES
include_once 'shortcodes/slider.php';
include_once 'shortcodes/quo_fixed.php';

//VISUAL COMPOSER
include_once 'shortcodes/vc/slider.php';
include_once 'shortcodes/vc/quo_fixed.php';

//LIBS
include_once 'lib/clean_menu.php';

//API
include_once 'api/contacts.php';

//MENUS
register_nav_menus(
  array(
    'header' => 'Header Nav'
  )
);
