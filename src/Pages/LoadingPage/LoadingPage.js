import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import "../../Pages/LoadingPage/LoadingPage.css"
  
export default function LoadingPage() {
    
  return (
    <div className="MainLoading">
      <ReactLoading type="bars" color="rgba(208,181,71)"height={100} width={150} />
    </div>
  );
}