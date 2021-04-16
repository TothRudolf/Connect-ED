import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDhibUBSgD9102A80E6qU6R4gEQmVpq35c",
    authDomain: "connected-firebase.firebaseapp.com",
    databaseURL: "https://connected-firebase-default-rtdb.firebaseio.com",
    projectId: "connected-firebase",
    storageBucket: "connected-firebase.appspot.com",
    messagingSenderId: "715622563748",
    appId: "1:715622563748:web:e01745b9174bf62e2a8b31",
    measurementId: "G-QDLR4PBRFR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
export default firebase;