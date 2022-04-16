// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRitZW6qmNjrXdco7isJH0cN6qpS-9Azc",
  authDomain: "jody-michael.firebaseapp.com",
  projectId: "jody-michael",
  storageBucket: "jody-michael.appspot.com",
  messagingSenderId: "271295823075",
  appId: "1:271295823075:web:91ff69f711cfe80db259d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)