import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {

	const ALLOWED_BLOCKS = ['create-block/carousel-slide-block'];

	return (
		<div {...useBlockProps()}>
			<div className="swiper-wrapper">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
				/>
			</div>
		</div>
	);
}

