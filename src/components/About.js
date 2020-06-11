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
                    <div className="aboutColumn1">
                        ELSEWHERE
                        <div className="tab section">
                            t@trishroque.co<br/>
                            instagram@trishroque_<br/>
                            twitter @trishroque_
                        </div>
                        RECENTLY:
                        <div className="section">
                            SONY<br/>
                            RAPTORS<br/>
                            HXOUSE<br/>
                            TWITTER<br/>
                            WESTBANK<br/>
                            CLUEP<br/>
                            REAL SPORTS<br/>
                            ANDRAS<br/>
                            STACK
                        </div>
                    </div>
                    <div className="aboutColumn2">
                        PRESS
                        <div className="tab section">
                            daily hive<br/>
                            dezeen<br/>
                            archdaily
                        </div>
                        SPEAKING/MENTORING
                        <div className="section">
                            Nuit Talks<br/>
                            HXOUSE 1-day challenges
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutTitle">
                ABOUT
            </div>
        </div>
    )
}

export default About