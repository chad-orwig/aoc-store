import React, {useEffect, useState} from 'react';
import {object, array} from 'prop-types';

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

export default function Checker({dbResults, aocResults, selections}) {
    const [combined, setCombined] = useState([]);
    const [invalid, setInvalid] = useState([]);
    const [valid, setValid] = useState([]);
    useEffect(afterCombined(combined, setInvalid, setValid), [combined]);
    useEffect(buildCombined(dbResults, aocResults, selections, setCombined), [dbResults, aocResults, selections]);
    return <p>Placeholder</p>
}

Checker.propTypes = {
    dbResults : object,
    aocResults : array,
    selections : array
}