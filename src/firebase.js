import { initializeApp } from "firebase/app";

const firebaseConfig_refined = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "booker-main.firebaseapp.com",
  projectId: "booker-main",
  storageBucket: "booker-main.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};


const app_connection = initializeApp(firebaseConfig_refined);

export default app_connection