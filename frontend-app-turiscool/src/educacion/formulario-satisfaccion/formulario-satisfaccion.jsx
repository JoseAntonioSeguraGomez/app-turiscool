import "./formulario-satisfaccion.css";
import logo from "../../assets/logo.png";
import loading from "../../assets/Loading_2.gif";
import { useEffect } from "react";

const FormularioSatisfaccion = () => {

  useEffect(() => {
    var modal = document.getElementById("confirmationModal");
    var container = document.getElementById("containerReload");
    var span = document.getElementsByClassName("close")[0];
    var confirmButton = document.getElementById("confirmButton");
    var cancelButton = document.getElementById("cancelButton");

    // Cunado se pulsa el botón de recargar, se muestra el modal
    container.onclick = function() {
      modal.style.display = "block";
  }

  // Cuando el usuario pulsa la X, se cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario pulsa el botón de cancelar, se cierra el modal
  cancelButton.onclick = function() {
      modal.style.display = "none";
  }

  // Cuando el usuario pulsa el botón de confirmar, se cierra el modal y se muestra un mensaje de alerta
  confirmButton.onclick = async function() {
      modal.style.display = "none";
      // Limpiamos el local storage
      localStorage.removeItem('answersObject');
      localStorage.removeItem('courseList');
      localStorage.removeItem('courseCategoriesArray');
      localStorage.removeItem('courNamesArray');
      localStorage.removeItem('recoverySurveyInfoPreData');

      alert('Reiniciando, por favor no cierre ni actualice la página.');

      try {
          const response = await fetch('/reset-averages', {
              method: 'POST'
          });
          if (response.ok) {
              alert('Las medias se han reiniciado con éxito.');
              window.location.reload();
          } 
      } catch (error) {
          console.error('Error:', error);
          alert('Hubo un problema al reiniciar las medias.');
      }
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  }, []);

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header">
        <h1>MEDIA GLOBAL</h1>
        <img id="loading" src={loading} alt="loading" />
        <div id="averageScore"></div>
      </div>

      <h1>MEDIA CATEGORÍAS</h1>
      <div className="topContainer">
        <img id="loading2" src={loading} alt="loading" />
      </div>
      <div id="categoriesContainer"></div>

      <h1>BUSCADOR DE CURSOS</h1>
      <div className="topContainer">
        <div className="navbar">
          <select id="categoryCards"></select>
          <div className="search">
            <input type="text" className="search-input" placeholder="Buscador de cursos" />
            <button className="reset-search" /*onClick={resetSearchCourse}*/>Reset</button>
            <button className="search-btn" /*onClick={searchCourse}*/>Buscar</button>
          </div>
          <div className="menu-icon" /*onClick={toggleMenu}*/>⬇️ MOSTRAR CURSOS ⬇️</div>
          <ul className="menu"></ul>
        </div>
      </div>

      <div id="containerReload">
        <button id="averageReload">
          <img src="https://cdn-icons-png.flaticon.com/512/2499/2499113.png" alt="reload" />
        </button>
        <h4>Refresh</h4>
      </div>

      <div id="confirmationModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img src="https://www.svgrepo.com/show/206435/alert.svg" alt="alert" />
          <p><strong>¿Desea reiniciar las medias?</strong></p>
          <p>El servicio dejará de estar disponible durante varios minutos.</p>
          <div id="containerButton">
            <button id="confirmButton">Confirmar</button>
            <button id="cancelButton">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioSatisfaccion;
