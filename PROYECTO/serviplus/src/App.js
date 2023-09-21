import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/auth/login';
import CrearCuenta from './page/auth/CrearCuenta';
import Home from './page/home';
import CrearDijiturno from './page/serviplus/crearDijiturno';
import ListarDijiturno from './page/serviplus/listarDijiturno';
import EditTurno from './page/serviplus/editDijiturno';
import TareasTurno from './page/serviplus/tareasDijiturnos';
import CrearTarea from './page/serviplus/crearTarea';
import EditTarea from './page/serviplus/editTarea';

function App() {
  return (
    <div>
      <Fragment>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/crear-cuenta' element={<CrearCuenta />} />
            <Route path='/home' element={<Home />} />
            <Route path='/crear-dijiturno' element={<CrearDijiturno />} />
            <Route path='/listar-dijiturno' element={<ListarDijiturno />} />
            <Route path='/editar-dijiturno/:id' element={<EditTurno />} />
            <Route path='/tareas-dijiturno' element={<TareasTurno />} />
            <Route path='/crear-tarea' element={<CrearTarea />} />
            <Route path='/editar-tarea' element={<EditTarea />} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
