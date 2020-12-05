//create database
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  //Object literals below
  apiKey: "AIzaSyAs5D8Lu3qU49R8BZmYJhhKTAvtu6elnRc",
  authDomain: "todoist-app-378f4.firebaseapp.com",
  projectId: "todoist-app-378f4",
  storageBucket: "todoist-app-378f4.appspot.com",
  messagingSenderId: "353012431667",
  appId: "1:353012431667:web:2b998a9b038350a375dc46",
});

export { firebaseConfig as firebase };
