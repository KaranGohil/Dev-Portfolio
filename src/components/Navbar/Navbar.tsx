import "./navbar.css";

import {HamburgerMenu} from "../HamburgerMenu/HamburgerMenu";
import {Typewriter} from "../Typewriter/Typewriter";
import React from "react";
import {useMediaQuery} from "react-responsive";

export const Navbar = () => {
    const isMobile = useMediaQuery({query: "(max-width: 1224px)"});

    return (
        <div className="navbar-wrapper">
            <Typewriter />
            {!isMobile ? (
                <ul className="navbar-links">
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Experience">Experience</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            ) : (
                <HamburgerMenu />
            )}
        </div>
    );
};
