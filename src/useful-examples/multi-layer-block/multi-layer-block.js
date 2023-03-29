import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'city-concepts/multi-layer-block', {     
    title: "Multi Layer Block",                             
    icon: "building",                               
    category: "city-concepts",                      
    supports: {
      align: true,
      alignWide: true,
    },

    edit: () => {
        const blockProps = useBlockProps();
        // const ALLOWED_BLOCKS = [ 'city-concepts/layer-block', 'core/image'];

        const MY_TEMPLATE = [                       //*** ALL CONTENT INSIDE MY_TEMPLATE
        
        [ 'core/group', { className: 'bg-img-container'}, [
            [ 'core/image', {className: 'bg-img'} ],
        ]],
        [ 'city-concepts/layer-block', {} ],

        ];

        return (
            <div { ...blockProps }>
                <div class="multi-layer-wrapper">
                    <InnerBlocks 
                        template={ MY_TEMPLATE }
                        // allowedBlocks={ ALLOWED_BLOCKS }
                    />
                </div>
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <div class="multi-layer-wrapper">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );