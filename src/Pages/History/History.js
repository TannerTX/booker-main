import React, { useState, useEffect } from "react";
import "./History.css"
import "../../Components/CoolButton/CoolButton.css"
import "../LoadingPage/LoadingPage.js"
import LoadingPage from "../LoadingPage/LoadingPage.js";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app_connection from "../../firebase.js"
import { useNavigate } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar.js';


export default function History() {

    const [isLoading, setIsLoading] = useState(true)
    const [reservations, setReservations] = useState([])
    const db = getFirestore(app_connection)
    const colRef = collection(db, "Bookings")
    
    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }
    
    
    useEffect(() => {
        const fetchData = async () => {
          const reservationRef = collection(db, 'Bookings');
          const snapshot = await getDocs(reservationRef);
          const reserves = snapshot.docs.map(doc => doc.data());
          setReservations(reserves);
        };
        fetchData();
        setIsLoading(false)
      }, []);
    


    if(isLoading)
    <LoadingPage />
    else
    return (
        
        <div className="Main">
        <button id="homeb" className="btn" onClick={() => routeChange("/")}></button>
        {reservations.map(item => 
            <div className="card">
            <h3>

                {item.DateOfArrival || "Empty"} 
                 <br /> <br />
                {item.Destination || "Empty"}
                 <br /> <br />
                {item.Guests || "Empty"}
            </h3>     
            </div>
            )
        }
        </div>
    )







}