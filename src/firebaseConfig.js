// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKn25QKO6FTQrr-RYABHr3j0LlZgUsOTM",
    authDomain: "juanpenaherrera-5344f.firebaseapp.com",
    projectId: "juanpenaherrera-5344f",
    storageBucket: "juanpenaherrera-5344f.firebasestorage.app",
    messagingSenderId: "973341352808",
    appId: "1:973341352808:web:8e89c93e0a44cac854acdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);