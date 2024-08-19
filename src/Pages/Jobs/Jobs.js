import React, { useState, useEffect } from "react";
import "./Jobs.css";
import "../../Components/CoolButton/CoolButton.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app_connection from "../../firebase.js";
import JobListing from "../../Components/JobListing/JobListing.js";

export default function Jobs() {
  const [listings, setListings] = useState([]);
  const db = getFirestore(app_connection);

  useEffect(() => {
    const fetchData = async () => {
      const listingsRef = collection(db, "Definitions");
      const snapshot = await getDocs(listingsRef);
      const listings = snapshot.docs.map((doc) => doc.data());
      setListings(listings);
    };
    fetchData();
  }, []);

  return (
    <div className="Jobs-MainContainer">
      {listings.map((listing, key) => (
        <JobListing key={key}
          inside={`Word: ${listing.Word} || Definition: ${listing.Definition} || Example: ${listing.Example}`}
        />
      ))}
    </div>
  );
}
