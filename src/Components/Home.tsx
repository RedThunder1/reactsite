import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Home.css';

export default function Home() {

    return (
        <main className="main">
            <div className="name">
                <h1>James Haver</h1>
                <Link to="/About" className="aboutButton">About</Link>
            </div>

        </main>
    );
}