import React from "react"
import "./About.css"
import BONNER from '../../Media/videos/BONNER.webm'


export default function About() {

    return (

        <>
        <video width="1280" height="720" controls>
        <source src={BONNER} type="video/webm" />
        Your browser does not support the video tag.
        </video>
        </>

    )

}