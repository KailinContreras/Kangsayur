// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //esto es  para inicializar la app
import { getAuth } from "firebase/auth"; //esto es  para autenticación
import { getStorage } from "firebase/storage";  //esto es  para almacenamiento de archivos
import { getDatabase } from "firebase/database";  //esto es  para la base de datos


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgkR-5hWaWUYse8ZvMwRMdX7RWoVzULoo",
  authDomain: "kangsayur-7c0a2.firebaseapp.com",
  projectId: "kangsayur-7c0a2",
  storageBucket: "kangsayur-7c0a2.appspot.com",
  messagingSenderId: "81252978363",
  appId: "1:81252978363:web:37c5e6f1fad7a8c8eee39e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // se le agrega export
export  const storage = getStorage(app); // se le agrega export, es para el almacenamiento
export const database = getDatabase(app); // 