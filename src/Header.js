import React from 'react';

import LoginPanel from './LoginPanel';
import ControlPanel from './ControlPanel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { itemType } from './types';
import { arrayOf, func, object } from 'prop-types';

function Header({ user, items, addAlert }) {
    const loginPanel = !user ? (<LoginPanel />) : (<ControlPanel user={user} items={items} addAlert={addAlert}/>);
    return (
        <div className="fixed-top bg-info text-white p-2">
            <Row noGutters={true}>
                <Col xs={0} sm={4}>
                    <h2 className="d-none d-sm-inline-block d-md-none">AOC</h2>
                    <h2 className="d-none d-md-inline-block">AOC Star Store</h2>
                </Col>
                <Col xs={12} sm={8}>{ loginPanel }</Col>
            </Row>
        </div>
    )
}

Header.propTypes = {
    items : arrayOf(itemType).isRequired,
    addAlert : func.isRequired,
    user : object
}

export default Header;