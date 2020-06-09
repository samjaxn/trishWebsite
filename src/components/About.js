import React from 'react'
import profilePic from '../content/aboutPic.jpg'

const About = (props) => {
    return (
        <div className="aboutPage">
            <div className="aboutContent">
                <div className="aboutDesc">
                    Trish Roque is a multidisciplinary designer and artist based in Toronto. Her practice is focused on the influence of designed environment on human physiological response.
                    <img src={profilePic} className="profilePic"/>
                </div>
                <div className="aboutWork">
                    testing
                </div>
            </div>
            <div className="aboutTitle">
                ABOUT
            </div>
        </div>
    )
}

export default About