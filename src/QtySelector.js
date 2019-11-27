import React from 'react';
import Button from 'react-bootstrap/Button';
function QtySelector({item}) {
    const incQty = () => item.setQty(item.qty + 1);
    const clearQty = () => item.setQty(0);
    return (
        <div>
            <span>Qty: {item.qty}</span>
            <Button onClick={clearQty} size='sm' disabled={item.qty === 0} variant='danger' className="float-right"><span className="oi oi-x"></span></Button>
            <Button onClick={incQty} size='sm' variant='success' className="float-right" ><span className="oi oi-plus"></span></Button>
        </div>
    );
}

export default QtySelector;