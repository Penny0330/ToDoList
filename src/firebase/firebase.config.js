import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLfi8MK42vKux0-P5q3eWnO-Io2WksYBw",
  authDomain: "todolist-22700.firebaseapp.com",
  projectId: "todolist-22700",
  storageBucket: "todolist-22700.appspot.com",
  messagingSenderId: "641651150051",
  appId: "1:641651150051:web:e07b27ea586c86509f49d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default getFirestore(app);