import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADI4sMO5vnNPZrrc2jChZQmNl4ZxCUKps",
  authDomain: "recipe-app-825a0.firebaseapp.com",
  projectId: "recipe-app-825a0",
  storageBucket: "recipe-app-825a0.appspot.com",
  messagingSenderId: "504252679265",
  appId: "1:504252679265:web:2f46ec1c0710e90d40d620",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
