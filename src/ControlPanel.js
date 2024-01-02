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
import { Modal, ToggleButton } from 'react-bootstrap';
import { useBonusStars } from './BonusStarContext';

const logout = () => getAuth().signOut();

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
    const [modalShown, setModalShown] = useState(false);
    const { newbie, challange, saveBonusStars} = useBonusStars();
    const numStars = sumByRequiredCost(findSelectedItems(items).map(processItem));
    const starString = numStars ? ` ${numStars}⭐` : '';
    const clearButton = numStars ? (<Button onClick={clearAll(items)} variant="danger">Clear</Button>) : ''
    const bonusButton = <Button variant='warning' onClick={() => setModalShown(true)}>Claim Bonus</Button>;
    return (
        <div className="float-end">
            
            <span className="d-inline-block lead align-middle me-2">{user.displayName}{starString}</span>
            <ButtonGroup>
                <Button onClick={() => submitSelections(items, user, addAlert, setSaving)} disabled={saving}>Submit</Button>
                {clearButton}
                {bonusButton}
                <Button onClick={logout} variant="success">Logout</Button>
            </ButtonGroup>
            <Modal show={modalShown} onHide={() => setModalShown(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Bonus Stars</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        There are two possible ways to claim 5 bonus stars.  First, if you have no
                        coding experience and completed 5 stars, you can claim the Newbie Bonus.
                        Or, if you challenged yourself to learn a new technology by doing all your
                        problems utilizing that tech and complete at least 20 stars, you can claim
                        the challenge bonus.
                    </p>
                    <p>
                        Use the buttons bellow to claim any bonus you&apos;ve earned
                    </p>
                    <ButtonGroup>
                        <ToggleButton variant='outline-primary' value="no-bonus" type="radio" checked={ !newbie && !challange} onClick={() => saveBonusStars({ newbie: false, challange: false})}>No Bonus</ToggleButton>
                        <ToggleButton variant='outline-primary' value="newbie" type="radio" checked={newbie} onClick={() => saveBonusStars({ newbie: true, challange: false})}>Newbie</ToggleButton>
                        <ToggleButton variant='outline-primary' value="challenge" type="radio" checked={challange} onClick={() => saveBonusStars({ newbie: false, challange: true})}>Challenge</ToggleButton>
                    </ButtonGroup>
                </Modal.Body>
            </Modal>
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