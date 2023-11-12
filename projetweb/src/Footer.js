import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
      <div className="footer">
        <div className="social-icons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <p>&copy; 2023 Your Website Name. All rights reserved.</p>

        </div>
      </div>
    );
  };
  
  export default Footer;
  
