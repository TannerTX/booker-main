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
        {/* <button className="btn" onClick={() => routeChange("/Reserve")}>Schedule a Trip</button> */}
        {/* <button className="btn" onClick={() => routeChange("/History")}>View Current Reservations</button> */}
        {/* <button className="btn" onClick={() => routeChange("/Gabe")}>Picture of Gabe</button> */}
        {/* <button className="btn" onClick={() => routeChange("/Jobs")}>Job Postings</button> */}
        <footer><i><a href="https://github.com/TannerTX">@TannerTX</a></i></footer>
        </div>
    )

}

export default Homepage