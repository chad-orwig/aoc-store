import React from 'react';
import firebase from './firebaseConfig';
import 'firebase/firestore';
import 'firebase/auth';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {itemType} from './types';
import { arrayOf, shape, string, func } from 'prop-types';
import filter from 'lodash/fp/filter';

const db = firebase.firestore();

const logout = () => firebase.auth().signOut();

const findSelectedItems = filter(i => i.qty > 0);

function submitSelections(items, {uid, email, displayName}, addAlert) {
    const selections = findSelectedItems(items)
        .map(({name, qty, options}) => {
            const res = {name, qty, options}
            if(!options) {
                delete res.options;
            }
            return res;
        });
    db.collection('selections').doc(uid).set({
        selections,
        email,
        displayName
    }).then(() => addAlert({ heading: 'Save Success', message: `Saved ${selections.length} selections`, variant : 'primary'}))
}

function ControlPanel({items, user, addAlert}) {
    return (
        <div className="float-right">
            <span className="d-inline-block lead align-middle mr-2">{user.displayName}</span>
            <ButtonGroup>
                <Button onClick={() => submitSelections(items, user, addAlert)}>Submit</Button>
                <Button onClick={logout} variant="warning">Logout</Button>
            </ButtonGroup>
        </div>
    );
}

ControlPanel.propTypes = {
    items : arrayOf(itemType).isRequired,
    user : shape({
        uid : string.isRequired,
        email : string.isRequired
    }).isRequired,
    addAlert : func.isRequired
}

export default ControlPanel;