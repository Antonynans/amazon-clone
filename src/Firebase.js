import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTov2XnjgabCL0b0Do77sPg73g6r0gKfQ",
  authDomain: "clone-e8fc6.firebaseapp.com",
  projectId: "clone-e8fc6",
  storageBucket: "clone-e8fc6.appspot.com",
  messagingSenderId: "790614488025",
  appId: "1:790614488025:web:1b0c2037779b6cb3eddfc8",
  measurementId: "G-4KELKK2HXH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };