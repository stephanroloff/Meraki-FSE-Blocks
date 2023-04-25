import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import {
	SelectControl,
	TextControl,
	PanelBody,
	PanelRow,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const { amountSelected, offset, optionSelected } = attributes;

	//Select Category---------------------------------
	let optionsArray = [{ value: -1, label: "All Categories (Automatic)" }];

	const [dataPosts, setDataPosts] = useState(null);

	const data = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'category');
	});

	useEffect(() => {
		if (data === null) return;

		//If all posts are uncategorized show as default "Uncategorized" instead of "All Categories"
		if (data[data.length - 1].count === (data.length - 1)) {
			setAttributes({ optionSelected: 1 })
		}

		data.map(value => {
			optionsArray.push({ value: value.id, label: value.name })
		})
		setDataPosts(optionsArray);
	}, [data])
	//------------------------------------------------

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
					<PanelRow>
						{
							dataPosts === null ? '' :
								<SelectControl
									label='Select Category: '
									value={optionSelected}
									onChange={(option) => { setAttributes({ optionSelected: option }) }}
									options={dataPosts}
								/>}
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={metadata.name}
				attributes={{
					amountSelected: attributes.amountSelected,
					offset: attributes.offset,
					optionSelected: attributes.optionSelected
				}}
			/>
		</div>
	);
}
