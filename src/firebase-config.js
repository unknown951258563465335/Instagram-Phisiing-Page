// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_yUOaXfu2a3FkBHbQ_DYTJ83OCLOnbG0",
  authDomain: "instagram-e3.firebaseapp.com",
  projectId: "instagram-e3",
  storageBucket: "instagram-e3.appspot.com",
  messagingSenderId: "219974427937",
  appId: "1:219974427937:web:0afee3dfe8ab2f40e78a60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
