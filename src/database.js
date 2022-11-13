import firebase from './firebaseConfig';
import 'firebase/firestore';

const db = firebase.firestore();
const selections = db.collection('selections');
const results = db.collection('results');

export const year = '2022'

export const getSelectionsForUser = (uid) => selections.doc(uid).get();
export const setSelectionsForUser = (uid, userSelections) => selections.doc(uid).set(userSelections, { merge: true });
export const getAllSelections = () => selections.get().then(snapshot => snapshot.docs.map(doc => Object.assign({}, doc.data(), {uid: doc.id}, { selections: doc.get(year) || []})));
export const getResults = () => results.doc(year).get().then(snapshot => snapshot.data());
export const setResults = (newResults) => results.doc(year).set(newResults);