import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <div className="row">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
        </div>
        <div className="row">
          <a href="#">Accessibility</a>
          <a href="#">Partners</a>
        </div>
      </div>
      <div className="social">
        <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook}  />
        </a>
        <a href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <p>© 2024 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
