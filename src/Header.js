import React from 'react';
import firebase from './firebaseConfig';
import 'firebase/auth';

import Button from 'react-bootstrap/Button';
import LoginPanel from './LoginPanel'

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            user : undefined
        };
    }
    logout = () => firebase.auth().signOut();
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })}
        );
    }
    render() {
        const loginPanel = this.state.user === null ? (<LoginPanel />) : <Button onClick={this.logout} className="ml-4" >Logout</Button>;
        return (
            <div className="fixed-top bg-info text-white p-2">
                <h2 className="d-inline-block">AOC Star Store</h2>
                { loginPanel }
            </div>
        )
    }
}

export default Header;