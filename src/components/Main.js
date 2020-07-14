import React, { useState } from 'react'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'
import About from './About'

const Main = () => {
    const rowWidth = -190
    const [horizontalScroll, setHorizontalScroll] = useState(0)
    const [menuScroll, setMenuScroll] = useState(rowWidth)
    const [showAbout, setAbout] = useState(false)

    const onWheel = (event) => {
        event.preventDefault()

        const maxMenuScroll = (window.innerWidth)/(window.innerHeight/100)
        const menuScrollVal = 26

        if(event.deltaY < 0){ //scrollup
            if(menuScroll > rowWidth){
                setMenuScroll(menuScroll - menuScrollVal)
                if(menuScroll <= (rowWidth + 5*menuScrollVal)){
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
        setMenuScroll(rowWidth)
    }

    return (
        <div>
            <SideBar goHome={homePos} showAbout={showAbout} setAbout={setAbout}/>
            <div className="container" onWheel={onWheel}>
                <div className="transition" style={{position: 'relative', height: '100%', left: `${horizontalScroll}vh`, transition: 'left 0.5s' }}>
                    <InvertColors />
                    <Title />
                    <TrishRoque />
                </div>
                <WorkMenu scroll={menuScroll}/>
            </div>
            <About showAbout={showAbout} setAbout={setAbout}/>
        </div>
    )
}

export default Main