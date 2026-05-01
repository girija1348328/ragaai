// src/services/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO_9EzzVdGTsBZylcl4I9VicSy2Q7ysUo",
  authDomain: "healthcare-890e8.firebaseapp.com",
  projectId: "healthcare-890e8",
  storageBucket: "healthcare-890e8.firebasestorage.app",
  messagingSenderId: "1030380357367",
  appId: "1:1030380357367:web:31bb48242037de58bcb5f2",
  measurementId: "G-L8WP8JN6BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);