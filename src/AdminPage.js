import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import {year2023 as aocResults} from './results';
import Matcher from './Matcher';
import { getResults, getAllSelections } from './database';
import Accordion from 'react-bootstrap/Accordion';
import Checker from './Checker';

function AdminPage({items}) {
    const [ready, setReady] = useState(false);
    const [dbResults, setDbResults] = useState();
    const [selections, setSelections] = useState();
    useEffect(() => {
        const fetchResults = getResults()
            .then(setDbResults);
        const fetchSelections = getAllSelections()
            .then(setSelections);
        Promise.all([fetchResults, fetchSelections])
            .then(() => setReady(true));
    }, []);
    
    const child = ready ? (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header className='hide-print'>Matcher</Accordion.Header>
                <Accordion.Body>
                    <Matcher dbResults={dbResults} selections={selections} aocResults={aocResults} setDbResults={setDbResults} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='hide-print'>Checker</Accordion.Header>
                <Accordion.Body>
                    <Checker dbResults={dbResults} selections={selections} aocResults={aocResults} items={items}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    
    ) : <p>...Loading</p>;

    return <div className="m-5 pt-3">{child}</div>;
}

export default AdminPage;
