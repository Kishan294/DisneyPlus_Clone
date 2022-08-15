import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBRReYI36_3jBMcH0qRUtIlp224_HONzY",
  authDomain: "disney-clone-8da67.firebaseapp.com",
  databaseURL: "https://disney-clone-8da67-default-rtdb.firebaseio.com",
  projectId: "disney-clone-8da67",
  storageBucket: "disney-clone-8da67.appspot.com",
  messagingSenderId: "393649994821",
  appId: "1:393649994821:web:8587d44fcc713f20b0b72c",
};

const firebaseApp = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const database = getDatabase(firebaseApp);

export { storage, auth, provider, db, firebaseApp };
export default database;
