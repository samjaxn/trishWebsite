import React from 'react'
import Work from './Work'
import photo from '../content/photo1.png'

const WorkMenu = () => {
    return (
        <div>
            <Work name='RAPTORS' picture={photo} number='01'/>
            <Work name='RAPTORS2' picture={photo} number='02' style={{top: '40vh', left: '400vh'}}/>
            {/* <Work name='RAPTORS2' picture={photo} number='02' style={{transform: 'translate(10vw, 30vh)'}}/> */}
        </div>
    )
}

export default WorkMenu
