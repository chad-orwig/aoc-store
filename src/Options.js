import React from 'react'
import OptionSelector from './OptionSelector';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Options({item}) {
    const options = (item.options || []).map((o,i) => <OptionSelector options={o} makeSelection={item.makeSelection} key={i} qty={item.qty} baseDollar={item.dollar} baseStars={item.cost} />)
    return (
        <ButtonToolbar className="pt-2" >
            {options}
        </ButtonToolbar>);
}

export default Options;