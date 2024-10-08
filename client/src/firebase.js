import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyBCvOVW2gRAZaffAmzgHzAcdMI9cR2tPPE",
     authDomain: "react-task-6-5654c.firebaseapp.com",
     databaseURL: "https://react-task-6-5654c-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "react-task-6-5654c",
     storageBucket: "react-task-6-5654c.appspot.com",
     messagingSenderId: "717907442837",
     appId: "1:717907442837:web:12e2dee2632ba5d9e4ef9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app }