import firebase from "firebase";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("qSIIGjmlxjIBClQCb0FS")
  .collection("cartItems")
  .doc("F18PZra763qfdS5Eff26");
