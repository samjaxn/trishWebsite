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
                <img src={burgerIcon} onClick={() => burgerClick()} className="bm-burger-button"/>
                <div className={"verticalLine"} />
                <div className="sideTitle">
                    <p>TRISH ROQUE</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar