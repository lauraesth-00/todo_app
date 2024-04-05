import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVhfsbzt2ofNTyadbQJznv7LYGSVpenNg",
    authDomain: "todo-crud-b5e01.firebaseapp.com",
    projectId: "todo-crud-b5e01",
    storageBucket: "todo-crud-b5e01.appspot.com",
    messagingSenderId: "1076126821182",
    appId: "1:1076126821182:web:f938d43df08f8d045d5a6f"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };