import React, { useState } from 'react';
import {getAuth} from 'firebase/auth';
import {setSelectionsForUser, year} from './database';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {itemType} from './types';
import { arrayOf, shape, string, func } from 'prop-types';
import filter from 'lodash/fp/filter';
import sumBy from 'lodash/fp/sumBy';
import find from 'lodash/fp/find';

const logout = () => getAuth().auth().signOut();

const findSelectedItems = filter(i => i.qty > 0);
export const sumByRequiredCost = sumBy(({qty, cost, upcharge}) => (qty * cost) + upcharge);
const optionMissingSelection = find(({selections}) => !selections);
const tooManySelections = (qty) => find(({selections, count}) => selections && selections.length > (qty * (count || 1)));
const selectionsWithoutOptionSelection = filter(({options}) => {
    return options && !!optionMissingSelection(options);
});
const selectionsWithTooManyOptionsSelected = filter(({options, qty}) => {
    return options && !!tooManySelections(qty)(options);
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

    selectionsWithTooManyOptionsSelected(selections)
        .map(({name}) => ({
            heading : 'Too Many Options',
            message : `Please check the option selections for ${name}`,
            variant : 'danger'
        }))
        .forEach(error => errors.push(error));


    

    return errors;

}

const processItem = (item) => {
    const {name, qty, options, cost} = item;
    const res = {
        name,
        qty,
        options,
        cost,
        upcharge : item.calculateUpcharge()
    }
    if(!options) {
        delete res.options;
    }
    return res;
}

function submitSelections(items, {uid, email, displayName}, addAlert, setSaving) {
    const selections = findSelectedItems(items)
        .map(processItem);
    const errors = selectionErrors(selections);
    if(errors.length) {
        errors.forEach(addAlert);
        return;   
    }
    setSaving(true);
    setSelectionsForUser(uid, {
        [year]: selections,
        email,
        displayName
    }).then(() => addAlert({ heading: 'Save Success', message: `Saved ${selections.length} selections`, variant : 'primary'}))
    .finally(() => setSaving(false));
}

const clearAll = (items) => () => {
    items.filter(({qty}) => qty)
        .forEach(i => i.setQty(0));
}

function ControlPanel({items, user, addAlert}) {
    const [saving, setSaving] = useState(false);
    const numStars = sumByRequiredCost(findSelectedItems(items).map(processItem));
    const starString = numStars ? ` ${numStars}⭐` : '';
    const clearButton = numStars ? (<Button onClick={clearAll(items)} variant="danger">Clear</Button>) : ''
    return (
        <div className="float-end">
            
            <span className="d-inline-block lead align-middle mr-2">{user.displayName}{starString}</span>
            <ButtonGroup>
                <Button onClick={() => submitSelections(items, user, addAlert, setSaving)} disabled={saving}>Submit</Button>
                {clearButton}
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
}

export default ControlPanel;