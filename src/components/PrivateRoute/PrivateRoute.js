import React, { useEffect, useState } from 'react';
import { fetchUser } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const [userAccount, setUserAccount] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fonction pour obtenir les données de l'utilisateur
  const getAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token is missing');
        navigate('/SignIn');  // Rediriger vers la page de connexion si le token est manquant
        return;
      }
console.log(token)
      const data = await fetchUser();
      console.log('Data fetched user:', data);

      setUserAccount(data)
    } catch (err) {
      setError('Error al obtener los datos del usuario.');
      console.error(err);
      // Rediriger vers la page de connexion en cas d'erreur
    }
  };

  useEffect(() => {
    getAccount();  // Appeler la fonction pour obtenir la compte de l'utilisateur
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/SignIn');
  };

  

  if (error) {
    return <div>{error}</div>;  // Afficher une erreur si un problème survient
  }

  return (
    <div>
      <h1>Bienvenue {userAccount.name} </h1>  {/* Afficher le nom d'utilisateur si disponible */}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default PrivateRoute;
