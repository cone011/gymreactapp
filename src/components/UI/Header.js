import { useState } from "react";
import { Link } from "react-router-dom";
import GenerateIcon from "./GenerateIcon";
import classes from "./Header.module.css";
import {
  faHome,
  faWon,
  faMoneyBill,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarContainer}>
        <ul className={click ? classes.navMenuActive : classes.navMenu}>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              <GenerateIcon icon={faHome} /> &nbsp;Home&nbsp;
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              <GenerateIcon icon={faWon} /> &nbsp;Services
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              <GenerateIcon icon={faMoneyBill} /> &nbsp;Membership
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              <GenerateIcon icon={faContactBook} /> &nbsp;Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
