import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate
import { FaSun, FaMoon } from 'react-icons/fa'; // Importamos los íconos de sol y luna
import './admin.css';

const Admin = ({ userAccount }) => {
  const [books] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10.99', status: 'In Stock' },
    { id: 2, title: '1984', author: 'George Orwell', price: '$8.99', status: 'Out of Stock' },
    { id: 3, title: 'Moby Dick', author: 'Herman Melville', price: '$12.99', status: 'In Stock' },
    { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$9.99', status: 'In Stock' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Hook para redirigir al usuario
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Alternar entre modo oscuro y claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Función para manejar el logout y redirigir a la página principal
  const handleLogout = () => {
    // Aquí podrías limpiar el estado de autenticación si es necesario
    // Por ejemplo, si tienes un contexto o un estado global, lo podrías resetear aquí.

    // Redirige a la HomePage
    navigate('/');
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <aside className="sidebar">
        <div className="logo">
          <h2>BookStore <span className="primary">Admin</span></h2>
        </div>
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/products">Products</Link></li>
            <li><Link to="/admin/orders">Orders</Link></li>
            <li><Link to="/admin/customers">Customers</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
            {/* El botón de logout ha sido transformado en un botón con onClick */}
            <li>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Dashboard</h1>
          {/* Barra de búsqueda */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          {/* Botón para alternar modo oscuro con íconos */}
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <FaSun /> : <FaMoon />} {/* Mostrar el ícono dependiendo del modo */}
          </button>
        </header>

        <section className="stats">
          <div className="stat">
            <h3>Total Sales</h3>
            <p>$52,320</p>
          </div>
          <div className="stat">
            <h3>Total Books</h3>
            <p>{filteredBooks.length}</p>
          </div>
          <div className="stat">
            <h3>New Orders</h3>
            <p>15</p>
          </div>
        </section>

        <section className="recent-books">
          <h2>Recent Books</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.status}</td>
                  <td>
                    <Link to={`/admin/products/${book.id}`} className="btn btn-primary">Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Admin;
