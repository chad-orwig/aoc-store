import React from 'react';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


function OptionSelector({ options }) {
    const title = `${options.name} ${options.selection ? ` - ${options.selection}` : ''}`
    const items = options.options.map((o, i) => <Dropdown.Item key={i}>{o}</Dropdown.Item>);
    return (
        <DropdownButton title={title} className="mx-1">
            {items}
        </DropdownButton>
    );
}

export default OptionSelector;