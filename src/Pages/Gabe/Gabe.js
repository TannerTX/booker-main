import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../../Components/CoolButton/CoolButton.css"
import ga from "../../Images/Gabe.jpg"
import "./Gabe.css"
import LoadingPage from "../LoadingPage/LoadingPage.js"

function Gabe() {

    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setIsLoading(false) ,2000)
    }, [])

    if(isLoading)
    return <LoadingPage />
    else
    return (
        <>
        <img alt="Gabe" id="Gabe" src={ga} />
        <button id="backbtn" className="btn" onClick={() => routeChange("/")}>←</button>
        </>
    )



}

export default Gabe