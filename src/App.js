import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.js"
import ReservePage from "./Pages/ReservePage/ReservePage.js"
import Gabe from "./Pages/Gabe/Gabe.js"
import LoadingPage from './Pages/LoadingPage/LoadingPage.js';
import History from "./Pages/History/History.js"

function App() {


  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if(isLoading)
  return <LoadingPage />
  else
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Reserve" element={<ReservePage />} />
        <Route path="/Gabe" element={<Gabe />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </BrowserRouter>
    

  )


}

export default App;
