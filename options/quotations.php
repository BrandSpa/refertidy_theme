<?php

add_action('admin_menu', 'ra_admin_quotations_options_menu');

function ra_admin_quotations_options_menu() {

		add_menu_page(
    'Brandspa theme options',
    'Quotations', //menu name
    'manage_options', //allow it options
    'ra-quotations', //slug
    'ra_quotations_options',
    get_template_directory_uri() . '/public/img/bs.png', //icon on menu
    114 //position on menu
  );
}

function bs_quotations_options() {
  global $wpdb;
  $paged = isset($_GET['paged']) ? $_GET['paged'] : 0;
  $perpage = isset($_GET['perpage']) ? $_GET['perpage'] : 25;
  $postname = isset($_GET['postname']) ? $_GET['postname'] : '';
  $offset = $paged * $perpage;

  $posts = $wpdb->get_results( "SELECT id, name, email, phone, product FROM quotations LIMIT ". $perpage ." OFFSET " . $offset);
  ?>

  <h2>Contacts</h2>

  <hr/>
  <table class="wp-list-table widefat fixed striped">
    <thead>
      <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Product</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach($posts as $post): ?>
        <?php $contact = json_decode(str_replace("\\", '', $post->post_content)); ?>
        <tr>
          <td><?php echo $contact->email; ?></td>
          <td><?php echo $contact->name; ?></td>
          <td><?php echo $contact->phone; ?></td>
          <td><?php echo $contact->product; ?></td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
  <hr/>

  <div class="pagination">
    <a class="prev-page button" href="/wp-admin/admin.php?page=bs-quotations&paged=<?php echo $paged > 0 ? $paged - 1 : 0 ?>">prev</a>
    <a class="next-page button" href="/wp-admin/admin.php?page=bs-quotations&paged=<?php echo count($posts) > 0 ? $paged + 1 :  $paged - 1 ?>">next</a>
  </div>
  <?php
  }
