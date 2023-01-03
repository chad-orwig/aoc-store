import React, { useState, useEffect, useMemo } from 'react';
import { object, array, func } from 'prop-types';
import classNames from 'classnames';
import Fuse from 'fuse.js';
import {setResults, year} from './database';
import Button from 'react-bootstrap/Button';


function updateDbResults(dbResults, setDbResults, aocUser, setCurrentMatch) {
    return (googleId) => () => {
        const newMembers = Object.assign({}, dbResults.members, {
            [aocUser.id] : googleId
        });
        setDbResults(Object.assign({}, dbResults, { members : newMembers}));
        setCurrentMatch(false);
    };
}

function Matcher({dbResults, aocResults, selections, setDbResults}) {
    const [currentMatch, setCurrentMatch] = useState(false);
    const [search, setSearch] = useState();
    const [aocUsers, setAocUsers] = useState([]);
    const [searchResults, setSearchResults] = useState();

    const mappedFirebaseUids = useMemo(() => new Set(Object.values(dbResults.members)), [dbResults]);

    useEffect(() => {
        setSearchResults(aocResults.map(result => {
            const fuse =  new Fuse(
                selections
                    .map((o, index) => Object.assign({}, o, {index}))
                    .filter(o => o[year]),
                { keys : ['displayName', 'email'], threshold : 1, includeScore: true })
            return fuse.search(result.name);
        
        }));
    }, [aocResults, selections])
    useEffect(() => {
        const matchFunction = (index) => {
            setCurrentMatch(index);
            setSearch(searchResults[index].map(({item}) => item));
            window.scrollTo(0, 0);
        }
        setAocUsers(aocResults
        .map((user, index) => Object.assign({index}, user))
        .filter(({id}) => !dbResults.members[id])
        .sort((a,b) => {
            const aScore = searchResults?.[a.index]?.[0]?.score || 1
            const bScore = searchResults?.[b.index]?.[0]?.score || 1

            return aScore - bScore
        })
        .map(({name, id, stars, index}) => {
            return (
                    <li key={index} className={classNames({aocUser: true, selected: index === currentMatch})} onClick={() => matchFunction(index)}>
                        name: {name} <br/>
                        stars : {stars} <br/>
                        google : {dbResults.members[id]}
                    </li>
            );
        }));
    }, [aocResults, dbResults, currentMatch, searchResults]);

   const selectionClick = currentMatch !== false ? updateDbResults(dbResults, setDbResults, aocResults[currentMatch], setCurrentMatch) : undefined;

    const selectionUsers = (search || selections)
        .filter(o => o[year])
        .map((user) => {
            const {displayName, email, uid, index} = user;
            const myOnClick = selectionClick && selectionClick(uid);
            const classList = ["aocUser"];
            if (!mappedFirebaseUids.has(uid)) classList.push("danger");
            return (
                    <li key={index} className={classList.join(' ')} onClick={myOnClick}>
                        displayName: {displayName} <br/>
                        email : {email}
                    </li>
                );
        });

   return (
        <div>
            <div>
                <ul style= {{padding:0, display: 'inline-block', verticalAlign:'top'}}>{aocUsers}</ul>
                <ul style= {{padding:0, display: 'inline-block', verticalAlign:'top'}}>{selectionUsers}</ul>
            </div>
            <Button onClick={() => setResults(dbResults)}>Save</Button>
        </div>
   )
}

Matcher.propTypes = {
    dbResults : object,
    aocResults : array,
    selections : array,
    setDbResults : func
}

export default Matcher;