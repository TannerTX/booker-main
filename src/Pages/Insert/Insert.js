import React, { useState, useEffect } from "react"
import "./Insert.css"
import { useNavigate } from "react-router-dom"




export default function Insert(props) {

    let navigate = useNavigate()
    const routeChange = (newPath) => { navigate(newPath) }

    const tempCodes = ['aabb', 'bt3', 'james'] // Implement DB checking eventually
    const [jobLink, setJobLink] = useState(null)
    const [jobImg, setJobImg] = useState(null)
    const [jobCat, setJobCat] = useState(null)
    const [isPreview, setIsPreview] = useState(false)
    const [shouldSlide, setShouldSlide] = useState(false)
    const [accessCode, setAccessCode] = useState(null)
    const [formErrors, setFormErrors] = useState(null)

    const JobTypes = [
      "Cyber Security",
      "SWENG/Programming",
      "Networking",
      "Help Desk",
      "General IT (unsure)",
    ]


    const handleSelection = (e) => setJobCat(e.target.value)
    const handleLink = (e) => setJobLink(e.target.value)
    const handleImg = (e) => setJobImg(e.target.value)
    const toggleSlidePrev = () => {
        
        setShouldSlide(!shouldSlide)

        if(!isPreview)
        setTimeout(() => {setIsPreview(!isPreview)}, 1000)
        else setIsPreview(false)
        
    }

    const checkErrors = () => {


        if(!tempCodes.includes(accessCode.toLowerCase())) // handle invalid code
        return 
        

    }

    return (
        <>
        <button onClick={() => toggleSlidePrev()}>TOGGLE</button>
        <div className="InsertMainContainer">
            <div className={`InsertForm ${shouldSlide ? 'slide-left' : ''}`}>
            <p>Form</p>
            </div>

            { isPreview &&
                <div className="InsertPreview slide-right">
                <p>{isPreview}Preview</p>
                </div>
            }

        </div>
        </>
    )


}

