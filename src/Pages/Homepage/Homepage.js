import React from "react"
import "./Homepage.css"
import mainLogo from "../../Images/MainLogo.png"
import { useNavigate } from "react-router-dom"
import "../../Components/CoolButton/CoolButton.css"

function Homepage() {

    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }

    return (

        <div className="MainContainer">
        <img alt="h" id="Welcome_Load" className="growAnimation hoverAnimation" src={mainLogo} style={{"animation-fill-mode":"forwards"}} />
        <footer><i><a href="https://github.com/TannerTX">@TannerTX</a></i></footer>
        </div>
    )

}

export default Homepage