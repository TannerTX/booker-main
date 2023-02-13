import React, { useState, useEffect } from "react"
import "./Homepage.css"
import mainLogo from "../../Images/MainLogo.png"
import { useNavigate } from "react-router-dom"
import "../../Components/CoolButton/CoolButton.css"

function Homepage() {

    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }

    const doSomething = () => {
        console.log("SUP")
    }

    const [words, setWords] = useState("")

    return (
        <div className="MainContainer">
        <img id="Welcome_Load" src={mainLogo} />
        <button className="btn" onClick={() => routeChange("/Reserve")}>SHOP</button>
        {/* <CoolButton words="Welcome2" /> */}
        <p>{words ? words : "NONE"}</p>
        </div>
    )


}

export default Homepage