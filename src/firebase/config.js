import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBSt65pSx9Gla0R_n5VOFJ2p5sN7rIIEk0",
  authDomain: "miniblog-77e0f.firebaseapp.com",
  projectId: "miniblog-77e0f",
  storageBucket: "miniblog-77e0f.appspot.com",
  messagingSenderId: "187035725518",
  appId: "1:187035725518:web:2ea04dd24f51de720c2a9f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};