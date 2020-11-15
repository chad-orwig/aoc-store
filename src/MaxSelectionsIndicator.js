import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

function MaxSelectionsIndicator({maxSelections}) {
    if(maxSelections <= 1) {
        return '';
    }

    return (
        <React.Fragment>
            <Dropdown.ItemText>Select up to {maxSelections} Options</Dropdown.ItemText>
            <Dropdown.Divider />
        </React.Fragment>
    )
}

export default MaxSelectionsIndicator;