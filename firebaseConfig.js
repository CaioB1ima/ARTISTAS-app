import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configurações do Firebase (Substitua pelos seus dados reais do console do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyB-EXAMPLE-KEY",
  authDomain: "artistas-app-v2.firebaseapp.com",
  projectId: "artistas-app-v2",
  storageBucket: "artistas-app-v2.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
