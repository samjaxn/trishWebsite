import React from 'react'
import Work from './Work'
import photo from '../content/photo1.png'
import video from '../content/ballsBallFinal.mp4'
import video2 from '../content/daily13.mp4'

const WorkMenu = () => {
    return (
        <div className='workMenu'>
            <div style={{display: 'inline-flex'}}>
                {/* <Work name='RAPTORS' picture={photo} number='01'/> */}
                <Work name='RAPTORS2' picture={photo} number='02'/>
                <Work name='RAPTORS3' video={video} number='03'/>
                <Work name='POOP' video={video2} number='04'/>
                {/* <Work name='RAPTORS2' picture={photo} number='02' style={{transform: 'translate(10vw, 30vh)'}}/> */}
            </div>
        </div>
    )
}

export default WorkMenu
