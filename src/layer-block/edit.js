import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes }) {

	const MY_TEMPLATE = [
		['core/group', { className: 'layer-group' }],
		// ['core/cover', { className: 'multi-layer-cover' }],
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
