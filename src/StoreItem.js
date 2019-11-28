import React from 'react';
import Card from 'react-bootstrap/Card';
import { itemType } from './types';
import QtySelector from './QtySelector';
import Options from './Options';

function buildImgWithLink({url, img}) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer"><Card.Img className="p-2" varient="top" src={img} /></a>
    );
}

function buildImgWithoutLink({img}) {
    return (
        <Card.Img className="p-2" varient="top" src={img} />
    );
}

function StoreItem( {item} ) {
    return (
        <Card style={{minWidth : '300px', maxWidth: '528px'}} bg={item.qty ? 'info' : 'light'} text={item.qty ? 'white' : undefined} className="my-2">
            {item.url ? buildImgWithLink(item) : buildImgWithoutLink(item)}
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{`${item.cost} Stars`}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <QtySelector item={item} />
                <Options item={item} />
            </Card.Footer>
        </Card>
    );
}

StoreItem.prototype = {
    item : itemType.isRequired
};

export default StoreItem;