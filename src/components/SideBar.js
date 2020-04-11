import React, { useState } from 'react'
import BurgerMenu from "./BurgerMenu"
import whiteBurgerIcon from "../SVGs/whiteBurgerIcon.svg"
import blackBurgerIcon from "../SVGs/burgerIcon.svg"

const SideBar = (props) => {
    const [menuOpen, setMenu] = useState(false)
    const [burgerIcon, setBurgerIcon] = useState(whiteBurgerIcon)

    const burgerClick = () => {
        setMenu(!menuOpen)
        //changeBurgerIcon()
    }

    const changeBurgerIcon = () => {
        if(menuOpen){
            setBurgerIcon(blackBurgerIcon)
        }
        else{
            setBurgerIcon(whiteBurgerIcon)
        }
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
            customBurgerIcon={<img src={burgerIcon} />}/>
            <div className="sideMenu">
                <div className={(menuOpen) ? "verticalLineBlack" : "verticalLineWhite"} />
                {/* <div onClick={()=> burgerClick()}class="bm-burger-button" /> */}
            </div>
        </div>
    )
}

export default SideBar