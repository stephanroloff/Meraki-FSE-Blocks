import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { 
    // TextControl,
    PanelBody,
    PanelRow,
    __experimentalNumberControl as NumberControl,
    SelectControl, 
} from '@wordpress/components';

registerBlockType( 'city-concepts/layer-block', {     
    title: "Layer Block",                             
    icon: "building",                               
    category: "city-concepts",                      
    supports: {
      align: true,
      alignWide: true,
    },
    attributes: {
        zIndex: {
          type: 'string',
        }
      },

    edit: (props) => {

        

        const {attributes, setAttributes} = props;
        const {zIndex} = attributes;
        const zIndexValue = {
            zIndex: zIndex
        };
        const blockProps = useBlockProps({ style: zIndexValue });

        return (
            <div { ...blockProps } >
                <InspectorControls>
                    <PanelBody>
                        <PanelRow>
                        <h2>Layer Block</h2>                                            {/***/}
                        </PanelRow>
                        <PanelRow>
                        <NumberControl
                                label={ 'z-index'}
                                min={0}
                                onChange={ value => setAttributes({zIndex: value}) }
                                value={ zIndex || 0}
                        />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>

                <div class="layer-wrapper">
                    <InnerBlocks />
                </div>
            </div>
        );
    },

    save: (props) => {
        const {attributes} = props;
        const {zIndex} = attributes;
        const zIndexValue = {
            zIndex: zIndex
        };
        const blockProps = useBlockProps.save({ style: zIndexValue });

        return (
            <div { ...blockProps }>
                <div class="layer-wrapper">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );