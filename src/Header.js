import React from 'react';
import firebase from './firebaseConfig';
import 'firebase/auth';

import LoginPanel from './LoginPanel'
import ControlPanel from './ControlPanel'

import { itemType } from './types';
import { arrayOf, func } from 'prop-types';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            user : undefined
        };
    }
    setUser = (user) => this.setState({user});
    
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(this.setUser);
    }
    render() {
    const loginPanel = !this.state.user ? (<LoginPanel />) : (<ControlPanel user={this.state.user} items={this.props.items} addAlert={this.props.addAlert}/>);
        return (
            <div className="fixed-top bg-info text-white p-2">
                <h2 className="d-inline-block d-sm-none">AOC</h2>
                <h2 className="d-none d-sm-inline-block">AOC Star Store</h2>
                { loginPanel }
            </div>
        )
    }
}

Header.propTypes = {
    items : arrayOf(itemType).isRequired,
    addAlert : func.isRequired
}

export default Header;