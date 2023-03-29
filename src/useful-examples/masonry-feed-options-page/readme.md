1 - Create a ACF Field Group called "Mansonry Galleries"

2 - Then create a "repeater" called "Galleries"
  - Field Label: Galleries
  - Field Name: galleries

3 - Then create the subfields (inside the repeater):

  - Name Gallery 
    Field Name: name_gallery
    Type: text

  - Images
    Field Name: images
    Type: repeater

4 - Then create the subfields (inside the repeater of Images):

  - Image
    Field Name: image
    Type: text

  - Name
    Field Name: name
    Type: text

  - Description
    Field Name: description
    Type: text

  - Link
    Field Name: link
    Type: text



5- Create an options page called "options-page.php" inside "lib" folder, and copy this code:

  <?php

  if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Masonry Galleries',
        'menu_title'    => 'Masonry Galleries',
        'menu_slug'     => 'masonry-galleries',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
    
  }

6 - Afdd it to functions.php

require_once(__DIR__ . '/lib/options-page.php'); 