
import * as firebase from "firebase";
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyAfAK6DHPaUE1Y9UHWBJd68ANpkfVgfrM4",
  authDomain: "willy-app-792c8.firebaseapp.com",
  projectId: "willy-app-792c8",
  storageBucket: "willy-app-792c8.appspot.com",
  messagingSenderId: "734189648592",
  appId: "1:734189648592:web:9d089670e9f46dc70f7cd5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();