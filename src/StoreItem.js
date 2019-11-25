import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { itemType } from './types';
import Row from 'react-bootstrap/Row';
function StoreItem( {item} ) {
    const incQty = () => item.setQty(item.qty + 1);
    const clearQty = () => item.setQty(0);
    return (
        <Card style={{minWidth : '200px'}}bg={item.qty ? 'success' : 'light'} text={item.qty ? 'white' : undefined} className="my-2">
            <a href={item.url} target="_blank"><Card.Img varient="top" src={item.img} /></a>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{`${item.cost} Stars`}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={5}>Qty: {item.qty}</Col>
                    <Col xs={7}>
                    <Button onClick={incQty} size='sm' variant='success' ><span className="oi oi-plus"></span></Button>
                    <Button onClick={clearQty} size='sm' disabled={item.qty === 0} variant='danger' ><span className="oi oi-x"></span></Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

StoreItem.prototype = {
    item : itemType.isRequired
};

export default StoreItem;