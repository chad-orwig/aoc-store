import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { func } from 'prop-types';
import { optionType } from './types';
import uniq from 'lodash/fp/uniq';


function OptionSelector({ options, makeSelection }) {
    const uniqSelections = uniq(options.selections);
    const subtitle = options.selections ? uniqSelections.length === 1 ? `- ${options.selections[0]}` : '- Multiple' : '';
    const title = `${options.name} ${subtitle}`
    const items = options.options.map((o, i) => {
        const numSelections = options.selections? options.selections.filter(s => s === o).length : 0;
        const subtitle = numSelections > 1 ? ` - x${numSelections}` : '';
        return <Dropdown.Item key={i} active={!!numSelections} onClick={() => makeSelection(options.name, o)}>{o + subtitle}</Dropdown.Item>
    });
    return (
        <DropdownButton title={title} className="my-1 mx-1">
            {items}
        </DropdownButton>
    );
}

OptionSelector.propTypes = {
    options : optionType.isRequired,
    makeSelection : func.isRequired
};

export default OptionSelector;