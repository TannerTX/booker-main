import React, { useState, useEffect } from "react";
import "./Jobs.css"
import "../../Components/CoolButton/CoolButton.css"
import LoadingPage from "../LoadingPage/LoadingPage.js";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app_connection from "../../firebase.js"
import { useNavigate } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar.js';
import JobListing from "../../Components/JobListing/JobListing.js"

export default function Jobs() {
    
    const [listings, setListings] = useState([])
    const db = getFirestore(app_connection)
    const colRef = collection(db, "Listings")


    useEffect(() => {
        const fetchData = async () => {
          const listingsRef = collection(db, 'Listings');
          const snapshot = await getDocs(listingsRef);
          const listings = snapshot.docs.map(doc => doc.data());
          setListings(listings);
        };
        fetchData();
      }, []);


    return (

        <div className="Jobs-MainContainer">
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
          <JobListing />
        </div>


    )

}