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
        <div class="ellipse"></div>
        <footer><i><a className="a-footer" href="https://github.com/TannerTX">@TannerT</a></i></footer>
        </div>
    )

}

export default Homepage