import React from 'react';
import {arrayOf, shape, string} from 'prop-types';

function StarStore(){
    return (
        <p>empty</p>
    );
}

StarStore.propTypes = {
    items : arrayOf(shape({
        name : string,
        url  : string
    })).isRequired
};

export default StarStore;