import React from 'react';
import {arrayOf} from 'prop-types';
import StoreItem from './StoreItem';
import CardGroup from 'react-bootstrap/CardGroup';
import { itemType } from './types';

function StarStore({ items, enabled }){
    const storeItems = items.map((item, i) => <StoreItem item={item} key={i}/>);
    return (
        <CardGroup className="m-5 pt-3" disabled={!enabled}>{storeItems}</CardGroup>
    );
}

StarStore.propTypes = {
    items : arrayOf(itemType).isRequired
};

export default StarStore;