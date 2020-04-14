import React from 'react'

const InvertColors = () => {
    const invertClicked = () => {
        console.log("clicked")
    }

    return (
        <div className="invertColors tinyText" onClick={invertClicked}>
            invert colours
        </div>
    )
}

export default InvertColors
