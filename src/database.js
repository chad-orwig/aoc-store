import firebase from './firebaseConfig';
import 'firebase/firestore';

const db = firebase.firestore();
const selections = db.collection('selections');
const results = db.collection('results');

export const getSelectionsForUser = (uid) => selections.doc(uid).get();
export const setSelectionsForUser = (uid, userSelections) => selections.doc(uid).set(userSelections);
export const getAllSelections = () => selections.get().then(snapshot => snapshot.docs.map(doc => Object.assign({},doc.data(), {uid: doc.id})));
export const getResults = () => results.doc('2019').get().then(snapshot => snapshot.data());
export const setResults = (newResults) => results.doc('2019').set(newResults);