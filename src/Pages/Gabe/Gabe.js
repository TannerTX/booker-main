import React, { useState, useEffect } from "react"
import mainLogo from "../../Images/MainLogo.png"
import { useNavigate } from "react-router-dom"
import "../../Components/CoolButton/CoolButton.css"
import ga from "../../Images/Gabe.jpg"
import "./Gabe.css"

function Gabe() {

    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }

    return (
        <>
        <img id="Gabe" src={ga} />
        <button id="backbtn" className="btn" onClick={() => routeChange("/")}>←</button>
        </>
    )



}

export default Gabe