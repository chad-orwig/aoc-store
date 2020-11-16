import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { func, string } from 'prop-types';

function CustomOption({makeSelection, optionName, selection}) {
    const onChange = (e) => {
        makeSelection(optionName, e.target.value);
    };
    return <FormControl
        autoFocus
        className='w-auto m-2'
        onChange={onChange}
        value={selection} 
        placeholder={`Enter Custom ${optionName}`} />
}

CustomOption.propTypes = {
    makeSelection: func.isRequired,
    optionName: string.isRequired,
    selection: string.isRequired
}

export default CustomOption;