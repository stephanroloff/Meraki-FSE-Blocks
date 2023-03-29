import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './team-grid-member/team-grid-member';
import Icon from './icon';


registerBlockType('city-concepts/team-grid', {    //*** 
  title: "Team Grid Block",                       //***
  icon: Icon,                                      //***
  category: "city-concepts",                       //***
  supports: {
    align: true,
    alignWide: true,
  },

  edit: () => {
    const blockProps = useBlockProps();
    const ALLOWED_BLOCKS = ['city-concepts/team-grid-member'];     //***
    const MY_TEMPLATE = [
      ['city-concepts/team-grid-member']                          //***
    ];

    return (
      <div {...blockProps}>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={MY_TEMPLATE}
        />
      </div>
    );
  },

  save: () => {
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div >
    );
  },
});


