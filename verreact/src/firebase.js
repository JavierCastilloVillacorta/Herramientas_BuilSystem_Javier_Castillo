import firebase from 'firebase';
import 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

firebase.initializeApp({
  apiKey: "AIzaSyCgtHShER0u-cxkqz4YnkT2SbiUKoU5W-k",
  authDomain: "tienda-193af",
  databaseURL: "https://tienda-193af.firebaseio.com",
  projectId: "tienda-193af",
  storageBucket: "tienda-193af.appspot.com",
  messagingSenderId: "586584457791"
})
firebase.firestore().settings(settings);

const db = firebase.firestore()

export default db;
