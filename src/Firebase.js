// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: FIREBASE STUFF
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKm-BryWGJYOnqkwp75Ewc0hflH5TPkI0",
  authDomain: "todo-context.firebaseapp.com",
  projectId: "todo-context",
  storageBucket: "todo-context.appspot.com",
  messagingSenderId: "692799933168",
  appId: "1:692799933168:web:fa45c4045e8f48d68f1035",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
