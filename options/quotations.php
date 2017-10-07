<?php

add_action('admin_menu', 'ra_admin_quotations_options_menu');

function ra_admin_quotations_options_menu() {

		add_menu_page(
    'Brandspa theme options',
    'Cotizaciones', //menu name
    'manage_options', //allow it options
    'ra-quotations', //slug
    'ra_quotations_options',
    get_template_directory_uri() . '/public/img/bs.png', //icon on menu
    114 //position on menu
  );
}

function ra_quotations_options() {
  global $wpdb;
  $slug = 'ra-quotations';
  $paged = isset($_GET['paged']) ? $_GET['paged'] : 0;
  $perpage = isset($_GET['perpage']) ? $_GET['perpage'] : 25;
  $postname = isset($_GET['postname']) ? $_GET['postname'] : '';
  $offset = $paged * $perpage;

  $quotations = $wpdb->get_results( "SELECT id, name, email, phone, product FROM quotations LIMIT ". $perpage ." OFFSET " . $offset);
  ?>

  <h2>Cotizaciones</h2>

  <hr/>
  <table class="wp-list-table widefat fixed striped">
    <thead>
      <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Product</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach($quotations as $quo): ?>
        <tr>
          <td><a href="mailto:<?php echo $quo->email; ?>"><?php echo $quo->email; ?></a></td>
          <td><?php echo $quo->name; ?></td>
          <td><?php echo $quo->phone; ?></td>
          <td><?php echo $quo->product; ?></td>
         
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
  <hr/>

  <div class="pagination">
    <a class="prev-page button" href="/wp-admin/admin.php?page=<?php echo $slug ?>&paged=<?php echo $paged > 0 ? $paged - 1 : 0 ?>">prev</a>
    <a class="next-page button" href="/wp-admin/admin.php?page=<?php echo $slug ?>&paged=<?php echo count($quotations) > 0 ? $paged + 1 :  $paged - 1 ?>">next</a>
  </div>
  <?php
  }
