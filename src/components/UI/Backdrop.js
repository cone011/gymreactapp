import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const cssClasses = [
    classes.Backdrop,
    props.show ? classes.BackdropOpen : classes.BackdropClosed,
  ];

  return <div className={cssClasses.join(" ")}></div>;
};

export default Backdrop;
