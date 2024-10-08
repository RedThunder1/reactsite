import React from "react";
// @ts-ignore
import logo from '../Graphics/SpartanLogo.png'
import openContact from './Contact'
import '../Styles/Header.css';
import  "../Styles/Contact.css";

export default function Header() {

    const [open, setOpen] = React.useState(false);

    function openContact() {
        setOpen(!open);
    }

    function SendEmail() {

    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"></img>
            <div className="navbar_top">
                <button type="button">Projects</button>
                <button type="button" onClick={openContact}>Contact</button>
                {open ? (
                    <div className="ContactMenu">
                        <h1>Send me an Email!</h1>
                        <form id="email-form" action="/SendEmail">
                            <input type="text" name="name" placeholder="Name"/><br/>
                            <input type="email" name="email_address" placeholder="Email"/><br/>
                            <br/><textarea name="message" placeholder="Message"/><br/>
                            <input type="submit" value="Send"/>
                        </form>
                        <button type="button" onClick={openContact}>X</button>
                    </div>
                ) : null}
            </div>
        </header>
    );

}