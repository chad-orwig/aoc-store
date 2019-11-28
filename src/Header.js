import React from 'react';

import LoginPanel from './LoginPanel'
import ControlPanel from './ControlPanel'

import { itemType } from './types';
import { arrayOf, func, object } from 'prop-types';

function Header({ user, items, addAlert }) {
    const loginPanel = !user ? (<LoginPanel />) : (<ControlPanel user={user} items={items} addAlert={addAlert}/>);
    return (
        <div className="fixed-top bg-info text-white p-2">
            <h2 className="d-inline-block d-sm-none">AOC</h2>
            <h2 className="d-none d-sm-inline-block">AOC Star Store</h2>
            { loginPanel }
        </div>
    )
}

Header.propTypes = {
    items : arrayOf(itemType).isRequired,
    addAlert : func.isRequired,
    user : object
}

export default Header;