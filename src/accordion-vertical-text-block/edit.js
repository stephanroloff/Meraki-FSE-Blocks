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
			['core/group', { className: 'slide-1 slide slide-open slide-active' }, [
				['core/group', { className: 'content' },
					[
						['core/group', { className: 'number-and-vertical-text', templateLock: false }, [
							['core/paragraph', { className: 'number', placeholder: 'Add number...' }],
							['core/paragraph', { className: 'vertical-text', placeholder: 'Add vertical text...' }]

						]],
						['core/group', { className: 'inner-content', templateLock: false }]
					]
				]
			]
			],
			['core/group', { className: 'slide-2 slide' }, [
				['core/group', { className: 'content' },
					[
						['core/group', { className: 'number-and-vertical-text', templateLock: false }, [
							['core/paragraph', { className: 'number', placeholder: 'Add number...' }],
							['core/paragraph', { className: 'vertical-text', placeholder: 'Add vertical text...' }]

						]],
						['core/group', { className: 'inner-content', templateLock: false }]
					]
				]
			]
			],
			['core/group', { className: 'slide-3 slide slide-extra' }, [
				['core/group', { className: 'content' },
					[
						['core/group', { className: 'number-and-vertical-text', templateLock: false }, [
							['core/paragraph', { className: 'number', placeholder: 'Add number...' }],
							['core/paragraph', { className: 'vertical-text', placeholder: 'Add vertical text...' }]

						]],
						['core/group', { className: 'inner-content', templateLock: false }]
					]
				]
			]
			],
			// To add a new slide uncomment these lines & .slide-4 in scss file:
			// ['core/group', { className: 'slide-4 slide slide-extra' }, [
			//     ['core/group', { className: 'content' },
			//         [
			//             ['core/group', { className: 'number-and-vertical-text', templateLock: false }, [
			//                 ['core/paragraph', { className: 'number', placeholder: 'Add number...' }],
			//                 ['core/paragraph', { className: 'vertical-text', placeholder: 'Add vertical text...' }]

			//             ]],
			//             ['core/group', { className: 'inner-content', templateLock: false }]
			//         ]
			//     ]
			// ]
			// ],
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
