import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import GenerateIcon from "./GenerateIcon";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <section className={classes.footerSubscription}>
        <p className={classes.footerSubscriptionHeading}>
          Come and Join our gym and reach your goals
        </p>
        <p className={classes.footersSubscriptionText}>
          You can write at any time
        </p>
      </section>
      <div className={classes.footerLinks}>
        <div className={classes.footerLinkWrapper}>
          <div className={classes.footerLinkItems}>
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className={classes.footerLinkItems}>
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className={classes.footerLinkWrapper}>
          <div className={classes.footerLinkWrapper}>
            <div className={classes.footerLinkItems}>
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div className={classes.footerLinkItems}>
              <h2>Social Media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
      </div>

      <section className={classes.socialMedia}>
        <div className={classes.socialMediaWrap}>
          <div className={classes.footerLogo}>
            <GenerateIcon icon={faBaseball} color="white" />
            <small style={{ color: "white" }}> &nbsp;Gym ReactJS &nbsp;</small>
            <small className={classes.websiteRights}>GYM © 2022</small>
          </div>
          <div className={classes.socialIcons}>
            <a
              rel="noopener noreferrer"
              href="https://github.com"
              target="_blank"
              style={{ color: "white" }}
            >
              <GenerateIcon icon={faFacebook} color="white" /> Facebook
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com"
              target="_blank"
              style={{ color: "white" }}
            >
              <GenerateIcon icon={faInstagram} color="white" /> Instagram
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com"
              target="_blank"
              style={{ color: "white" }}
            >
              <GenerateIcon icon={faGithub} color="white" /> Github
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
