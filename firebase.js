import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFbZAXXt51bJ1N1ZlVQQAts5amOkyiKLY",
    authDomain: "maxwarz.firebaseapp.com",
    projectId: "maxwarz",
    storageBucket: "maxwarz.firebasestorage.app",
    messagingSenderId: "665319822888",
    appId: "1:665319822888:web:ae59decbf770cac5d0071d"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
