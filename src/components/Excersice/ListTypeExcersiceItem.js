import { Link } from "react-router-dom";
import classes from "./ListTypeExcersiceItem.module.css";

const ListTypeExcersiceItem = (props) => {
  return (
    <tr key={props.IdTipoEjercicio}>
      <td>{props.Codigo}</td>
      <td>{props.Nombre}</td>
      <td>
        <Link
          className={classes.button}
          to={`/type-excersite/${props.IdTipoEjercicio}`}
        >
          Editar
        </Link>
      </td>
    </tr>
  );
};

export default ListTypeExcersiceItem;
