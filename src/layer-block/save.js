import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div class="layer-wrapper">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
