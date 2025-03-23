import React from "react";
import "./Homepage.css";
import mainLogo from "../../Images/MainLogo.png";
import "../../Components/CoolButton/CoolButton.css";

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
    </div>
  );
}

export default Homepage;
