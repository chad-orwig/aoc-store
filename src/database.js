import app from './firebaseConfig';
import {getFirestore, collection, doc, getDoc, setDoc, getDocs} from 'firebase/firestore';

const db = getFirestore(app);

const selections = collection(db, 'selections');
const results = collection(db, 'results');

export const year = '2022'

export const getSelectionsForUser = (uid) => getDoc(doc(selections, uid));
export const setSelectionsForUser = (uid, userSelections) => setDoc(doc(selections, uid), userSelections, { merge: true });
export const getAllSelections = () => getDocs(selections).then(snapshot => snapshot.docs.map(doc => Object.assign({}, doc.data(), {uid: doc.id}, { selections: doc.get(year) || []})));
export const getResults = () => getDoc(doc(results, year)).then(snapshot => snapshot.data());
export const setResults = (newResults) => setDoc(doc(results, year), newResults);