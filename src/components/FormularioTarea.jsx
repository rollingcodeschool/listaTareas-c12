// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {Form, Button} from 'react-bootstrap';

const FormularioTarea = () => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Ingresa una tarea" />
        <Button variant='info'>➕</Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioTarea;
