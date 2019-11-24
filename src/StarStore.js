import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import StoreItem from './StoreItem';
import Row from 'react-bootstrap/Row';

function StarStore({ items }){
    const storeItems = items.map(item => <StoreItem item={item} />);
    return (
        <Row>{storeItems}</Row>
    );
}

StarStore.propTypes = {
    items : arrayOf(shape({
        name : string,
        url  : string,
        img : string,
        cost : number,
        options: arrayOf(arrayOf(string))
    })).isRequired
};

export default StarStore;