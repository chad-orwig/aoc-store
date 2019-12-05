import React from 'react';
import {arrayOf} from 'prop-types';
import StoreItem from './StoreItem';
import CardDeck from 'react-bootstrap/CardDeck';
import { itemType } from './types';

function StarStore({ items, enabled }){
    const storeItems = items.map((item, i) => <StoreItem item={item} key={i}/>);
    return (
        <CardDeck className="m-5 pt-3" disabled={!enabled}>{storeItems}</CardDeck>
    );
}

StarStore.propTypes = {
    items : arrayOf(itemType).isRequired
};

export default StarStore;