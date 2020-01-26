import React, {useEffect, useState} from 'react';
import {object, array} from 'prop-types';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function countStars({selections}) {
    
    return selections
        .map(({qty, cost}) => qty * cost)
        .reduce((tot, curr) => tot + curr, 0);
}

function isValid({selection, stars}){
    return stars >= countStars(selection);
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
        const stuff =valid.reduce((stuff, {name:person, selection}) => {
            selection.selections.forEach(s => {
                const options = s.options ? s.options.reduce((o, {name, selection}) => Object.assign(o, {[name]: selection}), {}) : {};
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

    const invalidCards = invalid.map((item, index) => (
        <Card className="hide-print" key={index} bg='danger' text='white'>
            <Card.Header><Card.Title>{item.name}</Card.Title></Card.Header>
        </Card>))
    const stuffKeys = Object.keys(stuff);
    stuffKeys.sort();
    const rows = stuffKeys.map(key => stuff[key])
        .map((item, index) => {
            const optionTds = Object.keys(item.options).map((optionName, optionIndex) => {
                return <td key={optionIndex}>{`${optionName} - ${item.options[optionName]}`}</td>;
            });
            return (
                <tr key={index} >
                    <td colSpan={3 - optionTds.length}>{item.name}</td>
                    {optionTds}
                    <td>{item.qty}</td>
                    <td>{item.people.join(', ')}</td>
                </tr>
            )
        });
    return (
        <div>
            {invalidCards}
            <Table striped bordered hover>
                <thead><tr>
                    <th>Name</th>
                    <th colSpan="2">Options</th>
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