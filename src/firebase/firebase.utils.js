import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBJbKVWjAHHlMbSzX3Ivj_9V1oy31FEY1U",
    authDomain: "e-commerce-store-db-a3b29.firebaseapp.com",
    databaseURL: "https://e-commerce-store-db-a3b29.firebaseio.com",
    projectId: "e-commerce-store-db-a3b29",
    storageBucket: "e-commerce-store-db-a3b29.appspot.com",
    messagingSenderId: "661424246453",
    appId: "1:661424246453:web:f0d32016ec8e9e3b9ff8fc",
    measurementId: "G-FCV5K7Z0H5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;