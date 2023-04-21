import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save({ className: 'swiper' });

    return (
        <div {...blockProps}>
            <div className="swiper-wrapper">
                <InnerBlocks.Content />
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}
