import axios from 'axios';

// Función para realizar el registro de un nuevo usuario
export const postAuth = async (values) => {
  try {
    // Hacer la solicitud POST para registrar al usuario
    await axios.post('http://localhost:5000/auth/register', { ...values });
    // Si necesitas hacer algo después de esta solicitud, puedes manejarlo aquí
    // Ejemplo: Si quieres manejar un mensaje o redirigir al usuario
    console.log('User registered successfully');
  } catch (error) {
    console.error('Error during sign-up:', error);
    throw error; // Lanza el error para que se maneje donde se hace la llamada
  }
};

// Función para obtener los datos del usuario desde la API (ruta protegida)
export const fetchUser = async () => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get('http://localhost:5000/auth/account', {
    headers: { Authorization: token }  // Correct way to send the token
  });
  console.log(data)
  console.log(token,'token2')
  return data;
};

