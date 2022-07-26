import classes from "./ExcersiceList.module.css";
import { Table } from "react-bootstrap";
import ExcersiceListItem from "./ExcersiceListItem";

const ExcersiceList = (props) => {
  return (
    <Table bordered hover responsive className="table-sm">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {props.listExercise.map((excersice) => (
          <ExcersiceListItem
            key={excersice.IdEjercicio}
            IdEjercicio={excersice.IdEjercicio}
            Codigo={excersice.Codigo}
            Nombre={excersice.Nombre}
            TipoEjercicio={excersice.TipoEjercicio}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ExcersiceList;
