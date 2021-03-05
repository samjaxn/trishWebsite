import React, { useState, useRef, useEffect } from 'react'
import profilePic from '../content/aboutPic.jpg'
import aboutCircle from '../SVGs/aboutCircle.svg'
import anime from 'animejs/lib/anime.es'
import { hoverShader } from '../resources/hoverShader'

const About = (props) => {
    const [hover, setHover] = useState(false)
    const [zIndex, setZIndex] = useState(-3)
    const [opacity, setOpacity] = useState('100%')
    const [scrollVal, setScroll] = useState(0)
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
    
    const handleResize = () => {
        setScroll(0)
    }

    window.addEventListener('resize', handleResize)

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
                setScroll(0)
            }
        })
    }

    const te = useRef()

    const onTouchStart = (event) => {
        te.current = event.touches[0].clientX;
    }

    const onTouchMove = (event) => {

        getScrollPosition(te.current - event.changedTouches[0].clientX)
        te.current = event.changedTouches[0].clientX;
    }

    const onWheel = (event) => {
        let xScroll = Math.abs(event.deltaX)
        let yScroll = Math.abs(event.deltaY)

        let scroll = getScrollDirection(xScroll, yScroll, event.deltaX, event.deltaY)
        scroll = getScrollVal(scroll)

        getScrollPosition(scroll)
    }

    const getScrollDirection = (xAbs, yAbs, xVal, yVal) => {
        if(xAbs > yAbs){
            return xVal
        }
        return yVal
    }

    const getScrollVal = (val) => {
        //console.log(val)
        val = val * 3
        if(val > 25){
            return 25
        }
        else if(val < -25){
            return -25
        }
        return val
    }

    const getScrollPosition = (scroll) => {
        
        if(aboutContentRef.current){
            let scrollPos = scrollVal - scroll
            console.log(scrollPos, window.innerWidth, -930 + window.innerWidth)
            if(window.innerWidth < 930){
                if(scrollPos > 0){
                    console.log("least")
                    scrollPos = 0
                }
                else if(scrollPos < -930 + window.innerWidth ){
                    console.log("most")
                    scrollPos = -930 + window.innerWidth
                }
            setScroll(scrollPos)
            }
            
            
            //console.log(scrollPos, scrollPos - window.innerWidth)
        }
        //console.log(aboutContentRef.current.offsetWidth)
    }

    const aboutContentRef = useRef()

    return (
        <div className="aboutPage" style={{zIndex: zIndex}} ref={aboutContentRef} onWheel={onWheel} onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
            <div className="aboutContent" style={{left: `${scrollVal}px`}}>
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