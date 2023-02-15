// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0GV3RxfBTWng25wOY14YH5pilzDFgPb8",
  authDomain: "developer-society.firebaseapp.com",
  projectId: "developer-society",
  storageBucket: "developer-society.appspot.com",
  messagingSenderId: "480160815225",
  appId: "1:480160815225:web:a71bd256368df29f165ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;