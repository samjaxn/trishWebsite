import React, { useState } from 'react'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'

const Main = () => {
    const [horizontalScroll, setHorizontalScroll] = useState(0)
    const [menuScroll, setMenuScroll] = useState(0)

    const onWheel = (event) => {
        event.preventDefault()
        if(event.deltaY < 0){ //scrollup
            if(menuScroll > 0){
                setMenuScroll(menuScroll - 30)
                console.log("menuScrollDown")
            }
            else {
                if(horizontalScroll < 0){
                    setHorizontalScroll(horizontalScroll + 30) 
                }
            }
        }
        else{
            if(horizontalScroll > -360){
                setHorizontalScroll(horizontalScroll - 30)
            }
            else{
                setMenuScroll(menuScroll + 30)
                console.log("menuScrollUp")
            }
        }
        //console.log(scrollDistance)
        // let container = document.getElementById('container')

        // container.style.scrollBehavior = 'smooth'
        // container.scrollLeft += scrollDistance
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
                <WorkMenu />
            </div>
        </div>
    )
}

export default Main