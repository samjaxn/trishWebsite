import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import lerp from 'lerp'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'
import About from './About'
import photo from '../content/photo1.png'

const useAnimationFrame = (callback) => {
    const requestRef = useRef()
    const previousTimeRef = useRef()

    const animate = (time) => {
        if(previousTimeRef.current != undefined){
            const deltaTime = time - previousTimeRef.current
            callback(deltaTime)
        }
        previousTimeRef.current = false
        requestRef.current = requestAnimationFrame(animate)
    }

    //onStart of this hook
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    }, [])
}

const Main = () => {
    const rowWidth = -190

    const [horizontalScroll, setHorizontalScroll] = useState(0)
    const [menuScroll, setMenuScroll] = useState(rowWidth)
    const [showAbout, setAbout] = useState(false)
    const [current, setCurrent] = useState(0)
    const [workScroll, setWorkScroll] = useState(rowWidth)
    const [touchPos, setTouchPos] = useState(null)

    const titleRef = useRef()

    const onWheel = (event) => {
        event.preventDefault()
        
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
        if(val > 25){
            return 25
        }
        else if(val < -25){
            return -25
        }
        return val
    }

    const getScrollPosition = (scroll) => {
        const maxMenuScroll = (window.innerWidth)/(window.innerHeight/100)
        const menuScrollCheck = 26
        const menuScrollVal = 25

        if(scroll < 0){ //scrollup
            if(menuScroll > rowWidth){
                setMenuScroll(menuScroll - menuScrollVal)
                if(menuScroll <= (rowWidth + 5*menuScrollCheck)){
                    setHorizontalScroll(horizontalScroll + menuScrollVal)
                }
            }
            else {
                if(horizontalScroll < 0){
                    setHorizontalScroll(horizontalScroll + menuScrollVal) 
                }
            }
        }
        else{
            if(horizontalScroll > (-11 * menuScrollCheck)){
                setHorizontalScroll(horizontalScroll - menuScrollVal)
                if(horizontalScroll <= (-6 * menuScrollCheck)){
                    setMenuScroll(menuScroll + menuScrollVal)
                }
            }
            else{
                if(menuScroll < maxMenuScroll){
                    setMenuScroll(menuScroll + menuScrollVal)
                }                
            }
        }
    }

    const homePos = () => {
        setHorizontalScroll(0)
        setMenuScroll(rowWidth)
    }

    //handling scroll animation
    useLayoutEffect(() => {
        let diff1 = Math.abs(current - horizontalScroll)
        let diff2 = Math.abs(workScroll - menuScroll)
        let newCurrent

        if(diff1 > 1 || diff2 > 1){
            const animate = () => {
                setCurrent(x => {
                    let diff = Math.abs(x - horizontalScroll)
                    //console.log(x)
                    if(diff > 0.1){
                        let val = lerp(x, horizontalScroll, 0.05)
                        return parseFloat(val.toFixed(2))
                    }
                    else{
                        return horizontalScroll
                    }
                })
                setWorkScroll(x => {
                    let diff = Math.abs(x - menuScroll)
                    //console.log(x)
                    if(diff > 0.1){
                        let val = lerp(x, menuScroll, 0.05)
                        return parseFloat(val.toFixed(2))
                    }
                    else{
                        return menuScroll
                    }
                })
                newCurrent = requestAnimationFrame(animate)
            }

            newCurrent = requestAnimationFrame(animate)

            return () => cancelAnimationFrame(newCurrent)
        }
        else{
            setCurrent(horizontalScroll)
        }

    }, [horizontalScroll, menuScroll])

    const touchMove = (event) => {
        let touchScroll = event.touches[0].clientX
        let scroll = touchPos - touchScroll
        scroll = 0.001*(getScrollVal(scroll))
        console.log(scroll)

        getScrollPosition(scroll)
        setTouchPos(touchScroll)
    }

    return (
        <div>
            <SideBar goHome={homePos} showAbout={showAbout} setAbout={setAbout}/>
            <div className="container" onWheel={onWheel} onTouchMove={touchMove}>
                {/* <div className="" style={{position: 'absolute', height: '100%', translateX: `${-current/2 + 50}vh`}}>
                    <img src={photo} className="workImage" style={{paddingTop: '35vh'}} />
                </div> */}
                <div className="" ref={titleRef} style={{position: 'absolute', height: '100%', left: `${current + 8}vh`}}>
                    <InvertColors />
                    <Title showAbout={showAbout}/>
                    <TrishRoque showAbout={showAbout}/>
                </div>
                <WorkMenu scroll={workScroll}/>
            </div>
            <About showAbout={showAbout} setAbout={setAbout}/>
        </div>
    )
}

export default Main