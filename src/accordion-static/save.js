import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';


export default function save() {
    return <InnerBlocks.Content />
}
