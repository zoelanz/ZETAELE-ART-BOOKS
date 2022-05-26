// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi2QuydwNOiGe4CID6WB6Vq_XlrfYLcK8",
  authDomain: "zetaele-art-books-8944e.firebaseapp.com",
  projectId: "zetaele-art-books-8944e",
  storageBucket: "zetaele-art-books-8944e.appspot.com",
  messagingSenderId: "277643072395",
  appId: "1:277643072395:web:c6201151f8a0f62ce4158e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}