// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbpwfjl3vyZ7Vsa3dYPrDIwBmNhTQfqws",
  authDomain: "news-ce7af.firebaseapp.com",
  projectId: "news-ce7af",
  storageBucket: "news-ce7af.appspot.com",
  messagingSenderId: "806026308486",
  appId: "1:806026308486:web:77dfef1242596d690e1a07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app