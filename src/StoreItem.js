import React from 'react';
import Card from 'react-bootstrap/Card';
import { itemType } from './types';
import QtySelector from './QtySelector';
import Options from './Options';
import Col from 'react-bootstrap/Col';

function buildImgWithLink({url, img, options}) {
    const imageToUse = options?.reduce((optionImg, option) => {
        const selectedIndex = option.options.findIndex((name) => name === option?.selections?.[0])
        
        return optionImg
            ?? option?.imgs?.[selectedIndex]
    }, null)
    ?? img;
    
    return (
        <div className="img-wrapper">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Card.Img className="p-2" varient="top" src={imageToUse} />
            </a>
        </div>
    );
}

function buildImgWithoutLink({img}) {
    return (
        <div className="img-wrapper">
            <Card.Img className="p-2" varient="top" src={img} />
        </div>
    );
}


function StoreItem( {item} ) {
    const cost = item.cost * (item.qty || 1);
    const upcharge = item.calculateUpcharge();
    const extraString = upcharge ? `+${upcharge}` : (!item.qty && item.maxCost > item.cost) ? `-${item.maxCost}` : '';
    return (
        <Col className="my-2">
            <Card style={{minWidth : '300px', maxWidth: '528px', height: "100%"}} bg={item.qty ? 'info' : 'light'}>
                {item.url ? buildImgWithLink(item) : buildImgWithoutLink(item)}
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{`${cost}${extraString} Stars`}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <QtySelector item={item} />
                    <Options item={item} />
                </Card.Footer>
            </Card>
        </Col>
    );
}

StoreItem.prototype = {
    item : itemType.isRequired
};

export default StoreItem;