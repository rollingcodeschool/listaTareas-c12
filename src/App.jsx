import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioTarea from './components/FormularioTarea';

function App() {
 
  return (
    <>
    <main className='container my-5'>
     <h1 className='text-center'>Lista de tareas</h1>
     <FormularioTarea></FormularioTarea>
    </main>
    <footer className='bg-dark text-light text-center py-4'>
      <p>Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
