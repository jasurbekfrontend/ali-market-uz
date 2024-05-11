import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.png";
import locate from "../assets/svg/locate.svg";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import facebook from "../assets/svg/facebook.svg";
import telegram from "../assets/svg/telegram.svg";
import instagram from "../assets/svg/instagram.svg";
import playmarket from "../assets/svg/playmarket.svg";
import appstore from "../assets/svg/appstore.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footerlogo">
        <img src={logo} alt="" />
      </div>
      <div className="contact">
        <b>Contact Us</b>
        <div className="contactLabel">
          <img src={locate} alt="" />
          <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
        </div>
        <div className="contactLabel">
          <img src={mail} alt="" />
          <p>support@figma.com</p>
        </div>
        <div className="contactLabel">
          <img src={phone} alt="" />
          <p>support@figma.com</p>
        </div>
      </div>
      <div className="footerLinks">
        <Link to="#">About</Link>
        <Link to="#">Features</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Gallery</Link>
        <Link to="#">Team</Link>
      </div>
      <div className="social">
        <b>Follow us</b>
        <div className="icons">
          <button>
            <img src={facebook} alt="" />
          </button>
          <button>
            <img src={telegram} alt="" />
          </button>
          <button>
            <img src={instagram} alt="" />
          </button>
        </div>
        <div className="downloadLinks">
<img src={playmarket} alt="" />
<img src={appstore} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
