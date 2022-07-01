import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAmnQDgYw3lu5iFqYhj2WDNBosyswt7OI",
  authDomain: "isaweb-4b566.firebaseapp.com",
  projectId: "isaweb-4b566",
  storageBucket: "isaweb-4b566.appspot.com",
  messagingSenderId: "777982189255",
  appId: "1:777982189255:web:c09130c0b91753e6bc68e2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
