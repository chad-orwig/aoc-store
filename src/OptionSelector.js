import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { func } from 'prop-types';
import { optionType } from './types';


function OptionSelector({ options, makeSelection }) {
    const title = `${options.name} ${options.selection ? ` - ${options.selection}` : ''}`
    const items = options.options.map((o, i) => <Dropdown.Item key={i} onClick={() => makeSelection(options.name, o)}>{o}</Dropdown.Item>);
    return (
        <DropdownButton title={title} className="mx-1">
            {items}
        </DropdownButton>
    );
}

OptionSelector.propTypes = {
    options : optionType.isRequired,
    makeSelection : func.isRequired
};

export default OptionSelector;