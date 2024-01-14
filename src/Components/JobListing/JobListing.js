import React, { useState, useEffect } from "react";
import "../../Components/CoolButton/CoolButton.css"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app_connection from "../../firebase.js"
import "./JobListing.css"


export default function JobListing(props) {

    return(

        <div className="Listing-Main">
            <h2>{props.inside || "THESE ARE JUST PLACEHOLDERS RELAX"}</h2>
        </div>

    )
}