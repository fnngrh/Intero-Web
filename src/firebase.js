import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDRFj-LvZ-0zhd52NJwS6wmxUqIDtPq0pI",
    authDomain: "intero-web-uts.firebaseapp.com",
    databaseURL: "https://intero-web-uts.firebaseio.com",
    projectId: "intero-web-uts",
    storageBucket: "intero-web-uts.appspot.com",
    messagingSenderId: "378794661725",
    appId: "1:378794661725:web:c5f15475774b2997ecbab4",
    measurementId: "G-WWE5F91XGH"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;