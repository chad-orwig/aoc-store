import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import aocResults from './results';
import Matcher from './Matcher';
import { getResults, getAllSelections } from './database';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AdminPage() {
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
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header><Accordion.Toggle as={Button} variant="link" eventKey="0">Matcher</Accordion.Toggle></Card.Header>
                <Accordion.Collapse eventKey="0"><Card.Body><Matcher dbResults={dbResults} selections={selections} aocResults={aocResults} setDbResults={setDbResults} /></Card.Body></Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header><Accordion.Toggle as={Button} variant="link" eventKey="1">Valid/Invalid</Accordion.Toggle></Card.Header>
                <Accordion.Collapse eventKey="1"><Card.Body><p>placeholder</p></Card.Body></Accordion.Collapse>
            </Card>
        </Accordion>
    
    ) : <p>...Loading</p>;

    return <div className="m-5 pt-3">{child}</div>;
}

export default AdminPage;
