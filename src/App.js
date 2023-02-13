import './App.css';
import React, { useState, useEffect } from "react"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.js"
import ReservePage from "./Pages/ReservePage/ReservePage.js"
import Gabe from "./Pages/Gabe/Gabe.js"
// import app_connection from './firebase'; 

function App() {


  
  // const db = getFirestore(app_connection)

  // const [items, setItems] = useState([])
  
  // const docRef = doc(db, "Bookings", "booking1")

  // async function getSnap(ref) {
  //   const docSnap = await getDoc(docRef)
  //   console.log(docSnap.data().Guests)
  //   return docSnap
  // }


  // useEffect(() => {
  //   getSnap(docRef)
  //   .then(res => setItems(res.data().Guests))
  //   .catch(err => console.error(err))
  // }, [])

  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Reserve" element={<ReservePage />} />
        <Route path="/Gabe" element={<Gabe />} />
      </Routes>
    </BrowserRouter>
    

  )


}

export default App;
