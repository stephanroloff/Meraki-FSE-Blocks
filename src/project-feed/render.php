<?php
/**
 * Example Dynamic Block
 *
 * @package Meraki\Blocks\Dynamic
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes();

$homepagePosts = new WP_Query(array(
    'post_type' => 'post',                                 //*** 
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

//ACF Fields (or excerpt)
$bold_description = "Bold description...";            //*** 
$description = "Description...";                      //*** 
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
    

