import app from './firebaseConfig';
import {getFirestore, collection, doc, getDoc, setDoc, getDocs, onSnapshot} from 'firebase/firestore';

const db = getFirestore(app);

const selections = collection(db, 'selections');
const results = collection(db, 'results');
const bonusStars = collection(db, 'bonus-stars');

export const year = '2023'

export const getSelectionsForUser = (uid) => getDoc(doc(selections, uid));
export const setSelectionsForUser = (uid, userSelections) => setDoc(doc(selections, uid), userSelections, { merge: true });
export const getAllSelections = () => getDocs(selections).then(snapshot => snapshot.docs.map(doc => Object.assign({}, doc.data(), {uid: doc.id}, { selections: doc.get(year) || []})));
export const getResults = () => getDoc(doc(results, year)).then(snapshot => snapshot.data());
export const setResults = (newResults) => setDoc(doc(results, year), newResults);
export const subscribeToBonusStars = (uid) => (callback) => onSnapshot(doc(bonusStars, uid), (snap) => callback(snap.get(year), snap));
export const saveBonusStars = (uid) => (val) => setDoc(doc(bonusStars, uid), { [year]: val }, { merge: true });