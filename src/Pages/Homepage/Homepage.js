import React from "react";
import "./Homepage.css";
import mainLogo from "../../Images/MainLogo.png";
import "../../Components/CoolButton/CoolButton.css";
import packageJson from '../../../package.json'

function Homepage() {

  return (
    <div className="MainContainer">
      <img
        alt="h"
        id="Welcome_Load"
        className="growAnimation hoverAnimation"
        src={mainLogo}
        style={{ animationFillMode: "forwards" }}
      />
      <div className="ellipse"></div>
      <footer>
        <i>
          <a className="a-footer" href="https://github.com/TannerTX" target="_blank" rel="noreferrer">
            @TannerTX
          </a>
        </i>
      </footer>
      <footer><p className="version"><b>V{packageJson.version}</b></p></footer>
    </div>
  );
}

export default Homepage;
