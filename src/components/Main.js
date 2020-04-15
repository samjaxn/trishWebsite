import React from 'react'
import SideBar from './SideBar'
import Title from './Title'
import TrishRoque from './TrishRoque'
import InvertColors from './InvertColors'
import WorkMenu from './WorkMenu'

const Main = () => {
    const onWheel = (event) => {
        event.preventDefault()
        let scrollDistance = (100 * event.deltaY)
        let container = document.getElementById('container')

        container.style.scrollBehavior = 'smooth'
        container.scrollLeft += scrollDistance
    }

    return (
        <div>
            <SideBar />
            <div className="container" id="container" onWheel={onWheel}>
                <div style={{position: 'relative', height: '100%' }}>
                    <InvertColors />
                    <Title />
                    <TrishRoque />
                    <WorkMenu />
                </div>
            </div>
        </div>
    )
}

export default Main