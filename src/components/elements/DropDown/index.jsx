import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <div
    ref={ref}
    className="btn w-100 btn-outline-primary text-capitalize"
    style={{textAlign: 'left'}}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Row className='w-100'>
            <Col>
            <Form.Control
            autoFocus
            className="mx-3 my-2 w-100"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
            </Col>

        </Row>
        
        <ul className="list-unstyled" >
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

const DropDown = ({
    buttonText,
    menuItems,
    selectHandeler,
    loading,
}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {buttonText || 'Select'}
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu} className="w-100 overflow-auto" style={{maxHeight: '250px'}}>
                {menuItems?.map((item, index) => (
                  <Dropdown.Item key={`item-list-${item}-${index}`} className="text-capitalize" value={item} onClick={() => selectHandeler(item)}>{item}</Dropdown.Item>
                ))}
            
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown;
