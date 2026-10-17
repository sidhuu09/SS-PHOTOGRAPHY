
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAViIeR7357V2aDxNVxx6Y-2-LPassccPIc",
  authDomain: "ss-photography-ab010.firebaseapp.com",
  projectId: "ss-photography-ab010",
  storageBucket: "ss-photography-ab010.firebasestorage.app",
  messagingSenderId: "275799297604",
  appId: "1:275799297604:web:cbc8521e08594e6b72f611"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
