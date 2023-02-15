// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsLTP3agrE3W2PNpLpZPjPGteMroqxW0M",
  authDomain: "vue-3-2023-e601f.firebaseapp.com",
  projectId: "vue-3-2023-e601f",
  storageBucket: "vue-3-2023-e601f.appspot.com",
  messagingSenderId: "129456382050",
  appId: "1:129456382050:web:e4767335c1bc922ced313b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
