import React from 'react';
import {arrayOf} from 'prop-types';
import StoreItem from './StoreItem';
import { itemType } from './types';
import Row from 'react-bootstrap/Row';

function StarStore({ items, enabled }){
    const storeItems = items.map((item, i) => <StoreItem item={item} key={i}/>);
    return (
        <Row className="m-5 pt-3" disabled={!enabled}>{storeItems}</Row>
    );
}

StarStore.propTypes = {
    items : arrayOf(itemType).isRequired
};

export default StarStore;