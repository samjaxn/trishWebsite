import React, { useState } from 'react'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'

const Main = () => {
    const [horizontalScroll, setHorizontalScroll] = useState(0)
    const [menuScroll, setMenuScroll] = useState(-113)

    const onWheel = (event) => {
        event.preventDefault()

        const maxMenuScroll = (window.innerWidth)/(window.innerHeight/100)
        // const menuScrollVal = (window.innerWidth/5)/(window.innerHeight/100)
        const menuScrollVal = 26

        if(event.deltaY < 0){ //scrollup
            if(menuScroll > -113){
                setMenuScroll(menuScroll - menuScrollVal)
                if(menuScroll <= (-113 + 4*menuScrollVal)){
                    setHorizontalScroll(horizontalScroll + 26)
                }
            }
            else {
                if(horizontalScroll < 0){
                    setHorizontalScroll(horizontalScroll + 26) 
                }
            }
        }
        else{
            if(horizontalScroll > -360){
                setHorizontalScroll(horizontalScroll - 26)
                if(horizontalScroll <= -260){
                    console.log('scroll')
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

    return (
        <div>
            <SideBar />
            <div className="container" onWheel={onWheel}>
                <div style={{position: 'relative', height: '100%', left: `${horizontalScroll}vh`, transition: 'left 0.25s' }}>
                    <InvertColors />
                    <Title />
                    <TrishRoque />
                    
                </div>
                <WorkMenu scroll={menuScroll}/>
            </div>
        </div>
    )
}

export default Main