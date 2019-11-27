import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDADcPHiHCIam7i8hVIt6_Kkv6R4lL-HfU",
    authDomain: "aoc-store.firebaseapp.com",
    databaseURL: "https://aoc-store.firebaseio.com",
    projectId: "aoc-store",
    storageBucket: "aoc-store.appspot.com",
    messagingSenderId: "339506538200",
    appId: "1:339506538200:web:0de3a66030c60b1b99d9ad",
    measurementId: "G-VVT1KWQL6D"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;