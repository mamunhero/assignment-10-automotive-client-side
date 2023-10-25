import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJHFfpUY2TuK-kNUbZc50OFbKmRDGPXWg",
  authDomain: "electronitech-87c2d.firebaseapp.com",
  projectId: "electronitech-87c2d",
  storageBucket: "electronitech-87c2d.appspot.com",
  messagingSenderId: "323998220653",
  appId: "1:323998220653:web:c60d1fb3d7fff00a4f1a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


