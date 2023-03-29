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
  __experimentalNumberControl as NumberControl
} from '@wordpress/components';

registerBlockType("ourplugin/projekte-feed", {              //*** 
  apiVersion: 2,
  title: "Projekte Feed",                                   //*** 
  icon: "admin-page",                                       //*** 
  category: "city-concepts",                                //*** 
  attributes: {
    amountSelected: {
      type: 'string',
    },
    offset: {
      type: 'string',
    }
  },
  supports: {
    align: true,
    color: true,
  },
  
  edit: function (props) {
    const {attributes, setAttributes} = props;
    const {amountSelected, offset} = attributes;
    const blockProps = useBlockProps();
    
    return (
      <div { ...blockProps }>
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <h2>Projekte Feed</h2>                                            {/***/}
            </PanelRow>
            <PanelRow>                                     
              {/* <TextControl
                    placeholder="Please enter a number"
                    label={ 'Number of Projects'}
                    value={ amountSelected || 0}
                    onChange={ value => setAttributes( { amountSelected: value } ) }
              /> */}
              <NumberControl
                    label={ 'Number of Projects'}
                    min={0}
                    onChange={ value => setAttributes( { amountSelected: value } )}
                    value={ amountSelected || 0}
              />
            </PanelRow>
            <PanelRow>
              <NumberControl
                    label={ 'Offset'}
                    min={0}
                    onChange={ value => setAttributes({offset: value}) }
                    value={ offset || 0}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <ServerSideRender
          block="ourplugin/projekte-feed"                                     //***
          attributes={{
            amountSelected: attributes.amountSelected,
            offset: attributes.offset,
          }}
        />
      </div>
    );
  },
  save: function () {
    return null;
  },
});
