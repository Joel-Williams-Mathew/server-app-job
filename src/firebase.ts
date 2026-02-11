// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_RS0kyaxkMn_4ZwQMsuhkZgXhXfR7RIg",
  authDomain: "server-app-job-ee2fa.firebaseapp.com",
  projectId: "server-app-job-ee2fa",
  storageBucket: "server-app-job-ee2fa.firebasestorage.app",
  messagingSenderId: "296620074388",
  appId: "1:296620074388:web:24b33a87a1646fa20fdb81",
  measurementId: "G-FV4NX31SMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);