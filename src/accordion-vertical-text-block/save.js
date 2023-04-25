import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
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
}
