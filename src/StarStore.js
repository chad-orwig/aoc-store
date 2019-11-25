import React from 'react';
import {arrayOf} from 'prop-types';
import StoreItem from './StoreItem';
import Row from 'react-bootstrap/Row';
import { itemType } from './types';

function StarStore({ items }){
    const storeItems = items.map((item, i) => <StoreItem item={item} key={i}/>);
    return (
        <Row>{storeItems}</Row>
    );
}

StarStore.propTypes = {
    items : arrayOf(itemType).isRequired
};

export default StarStore;