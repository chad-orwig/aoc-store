import React, { useState } from 'react';
import { object, array, func } from 'prop-types';
import classNames from 'classnames';
import Fuse from 'fuse.js';


function updateDbResults(dbResults, setDbResults, aocUser) {
    return (googleId) => () => {
        const newMembers = Object.assign({}, dbResults.members, {
            [aocUser.id] : googleId
        });
        setDbResults(Object.assign({}, dbResults, { members : newMembers}));
    };
}

function Matcher({dbResults, aocResults, selections, setDbResults}) {
   const [currentMatch, setCurrentMatch] = useState(false);
   const [search, setSearch] = useState();
   const matchFunction = (index) => {
       setCurrentMatch(index);
       const newSearch = new Fuse(selections, { keys : ['displayName', 'email'], threshold : 1 }).search(aocResults[index].name);
       setSearch(newSearch);
       window.scrollTo(0, 0);
   }
   const aocUsers = aocResults.map(({name, id, stars}, index) => {
       return (
            <li key={index} className={classNames({aocUser: true, selected: index === currentMatch})} onClick={() => matchFunction(index)}>
                name: {name} <br/>
                stars : {stars} <br/>
                google : {dbResults.members[id]}
            </li>
       );
   });

   const selectionClick = currentMatch !== false ? updateDbResults(dbResults, setDbResults, aocResults[currentMatch]) : undefined;

   const selectionUsers = (search || selections).map(({displayName, email, uid}, index) => {
       const myOnClick = selectionClick && selectionClick(uid);
       return (
            <li key={index} className='aocUser' onClick={myOnClick}>
                displayName: {displayName} <br/>
                email : {email}
            </li>
        );
   });

   return (
        <div>
            <ul style= {{padding:0, display: 'inline-block', verticalAlign:'top'}}>{aocUsers}</ul>
            <ul style= {{padding:0, display: 'inline-block', verticalAlign:'top'}}>{selectionUsers}</ul>
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