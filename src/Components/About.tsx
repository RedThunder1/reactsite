import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

// @ts-ignore
import logo from '../Graphics/SpartanLogo.png'
// @ts-ignore
import email from '../Graphics/email.256x203.png';
// @ts-ignore
import github from '../Graphics/github-logo.png';
// @ts-ignore
import linkedin from '../Graphics/linkedin-logo.png';

export default function About() {

    return (
        <div className="About">

            <div className="summary">
                <img src={logo} alt="logo"/>
                <h2>James Haver</h2>
                <p>Computer science student studying at UNO </p>
                <h2>Contact Information</h2>
                <div className="contactIcons">
                    <a href="mailto:jameshaver04@gmail.com"><img src={email} alt="email icon"/></a>
                    <a href="https://github.com/RedThunder1"><img src={github} alt="github icon"/></a>
                    <a href="https://www.linkedin.com/in/james-haver/"><img src={linkedin} alt="linkedin logo"/></a>
                </div>
                <p>402-637-3739</p>
            </div>
            <div className="extra">
                <Link to="/" className="homeButton">Back</Link>
                <p>Extra</p>
            </div>
        </div>
    );
}