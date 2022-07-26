import { Link } from "react-router-dom";
import classes from "./SectionInitial.module.css";

const SectionInitial = () => {
  return (
    <div className={classes.heroContainer}>
      <video src="./assets/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className={classes.heroBtns}></div>
      <Link className="btn" to={`/new-type`}>
        Add New Type
      </Link>
    </div>
  );
};

export default SectionInitial;
