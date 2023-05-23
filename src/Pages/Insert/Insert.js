import React, { useState, useEffect } from "react"
import "./Insert.css"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import app_connection from "../../firebase.js"
import { collection, getFirestore, addDoc} from 'firebase/firestore';



export default function Insert(props) {

    let navigate = useNavigate()
    const routeChange = (newPath) => { navigate(newPath) }

    const db = getFirestore(app_connection)

    const JobTypes = [
        "Cyber Security",
        "SWENG/Programming",
        "Networking",
        "Help Desk/Support",
        "General IT",
        "Other"
      ]
    const tempCodes = ['aabb', 'bt3', 'james'] // Implement DB checking eventually
    const [jobLink, setJobLink] = useState(null)
    const [jobImg, setJobImg] = useState(null)
    const [jobCat, setJobCat] = useState(JobTypes[0])
    const [isPreview, setIsPreview] = useState(false)
    const [shouldSlide, setShouldSlide] = useState(false)
    const [accessCode, setAccessCode] = useState(null)
    const [formErrors, setFormErrors] = useState(null)
    const [previewInfo, setPreviewInfo] = useState({})

    const formattedJobTypes = JobTypes.map((type, idx) => (<option key={idx} value={type}>{type}</option>))
    const handleSelection = (e) => setJobCat(e.target.value)
    const handleLink = (e) => setJobLink(e.target.value)
    const handleImg = (e) => setJobImg(e.target.value)
    const toggleSlidePrev = () => {
        
        // Do error checking here before engaging slide

        if(!shouldSlide) { // If the preview btn hasn't been pressed yet, start anim
        setShouldSlide(true)
        setPreviewInfo({
            link:(jobLink || "NONE"),
            imgURL: (jobImg || "NONE"),
            category: (jobCat || "NONE")
            })
        setTimeout(() => {setIsPreview(!isPreview)}, 1000)
        }

        else { // If preview btn is pressed, update preview pane
        setPreviewInfo({
            link:(jobLink || "NONE"),
            imgURL: (jobImg || "NONE"),
            category: (jobCat || "NONE")
            })
        }
        
    }

    const checkErrors = () => {


        if(!tempCodes.includes(accessCode.toLowerCase())) // handle invalid code
        return 
        

    }

    const handleSubmit = () => {
      return
    }

    return (
      <>
        <div className="InsertMainContainer">
          <div className={`InsertForm ${shouldSlide ? "slide-left" : ""}`}>

            <div className="titleContainer">
            <h3 className="title">Insert Form</h3>
            </div>



            <input placeholder="Job Link" type="text" name="text" className="input input-long" />

            <select className="form-select modified-select" onChange={(e) => handleSelection(e)} >
              {formattedJobTypes}
            </select>

            <input placeholder="Access Code" type="text" name="text" className="input" />

            <br />
            <button
              className="btn btn-primary"
              onClick={() => toggleSlidePrev()}
            >
              Preview
            </button>
            <button className="btn btn-success" onClick={() => handleSubmit()}>
              Submit
            </button>

            <p>SELECTED: {jobCat}</p>
          </div>

          {isPreview && (
            <div className="InsertPreview slide-right">
              <p>Preview</p>
              <p>LINK: {previewInfo.link}</p>
              <p>IMG: {previewInfo.imgURL}</p>
              <p>CATEGORY: {previewInfo.category}</p>
            </div>
          )}
        </div>
      </>
    );


}

