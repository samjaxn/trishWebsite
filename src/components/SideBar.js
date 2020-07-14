import React, { useState } from 'react'
import BurgerMenu from "./BurgerMenu"
import whiteBurgerIcon from "../SVGs/whiteBurgerIcon.svg"
import { set } from 'animejs'

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

    const trishClick = () => {
        //change to incorporate new scrolling
        props.goHome()
        props.setAbout(false)
        setMenu(false)
    }

    const aboutClick = () => {
        props.goHome()
        props.setAbout(true)
        setMenu(false)
    }

    const workClick = () => {
        console.log(`work clicked!`)
    }

    const storeClick = () => {
        console.log(`store clicked!`)
    }

    return (
        <div>
            <BurgerMenu
            isOpen={menuOpen}
            setMenu={setMenu}
            onStateChange={isMenuOpen}
            customBurgerIcon={<div />}
            aboutClick={aboutClick}
            workClick={workClick}
            storeClick={storeClick}/>
            <div className="sideMenu">
                <div className="verticalLine" />
                <div className="topMenu">
                    <img src={burgerIcon} onClick={() => burgerClick()} className="bm-burger-button"/>
                </div>
                <div className="horizontalLine" style={{top: '20vh'}} />
                <div className="middleMenu middleText">
                    TRISHROQUE
                    <span className="sideTitle" onClick={trishClick}>
                        <a>TRISH ROQUE</a>
                    </span>
                    <span>
                        TORONTO
                    </span>
                </div>
                <div className="horizontalLine" style={{top: '80vh'}} />
                <div className="bottomMenu">
                    <div className="bottomLinks">
                        <a href="https://www.behance.net/patriciaro63c0/" target="_blank">BE</a>
                        <a href="https://www.instagram.com/trishroque_/" target="_blank">IN</a>
                        <a href="https://twitter.com/trishroque__" target="_blank">TW</a>
                        <a href="https://www.youtube.com/user/haipatron" target="_blank">YT</a>
                    </div>
                </div>
            </div>
            <div className="sideMenuBackground" />
        </div>
    )
}

export default SideBar