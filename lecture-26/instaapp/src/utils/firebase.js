import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBpXucHw5Z58fzxJQCViJ4aY-ZH4qsss8k",
    authDomain: "mernjune-e3cf7.firebaseapp.com",
    projectId: "mernjune-e3cf7",
    storageBucket: "mernjune-e3cf7.appspot.com",
    messagingSenderId: "60255608086",
    appId: "1:60255608086:web:fa279f7b0a13e8ec664437"
};

let firebaseapp = firebase.initializeApp(firebaseConfig);

export {firebaseapp, firebase};



