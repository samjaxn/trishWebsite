import React from 'react'
import Work from './Work'
import photo from '../content/photo1.png'
import video from '../content/ballsBallFinal.mp4'
import video2 from '../content/daily13.mp4'

//change the scroll to have the elements move to the left rather than the current way
//or find a way to keep current scroll and the incorporate the new div to change the scrolling type when its fully in view
//might be better to change the way its scrolling right now because the way its scrolling is a little buggy
//instead of the elements on a screen thats being moved into the frame change it so that the elements are now just cutouts and theyre being moved into the frame
//that way the work menu 2 rows can be sitting on the edges of the frame until they're ready to be moved into the frame

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
            <div style={{display: 'inline-flex', paddingTop: '3vh'}}>
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
