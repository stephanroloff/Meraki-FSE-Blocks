import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText, } from '@wordpress/block-editor';
import MyMediaUpload from '../components/MyMediaUpload';
import './editor.scss';

export default function Edit(props) {
	let { attributes, setAttributes } = props;
	let { titleAccordion } = attributes;

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Book Title' }],
		['core/paragraph', { placeholder: 'Summary' }],
	];

	return (
		<div {...useBlockProps()}>
			<div className="accordion">
				<MyMediaUpload
					properties={props}
					mediaIDAttrName={"mediaID1"}
					mediaURLAttrName={"mediaURL1"}
					mediaAltAttrName={"mediaAlt1"}
				/>
				<RichText
					className='accordion-arrow'
					tagName="p"
					value={titleAccordion}
					allowedFormats={['core/bold', 'core/italic']}
					onChange={(titleAccordion) => setAttributes({ titleAccordion })}
					placeholder={__('Title Accordion...')}
				/>
			</div>
			<div class="panel">
				<InnerBlocks template={MY_TEMPLATE} />
			</div>
		</div>
	);
}

