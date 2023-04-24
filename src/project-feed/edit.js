import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import {
	TextControl,
	PanelBody,
	PanelRow,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { amountSelected, offset } = attributes;

	return (
		<div {...useBlockProps()}>

			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<h2>Projekte Feed</h2>                                            {/***/}
					</PanelRow>
					<PanelRow>
						{/* <TextControl
								placeholder="Please enter a number"
								label={ 'Number of Projects'}
								value={ amountSelected || 0}
								onChange={ value => setAttributes( { amountSelected: value } ) }
						/> */}
						<NumberControl
							label={'Number of Projects'}
							min={0}
							onChange={value => setAttributes({ amountSelected: value })}
							value={amountSelected || 0}
						/>
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Offset'}
							min={0}
							onChange={value => setAttributes({ offset: value })}
							value={offset || 0}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={metadata.name}
				attributes={{
					amountSelected: attributes.amountSelected
				}}
			/>
		</div>
	);
}
