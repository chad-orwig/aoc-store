import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { func, number } from 'prop-types';
import { optionType } from './types';
import MaxSelectionsIndicator from './MaxSelectionsIndicator';
import CustomOption from './CustomOption';
import { dollarsToStars } from './storeItems';
import uniq from 'lodash/fp/uniq';
import access from 'safe-access';

const buildDropdownItem = (options, makeSelection, baseDollar, baseStars) => (o,i) => {
    const numSelections = options.selections? options.selections.filter(s => s === o).length : 0;
    const selectionString = numSelections > 1 ? ` - x${numSelections}` : '';
    const upchargeString = options.upcharge && options.upcharge[i] ? ` +${dollarsToStars(options.upcharge[i] + baseDollar) - baseStars}⭐` : '';
    return (
        <Dropdown.Item 
            key={i} active={!!numSelections} 
            onClick={() => makeSelection(options.name, o)}>
                {o + upchargeString + selectionString}
        </Dropdown.Item>
    );
}

function OptionSelector({ options, makeSelection, qty, baseDollar, baseStars }) {
    const uniqSelections = uniq(options.selections);
    const subtitle = options.selections ? uniqSelections.length === 1 ? !options.options.length ? '- Custom' : `- ${options.selections[0]}` : '- Multiple' : '';
    const title = `${options.name} ${subtitle}`
    const items = options.options.length ? options.options.map(buildDropdownItem(options, makeSelection, baseDollar, baseStars)) : <CustomOption makeSelection={makeSelection} optionName={options.name} selection={access(options, 'selections[0]') || '' }/>
    const maxSelections = (qty || 1) * (options.count || 1);
    return (
        <DropdownButton title={title} className="my-1 mx-1">
            <MaxSelectionsIndicator maxSelections={maxSelections} />
            {items}
        </DropdownButton>
    );
}

OptionSelector.propTypes = {
    options : optionType.isRequired,
    makeSelection : func.isRequired,
    qty : number.isRequired,
    baseDollar: number.isRequired,
    baseStars: number.isRequired,

};

export default OptionSelector;