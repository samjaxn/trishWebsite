import React from 'react'

const InvertColors = () => {
    const invertClicked = () => {
        console.log("clicked")
    }

    return (
        <div>
            <div className="invertColors tinyText" onClick={invertClicked}>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}

export default InvertColors
