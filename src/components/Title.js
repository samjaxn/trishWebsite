import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es'

const Title = (props) => {
    const refArt = useRef()
    const refDesign = useRef()
    const refMotion = useRef()

    useEffect(() => {
        anime({
            targets: [refArt.current, refDesign.current, refMotion.current],
            translateY: '-20vh',
            opacity: '100%',
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: anime.stagger(500)
        })
    }, [])

    return (
        <div className="titleFont" style={{paddingTop: "25vh"}}>
            <div ref={refArt}>ART</div>
            <div ref={refDesign}>DESIGN</div>
            <div ref={refMotion}>MOTION</div>
        </div>
    )
}

export default Title