import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function QtySelector({item}) {
    const incQty = () => item.setQty(item.qty + 1);
    const clearQty = () => item.setQty(0);
    return (
        <Row>
            <Col xs={4}>Qty:</Col><Col xs={2}> {item.qty}</Col>
            <Col xs={6}>
            <Button onClick={incQty} size='sm' variant='success' ><span className="oi oi-plus"></span></Button>
            <Button onClick={clearQty} size='sm' disabled={item.qty === 0} variant='danger' ><span className="oi oi-x"></span></Button>
            </Col>
        </Row>
    );
}

export default QtySelector;