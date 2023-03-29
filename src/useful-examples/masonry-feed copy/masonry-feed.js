import "../../index.scss";
import { registerBlockType } from "@wordpress/blocks";
const { ServerSideRender } = wp.components; //IMPORTANT!
import { 
  useBlockProps,
  InspectorControls,  
} from '@wordpress/block-editor';
import { 
  TextControl,
  PanelBody,
  PanelRow,
  __experimentalNumberControl as NumberControl,
  ToggleControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType("ourplugin/masonry-feed", {              //*** 
  apiVersion: 2,
  title: "Masonry Feed",                                   //*** 
  icon: "admin-page",                                       //*** 
  category: "city-concepts",                                //*** 
  attributes: {
    amountSelected: {
      type: 'string',
    },
    overlayHover: {
      type: 'boolean',
      // default: true,
    },
  },
  supports: {
    align: true,
    color: true,
  },
  
  edit: function (props) {
    const {attributes, setAttributes} = props;
    const {amountSelected, overlayHover } = attributes;
    const blockProps = useBlockProps();
    // const [ hasFixedBackground, setHasFixedBackground ] = useState( true );
    
    return (
      <div { ...blockProps }>
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <h2>Masonry Feed</h2>                                            {/***/}
            </PanelRow>
            <PanelRow>                                     
              {/* <TextControl
                    placeholder="Please enter a number"
                    label={ 'Number of Projects'}
                    value={ amountSelected || 0}
                    onChange={ value => setAttributes( { amountSelected: value } ) }
              /> */}
              <NumberControl
                    label={ 'Number of Pictures'}                                       //***
                    min={0}
                    onChange={ value => setAttributes( { amountSelected: value } )}
                    value={ amountSelected || 0}
              />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                label="Overlay Hover"
                help={
                  overlayHover
                        ? 'Has overlay hover effect.'
                        : 'No overlay hover effect.'
                }
                checked={ overlayHover }
                onChange={ value => setAttributes( { overlayHover: value } )}

                />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <ServerSideRender
          block="ourplugin/masonry-feed"                                     //***
          attributes={{
            amountSelected: attributes.amountSelected,
            overlayHover: attributes.overlayHover,
          }}
        />
      </div>
    );
  },
  save: function () {
    return null;
  },
});
