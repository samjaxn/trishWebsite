import React from 'react'
import profilePic from '../content/aboutPic.jpg'

const About = (props) => {
    return (
        <div className="aboutPage">
            <div>
                <img src={profilePic} className="profilePic"/>
            </div>
            <div className="aboutTitle">
                ABOUT
            </div>
        </div>
    )
}

export default About