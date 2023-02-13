import React, { useEffect, useState } from "react"
import "../ReservePage/ReservePage.css"
import "../../Components/CoolButton/CoolButton.css"
import schedule from "../../Images/Schedule.png"
import { useNavigate } from "react-router-dom"
import app_connection from "../../firebase.js"
import { collection, getFirestore, addDoc} from 'firebase/firestore';
import LoadingPage from "../LoadingPage/LoadingPage.js"


function ReservePage() {

    let navigate = useNavigate()
    const routeChange = (newPath) => {
        navigate(newPath)
    }

    const db = getFirestore(app_connection)
    const [dest, setDest] = useState("")
    const [arrival, setArrival] = useState("")
    const [guests, setGuests] = useState("")
    const [errors, setErrors] = useState("")
    const [success, setSuccess] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    
    useEffect(() => {
        setTimeout(() => {setIsLoading(false)}, 2000)
    }, [])
    

    const handleSubmit = async () => {
        console.log(`${dest}\n${arrival}\n${guests}`)
        const data = {
            DateOfArrival: arrival,
            Destination: dest,
            Guests: guests,
        }
        setIsLoading(true)
        alert("Successfully Submitted Reservation!")
        const docRef = await addDoc(collection(db, "Bookings"), data)

        setTimeout(() => routeChange("/"), 2000)        
    }

    const checkErrors = (e) => {
        e.preventDefault()

        if(dest === "" || arrival === "" || guests === "")
        setErrors("No Empty Spaces!")
        else {
            setSuccess("Success!")
            handleSubmit()
        }
        
    }

    if(isLoading)
    return <LoadingPage />
    else
    return (
        
        <div className="Main">
        <img id="Welcome_Load2" src={schedule} />
        <button className="btn" id="homebtn" onClick={() => routeChange("/")}>Home</button>
        <div className="login-card">
        <div className="card-header" >
        {
            success ? 
            <p style={success ? 
            {"border":"1px solid black", 
            "backgroundColor": "rgb(98, 253, 26)",
            "borderRadius": "6px",
            "animation": "swing 1s ease 0s 1 normal forwards"} : null}>
                <b>{success ? success: ""}</b>
            </p>
            :
            ""
        }

        {
            errors ? 
            <p style={errors ? 
            {"border":"1px solid black", 
            "backgroundColor": "rgb(250, 83, 83)",
            "borderRadius": "6px",
            "animation": "swing 1s ease 0s 1 normal forwards"} : null}>
                <b>{errors ? errors: ""}</b>
            </p>
            :
            ""
        }
        </div>
  <form>
    <div className="form-group">
      <label><b>Destination *</b></label>
      <input required={true} name="Destination" id="Destination" type="text" onChange={(e) => setDest(e.target.value)} />
    </div>
    <div className="form-group">
      <label><b>Arrival *</b><br /></label>
      <input required="" name="Arrival" id="Arrival" type="date" onChange={(e) => setArrival(e.target.value)}/>
    </div>
    <div className="form-group">
      <label><b>Guests *</b></label>
      <input required="" name="Guests" id="Guests" type="text" onChange={(e) => setGuests(e.target.value)}/>
    </div>
    <div className="form-group">
      <button id="submitbtn" className="btn" onClick={(e) => checkErrors(e)}>Submit</button>
      {/* <input value="Submit" type="submit" onClick={() => checkErrors()}/> */}
    </div>
  </form>
</div>

        </div>

    
    )


}

export default ReservePage