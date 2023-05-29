import React, { useState } from "react";
import SideBar from "./SideBar";
/*import imagenMateria1 from './../assets/Ti.jpg';
import imagenPublic from './../assets/Public.png';
import imagenArchivos from './../assets/arch.png';*/

const Materias2 = () => {
  const [selectedOption, setSelectedOption] = useState("PUBLICACIONES");
  const [showArchivos, setShowArchivos] = useState(false);

  const handleOptionClick = (option) => {
    if (option === "ARCHIVOS") {
      setShowArchivos(true);
      setSelectedOption(option);
    } else {
      setShowArchivos(false);
      setSelectedOption(option);
    }
  };
  

  const renderPublicaciones = () => {
    if (selectedOption === "PUBLICACIONES") {
      return (
        <div className="publicaciones-container">
          <div className="image-container">
            <img src="/assets/Public.png" alt="Publicacion" className="materia-image" />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="content">
      <SideBar />
      <h1>TALLER DE INVESTIGACIÓN</h1>

      <div className="materias2-container">
        <div className="sidebar">
          <img src="/assets/Ti.jpg" alt="Materia 1" className="materia-image" />

          <div className="materia-info">
            <p>
              Lunes-Jueves <br />
              9:00-10:00 <br />
              Alonso Bassanetti Villalobos<br />
              20 miembros
            </p>
          </div>

          <ul>
            <li
              className={selectedOption === "PUBLICACIONES" ? "active" : ""}
              onClick={() => handleOptionClick("PUBLICACIONES")}
            >
              PUBLICACIONES
            </li>
            <li
              className={selectedOption === "TAREAS" ? "active" : ""}
              onClick={() => handleOptionClick("TAREAS")}
            >
              TAREAS
            </li>
            <li
              className={selectedOption === "ARCHIVOS" ? "active" : ""}
              onClick={() => handleOptionClick("ARCHIVOS")}
            >
              ARCHIVOS
            </li>
            <li
              className={selectedOption === "ENVIAR MENSAJE" ? "active" : ""}
              onClick={() => handleOptionClick("ENVIAR MENSAJE")}
            >
              ENVIAR MENSAJE
            </li>
          </ul>

          <div className="materia-info">
            <p>
              Curso disponible de <br />
              30/01/2023-12/06/2023<br />
            </p>
          </div>
        </div>
        {selectedOption === "TAREAS" && <Tareas />}
        {renderPublicaciones()}
        {showArchivos && (
          <div className="archivos-container">
            <img src="/assets/arch.png" alt="Archivos" className="archivo-image" />
          </div>
        )}
      </div>
    </div>
  );
};

const Tareas = () => {
  const [filtro, setFiltro] = useState(null);

  const tareasPendientes = [
    { id: 1, titulo: 'EXPOSICIONES', descripcion: 'Exposiciones unidad 1', fechaLimite: '2023-06-01', proxima: true },
    { id: 2, titulo: 'EXPOSICIONES', descripcion: 'Exposiciones unidad 2', fechaLimite: '2023-06-05', entregada: true },
    { id: 4, titulo: 'INVESTIGACION', descripcion: 'Invesigar estado del arte', fechaLimite: '2023-06-10', entregada: true },
    { id: 3, titulo: 'PRACTICA', descripcion: 'Investigacion', fechaLimite: '2023-06-10', Noentregada: true },
    { id: 5, titulo: 'INVESTIGACION', descripcion: 'Investigar tipos de conocimiento', fechaLimite: '2023-06-10', Noentregada: true },
    { id: 6, titulo: 'PROYECTO FINAL', descripcion: 'Entrega del reporte final', fechaLimite: '2023-06-10', Noentregada: true },
  ];

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const tareasFiltradas = filtro
    ? tareasPendientes.filter((tarea) => {
        if (filtro === "proxima") {
          return tarea.proxima;
        } else if (filtro === "entregadas") {
          return tarea.entregada;
        } if (filtro === "NoEntregadas") {
          return tarea.Noentregada;
        }
        return true;
      })
    : tareasPendientes;

  return (
    <div className="tareas-container">
      <div className="filtro-barra">
        <button onClick={() => filtrarTareas('proxima')}>Proxima</button>
        <button onClick={() => filtrarTareas('NoEntregadas')}>No Entregadas</button>
        <button onClick={() => filtrarTareas('entregadas')}>Entregadas</button>
      </div>
      <div>
        <ul className="tareas-lista">
          {tareasFiltradas.map((tarea) => (
            <li className="tarea-card" key={tarea.id} style={{ backgroundColor: tarea.entregada ? '#c4ecc4' : tarea.Noentregada ? '#ff7272' : tarea.proxima ? '#e2ff77' : '' }}>
              <h3>{tarea.titulo}</h3>
              <p>{tarea.descripcion}</p>
              <p>Fecha límite: {tarea.fechaLimite}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Materias2;

