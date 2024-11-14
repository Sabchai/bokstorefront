import React, { useState } from 'react';
import './SignIn.css'; 
import { Link, useNavigate } from 'react-router-dom'; // Asegúrate de importar Link
import axios from 'axios';

const SignIn = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitLogin = async (values) => {
    try {
      // Cambiar la URL para que apunte a la ruta de SignIn en lugar de account
      const res = await axios.post('http://localhost:5000/auth/login', values);
      console.log('response SignIn', res.data);
      await localStorage.setItem('token', res.data.token);
      Navigate('/privateRoute'); // Redirige al usuario a la ruta privada
    } catch (err) {
      // Mostrar mensaje de error detallado
      setError(err.response ? err.response.data.msg : 'Error desconocido');
      console.error(err);
    }
  };

  return (
    <div className="wrapper SignUp">
      <a href="index.html">
        <span className="icon-close">
          <ion-icon name="close-outline" />
        </span>
      </a>
      <h2>SignIn</h2>

      {/* Mostrar error si existe */}
      {error && <div className="error-message">{error}</div>}

      {/* Campo Email */}
      <div className="input-box">
        <span className="icon">
          <i className="bx bx-envelope" />
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email</label>
      </div>

      {/* Campo Password */}
      <div className="input-box">
        <span className="icon">
          <ion-icon name="lock-closed-outline" />
        </span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>

      {/* Botón de SignIn */}
      <button
        type="button"
        className="btn"
        onClick={() => submitLogin({  email,  password })}
      >
        SignIn
      </button>

      {/* Enlace para ir al registro */}
      <div className="SignIn-SignUp">
        <p>
          Don't have an account?{' '}
          <Link to="/SignUp" className="SignUp-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
