import React from "react";
import fac from "./assets/Vector.png";
import insta from "./assets/Vector-1.png";
import tweet from "./assets/Vector-2.png";

import "./App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-links-container">
        <div className="footer-office-address">
          <div className="icon-title">
            <div className="title text-16">Xtremecars:</div>
          </div>
          <div className="office-address-text text-14">
            12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai -
            400705. Maharashtra, India. Phone: +91 (22) 612 800000
          </div>
        </div>
        <div className="footer-col-1 text-16">
          <div className="title">Legal</div>
          <div className="top-head">
            <li>Legal Disclaimer/Imprint</li>
            <li>Privacy Policy </li>
            <li>Cookie Policy</li>
          </div>
        </div>
        <div className="footer-col-2 text-16">
          <div className="title">Contact</div>
          <div className="top-head">
            <li>Request a Test Drive</li>
            <li>Book Car</li>
            <li>Career</li>
            <li>Contact Us </li>
          </div>
        </div>
        <div className="footer-col-3 text-16">
          <div className="title">Connect with us</div>
          <div className="top-head">
            <li>
              <img src={fac} />
            </li>
            <li>
              <img src={insta} />
            </li>
            <li>
              <img src={tweet} />
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
