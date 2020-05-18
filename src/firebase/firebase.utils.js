import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBzeB-vsnTEQpkArXg1tVIOeiVN6i04BwM",
    authDomain: "nextkart-9340b.firebaseapp.com",
    databaseURL: "https://nextkart-9340b.firebaseio.com",
    projectId: "nextkart-9340b",
    storageBucket: "nextkart-9340b.appspot.com",
    messagingSenderId: "995108242342",
    appId: "1:995108242342:web:d82e9e28dd291bd8e74567",
    measurementId: "G-Z9SW6F0E04"
  };

  firebase.initializeApp(config);
 
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export var signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


