import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav>
            <div className="logo">
                <h1>SimpleFastWeb</h1>
            </div>

            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            <div className={`right-side ${isOpen ? "open" : ""}`}>
                <div className="nav-links">
                    <NavLink to="/" end onClick={closeMenu}>
                        Home
                    </NavLink>

                    <NavLink to="/o-mnie" onClick={closeMenu}>
                        O mnie
                    </NavLink>

                    <NavLink to="/projekty" onClick={closeMenu}>
                        Projekty
                    </NavLink>

                    <NavLink to="/umiejetnosci" onClick={closeMenu}>
                        Umiejętności
                    </NavLink>

                    <NavLink to="/kontakt" onClick={closeMenu}>
                        Kontakt
                    </NavLink>
                </div>

                <a href="#kontakt" className="cta-btn" onClick={closeMenu}>
                    Napisz do mnie
                </a>
            </div>
        </nav>
    );
}