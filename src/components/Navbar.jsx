import React from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaDesktop,
  FaBars,
  FaQrcode,
} from "react-icons/fa";
import Image from "next/image";
import "../styles/Navbar.css";
import link from "../assets/Link.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="hamburger">
        <FaBars className="icon" />
      </div>

      <div className="logo">
        <Image src={link} width={100} height={30} alt="logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search AI agents..." />
        <div>
          <button className="Kicon">
            <FaQrcode className="icon" />
            <p className="Ktag">K</p>
          </button>
        </div>
      </div>

      <div className="actions">
        <FaTwitter className="icon" />
        <FaTelegramPlane className="icon" />
        <FaDesktop className="icon" />
        <button className="buy-btn">Start Buying</button>
      </div>
    </nav>
  );
};

export default Navbar;
