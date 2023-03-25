import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";
import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDpA6DAV3ikQP7c0csL213zWn28RY57Hds",
    authDomain: "peerview-4e05d.firebaseapp.com",
    projectId: "peerview-4e05d",
    storageBucket: "peerview-4e05d.appspot.com",
    messagingSenderId: "125637964573",
    appId: "1:125637964573:web:7b03931a6ecacc9445a7f4",
    measurementId: "G-T08T8K3Q0M"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export{auth,provider};
  export const db = getDatabase(app);
  export const storage = getStorage(app);