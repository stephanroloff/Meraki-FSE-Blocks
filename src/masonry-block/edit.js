import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	__experimentalNumberControl as NumberControl,
	ToggleControl
} from '@wordpress/components';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { amountSelected, overlayHover } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<h2>Masonry Feed</h2>                                            {/***/}
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Number of Pictures'}                                       //***
							min={0}
							onChange={value => setAttributes({ amountSelected: value })}
							value={amountSelected || 0}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Overlay Hover"
							help={
								overlayHover
									? 'Has overlay hover effect.'
									: 'No overlay hover effect.'
							}
							checked={overlayHover}
							onChange={value => setAttributes({ overlayHover: value })}

						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={metadata.name}
				attributes={{
					amountSelected: attributes.amountSelected,
					overlayHover: attributes.overlayHover,
				}}
			/>
		</div>
	);
}
