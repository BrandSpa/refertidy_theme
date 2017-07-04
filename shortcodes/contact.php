<?php

function ra_contact_sc( $atts ) {
  $at = shortcode_atts([], $atts);
  ob_start();
  ?>
  <!--ra_contact-->
  <div class="ra-contact" data-props="{}"></div>
  <!--/ra_contact-->
  <?php
  return ob_get_clean();
}

add_shortcode( 'ra_contact', 'ra_contact_sc' );
