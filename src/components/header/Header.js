import React from 'react'
import logo from '../../assets/cw.svg'
import style from "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
        </div>
    )
}
