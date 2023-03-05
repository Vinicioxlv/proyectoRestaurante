
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtbvgIZ0KdVsTdBNxUvG0Np1XfKC6Dy5s",
  authDomain: "crud-ejemplo-react.firebaseapp.com",
  projectId: "crud-ejemplo-react",
  storageBucket: "crud-ejemplo-react.appspot.com",
  messagingSenderId: "761945468553",
  appId: "1:761945468553:web:0355ab2ddca76d826ea058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}