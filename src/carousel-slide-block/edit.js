import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, } from '@wordpress/block-editor';
import MyMediaUpload from '../components/MyMediaUpload';
import './editor.scss';

export default function Edit(props) {
	let { attributes, setAttributes } = props;
	let { titleCarousel1 } = attributes;

	return (
		// <div {...useBlockProps()}>
		<div className="swiper-slide_">
			<RichText
				className='slide-1'
				tagName="p"
				value={titleCarousel1}
				allowedFormats={['core/bold', 'core/italic']}
				onChange={(titleCarousel1) => setAttributes({ titleCarousel1 })}
				placeholder={__('Title Slide...')}
			/>
			<MyMediaUpload
				properties={props}
				mediaIDAttrName={"mediaID1"}
				mediaURLAttrName={"mediaURL1"}
				mediaAltAttrName={"mediaAlt1"}
			/>
		</div>
		// </div>
	);
}

