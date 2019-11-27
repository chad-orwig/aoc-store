import React from 'react';
import {arrayOf} from 'prop-types';
import StoreItem from './StoreItem';
import CardDeck from 'react-bootstrap/CardDeck';
import { itemType } from './types';
import './starStore.scss';

function StarStore({ items }){
    const storeItems = items.map((item, i) => <StoreItem item={item} key={i}/>);
    return (
        <CardDeck className="pt-5">{storeItems}</CardDeck>
    );
}

StarStore.propTypes = {
    items : arrayOf(itemType).isRequired
};

export default StarStore;