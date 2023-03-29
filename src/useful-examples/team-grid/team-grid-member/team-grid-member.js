import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('city-concepts/team-grid-member', {    //*** 
  title: "Team Grid Member",
  icon: "admin-users",                                      //***
  category: "city-concepts",                                   //***
  supports: {
    align: true,
    alignWide: true,
    // inserter: false,
  },

  edit: () => {
    const blockProps = useBlockProps();

    const MY_TEMPLATE = [                                           //***
      ['core/group', { className: 'team-member' }, [
        ['core/image', { className: 'member-image' }],
        ['core/paragraph', { className: 'member-name', placeholder: 'Name' }],
        ['core/paragraph', { className: 'member-position', placeholder: 'Position' }],
      ]]
    ];

    return (
      <div {...blockProps}>
        <InnerBlocks
          template={MY_TEMPLATE}
          templateLock="all"
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
