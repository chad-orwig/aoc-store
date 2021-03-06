import React, {useEffect, useState} from 'react';
import {object, array} from 'prop-types';
import InvalidSelectionCard from './InvalidSelectionCard';
import {Table, Accordion} from 'react-bootstrap';
import { sumByRequiredCost } from './ControlPanel';


function isValid({selection, stars}){
    return stars >= sumByRequiredCost(selection.selections);
}

function afterCombined(combined, setInvalid, setValid) {
    return () => {
        setInvalid(combined.filter(c => !isValid(c)));
        setValid(combined.filter(c => isValid(c)));
    };
}

function buildCombined({members}, results, selections, setCombined) {
    return () => {
        const selectionsByGid = selections.reduce((o, curr) => Object.assign(o, {[curr.uid] : curr}), {});
        const combined = results
            .filter(({id}) => members[id])
            .map(o => Object.assign({}, o, {selection : selectionsByGid[members[o.id]]}));
        setCombined(combined);
    }
}

function buildStuff(valid, setStuff) {
    return () => {
        const stuff = valid.reduce((stuff, {name:person, selection}) => {
            selection.selections.forEach(s => {
                const options = s.options ? s.options.reduce((o, {name, selections}) => Object.assign(o, {[name]: selections.join(', ')}), {}) : {};
                const key = [s.name, ...(Object.values(options))].join(' | ');
                if(stuff[key]) {
                    stuff[key].qty += s.qty;
                    stuff[key].people.push(`${person}[${s.qty}]`);
                }
                else Object.assign(stuff, {[key] : {options, name : s.name, qty : s.qty, people: [`${person}[${s.qty}]`]}});
            });
            return stuff;
        }, {});
        setStuff(stuff);
    }
}

export default function Checker({dbResults, aocResults, selections}) {
    const [combined, setCombined] = useState([]);
    const [invalid, setInvalid] = useState([]);
    const [valid, setValid] = useState([]);
    const [stuff, setStuff] = useState([]);
    useEffect(afterCombined(combined, setInvalid, setValid), [combined]);
    useEffect(buildCombined(dbResults, aocResults, selections, setCombined), [dbResults, aocResults, selections]);
    useEffect(buildStuff(valid, setStuff), [valid]);

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
                    <td colSpan={4 - optionTds.length}>{item.name}</td>
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
                    <th colSpan="3">Options</th>
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