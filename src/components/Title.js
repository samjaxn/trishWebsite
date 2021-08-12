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
            translateY: ['25vh', '5vh'],
            opacity: ['0', '1'],
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: anime.stagger(500)
        })
    }

    return (
        <div className="titleFont">
            <div ref={refArt}>ART</div>
            <div ref={refDesign}>DESIGN</div>
            <div ref={refMotion}>MOTION</div>
        </div>
    )
}

export default Title