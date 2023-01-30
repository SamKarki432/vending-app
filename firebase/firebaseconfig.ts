// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaROa0y3RQztXcE_O9cD9knBI5FVDVX54",
  authDomain: "getting-started-project-5bfe6.firebaseapp.com",
  databaseURL: "https://getting-started-project-5bfe6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "getting-started-project-5bfe6",
  storageBucket: "getting-started-project-5bfe6.appspot.com",
  messagingSenderId: "371495179962",
  appId: "1:371495179962:web:e0fa4521b4593ce4f09483",
  measurementId: "G-PD00QC5LQP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);