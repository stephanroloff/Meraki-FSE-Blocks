import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('city-concepts/carousel-block', {
    title: "Carousel Block",
    icon: "media-document",
    category: "city-concepts",
    supports: {
        align: true,
        alignWide: true,
    },

    edit: () => {
        const blockProps = useBlockProps({ className: 'swiper_' });

        const MY_TEMPLATE = [
            ['core/group', { className: 'slide_' },
                [
                    ['core/group', { className: 'slide_intern' },
                        [
                            ['core/image', { alt: 'logo 1' }],
                            ['core/spacer', { placeholder: 'Add text...', height: '20px' }],
                            ['core/paragraph', { placeholder: 'Add text...', className: 'link' }],
                        ]
                    ],
                ]
            ],
            ['core/group', { className: 'slide_' },
                [
                    ['core/group', { className: 'slide_intern' },
                        [
                            ['core/image', { alt: 'logo 2' }],
                            ['core/spacer', { placeholder: 'Add text...', height: '20px' }],
                            ['core/paragraph', { placeholder: 'Add text...', className: 'link' }],
                        ]
                    ],
                ]
            ],
            ['core/group', { className: 'slide_' },
                [
                    ['core/group', { className: 'slide_intern' },
                        [
                            ['core/image', { alt: 'logo 3' }],
                            ['core/spacer', { placeholder: 'Add text...', height: '20px' }],
                            ['core/paragraph', { placeholder: 'Add text...', className: 'link' }],
                        ]
                    ],
                ]
            ],
        ];

        const ALLOWED_BLOCKS = ['core/group'];

        return (
            <div {...blockProps}>
                <div className="swiper-wrapper_">
                    <InnerBlocks
                        template={MY_TEMPLATE}
                        // templateLock="insert"
                        allowedBlocks={ALLOWED_BLOCKS}
                    />
                </div>
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save({ className: 'swiper_' });

        return (
            <div {...blockProps}>
                <div className="swiper-wrapper_">
                    <InnerBlocks.Content />
                </div>

                {/* If we need pagination */}
                <div class="swiper-pagination_"></div>

                {/* If we need navigation buttons */}
                <div class="swiper-button-prev_"></div>
                <div class="swiper-button-next_"></div>
            </div>
        );
    },
});