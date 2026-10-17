
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqv-Xg_98S-ebQVLA2OaugVX0NA16rZ4c",
  authDomain: "ss-photography-new.firebaseapp.com",
  projectId: "ss-photography-new",
  storageBucket: "ss-photography-new.firebasestorage.app",
  messagingSenderId: "764601358812",
  appId: "1:764601358812:web:1a76b0c2b6b0df3eb6d719"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
