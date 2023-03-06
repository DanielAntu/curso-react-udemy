import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAH03rL4irOO4tlmps6Bz1ZXxKaCpPd4zE",
  authDomain: "miniblog-9f124.firebaseapp.com",
  projectId: "miniblog-9f124",
  storageBucket: "miniblog-9f124.appspot.com",
  messagingSenderId: "11214137654",
  appId: "1:11214137654:web:d1a0f9f59b30eea71feb97"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}