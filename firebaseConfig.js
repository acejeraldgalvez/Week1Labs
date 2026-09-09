import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEyDva7rnPL8Cmpv99oOHMgwNYwY5C5uY",
  authDomain: "week1labs-c9f61.firebaseapp.com",
  projectId: "week1labs-c9f61",
  storageBucket: "week1labs-c9f61.firebasestorage.app",
  messagingSenderId: "13009524755",
  appId: "1:13009524755:web:7bc30feab2339d1f3ac7e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);