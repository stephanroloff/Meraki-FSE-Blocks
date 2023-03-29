<?php

add_action('init', function(){  
   register_block_type( 'ourplugin/projekte-feed', array(             //*** 
      'api_version'     => 2,
      'supports'    => array( 'color' => true, 'align' => true ),
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

         $homepagePosts = new WP_Query(array(
            'post_type' => 'projects',                                 //*** 
            'orderby' => 'date',
            'order' => 'DESC',
            'offset' => $attributes['offset'], 
            'posts_per_page' => $attributes['amountSelected'],       
            // 'posts_per_page' => 3,
         ));
         ?>

         <div <?php echo $wrapper_attributes?>>

         <?php
         while($homepagePosts->have_posts()){
            $homepagePosts->the_post(); 

         //ACF Fields (De los Post del tipo "projects")
         $bold_description = get_field('bold_description');            //*** 
         $description = get_field('description');                      //*** 
         ?>

            <div class="projekt-wrapper">                
                  <div class="projekt-img">
                     <?php echo get_the_post_thumbnail()?>
                  </div>
                  <div class="projekt-content">
                     <p class="title"><?php the_title()?></p>
                     <p class="bold_description"><?php echo $bold_description?></p>
                     <p class="description"><?php echo wp_trim_words($description, 20) ?></p>
                     <p>
                        <a href="<?php the_permalink()?>">Projekt ansehen</a>
                     </p>
                  </div>
            </div>

         <?php
         } 
         wp_reset_postdata();

         ?>
         </div>
         <?php
   
         return ob_get_clean();
      }    
   ));
});
  

 
