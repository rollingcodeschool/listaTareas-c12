import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
    <ListGroup className="mt-3">
        {
            tareas.map((tarea, indice)=><ItemTarea key={indice} nombreTarea={tarea}></ItemTarea>)
        }
    </ListGroup>
  );
};

export default ListaTareas;
