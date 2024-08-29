import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

export default function About() {


    return (
        <div className="About">
            <Link to="/" className="homeButton">Back</Link>
        </div>
    );
}