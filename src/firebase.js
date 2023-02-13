import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC86rWc8MTvQM_jx7-lxSGxskaVdHq7Os8",
  authDomain: "booker-main.firebaseapp.com",
  projectId: "booker-main",
  storageBucket: "booker-main.appspot.com",
  messagingSenderId: "1089264253923",
  appId: "1:1089264253923:web:ee47b479942dfff3ac7ed6",
  measurementId: "G-RFB9PJ9EFS"
};

const app_connection = initializeApp(firebaseConfig);

export default app_connection