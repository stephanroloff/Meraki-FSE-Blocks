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
<div <?php echo $wrapper_attributes?>>
    <div class="accordion">
        <img class= "accordion-arrow" src="<?php echo $mediaURL1;?>" alt="<?php echo $mediaAlt1;?>">
        <p class="accordion-arrow"><?php echo $attributes['titleAccordion']?></p>
    </div>
    <div class="panel">
        <div class="inner-content"><?php echo $content?></div>
    </div>
</div>
    

