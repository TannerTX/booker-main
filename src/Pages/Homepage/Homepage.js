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
        <img alt="h" id="Welcome_Load" src={mainLogo} />
        <button className="btn" onClick={() => routeChange("/Reserve")}>Schedule a Trip</button>
        <button className="btn" onClick={() => routeChange("/Active")}>View Current Reservations</button>
        <button className="btn" onClick={() => routeChange("/Gabe")}>Picture of Gabe</button>
        <footer><i><a href="https://github.com/TannerTX">@TannerTX</a></i></footer>
        </div>
    )


}

export default Homepage