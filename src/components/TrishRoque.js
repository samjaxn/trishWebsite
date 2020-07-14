import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es'
import arrow from '../SVGs/arrow.svg'

const TrishRoque = () => {
    const trishRef = useRef()

    useEffect(() => {
        anime({
            targets: trishRef.current,
            translateX: '-40vh',
            opacity: '100%',
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: 1500
        })
    }, [])

    return (
            <div className="trishRoque" ref={trishRef}>
                <div style={{display: 'inline-block', width: '100%'}}>
                    <div className="tinyText" style={{float: 'left'}}>
                        scroll to explore
                    </div>
                    <img src={arrow} className="arrow" style={{paddingLeft: '2vh'}}/>
                    <div className="trishDescription" style={{float: 'right'}}>
                        TRISH ROQUE IS A TORONTO-BASED DESIGNER FASCINATED WITH THE INFLUENCE OF <br />
                        DESIGNED ENVIRONMENT ON HUMAN PHYSIOLOGICAL RESPONSE.&lrm;
                    </div>
                </div>
                <div className="scrollDot" />
                <div className="scrollLine" />
                <div className="titleFont trishTitle">TRISH ROQUE</div>
            </div>
            
    )
}

export default TrishRoque
