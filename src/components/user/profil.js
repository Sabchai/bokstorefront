// src/user/Profile.js
import React from 'react';

const Profile = () => {
  const user = {
    name: 'Juan Pérez',
    email: 'juan@correo.com',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTj4X8jVrYXgvQxymsWIBAyv4qHs8ozhQKw&s',
    role: 'user',  
    Phone: '+34 612 345 678',
    Location: 'Madrid, España',
  };

  return (
    <div className="profile">
      <img src={user.picture} alt="Perfil" className="profile-pic" />
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.Phone}</p>
      <p><strong>Location:</strong> {user.Location}</p>
      <p><strong>Rol:</strong> {user.role}</p> {/* Mostramos el rol del usuario */}
    </div>
  );
}

export default Profile;
