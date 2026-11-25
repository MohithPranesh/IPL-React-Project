import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2>IPL 2026</h2>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#matches" onClick={() => setMenuOpen(false)}>Matches</a>
                <a href="#booking" onClick={() => setMenuOpen(false)}>Book Tickets</a>
            </div>
        </nav>
    );
}

export default Navbar;
