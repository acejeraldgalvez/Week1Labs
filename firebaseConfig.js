import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEyDva7rnPL8Cmpv99oOHMgwNYwY5C5uY",
  authDomain: "week1labs-c9f61.firebaseapp.com",
  projectId: "week1labs-c9f61",
  storageBucket: "week1labs-c9f61.firebasestorage.app",
  messagingSenderId: "13009524755",
  appId: "1:13009524755:web:7bc30feab2339d1f3ac7e6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage), 
  });
} catch (e) {
  auth = getAuth(app);
}

export { auth };