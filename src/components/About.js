import React, { useState, useRef, useEffect } from 'react'
import profilePic from '../content/aboutPic.jpg'
import aboutCircle from '../SVGs/aboutCircle.svg'
import anime from 'animejs/lib/anime.es'
import { hoverShader } from '../resources/hoverShader'

const About = (props) => {
    const [hover, setHover] = useState(false)
    const [zIndex, setZIndex] = useState(-3)
    const [opacity, setOpacity] = useState('100%')
    const aboutRef = useRef()

    useEffect(() => {
        console.log("updated")
        if(props.showAbout){
            setZIndex(3)
            setOpacity('0')
        }
        else if(opacity === '0'){
            fadeOutAnimation()
        }
    }, [props.showAbout])

    const fadeOutAnimation = () => {
        anime({
            targets: aboutRef.current,
            opacity: '1',
            duration: 500,
            easing: 'linear',
            complete: () => {
                console.log("finished animation")
                setZIndex(-3)
                setOpacity('1')
            }
        })
    }

    return (
        // <div className="aboutPage" style={props.showAbout ? {zIndex: 3} : {zIndex: -3}}>
        <div className="aboutPage" style={{zIndex: zIndex}}>
            <div className="aboutContent">
                <div className="aboutDesc">
                    Trish Roque is a multidisciplinary designer and artist based in Toronto. Her practice is focused on the influence of designed environment on human physiological response.
                    <img src={profilePic} className="aboutPic" onMouseMove={e => setHover(true)} onMouseLeave={e => setHover(false)}/>
                    <img src={aboutCircle} className="aboutCircle"/>
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
            <div className="fadePage" ref={aboutRef} style={{opacity: opacity}}/>
        </div>
    )
}

export default About