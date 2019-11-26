import React from 'react'
import OptionSelector from './OptionSelector';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Options({item}) {
    const options = (item.options || []).map((o,i) => <OptionSelector options={o} key={i} />)
    return <ButtonToolbar>{options}</ButtonToolbar>;
}

export default Options;