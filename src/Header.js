import React from 'react';

import LoginPanel from './LoginPanel';
import ControlPanel from './ControlPanel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { itemType } from './types';
import { arrayOf, func, object, string } from 'prop-types';
import Search from './Search.js';

function Header({ user, items, addAlert, search, setSearch }) {
    const loginPanel = !user ? (<LoginPanel addAlert={addAlert} />) : (<ControlPanel user={user} items={items} addAlert={addAlert}/>);
    return (
        <div className="fixed-top bg-info text-dark p-2 hide-print">
                <Row className="g-0">
                    <Col xs={0} md={2} lg={3}>
                        <h2 className="d-none d-md-inline-block d-lg-none">AOC</h2>
                        <h2 className="d-none d-lg-inline-block">AOC Star Store</h2>
                    </Col>
                    <Col>
                        <Search search={search} setSearch={setSearch}></Search>
                    </Col>
                    <Col xs={9} sm={8} md={6} lg={5} xl={4}>{ loginPanel }</Col>
                </Row>
        </div>
    )
}

Header.propTypes = {
    items : arrayOf(itemType).isRequired,
    addAlert : func.isRequired,
    user : object,
    search : string,
    setSearch : func.isRequired,
}

export default Header;