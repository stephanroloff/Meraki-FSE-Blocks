<?php

add_action('init', function(){  
   register_block_type( 'ourplugin/masonry-feed', array(             //*** 
      'api_version'     => 2,
      'supports'    => array( 'align' => true ),
      'attributes' => [
         'amountSelected' => [
            'type' => 'string',
            'default' => '0'
         ],
         'overlayHover' => [
            'type' => 'boolean',
            'default' => 'true'
         ]
      ],
      'render_callback' => function($attributes){
         
         ob_start();
         $wrapper_attributes = get_block_wrapper_attributes();
         $galleries = get_field('images');    
         $counter = 0;
         $overlayHover = $attributes['overlayHover']; 
         //convert 
         $amountSelected_number = (int)$attributes['amountSelected']; 

         if(!$galleries){
            $galleries=[];
         }
         
         ?>

         <div <?php echo $wrapper_attributes?>>
            <main class="masonry-grid">

            <?php  
            foreach($galleries as $image){
            $counter++;

            if($amountSelected_number > 0){
               if($counter > $amountSelected_number){
                  break;
               }
            }
            ?>

            <div class="masonry-item">
                  <div class="masonry-content">
                     <div class="masonry-image">
                        <img  src="<?php echo $image['image']['url'];?>" alt="">
                        <div class="overlay" <?php echo $overlayHover? '':'style="display:none;"'?>>
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
            ?>

         <?php
         wp_reset_postdata(); 
         ?>
         </main>
         </div>
         <?php
         return ob_get_clean();
      }    
   ));
});
  

 
