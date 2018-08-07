import firebase from './firebase';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
  auth
};

export const signIn = () => auth.signInWithRedirect(provider);

export const signOut = () => auth.signOut();
