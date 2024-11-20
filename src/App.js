import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from "./components/login/SignIn";
import SignUp from "./components/register/SignUp";
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from './components/admin/Admin';
import './App.css';

const App = () => {
  return (
    <div>
      {/* Coloca el Navbar fuera de Routes para que aparezca en todas las páginas */}
      <Navbar /> 

      <Routes>
        {/* Definir las rutas aquí */}
        <Route path='/' element={<HomePage />} />
        
        {/* Página de registro */}
        <Route path="/SignUp" element={<SignUp />} />

        {/* Página de inicio de sesión */}
        <Route path="/SignIn" element={<SignIn />} />

        {/* Página del administrador */}
        <Route path="/admin/*" element={<Admin />} />

        {/* Rutas privadas protegidas */}
        <Route path="/privateRoute" element={<PrivateRoute />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
