import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyABwJxdHS8IE8YcM0McE1Kk901_ISf5840",
    authDomain: "project-71-adddd.firebaseapp.com",
    projectId: "project-71-adddd",
    storageBucket: "project-71-adddd.appspot.com",
    messagingSenderId: "647888906434",
    appId: "1:647888906434:web:e224cae36591852e06335b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
