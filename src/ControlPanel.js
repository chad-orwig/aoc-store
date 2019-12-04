import React, { useState } from 'react';
import firebase from './firebaseConfig';
import 'firebase/firestore';
import 'firebase/auth';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {itemType} from './types';
import { arrayOf, shape, string, func } from 'prop-types';
import filter from 'lodash/fp/filter';
import sumBy from 'lodash/fp/sumBy';
import find from 'lodash/fp/find';

const db = firebase.firestore();

const logout = () => firebase.auth().signOut();

const findSelectedItems = filter(i => i.qty > 0);
const sumByRequiredCost = sumBy(({qty, cost}) => (qty * cost));
const optionMissingSelection = find(({selection}) => !selection)
const selectionsWithoutOptionSelection = filter(({options}) => {
    return options && !!optionMissingSelection(options);
});

function overFiftyStarsRequired(selections) {
    return sumByRequiredCost(selections) > 50;
}

function selectionErrors(selections) {
    const errors = [];

    if(!selections || !selections.length) {
        errors.push({
            heading : 'No Selections Made',
            message : 'Please make at least one selection',
            variant : 'danger'
        })
    }

    if(overFiftyStarsRequired(selections)) {
        errors.push({
            heading : 'Too Many Stars Required',
            message : 'This requires more than 50 stars! Clear some selections',
            variant : 'danger'
        });
    }

    selectionsWithoutOptionSelection(selections)
        .map(({name}) => ({
            heading : 'Missing Option',
            message : `Please fill out all the options for ${name}`,
            variant : 'danger'
        }))
        .forEach(error => errors.push(error));

    

    return errors;

}

function submitSelections(items, {uid, email, displayName}, addAlert, setSaving) {
    const selections = findSelectedItems(items)
        .map(({name, qty, options, cost}) => {
            const res = {name, qty, options, cost}
            if(!options) {
                delete res.options;
            }
            return res;
        });
    const errors = selectionErrors(selections);
    if(errors.length) {
        errors.forEach(addAlert);
        return;   
    }
    setSaving(true);
    db.collection('selections').doc(uid).set({
        selections,
        email,
        displayName
    }).then(() => addAlert({ heading: 'Save Success', message: `Saved ${selections.length} selections`, variant : 'primary'}))
    .finally(() => setSaving(false));
}

function ControlPanel({items, user, addAlert}) {
    const [saving, setSaving] = useState(false);
    return (
        <div className="float-right">
            
            <span className="d-inline-block lead align-middle mr-2">{user.displayName}</span>
            <ButtonGroup>
                <Button onClick={() => submitSelections(items, user, addAlert, setSaving)} disabled={saving}>Submit</Button>
                <Button onClick={logout} variant="warning">Logout</Button>
            </ButtonGroup>
        </div>
    );
     
}

ControlPanel.propTypes = {
    items : arrayOf(itemType).isRequired,
    user : shape({
        uid : string.isRequired,
        email : string,
        displayName : string
    }).isRequired,
    addAlert : func.isRequired,
    search : string,
    setSearch : func.isRequired
}

export default ControlPanel;