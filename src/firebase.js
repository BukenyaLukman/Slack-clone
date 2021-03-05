import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVtHB_hqqOY6dOjG3Kz37vCr_jzsXEta8",
    authDomain: "clone-b45b4.firebaseapp.com",
    databaseURL: "https://clone-b45b4.firebaseio.com",
    projectId: "clone-b45b4",
    storageBucket: "clone-b45b4.appspot.com",
    messagingSenderId: "1013363294362",
    appId: "1:1013363294362:web:5455c47e3ed6f431ec1f23",
    measurementId: "G-D5G6QVFE98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export default db;
export {auth, provider}