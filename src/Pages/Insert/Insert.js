import React, { useState, useEffect } from "react"
import "./Insert.css"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import app_connection from "../../firebase.js"
import { collection, getFirestore, addDoc} from 'firebase/firestore';
import placeholderImg from "../../Images/placeholder-image.png"


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
    const [jobTitle, setJobTitle] = useState(null)
    const [jobModality, setJobModality] = useState(JobModalities[0])
    const [isPreview, setIsPreview] = useState(false)
    const [shouldSlide, setShouldSlide] = useState(false)
    const [accessCode, setAccessCode] = useState(null)
    const [formErrors, setFormErrors] = useState(null)
    const [previewInfo, setPreviewInfo] = useState({})
    const [submitBtnStatus, setSubmitBtnStatus] = useState(true)
    const [fetchData, setFetchData] = useState(null)

      // NEED JOB AUTHOR


    const formattedJobTypes = JobTypes.map((type, idx) => (<option key={idx} value={type}>{type}</option>))
    const formattedJobModalities = JobModalities.map((type, idx) => (<option key={idx} value={type}>{type}</option>))

    const handleSelection = (e) => {e.preventDefault(); setJobCat(e.target.value)}
    const handleModality = (e) => {e.preventDefault(); setJobModality(e.target.value)}
    const handleLink = (e) => {e.preventDefault(); setJobLink(e.target.value)}
    const handleImg = (e) => setJobImg(e.target.value)
    const handleAccessCode = (e) => {e.preventDefault(); setAccessCode(e.target.value)}
    const handleTitle = (e) => {e.preventDefault(); setJobTitle(e.target.value)}
    
    useEffect(() => {

      if(jobLink && accessCode && jobTitle)
      setSubmitBtnStatus(false)
      else setSubmitBtnStatus(true)

    }, [jobLink, accessCode, jobTitle])
    

    useEffect(() => {
      console.log(fetchData)
    }, [fetchData])
    
    
    const toggleSlidePrev = () => {
        
        // Do error checking here before engaging slide

        if(!shouldSlide) { // If the preview btn hasn't been pressed yet, start anim
        setShouldSlide(true)
        setPreviewInfo({
            title: (jobTitle || "NONE"),
            link:(jobLink || "NONE"),
            imgURL: (jobImg || "NONE"),
            category: (jobCat || "NONE"),
            modality: (jobModality || "NONE")
            })
        setTimeout(() => {setIsPreview(!isPreview)}, 1000)
        }

        else { // If preview btn is pressed, update preview pane
        setPreviewInfo({
            title: (jobTitle || "NONE"),
            link:(jobLink || "NONE"),
            imgURL: (jobImg || "NONE"),
            category: (jobCat || "NONE"),
            modality: (jobModality || "NONE")
            })
        }  
    }

    const checkErrors = () => {


        if(!tempCodes.includes(accessCode.toLowerCase())) // handle invalid code
        return 
        

    }

    const handleSubmit = async () => {
      
      let url = `http://api.linkpreview.net/?key=083bac2255723fb368a4b628bd36a1b8&q=${jobLink}`
      const response = await fetch(url)
      const response_json = await response.json()
      setFetchData(response_json)
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
                placeholder="Job Title"
                type="text"
                className="input input-long"
                onChange={(e) => handleTitle(e)}
              />

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

              <button
                disabled={submitBtnStatus}
                className="btn btn-primary"
                onClick={() => toggleSlidePrev()}
              >
                Preview
              </button>
              <button
                disabled={true}
                className="btn btn-success"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>

          {isPreview && (
            <div className="InsertPreview slide-right">

              <div className="titleContainer ">
                <h3 className="title titleNewColor">Preview</h3>
              </div>
              {/* link:(jobLink || "NONE"), */}
            {/* imgURL: (jobImg || "NONE"), */}
            {/* category: (jobCat || "NONE"), */}
            {/* modality: (jobModality || "NONE") */}

              <div class="card">
                <div class="card-image"><img src={placeholderImg} /></div>
                <div class="category">
                <span class="badge rounded-pill text-bg-danger">{previewInfo.category}</span> 
                <span class="badge rounded-pill text-bg-primary">{previewInfo.modality}</span>  
                </div>
                <div class="heading"> <a className="prevLink" href={previewInfo.link}>{previewInfo.title}</a>
                  <div class="author"><span className="name">Posted: </span>{new Date().toLocaleDateString()}</div>
                </div>
              </div>


            </div>
          )}
        </div>
      </>
    );


}

