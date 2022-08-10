import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';

import {memo} from 'react';

const PreferenceForm = ({
    selectBreed,
    addNumHandeler,
    subtractNumHandeler,
    numOfImagesFrom,
    resetButton
}) => (
            <Form className='mt-3'>
            <Row>
                <Col xs={12} md={6} lg={8} className="mt-1">
                    {selectBreed}
                </Col>
                <Col xs={6} sm={6} md={3} lg={2} className="mt-1">
                    <InputGroup >
                        {subtractNumHandeler}
                        {numOfImagesFrom}
                        {addNumHandeler}
                    </InputGroup>
                    <Form.Text>
                        No. of images (min: 1)
                    </Form.Text>
                </Col>
                <Col xs={6} sm={6} md={3} lg={2} className="mt-1">
                    {resetButton}
                </Col>
            </Row>
        </Form>
)

export default memo(PreferenceForm);