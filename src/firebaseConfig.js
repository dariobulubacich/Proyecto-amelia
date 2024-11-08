import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAc7TgUi5kuq0u2ISsqBtWtlMaGSr0HwBs",
  authDomain: "e-comerce-cotillos--ameilia.firebaseapp.com",
  projectId: "e-comerce-cotillos--ameilia",
  storageBucket: "e-comerce-cotillos--ameilia.firebasestorage.app",
  messagingSenderId: "929938521231",
  appId: "1:929938521231:web:e1b7395368c608d23984fa",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
