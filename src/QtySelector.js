import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function QtySelector({item}) {
    const incQty = () => item.setQty(item.qty + 1);
    const clearQty = () => item.setQty(0);
    return (
        <div>
            <span>Qty: {item.qty}</span>
            <ButtonGroup className="float-end">
                <Button onClick={incQty} size='sm' variant='secondary' ><span className="oi oi-plus"></span></Button>
                <Button onClick={clearQty} size='sm' disabled={item.qty === 0} variant='danger' className="float-end"><span className="oi oi-x"></span></Button>
            </ButtonGroup>
        </div>
    );
}

export default QtySelector;