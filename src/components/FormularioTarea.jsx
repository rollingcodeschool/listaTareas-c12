// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const [tareas, setTareas] = useState([])

  const agregarTarea = (dato)=>{
    console.log(dato.tarea)
    setTareas([...tareas, dato.tarea])
    reset()
  }

  return (
    <>
    <Form onSubmit={handleSubmit(agregarTarea)}>
      <Form.Group className="mb-1 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Ingresa una tarea" {...register('tarea',{
          required: 'La tarea es un dato obligatorio',
          minLength:{
            value:3,
            message: 'La tarea debe contener como minimo 3 caracteres'
          },
          maxLength:{
            value:50,
            message: 'La tarea debe contener hasta 50 caracteres como maximo'
          }
        })}/>
        <Button variant='info' type='submit'>➕</Button>
      </Form.Group>
      <Form.Text className='text-danger'>{errors.tarea?.message}</Form.Text>
    </Form>
    <ListaTareas tareas={tareas}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
