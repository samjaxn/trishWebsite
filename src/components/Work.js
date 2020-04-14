import React, { useState, useRef } from 'react'
import arrow from '../SVGs/arrow.svg'
import photo from '../content/photo1.png'

const Work = () => {
    const workRef = useRef()
    const [imageOpacity, setOpacity] = useState(0)
    const [mouse, setMouse] = useState([0,0])

    // const mouseOver = (e) => {
    //     //console.log(`x: ${e.clientX}, y: ${e.clientY}`)
    //     let id = document.getElementById("testing")
    //     setMouse([e.clientX - (id.width/2), e.clientY - (id.height/2)])
    //     setOpacity(1)
    // }

    const mouseOver = (e) => {
        console.log(workRef)
        setMouse([e.clientX - (workRef.width/2), e.clientY - (workRef.height/2)])
        setOpacity(1)
    }

    const mouseLeave = (e) => {
        console.log("left")
        setOpacity(0)
    }

    return (
        <div className="work">
            <div className="workElem">
                <div className="tinyText" style={{paddingLeft: '1vh'}}>
                    01
                </div>
                <img src={arrow} className="arrow" style={{paddingLeft: '3vh'}}/>
            </div>
            <div className="workElemTitle" onMouseMove={mouseOver} onMouseLeave={mouseLeave}>
                RAPTORS
            </div>
            {/* <img src={photo} className="workImage" id="testing" style={{opacity: imageOpacity, left: mouse[0], top: mouse[1]}}/> */}
            <img src={photo} className="workImage" ref={workRef}/>
        </div>
    )
}

export default Work