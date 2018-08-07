import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
