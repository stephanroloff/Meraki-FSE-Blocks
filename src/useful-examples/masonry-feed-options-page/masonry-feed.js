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
  SelectControl, 
  __experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

registerBlockType("ourplugin/masonry-feed", {              //*** 
  apiVersion: 2,
  title: "Masonry Feed",                                   //*** 
  icon: "admin-page",                                       //*** 
  category: "city-concepts",                                //*** 
  attributes: {
    amountSelected: {
      type: 'string',
    },
    offset: {
      type: 'string',
    },
    // optionSelected: {
    //   type: 'string',
    // }
  },
  supports: {
    align: true,
    color: true,
  },
  
  edit: function (props) {
    const {attributes, setAttributes} = props;
    const {amountSelected, offset, optionSelected} = attributes;
    const blockProps = useBlockProps();


    //Select Post -----------------------------------------
    // const [dataPosts, setDataPosts] = useState(null);   

    // const data = useSelect((select) => {
    //   return select('core').getEntityRecords('postType', 'post');
    // });

    // useEffect(() => {
    //   if(data===null) return;
    //   data.map(value=>{
    //     optionsArray.push({ value: value.id, label: value.title.raw })
    //   })
    //   setDataPosts(optionsArray); 
    // }, [data])
    //-------------------------------------------------------
    
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
            {/* <PanelRow>
               {
                dataPosts===null?'':
                <SelectControl
                  label='Select New: '
                  value={ optionSelected } 
                  onChange={ ( option ) => { setAttributes({optionSelected: option}) } }
                  options={ dataPosts }
                />}
            </PanelRow> */}
          </PanelBody>
        </InspectorControls>

        <ServerSideRender
          block="ourplugin/masonry-feed"                                     //***
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
