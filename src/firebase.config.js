// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1y8nfA_2SY1CScfVReMlOnnat1sMW3Ws",
  authDomain: "attendance-a7a67.firebaseapp.com",
  databaseURL: "https://attendance-a7a67-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-a7a67",
  storageBucket: "attendance-a7a67.appspot.com",
  messagingSenderId: "984635281833",
  appId: "1:984635281833:web:c1dfc9d96b6e779ff874b8",
  measurementId: "G-0CE2RX25XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
