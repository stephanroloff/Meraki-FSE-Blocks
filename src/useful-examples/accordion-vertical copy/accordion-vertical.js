import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
    PanelBody,
    PanelRow,
    __experimentalNumberControl as NumberControl,
} from '@wordpress/components';

registerBlockType('city-concepts/accordion-vertical', {
    title: "Accordion Vertical",
    icon: "media-document",
    category: "city-concepts",
    supports: {
        align: true,
        alignWide: true,
    },
    attributes: {
        amountSelected: {
            type: 'string',
        }
    },

    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { amountSelected } = attributes;
        const blockProps = useBlockProps();

        const MY_TEMPLATE = [
            ['core/group', { className: 'accordion-container' }, [
                ['core/group', { className: 'slide-1 slide slide-open slide-active' }, [['core/group', { className: 'content' }]]],
                ['core/group', { className: 'slide-2 slide' }, [['core/group', { className: 'content' }]]],
                ['core/group', { className: 'slide-3 slide slide-extra' }, [['core/group', { className: 'content' }]]],
                // To add a new slide uncomment this line:
                // ['core/group', { className: 'slide-4 slide slide-extra' }, [['core/group', { className: 'content' }]]]
            ]],
        ];

        return (
            <div {...blockProps}>

                <InspectorControls>
                    <PanelBody>
                        <PanelRow>
                            <h2>ACCORDION VERTICAL</h2>                                            {/***/}
                        </PanelRow>
                        <PanelRow>
                            <NumberControl
                                label={'Height'}
                                min={100}
                                onChange={value => setAttributes({ amountSelected: value })}
                                value={amountSelected || 0}
                            />
                        </PanelRow>
                        <PanelRow>
                            <p>Min-Height: 100px</p>                                            {/***/}
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>

                <InnerBlocks
                    template={MY_TEMPLATE}
                />
            </div>
        );
    },

    save: (props) => {
        const { attributes, setAttributes } = props;
        const { amountSelected } = attributes;

        const blockProps = useBlockProps.save({
            style: {
                height: `${amountSelected || 200}px`,
                minHeight: '200px'
            }
        });

        return (
            <div {...blockProps}>
                <span class="loader"></span>
                <InnerBlocks.Content />
            </div>
        );
    },
});