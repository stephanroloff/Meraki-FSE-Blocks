import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { amountSelected } = attributes;

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
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<h2>ACCORDION VERTICAL</h2>                                            {/***/}
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Height'}
							min={200}
							onChange={value => setAttributes({ amountSelected: value })}
							value={amountSelected || 0}
						/>
					</PanelRow>
					<PanelRow>
						<p>Min-Height: 200px</p>                                            {/***/}
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}
