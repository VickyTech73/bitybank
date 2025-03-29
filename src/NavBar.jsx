import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ButtonAnchor from "./ButtonAnchor";
import "./styles/NavBar.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function menu_action() {
        if (!menuOpen) {
            setMenuOpen(true);
            document.getElementById('menu-btn').innerHTML = "close";
        }
        else {
            setMenuOpen(false);
            document.getElementById('menu-btn').innerHTML = "menu";
        }
    }
    return ( 
        <nav className="landing-nav">

                <span onClick={menu_action} id="menu-btn" className="material-symbols-outlined">menu</span>
                
                {menuOpen && ( 
                    <div id="menu" className="open">
                        <ul>
                            <li><span className="material-symbols-outlined">search</span><ScrollLink onClick={menu_action} smooth={true} duration={500} to="about">About us</ScrollLink></li>
                            <li><span className="material-symbols-outlined">phone</span><ScrollLink onClick={menu_action} smooth={true} duration={500} to="contact">Contact us</ScrollLink></li>
                        </ul>
                    </div>
                )}

                <ScrollLink className="logo" to="home" smooth={true} duration={500}>BityBank</ScrollLink>

                <div className="grouped1">
                    <ScrollLink to="about" smooth={true} duration={500}>About us</ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={200}>Contact us</ScrollLink>
                </div>
                
                <ButtonAnchor url="/signup" text="Signup" />
                <div style={{width:"10px"}}></div> {/* Spacer */}
                <ButtonAnchor url="/login" text="Login" bg="#007bff" />
            </nav>
     );
}
 
export default NavBar;