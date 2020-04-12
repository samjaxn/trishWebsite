import React, { useState } from 'react'
import BurgerMenu from "./BurgerMenu"
import whiteBurgerIcon from "../SVGs/whiteBurgerIcon.svg"
import blackBurgerIcon from "../SVGs/burgerIcon.svg"

const SideBar = (props) => {
    const [menuOpen, setMenu] = useState(false)
    const [burgerIcon, setBurgerIcon] = useState(whiteBurgerIcon)

    const burgerClick = () => {
        setMenu(!menuOpen)
    }

    const isMenuOpen = (state) => {
        console.log(`is menu open: ${state.isOpen}`)
        setMenu(state.isOpen)
        return state.isOpen
    }

    return (
        <div>
            <BurgerMenu
            isOpen={menuOpen}
            onStateChange={isMenuOpen}
            customBurgerIcon={<div />}/>
            <div className="sideMenu">
                <div className="verticalLine" />
                <div className="topMenu">
                    <img src={burgerIcon} onClick={() => burgerClick()} className="bm-burger-button"/>
                </div>
                <div className="horizontalLine" style={{top: '20vh'}} />
                <div className="middleMenu">
                    <div className="sideTitle">
                        <p>TRISH ROQUE</p>
                    </div>
                </div>
                <div className="horizontalLine" style={{top: '80vh'}} />
                <div className="bottomMenu">
                    <div className="bottomLinks">
                        <a>BE</a>
                        <a>IN</a>
                        <a>TW</a>
                        <a>YT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar