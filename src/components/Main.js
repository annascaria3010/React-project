import React from "react"
import image from "../image.png"

export default function Main() {
    return (
    <container className = "main">
        <h1 className = "heading" >Fun facts about React</h1>
        <div className="bottom">
            <img src={image} className="image"/>
            <div>
                <ul> 
                    <li className = "points">Was first released in 2013</li>
                    <li className = "points">Was originally created by Jordan Walke</li>
                    <li className = "points">Has well over 100K stars on GitHub</li>
                    <li className = "points">Is maintained by Facebook</li>
                    <li className = "points">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    </container>
)}