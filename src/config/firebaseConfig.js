import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDNCPsAvFGDpHPNqmwtvRFbU6VK9fI0S7M",
    authDomain: "sneakertown-24396.firebaseapp.com",
    projectId: "sneakertown-24396",
    storageBucket: "sneakertown-24396.appspot.com",
    messagingSenderId: "373846514665",
    appId: "1:373846514665:web:7440275203a67130c64978"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectAuth, projectFirestore, projectStorage, timestamp }; 