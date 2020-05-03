import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDDFwLaYf8yXX2OlWNoH0nMSTyJBORyAM8",
    authDomain: "intero-web-31974.firebaseapp.com",
    databaseURL: "https://intero-web-31974.firebaseio.com",
    projectId: "intero-web-31974",
    storageBucket: "intero-web-31974.appspot.com",
    messagingSenderId: "747230596884",
    appId: "1:747230596884:web:041be1dcdc12fa1bd8fc01",
    measurementId: "G-QB0ZCN9HPW"
  };
 
  firebase.initializeApp(firebaseConfig);


  export default firebase;