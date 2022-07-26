import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GenerateIcon = (props) => {
  return <FontAwesomeIcon style={{ color: props.color }} icon={props.icon} />;
};

export default GenerateIcon;
