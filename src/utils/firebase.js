// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmELHmq1A153ayN3J0BggrjZvFdA1wLY0",
  authDomain: "netflixgpt-b3b33.firebaseapp.com",
  projectId: "netflixgpt-b3b33",
  storageBucket: "netflixgpt-b3b33.appspot.com",
  messagingSenderId: "685117977111",
  appId: "1:685117977111:web:8ec419e163f3f728d92252",
  measurementId: "G-E428W2Z66L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
