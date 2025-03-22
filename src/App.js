import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages
import Homepage from "./Pages/Homepage/Homepage";
import ReservePage from "./Pages/ReservePage/ReservePage";
import Gabe from "./Pages/Gabe/Gabe";
import History from "./Pages/History/History";
import Jobs from "./Pages/Jobs/Jobs";
import Insert from "./Pages/Insert/Insert";
import About from "./Pages/About/About";
import Policy from "./Pages/Policy/Policy";
import Dictionary from "./Pages/Dictionary/Dictionary";

// Components
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path="/Reserve" element={<ReservePage />} />
        <Route path="/Gabe" element={<Gabe />} />
        <Route path="/History" element={<History />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Discord" element={<About />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Dictionary" element={<Dictionary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
