<?php
/**
 * Carousel-Slide-Block
 *
 * @package Meraki\Blocks\Carousel-Slide-Block
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            Block context.
 */

$wrapper_attributes = get_block_wrapper_attributes();

if($attributes['mediaURL1']){
    $mediaURL1 = $attributes['mediaURL1'];
}else{
    $mediaURL1 = '';
}

if($attributes['mediaAlt1']){
    $mediaAlt1 = $attributes['mediaAlt1'];
}else{
    $mediaAlt1 = '';
}
?>

<div class="swiper-slide">
    <div class="slide_intern">    
        <img 
            class="slide-img" 
            src="<?php echo $mediaURL1;?>" 
            alt="<?php echo $mediaAlt1;?>"
        >
        <!-- <div class="swiper-lazy-preloader"></div> -->
        <p class="slide-text"><?php echo $attributes['titleCarousel1']?></p>
    </div>
</div>

    

