import React from "react";
import "./Homepage.css";
import mainLogo from "../../Images/MainLogo.png";
import "../../Components/CoolButton/CoolButton.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/sampleSlice"; // Make sure path is correct

function Homepage() {
  const count = useSelector((state) => state.sample.value);
  const dispatch = useDispatch();

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
          <a className="a-footer" href="https://github.com/TannerTX" target="_blank">
            @TannerTX
          </a>
        </i>
      </footer>
    </div>
  );
}

export default Homepage;
