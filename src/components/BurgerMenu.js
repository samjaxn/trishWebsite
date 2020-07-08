import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu"
import crossIcon from "../SVGs/crossIcon.svg"

var styles = {
    bmCrossButton: {
        height: '6vw',
        width: '6vw',
        top: '2.5vw',
        right: '2.5vw',
    }
}

const BurgerMenu = (props) => {
    return (
        <div>
            <Menu
            styles={ styles }
            disableAutoFocus
            customCrossIcon={ <img src={crossIcon} /> }
            width={'100vw'}
            {...props}>
                <p className="menu-item menuLabel">
                    WORK
                </p>
                <p className="menu-item menuLabel" onClick={props.aboutClick}>
                    ABOUT
                </p>
                <p className="menu-item menuLabel">
                    STORE
                </p>
                <p className="sideMenuFooter">DESIGN,TRISH ROQUE DEVELOPMENT, JACKYJ</p>
            </Menu>
        </div>
    )
}

export default BurgerMenu