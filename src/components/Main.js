import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import lerp from 'lerp'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'
import About from './About'

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
    const maxMenuScroll = (window.innerWidth)/(window.innerHeight/100)
    const menuScrollCheck = 26
    const rowWidth = -350
    const maxHorizontalScroll = (rowWidth + 5*menuScrollCheck)

    const [horizontalScroll, setHorizontalScroll] = useState(0)
    const [menuScroll, setMenuScroll] = useState(rowWidth)
    const [showAbout, setAbout] = useState(false)
    const [current, setCurrent] = useState(0)
    const [workScroll, setWorkScroll] = useState(rowWidth)
    const [scrolling, setScrolling] = useState(false)

    const titleRef = useRef()
    const te = useRef()

    const onTouchStart = (event) => {
        te.current = event.touches[0].clientX;
    }

    const onTouchMove = (event) => {

        getScrollPosition(te.current - event.changedTouches[0].clientX)
        te.current = event.changedTouches[0].clientX;
    }

    const onWheel = (event) => {
        //event.preventDefault()
        
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
        ////console.log(val)
        if(val > 25){
            return 25
        }
        else if(val < -25){
            return -25
        }
        return val
    }

    const getScrollPosition = (scroll) => {
        let menuScrollVal = Math.abs(scroll)

        ////console.log(`horizontalScroll: ${horizontalScroll}, scroll: ${scroll}`)
        //console.log(horizontalScroll, menuScroll, menuScrollCheck, rowWidth, maxHorizontalScroll)
        if(scroll < 0){ //scrollup
            
            if(menuScroll > rowWidth){
                setMenuScroll(menuScroll - menuScrollVal)
                if(menuScroll <= maxHorizontalScroll){
                    setHorizontalScroll(horizontalScroll + menuScrollVal)
                }
            }
            else {
                if(horizontalScroll < 0){
                    if(horizontalScroll + menuScrollVal > 0){
                        setHorizontalScroll(0)
                    }
                    else{
                        setHorizontalScroll(horizontalScroll + menuScrollVal) 
                    }
                }
            }
        }
        else{
            if(horizontalScroll > (-8 * menuScrollCheck)){
                setHorizontalScroll(horizontalScroll - menuScrollVal)
                if(horizontalScroll <= (-3 * menuScrollCheck)){
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

    const workPos = () => {
        setHorizontalScroll(-210)
        setMenuScroll(-10)
    }

    const scrollingUpdate = () => {
        if(scrolling == true){
            //console.log("updated")
            setScrolling(false)
        }
    }

    //handling scroll animation
    useLayoutEffect(() => {
        setScrolling(true)
        let diff1 = Math.abs(current - horizontalScroll)
        let diff2 = Math.abs(workScroll - menuScroll)
        let newCurrent

        if(diff1 > 1 || diff2 > 1){
            const animate = () => {
                setCurrent(x => {
                    let diff = Math.abs(x - horizontalScroll)
                    ////console.log(x)
                    if(diff > 0.3){
                        let val = lerp(x, horizontalScroll, 0.3)
                        return parseFloat(val.toFixed(1))
                    }
                    else{
                        return horizontalScroll
                    }
                })
                setWorkScroll(x => {
                    let diff = Math.abs(x - menuScroll)
                    ////console.log(x)
                    if(diff > 0.3){
                        let val = lerp(x, menuScroll, 0.3)
                        return parseFloat(val.toFixed(1))
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

    }, [horizontalScroll, menuScroll])

    return (
        <div>
            <SideBar goHome={homePos} showAbout={showAbout} setAbout={setAbout} goWork={workPos} />
            <div className="container" onWheel={onWheel} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={scrollingUpdate}>
                {/* <div className="" style={{position: 'absolute', height: '100%', translateX: `${-current/2 + 50}vh`}}>
                    <img src={photo} className="workImage" style={{paddingTop: '35vh'}} />
                </div> */}
                <div className="" ref={titleRef} style={{position: 'absolute', height: '100%', left: `calc(8vh + ${current}vh)`}}>
                    <InvertColors />
                    <Title showAbout={showAbout}/>
                    <TrishRoque showAbout={showAbout}/>
                </div>
                <WorkMenu scroll={workScroll} scrolling={scrolling}/>
            </div>
            <About showAbout={showAbout} setAbout={setAbout}/>
        </div>
    )
}

export default Main