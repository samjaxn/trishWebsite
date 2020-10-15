import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es'

const Title = (props) => {
    const refArt = useRef()
    const refDesign = useRef()
    const refMotion = useRef()

    //useEffect below is used as an onMount
    useEffect(() => {
        if(!props.showAbout){
            startUpAnimation()
        }
        else{
            
        }
    }, [props.showAbout])

    const startUpAnimation = () => {
        anime({
            targets: [refArt.current, refDesign.current, refMotion.current],
            translateY: '-20vh',
            opacity: '1',
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: anime.stagger(500)
        })
    }

    return (
        <div className="titleFont" style={{paddingTop: "25vh"}}>
            <div ref={refArt} style={{opacity: '0'}}>ART</div>
            <div ref={refDesign} style={{opacity: '0'}}>DESIGN</div>
            <div ref={refMotion} style={{opacity: '0'}}>MOTION</div>
        </div>
    )
}

export default Title