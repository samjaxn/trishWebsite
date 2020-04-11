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

    return (
        <div>
            <BurgerMenu
            isOpen={menuOpen}
            customBurgerIcon={<img src={burgerIcon} />}/>
            <div className="sideMenu">
                <div className="verticalLine" />
                {/* <div onClick={()=> burgerClick()}class="bm-burger-button" /> */}
            </div>
        </div>
    )
}

export default SideBar