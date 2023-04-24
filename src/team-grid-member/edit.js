import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import MyMediaUpload from '../components/MyMediaUpload';
import './editor.scss';

export default function Edit(props) {
	let { attributes, setAttributes } = props;
	let { titleTeamMember1 } = attributes;

	return (
		<div {...useBlockProps()}>
			<MyMediaUpload
				properties={props}
				mediaIDAttrName={"mediaID1"}
				mediaURLAttrName={"mediaURL1"}
				mediaAltAttrName={"mediaAlt1"}
			/>
			<RichText
				className='team-grid-member-text'
				tagName="p"
				value={titleTeamMember1}
				allowedFormats={['core/bold', 'core/italic']}
				onChange={(titleTeamMember1) => setAttributes({ titleTeamMember1 })}
				placeholder={__('Title Team Member...')}
			/>
		</div>
	);
}
