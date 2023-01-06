// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASUREMENTID
  // apiKey: "AIzaSyB-mr3FGGZddR56BAUXklCZrb8l--meLP8",
  // authDomain: "resale-market-e79c1.firebaseapp.com",
  // projectId: "resale-market-e79c1",
  // storageBucket: "resale-market-e79c1.appspot.com",
  // messagingSenderId: "552543838885",
  // appId: "1:552543838885:web:a2f9c183587c21e49fe34c",
  // measurementId: "G-V5ZB6V7348"


  // apiKey: "AIzaSyB-mr3FGGZddR56BAUXklCZrb8l--meLP8",
  // authDomain: "resale-market-e79c1.firebaseapp.com",
  // projectId: "resale-market-e79c1",
  // storageBucket: "resale-market-e79c1.appspot.com",
  // messagingSenderId: "552543838885",
  // appId: "1:552543838885:web:a2f9c183587c21e49fe34c",
  // measurementId: "G-V5ZB6V7348"

  apiKey: "AIzaSyB-mr3FGGZddR56BAUXklCZrb8l--meLP8",
  authDomain: "resale-market-e79c1.firebaseapp.com",
  projectId: "resale-market-e79c1",
  storageBucket: "resale-market-e79c1.appspot.com",
  messagingSenderId: "552543838885",
  appId: "1:552543838885:web:a2f9c183587c21e49fe34c",
  measurementId: "G-V5ZB6V7348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;