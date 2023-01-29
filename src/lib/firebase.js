import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from '../seed';

const config = {
 apiKey: "AIzaSyBWZFFfAQ5unxI4S0P9lBdZniyF9Vulx9w",
  authDomain: "jamestagram-33038.firebaseapp.com",
  projectId: "jamestagram-33038",
  storageBucket: "jamestagram-33038.appspot.com",
  messagingSenderId: "163004871266",
  appId: "1:163004871266:web:67a6ccb13177e6885ad73b"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
export { firebase, FieldValue };