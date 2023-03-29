<?php

add_action('init', function(){  
   register_block_type( 'ourplugin/masonry-feed', array(             //*** 
      'api_version'     => 2,
      'supports'    => array( 'align' => true ),
      'attributes' => [
         'amountSelected' => [
            'type' => 'string',
            'default' => -1
         ],
         'offset' => [
            'type' => 'string',
            'default' => 0
         ]
      ],
      'render_callback' => function($attributes){
         
         ob_start();
         
         $wrapper_attributes = get_block_wrapper_attributes();

         $galleries = get_field('galleries', 'options');          

         ?>

         <div <?php echo $wrapper_attributes?>>
         <main class="masonry-grid">

         <?php
         if( have_rows('galleries', 'option') ):
         ?>
            <?php  while( have_rows('galleries', 'options') ) : the_row(); 

            $images = get_sub_field('images', 'options');

            foreach($images as $image){

            ?>


            <div class="masonry-item">
                  <div class="masonry-content">
                     <div class="masonry-image">
                        <img  src="<?php echo $image['image']['url'];?>" alt="">
                        <div class="overlay">
                           <div class="overlay-group">
                              <div>
                                 <h2><?php echo $image['name'];?></h2>
                                 <p><?php echo $image['description'];?></p>
                              </div>
                              <?php if($image['link']!==''){ ?>
                                 <p><a href="<?php echo $image['link'];?>">Mehr erfahren...</a></p>
                              <?php } ?>
                           </div>
                        </div>
                     </div>
                     <div class="spacer" style="height: 15px"></div>
                  </div>
            </div>

            <?php
            }
            endwhile;
            ?>

         <?php
         wp_reset_postdata();
         endif;   
         ?>
         </main>
         </div>
         <?php
         return ob_get_clean();
      }    
   ));
});
  

 
