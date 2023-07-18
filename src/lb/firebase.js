import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ6OZo7DFNxbaXrSJ0J0WAPwwLULx20Gg",
  authDomain: "ntlx-clone.firebaseapp.com",
  projectId: "ntlx-clone",
  storageBucket: "ntlx-clone.appspot.com",
  messagingSenderId: "140084708702",
  appId: "1:140084708702:web:594a5affe783c1074d3bcf",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();