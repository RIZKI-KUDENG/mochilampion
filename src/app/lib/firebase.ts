// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPhp0ypMz6RmKYu-NpSFgd-fOGHbHTH7Q",
  authDomain: "mochilampion-44e5a.firebaseapp.com",
  projectId: "mochilampion-44e5a",
  storageBucket: "mochilampion-44e5a.firebasestorage.app",
  messagingSenderId: "23572544986",
  appId: "1:23572544986:web:c4f6d906bd7a1546f9d4e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);