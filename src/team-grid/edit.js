import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

export default function Edit({ attributes }) {

	const ALLOWED_BLOCKS = ['create-block/team-grid-member-block'];
	const MY_TEMPLATE = [
		['create-block/team-grid-member-block']
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				template={MY_TEMPLATE}
				allowedBlocks={ALLOWED_BLOCKS}
			/>
		</div>
	);
}
