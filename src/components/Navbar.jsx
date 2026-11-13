import { useState } from "react";
import logo from "../assets/img/logo.svg";

export default function Navbar() {
  // Remembers whether the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav-one">
      <a href="/" className="logo">
        <img src={logo} alt="Shortly home" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="nav-menu" className={isOpen ? "nav-menu open" : "nav-menu"}>
        <ul>
          <li id="Features"><a href="#">Features</a></li>
          <li id="Pricing"><a href="#">Pricing</a></li>
          <li id="Resources"><a href="#">Resources</a></li>
        </ul>
        <ul>
          <li id="Login"><a href="#">Login</a></li>
          <li className="intro-buttons"><button type="button">Sign Up</button></li>
        </ul>
      </div>
    </nav>
  );
}