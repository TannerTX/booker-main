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

    const JobModalities = ["Remote", "In-Office", "Hybrid"]
    const tempCodes = ['aabb', 'bt3', 'james'] // Implement DB checking eventually
    const [jobLink, setJobLink] = useState(null)
    const [jobImg, setJobImg] = useState(null)
    const [jobCat, setJobCat] = useState(JobTypes[0])
    const [jobModality, setJobModality] = useState(JobModalities[0])
    const [isPreview, setIsPreview] = useState(false)
    const [shouldSlide, setShouldSlide] = useState(false)
    const [accessCode, setAccessCode] = useState(null)
    const [formErrors, setFormErrors] = useState(null)
    const [previewInfo, setPreviewInfo] = useState({})
    const [submitBtnStatus, setSubmitBtnStatus] = useState(true)

    const formattedJobTypes = JobTypes.map((type, idx) => (<option key={idx} value={type}>{type}</option>))
    const formattedJobModalities = JobModalities.map((type, idx) => (<option key={idx} value={type}>{type}</option>))

    const handleSelection = (e) => {e.preventDefault(); setJobCat(e.target.value)}
    const handleModality = (e) => {e.preventDefault(); setJobModality(e.target.value)}
    const handleLink = (e) => {e.preventDefault(); setJobLink(e.target.value)}
    const handleImg = (e) => setJobImg(e.target.value)
    const handleAccessCode = (e) => {e.preventDefault(); setAccessCode(e.target.value)}
    
    
    useEffect(() => {

      if(jobLink && accessCode)
      setSubmitBtnStatus(false)
      else setSubmitBtnStatus(true)

    }, [jobLink, accessCode])
    
    
    
    
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
              <h3 className="title">Insert Job Listing</h3>
            </div>

            <div className="InsertFormContent">
              <input
                placeholder="Job Link"
                type="text"
                className="input input-long"
                onChange={(e) => handleLink(e)}
              />

              <select
                className="form-select modified-select"
                onChange={(e) => handleSelection(e)}
              >
                {formattedJobTypes}
              </select>


              <select
                className="form-select modified-select small-select"
                onChange={(e) => handleModality(e)}
              >
                {formattedJobModalities}
              </select>


              <input
                placeholder="Access Code"
                type="text"
                className="input"
                onChange={(e) => handleAccessCode(e)}
              />
              <br />





              <br />
              <button
                disabled={submitBtnStatus}
                className="btn btn-primary"
                onClick={() => toggleSlidePrev()}
              >
                Preview
              </button>
              <button
                disabled={submitBtnStatus}
                className="btn btn-success"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>

          {isPreview && (
            <div className="InsertPreview slide-right">
              <div className="titleContainer">
                <h3 className="title">Preview</h3>
              </div>

              <div className="InsertPreviewContent"></div>
            </div>
          )}
        </div>
      </>
    );


}

