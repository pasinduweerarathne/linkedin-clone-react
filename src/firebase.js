import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV4nH4HML1IOJr1fuvKyxkUI5V6CV7KPM",
  authDomain: "linkedin-clone-reac.firebaseapp.com",
  projectId: "linkedin-clone-reac",
  storageBucket: "linkedin-clone-reac.appspot.com",
  messagingSenderId: "208812012869",
  appId: "1:208812012869:web:216c702e8157487969ba2c",
};

// connect frontend with firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
