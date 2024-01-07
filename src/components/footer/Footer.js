import React from "react";
import "./Footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="form-container">
        <div className="icons">
          <a
            href="https://github.com/Nayana62"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nayana-n-m-b3b864229/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
          <a href="mailto:nmnayana62@gmail.com">
            <FaEnvelope size={25} />
          </a>
        </div>

        <p>
          Made with <span>❤ </span> by Nayana
        </p>
        <div className="gotohome">
          <Link to="home" smooth={true} duration={500}>
            <FiArrowUp size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
