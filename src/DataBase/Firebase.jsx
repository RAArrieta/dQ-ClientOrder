import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs2OIgCUhUJsKENM6Q4qFvd6W3_j2cV2M",
  authDomain: "donquijote-feb7a.firebaseapp.com",
  projectId: "donquijote-feb7a",
  storageBucket: "donquijote-feb7a.appspot.com",
  messagingSenderId: "503849804228",
  appId: "1:503849804228:web:423b4ff508cdec64250491",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
