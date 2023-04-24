<?php
/**
 * Team-grid-member Block
 *
 * @package Meraki\Blocks\team-grid-member
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
    <div class="team-grid-member-intern">    
        <img 
            class="team-grid-member-img" 
            src="<?php echo $mediaURL1;?>" 
            alt="<?php echo $mediaAlt1;?>"
        >
        <p class="team-grid-member-text"><?php echo $attributes['titleTeamMember1']?></p>
    </div>                                                             
</div>
    

