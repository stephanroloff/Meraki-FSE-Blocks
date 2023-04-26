import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes }) {

	const MY_TEMPLATE = [

		['core/group', { className: 'bg-img-container' }, [
			['core/image', { className: 'bg-img' }],
		]],
		['create-block/layer-block', {}],
		// ['core/cover', { className: 'multi-layer-cover' }],

	];

	return (
		<div {...useBlockProps()}>
			<div class="multi-layer-wrapper">
				<InnerBlocks
					template={MY_TEMPLATE}
				/>
			</div>
		</div>
	);
}
