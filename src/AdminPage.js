import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import aocResults from './results';
import Matcher from './Matcher';
import { getResults, getAllSelections } from './database';

function AdminPage() {
    const [callInProgress, setCallInProgress] = useState();
    const [ready, setReady] = useState(false);
    const [dbResults, setDbResults] = useState();
    const [selections, setSelections] = useState();
    useEffect(() => {
        if(!ready && !callInProgress) {
            setCallInProgress(true);
            const fetchResults = getResults()
                .then(setDbResults);
            const fetchSelections = getAllSelections()
                .then(setSelections);
            Promise.all([fetchResults, fetchSelections])
                .then(() => setReady(true))
                .finally(() => setCallInProgress(false));
        }
    }, [ready, callInProgress]);
    
    const child = ready ? <Matcher dbResults={dbResults} selections={selections} aocResults={aocResults} setDbResults={setDbResults} /> : <p>...Loading</p>;

    return <div className="m-5 pt-3">{child}</div>;
}

export default AdminPage;
