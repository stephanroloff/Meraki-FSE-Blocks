Steps

1- Add extern Gallery inside function enqueue_all in index.php

function enqueue_all(){
   wp_register_style( 'swiper_css', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css' );
   wp_register_script( 'swiper_js', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', null, null, true );
   // wp_enqueue_script('swiper_js');

   wp_enqueue_script('enqueue-all', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element', 'wp-editor', 'wp-blocks', 'swiper_js'));
   wp_enqueue_style('enqueue-all-styles', plugin_dir_url(__FILE__) . 'build/index.css', array('swiper_css'));
}
