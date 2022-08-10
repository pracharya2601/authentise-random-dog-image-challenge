import { useRef, memo, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ImagePreview = ({url, loading}) => {
    let [imageCss, setImageCss] = useState({
        objectFit: 'cover'
    });

    let imageRef = useRef();
    const spanHelper = () => {
        const height = imageRef.current.clientHeight;
        if(height > 320) {
            setImageCss({
                maxHeight:'20rem',
                objectFit:'contain',
            })
        }
    }
    return(
        <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mt-2">
            <Card className="w-100">
            <div className='bg-light w-100 text-center p-2' >
                {loading && !url ? <div style={{minHeight: '20rem', height: '100%', maxHeight: '20rem', margin: 'auto'}}>Loading....</div>: (
                    <img onLoad={spanHelper} src={url} ref={imageRef} alt={url} style={{width: '100%', minHeight: '20rem', height: '100%', borderRadius: '4px', ...imageCss}} />
                )}
            </div>
            </Card>
        </Col>
    )
}

export default memo(ImagePreview);