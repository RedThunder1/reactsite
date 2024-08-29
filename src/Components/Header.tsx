import React from "react";
// @ts-ignore
import logo from '../SpartanLogo.png'
import '../App.css';

export default function Header() {

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"></img>
            <div className="navbar_top">
                <button type="button">Projects</button>
                <button type="button">Contact</button>
            </div>
        </header>
    );

}