import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes }) {

	const MY_TEMPLATE = [
		['core/cover', { className: 'layer-cover' }],
	];

	return (
		<div {...useBlockProps()}>
			<div class="layer-wrapper">
				<InnerBlocks
					template={MY_TEMPLATE}
				/>
			</div>
		</div>
	);
}
