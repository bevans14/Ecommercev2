import React from "react";
import './App.css';
import MMLogo from "../photos/MM-logo.png";
import FacebookLogo from "../photos/facebook-logo.png";
import InstagramLogo from "../photos/insta-logo.png";
import TwitterLogo from "../photos/twitter-logo.png";
import YouTubeLogo from "../photos/youtube-logo.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <ul>
          <section className="MMbox">
            <li>
              <img className="MM" src={MMLogo} alt="Meow Matchmaker Logo" />
            </li>
          </section>
          <section className="footerlogo">
            <a href="https://facebook.com">
              <li>
                <img className="logos" src={FacebookLogo} alt="Facebook logo" />
              </li>
            </a>
            <a href="https://instagram.com">
              <li>
                <img className="logos" src={InstagramLogo} alt="Instagram logo" />
              </li>
            </a>
            <a href="https://twitter.com">
              <li>
                <img className="logos" src={TwitterLogo} alt="Twitter logo" />
              </li>
            </a>
            <a href="https://youtube.com">
              <li>
                <img className="logos" src={YouTubeLogo} alt="YouTube logo" />
              </li>
            </a>
          </section>
          <section className="footerlinks">
            <li className="links">Legal Stuff</li>
            <li className="links">Terms and Conditions</li>
            <li className="links">Security</li>
            <li className="links">Accessibility</li>
            <li className="links">Manage Cookies</li>
          </section>
        </ul>
      </footer>
    </div>
  );
}
