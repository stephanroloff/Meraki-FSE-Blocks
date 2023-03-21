<?php

function create_block_gutenpride_block_init() {

    /* 
    Static Blocks
    */
	// register_block_type( dirname(__FILE__) . '/build/static-block' );
	register_block_type( dirname(__FILE__) . '/build/static-block' );
	
    /* 
    Dynamic Blocks
    */
    register_block_type( dirname(__FILE__) . '/build/dynamic-block');

}
add_action( 'init', 'create_block_gutenpride_block_init' );