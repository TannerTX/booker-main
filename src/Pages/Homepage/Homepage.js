import React from "react"
import "./Homepage.css"
import mainLogo from "../../Images/MainLogo.png"
import "../../Components/CoolButton/CoolButton.css"
/* eslint-disable */
function Homepage() {

    // let navigate = useNavigate()
    // const routeChange = (newPath) => {
    //     navigate(newPath)
    // }

    return (

        <div className="MainContainer">
        {/* <iframe className="discordIframe" src="https://discord.com/widget?id=762009285705465866&theme=dark"  allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
        <img alt="h" id="Welcome_Load" className="growAnimation hoverAnimation" src={mainLogo} style={{"animation-fill-mode":"forwards"}} />
        <div className="ellipse"></div>
        <footer><i><a className="a-footer" href="https://github.com/TannerTX" target="_blank">@TannerTX</a></i></footer>
        </div>



    )

}

export default Homepage
/*eslint-enable*/