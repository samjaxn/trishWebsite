import React, { useState, useRef } from 'react'
import arrow from '../SVGs/arrow.svg'

const Work = (props) => {
    const workRef = useRef()
    const [imageOpacity, setOpacity] = useState(0)
    const [mouse, setMouse] = useState([0,0])

    const mouseOver = (e) => {
        setMouse([e.clientX - (workRef.current.width/2), e.clientY - (workRef.current.height/2)])
        console.log(`x: ${mouse[0]}, y: ${mouse[1]}`)
        setOpacity(1)
    }

    const mouseLeave = (e) => {
        console.log("left")
        setOpacity(0)
    }

    return (
        <div className="work" style={props.style}>
            {/* <div style={props.style}> */}
                <div className="workElem">
                    <div className="tinyText" style={{paddingLeft: '1vh'}}>
                        {props.number}
                    </div>
                    <img src={arrow} className="arrow" style={{paddingLeft: '3vh'}}/>
                </div>
                <div className="workElemTitle" onMouseMove={mouseOver} onMouseLeave={mouseLeave}>
                    {props.name}
                </div>
            {/* </div> */}
            
            <img src={props.picture} className="workImage" ref={workRef} style={{opacity: imageOpacity, left: mouse[0], top: mouse[1]}}/>
        </div>
    )
}

export default Work