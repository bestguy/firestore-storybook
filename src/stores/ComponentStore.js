import firebase from '../api/firebase';
import 'firebase/firestore';
import { initFirestorter, Collection, Document } from 'firestorter';

initFirestorter({ firebase });

const components = new Collection('components');
const getComponent = id => new Document(`components/${id}`);

export {
  components,
  getComponent
};

