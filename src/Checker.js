import React, {useEffect, useState} from 'react';
import {object, array} from 'prop-types';
import InvalidSelectionCard from './InvalidSelectionCard';
import {Table, Accordion} from 'react-bootstrap';
import { sumByRequiredCost } from './ControlPanel';
import { subscribeToAllBonusStars } from './database';


function isValid(person, bonusStars){
    const {selection, stars} = person;
    const personsClaims = bonusStars?.[person?.selection?.uid]
    const hasBonus = personsClaims?.newbie || personsClaims?.challange;
    const bonus = hasBonus ? 5 : 0;
    return stars + bonus >= sumByRequiredCost(selection.selections);
}

function afterCombined(combined, setInvalid, setValid, bonusStars) {
    setInvalid(combined.filter(c => !isValid(c, bonusStars)));
    setValid(combined.filter(c => isValid(c, bonusStars)));
}

function buildCombined({members}, results, selections, setCombined) {
    const selectionsByGid = selections.reduce((o, curr) => Object.assign(o, {[curr.uid] : curr}), {});
    const combined = results
        .filter(({id}) => members[id])
        .map(o => Object.assign({}, o, {selection : selectionsByGid[members[o.id]]}));
    setCombined(combined);
    
}

function buildStuff(valid, items, setStuff) {
    const stuff = valid.reduce((stuff, {name:person, selection}) => {
        selection.selections.forEach(s => {
            const options = s.options ? s.options.reduce((o, {name, selections}) => Object.assign(o, {[name]: selections.join(', ')}), {}) : {};
            const key = [s.name, ...(Object.values(options))].join(' | ');
            if(stuff[key]) {
                stuff[key].qty += s.qty;
                stuff[key].people.push(`${person}[${s.qty}]`);
            }
            else Object.assign(stuff, {[key] : {options, name : s.name, qty : s.qty, people: [`${person}[${s.qty}]`], url: items[s.name]?.url }});
        });
        return stuff;
    }, {});
    setStuff(stuff);
}

export default function Checker({dbResults, aocResults, selections, items}) {
    const [combined, setCombined] = useState([]);
    const [invalid, setInvalid] = useState([]);
    const [valid, setValid] = useState([]);
    const [stuff, setStuff] = useState([]);
    const [bonusStars, setBonusStars] = useState({});
    useEffect(() => afterCombined(combined, setInvalid, setValid, bonusStars), [combined, bonusStars]);
    useEffect(() => buildCombined(dbResults, aocResults, selections, setCombined), [dbResults, aocResults, selections]);
    useEffect(() => buildStuff(valid, items, setStuff), [valid, items]);
    useEffect(() => subscribeToAllBonusStars(setBonusStars), []);

    const invalidCards = invalid.map((data, index) => <InvalidSelectionCard data={data} key={index} collapseKey={index} />)
    const stuffKeys = Object.keys(stuff);
    stuffKeys.sort();
    const rows = stuffKeys.map(key => stuff[key])
        .map((item, index) => {
            const optionTds = Object.keys(item.options).map((optionName, optionIndex) => {
                return <td key={optionIndex}>{`${optionName} - ${item.options[optionName]}`}</td>;
            });
            return (
                <tr key={index} >
                    <td colSpan={6 - optionTds.length}><a href={item.url}>{item.name}</a></td>
                    {optionTds}
                    <td>{item.qty}</td>
                    <td>{item.people.join(', ')}</td>
                </tr>
            )
        });
    return (
        <div>
            <Accordion>{invalidCards}</Accordion>
            <Table striped bordered hover>
                <thead><tr>
                    <th>Name</th>
                    <th colSpan="5">Options</th>
                    <th>Quantity</th>
                    <th>People</th>
                </tr></thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    )
}

Checker.propTypes = {
    dbResults : object,
    aocResults : array,
    selections : array
}