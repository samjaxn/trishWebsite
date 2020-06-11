import React, { useState } from 'react'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'
import About from './About'

const Main = () => {
    const [horizontalScroll, setHorizontalScroll] = useState(0)
    const [menuScroll, setMenuScroll] = useState(-113)

    const onWheel = (event) => {
        event.preventDefault()

        const maxMenuScroll = (window.innerWidth)/(window.innerHeight/100)
        const menuScrollVal = 26

        if(event.deltaY < 0){ //scrollup
            if(menuScroll > -113){
                setMenuScroll(menuScroll - menuScrollVal)
                if(menuScroll <= (-113 + 5*menuScrollVal)){
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
            if(horizontalScroll > (-11 * menuScrollVal)){
                setHorizontalScroll(horizontalScroll - menuScrollVal)
                if(horizontalScroll <= (-6 * menuScrollVal)){
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
        setMenuScroll(-113)
    }

    return (
        <div>
            <SideBar goHome={homePos}/>
            <div className="container" onWheel={onWheel}>
                <div style={{position: 'relative', height: '100%', left: `${horizontalScroll}vh`, transition: 'left 0.25s' }}>
                    <InvertColors />
                    <Title />
                    <TrishRoque />
                </div>
                <WorkMenu scroll={menuScroll}/>
            </div>
            <About />
        </div>
    )
}

export default Main