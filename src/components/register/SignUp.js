import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postAuth } from '../../api/authApi'; // Asegúrate de que esta función esté configurada correctamente
import './SignUp.css'; // Asegúrate de tener este archivo CSS

const SignUp = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState(''); // Corregido el nombre del estado 'Address'

  const handelAdd = async (values) => {
    try {
      await postAuth(values); // Envío de datos al backend
      Navigate('/SignIn'); // Redirigir al login después del registro
    } catch (err) {
      console.log(err); // Manejo de errores
    }
  };

  return (
    <>
      <div className="wrapper SignUp">
        <a href="index.html">
          <span className="icon-close">
            <ion-icon name="close-outline" />
          </span>
        </a>
        <h2>Registration</h2>

        {/* Campo Name */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-user" />
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>

        {/* Campo Username */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-user" />
          </span>
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Username</label>
        </div>

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

        {/* Campo Phone */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-phone" />
          </span>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}  // Usar 'Phone' aquí
          />
          <label>Phone</label>
        </div>

        {/* Campo Address */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-location" />
          </span>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}  // Corregido aquí
          />
          <label>Address</label>
        </div>

        {/* Botón de Registro */}
        <button
          type="button"
          className="btn"
          onClick={() => handelAdd({ name, email, userName, password, address, phone })} // Asegúrate de incluir 'Address' aquí
        >
          Sign Up
        </button>

        {/* Enlace para Iniciar Sesión */}
        <div className="SignIn-SignUp">
          <p>
            Already have an account?{' '}
            <a href="/" className="SignUp-link">
              <button className="btn">
                <Link to={'/SignIn'}>Sign In</Link>
              </button>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
