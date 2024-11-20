import React, { useState, useEffect } from "react";
import "./Home.css"; // Asegúrate de tener este archivo de estilos CSS o SCSS

const HomePage = () => {
  const [isImageScaled, setIsImageScaled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Detecta el desplazamiento de la página para mostrar el botón de volver arriba
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true); // Muestra el botón cuando se desplace más de 300px
    } else {
      setShowScrollButton(false); // Oculta el botón cuando está en la parte superior
    }
  };

  // Manejar el clic del botón central del ratón
  const handleMouseClick = (event) => {
    if (event.button === 1) { // Detecta el botón central del ratón (botón de la rueda)
      setIsImageScaled(!isImageScaled); // Alternar el estado de escala
    }
  };

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desplazamiento suave hacia arriba
    });
  };

  // Añadir un event listener para el scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper" onMouseDown={handleMouseClick}> {/* Detecta el clic dentro del contenedor */}
      <div className="content">
        <section className="section hero">
          <header className="header">
            <div className="logo__menu">
              <h2 id="logo">Today a reader, tomorrow a leader</h2>
            </div>
          </header>
        </section>
        <section className="section gradient-purple" />
        <section className="section gradient-blue" />
      </div>

      <div className="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="home"
          className={isImageScaled ? "scaled" : ""}
        />
      </div>

      <div className="auth-buttons-container">
        <div className="auth-buttons">
          <a href="/SignIn" className="button button-primary">
            Sign In
          </a>
          <a href="/SignUp" className="button">
            Sign Up
          </a>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
