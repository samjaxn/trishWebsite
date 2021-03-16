import React from 'react'
import arrow from '../SVGs/arrow.svg'

const InvertColors = () => {
    const invertClicked = () => {
        //console.log("clicked")
    }

    return (
        <div>
            <div className="invertColors tinyText" onClick={invertClicked}>
                <div className="tinyText" style={{float: 'left'}}>
                        scroll to explore
                    </div>
                    <img src={arrow} className="arrow" style={{paddingLeft: '1vh'}}/>
            </div>
        </div>
    )
}

export default InvertColors
