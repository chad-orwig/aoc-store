import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function StoreItem( {item} ) {
    return (
        <Col xs={6} md={4} lg={3}>
            <Card.Img varient="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
            </Card.Body>
        </Col>
    );
}

StoreItem.prototype = {
    item : shape({
        name : string,
        url  : string,
        img : string,
        cost : number,
        options: arrayOf(arrayOf(string))
    }).isRequired
}

export default StoreItem;