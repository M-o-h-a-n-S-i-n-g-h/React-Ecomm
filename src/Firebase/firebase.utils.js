import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC6wbQGgbuc56EHAhNzyuOmAMI_sJVRFMw",
  authDomain: "crown-db-96bb8.firebaseapp.com",
  databaseURL: "https://crown-db-96bb8.firebaseio.com",
  projectId: "crown-db-96bb8",
  storageBucket: "crown-db-96bb8.appspot.com",
  messagingSenderId: "552183121506",
  appId: "1:552183121506:web:77d942c2c794a8cc19333b",
  measurementId: "G-6645LDPMFK",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
