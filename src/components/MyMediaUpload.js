import {
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import {
    Button
} from "@wordpress/components";
// import pfeil from "./assets/pfeil_accordion.png";

function MyMediaUpload(props) {
    let { attributes, setAttributes, isSelected } = props.properties
    let { mediaIDAttrName, mediaURLAttrName, mediaAltAttrName } = props

    //------Media Upload------
    const ALLOWED_MEDIA_TYPES = ['image'];

    const onSelectMedia = (media) => {
        setAttributes({
            [mediaIDAttrName]: media.id,
            [mediaURLAttrName]: media.url,
            [mediaAltAttrName]: media.alt,
        });
    }
    const onRemoveMedia = () => {
        setAttributes({
            [mediaIDAttrName]: null,
            [mediaURLAttrName]: null,
            [mediaAltAttrName]: null,
        });
    }
    //------------------------

    return (
        <>
            {
                !attributes[mediaIDAttrName] ?
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectMedia}
                            multiple={false}
                            value={attributes[mediaIDAttrName]}
                            allowedTypes={ALLOWED_MEDIA_TYPES}
                            render={({ open }) => (
                                <>
                                    <button onClick={open}>
                                        Upload Media
                                    </button>
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                    :
                    <div className="image-wrapper">
                        <img src={attributes[mediaURLAttrName]} alt={attributes[mediaAltAttrName]} />
                        {/* <img src={pfeil} alt="" /> */}
                        {isSelected ? (
                            <Button
                                className="remove-image"
                                onClick={onRemoveMedia}
                            >
                                Remove
                            </Button>
                        ) : null}
                    </div>
            }
        </>
    );
}

export default MyMediaUpload;