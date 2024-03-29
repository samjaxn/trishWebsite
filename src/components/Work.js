import React, { useState, useRef, useLayoutEffect } from 'react'
import arrow from '../SVGs/arrow.svg'

const Work = (props) => {
    const workRef = useRef()
    const [imageOpacity, setOpacity] = useState(0)
    const [imageClicked, setImageClick] = useState(false)
    const [mouse, setMouse] = useState([0,0])

    const mouseOver = (e) => {
        setMouse([e.clientX - (workRef.current.clientWidth/2), e.clientY - (workRef.current.clientHeight/2)])
        setOpacity(1)
        // //console.log(imageOpacity);
        //console.log(`x: ${mouse[0]}, y: ${mouse[1]}`)
        ////console.log(workRef)
    }

    const mouseLeave = (e) => {
        //console.log(workRef)
        setOpacity(0)
    }

    const onClick = (e) => {
        //console.log(e)
        //console.log(imageOpacity)
        if(imageClicked === true){
            mouseLeave(e)
        }
        else{
            mouseOver(e)
        }
        setImageClick(!imageClicked)
        if(props.link){
            console.log(props.link)
            window.open(props.link, "_blank")
        }
    }

    useLayoutEffect(() => {
        mouseLeave()
    }, [props.scrolling])

    return (
        <div className="work" style={props.style}>
            {props.video != null
                ? <video className='workImage' ref={workRef} autoplay='' loop={true} muted={true} style={{opacity: imageOpacity, left: mouse[0], top: mouse[1]}}>
                    <source src={props.video} type='video/mp4'></source>
                </video>
                : <img src={props.picture} className="workImage" ref={workRef} style={{opacity: imageOpacity, left: mouse[0], top: mouse[1]}}/>
            }
            <div className="workElemNumber">
                <div className="tinyText" style={{float: 'left', paddingLeft: '1vmin'}}>
                    {props.number}
                </div>
                <img src={arrow} className="arrow" style={{paddingLeft: '0.5vh'}}/>
            </div>
            <div className="workElemTitle" onMouseMove={mouseOver} onMouseLeave={mouseLeave} onMouseUp={onClick}>
                {props.name}
            </div>
        </div>
    )
}

export default Work