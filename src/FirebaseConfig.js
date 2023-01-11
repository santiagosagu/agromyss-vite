import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBUhmUuMfBAioqUK_FvK4eeEPWHsu15DEI",
    authDomain: "agromyss.firebaseapp.com",
    projectId: "agromyss",
    storageBucket: "agromyss.appspot.com",
    messagingSenderId: "486867382922",
    appId: "1:486867382922:web:76c067756a0368bc403373",
    measurementId: "G-26GZJF7XMV"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  fire.analytics();

  const auth = fire.auth()
  const db = fire.firestore()
  const storage = firebase.storage()

  export { db, storage, auth, firebase }