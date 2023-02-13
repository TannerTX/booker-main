import React, { useState, useEffect } from "react"
import "../Homepage/Homepage.css"
import mainLogo from "../../Images/MainLogo.png"
import { useNavigate } from "react-router-dom"

function Homepage() {

    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }



    return (
        <div className="MainContainer">
        <img id="Welcome_Load" src={mainLogo} />
        </div>
    )


}

export default Homepage