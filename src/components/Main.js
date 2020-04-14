import React from 'react'
import SideBar from './SideBar'
import Title from './Title'
import InvertColors from './InvertColors'
import lerp from 'lerp'
import { getDefaultNormalizer } from '@testing-library/react'

const Main = () => {
    const onWheel = (event) => {
        event.preventDefault()
        let container = document.getElementById('container')
        // container.scrollTo({
        //     top: 0,
        //     right: 5000,
        //     behavior: 'smooth',
        // })
        container.style.scrollBehavior = 'smooth'
        let scrollDistance = (100 * event.deltaY)
        container.scrollLeft += scrollDistance
        // if(container.scrollLeft + scrollDistance < 0){
        //     if(container.scrollLeft !== 0){
        //         container.scrollLeft = 0
        //         console.log('changed')
        //     }
        // }
        // else if(container.scrollLeft + scrollDistance > container.scrollWidth){
        //     if(container.scrollLeft !== container.scrollWidth){
        //         container.scrollLeft = container.scrollWidth
        //         console.log('changed')
        //     }
        // }
        // else{
        //     container.scrollLeft += (100 * event.deltaY)
        // }
    }

    return (
        <div>
            <SideBar />
            <div className="container" id="container" onWheel={onWheel}>
                <InvertColors />
                <Title />
                
            </div>
        </div>
    )
}

export default Main