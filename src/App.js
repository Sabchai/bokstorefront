import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from "./components/login/SignIn";
import SignUp from "./components/register/SignUp";
import HomePage from './components/HomePage/HomePage'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from './components/admin/Admin';

const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<HomePage/>}/>
        {/* Página de registro */}
        <Route path="/SignUp" element={<SignUp />} />

        {/* Página de inicio de sesión */}
        <Route path="/SignIn" element={<SignIn />} />

        {/* Página del administrador - RUTA PÚBLICA */}
        <Route path="/admin" element={<Admin />} />

        {/* Rutas privadas protegidas */}
        <Route path="/privateRoute" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
