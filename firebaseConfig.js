// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj5BWiOCnCvw2D15gQXe9iAAS-yUIjasQ",
  authDomain: "expo-init-f0f3c.firebaseapp.com",
  projectId: "expo-init-f0f3c",
  storageBucket: "expo-init-f0f3c.appspot.com",
  messagingSenderId: "673991695434",
  appId: "1:673991695434:web:5eb50987694a9b38a59ab3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
