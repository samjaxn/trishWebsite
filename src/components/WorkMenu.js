import React from 'react'
import Work from './Work'

import acronym from '../content/ACRONYM.mp4'
import brokenHearts from '../content/brokenHearts.png'
import danielaDollars from '../content/daniela.mp4'
import danielaKLFG from '../content/danielaKLFG.mp4'
import equinox from '../content/equinox.gif'
import momentum from '../content/momentum.gif'
import nobis from '../content/nobis.mp4'
import raptors from '../content/raptors.mp4'
import nuit from '../content/nuitBlanche.gif'
import gathering from '../content/theGathering.mp4'
import nike from '../content/nikeAMD.png'

//change the scroll to have the elements move to the left rather than the current way
//or find a way to keep current scroll and the incorporate the new div to change the scrolling type when its fully in view
//might be better to change the way its scrolling right now because the way its scrolling is a little buggy
//instead of the elements on a screen thats being moved into the frame change it so that the elements are now just cutouts and theyre being moved into the frame
//that way the work menu 2 rows can be sitting on the edges of the frame until they're ready to be moved into the frame

const WorkMenu = (props) => {
    return (
        <div className='workMenu'>
            <div className='workRow topRow' style={{display: 'inline-flex', right: `${props.scroll}vh`}}>
                {/* <Work name='RAPTORS' picture={photo} number='01'/> */}
                <Work number='01' name={'ACRONYM'} video={acronym} scrolling={props.scrolling}/>
                <Work number='02' name={'BROKEN\nHEARTS\nGALLERY'} picture={brokenHearts} scrolling={props.scrolling}/>
                <Work number='03' name={'NUIT\nBLANCE'} picture={nuit} scrolling={props.scrolling}/>
                <Work number='04' name={'DANIELA\nANDRADE\n- $$$'} video={danielaDollars} scrolling={props.scrolling}/>
                <Work number='05' name={'EQUINOX'} picture={equinox} scrolling={props.scrolling}/>
                <Work number='06' name={'MOMENTUM'} picture={momentum} scrolling={props.scrolling}/>
                <Work number='07' name={'NOBIS'} video={nobis} scrolling={props.scrolling}/>
                <Work number='08' name={'RAPTORS'} video={raptors} scrolling={props.scrolling}/>
                <Work number='09' name={'THE\nGATHERING'} video={gathering} scrolling={props.scrolling}/>
                <Work number='10' name={'NIKE\nAMD'} picture={nike} scrolling={props.scrolling}/>
            </div>
            <div className='workRow bottomRow' style={{display: 'inline-flex', left: `${props.scroll}vh`}}>
                {/* <Work name='RAPTORS' picture={photo} number='01'/> */}
                <Work number='01' name={'ACRONYM'} video={acronym} scrolling={props.scrolling}/>
                <Work number='02' name={'BROKEN\nHEARTS\nGALLERY'} picture={brokenHearts} scrolling={props.scrolling}/>
                <Work number='03' name={'NUIT\nBLANCE'} picture={nuit} scrolling={props.scrolling}/>
                <Work number='04' name={'DANIELA\nANDRADE\n- $$$'} video={danielaDollars} scrolling={props.scrolling}/>
                <Work number='05' name={'EQUINOX'} picture={equinox} scrolling={props.scrolling}/>
                <Work number='06' name={'MOMENTUM'} picture={momentum} scrolling={props.scrolling}/>
                <Work number='07' name={'NOBIS'} video={nobis} scrolling={props.scrolling}/>
                <Work number='08' name={'RAPTORS'} video={raptors} scrolling={props.scrolling}/>
                <Work number='09' name={'THE\nGATHERING'} video={gathering} scrolling={props.scrolling}/>
                <Work number='10' name={'NIKE\nAMD'} picture={nike} scrolling={props.scrolling}/>
            </div>
        </div>
    )
}

export default WorkMenu
