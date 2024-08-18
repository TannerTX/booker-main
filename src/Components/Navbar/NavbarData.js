import React from 'react'
import * as Aicons from "react-icons/ai"
import * as Faicons from "react-icons/fa";

export const NavbarData = [
    {
        title: "Home",
        path: "/",
        icon: <Aicons.AiFillHome />
    },
    {
        title: "Discord",
        path: "/Discord",
        icon: <Faicons.FaDiscord />
    }, 
    {
        title: "Add Listing",
        path: "/Insert",
        icon: <Aicons.AiOutlinePlusCircle />
    },
    {
        title: "Job Listings",
        path: "/Jobs",
        icon: <Aicons.AiFillContainer />
    },
    {
        title: "Dictionary",
        path: "/Dictionary",
        icon: <Faicons.FaBookDead />
    }
]