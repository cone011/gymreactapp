import { Link } from "react-router-dom";
import classes from "./ExcersiceListItem.module.css";

const ExcersiceListItem = (props) => {
  console.log(props);
  return (
    <tr key={props.IdEjercicio}>
      <td>{props.Codigo}</td>
      <td>{props.Nombre}</td>
      <td>{props.TipoEjercicio}</td>
      <td>
        <Link
          className={classes.button}
          to={`/type-excersite/${props.IdEjercicio}`}
        >
          Editar
        </Link>
      </td>
    </tr>
  );
};

export default ExcersiceListItem;
