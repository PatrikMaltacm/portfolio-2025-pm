import React from "react";
import { Link } from "react-scroll";

const NavBar = () =>{
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="hero" smooth={true} duration={500}>Inicio</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>Sobre</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Projetos</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;