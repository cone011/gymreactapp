import { Table } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import classes from "./ListTypeExcersice.module.css";
import ListTypeExcersiceItem from "./ListTypeExcersiceItem";

const ListTypeExcersice = (props) => {
  return (
    <Table bordered hover responsive className="table-sm">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {props.listTypes.map((typeExcersie) => (
          <ListTypeExcersiceItem
            key={typeExcersie.IdTipoEjercicio}
            IdTipoEjercicio={typeExcersie.IdTipoEjercicio}
            Codigo={typeExcersie.Codigo}
            Nombre={typeExcersie.Nombre}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ListTypeExcersice;
