import React from 'react';
import SideBar from './SideBar';


const Tareas = () => {
  return (
    <div>
      <SideBar />
      <TareasPendientes materia={{ nombre: '' }} />
    </div>
  );
};

const TareasPendientes = ({ materia }) => {
  const tareasPendientes = [
    { id: 1, titulo: 'Taller de investigación ll', descripcion: 'Realizar una presentación', fechaLimite: '2023-06-01', proxima: true },
    { id: 2, titulo: 'Administración de redes', descripcion: 'Investigar sobre OpenMediaVault', fechaLimite: '2023-06-05', entregada: true },
    { id: 4, titulo: 'Administracion de redes', descripcion: 'Práctica de VPN', fechaLimite: '2023-06-10', entregada: true },
    { id: 3, titulo: 'Graficación', descripcion: 'Práctica de luces', fechaLimite: '2023-06-10', Noentregada: true }
    ,
   
    { id: 5, titulo: 'Graficación', descripcion: 'Práctica de moviemiento', fechaLimite: '2023-06-10', Noentregada: true },
    { id: 6, titulo: 'Pentesting', descripcion: 'Reporte final pentester', fechaLimite: '2023-06-10', Noentregada: true },

  ];

  const filtrarTareas = (filtro) => {
   
    console.log(`Filtrar tareas por: ${filtro}`);
  };

  return (
    <div className="tareas-container">
      <h1 className="titulo-seccion" style={{ textAlign: 'center', fontSize: '40px' }}>Sección de tareas</h1>
      <h2>{materia.nombre}</h2>
      <div className="filtro-barra">
        <button onClick={() => filtrarTareas('atrasadas')}>Tareas atrasadas</button>
        <button onClick={() => filtrarTareas('todas')}>Ver todas</button>
        <button onClick={() => filtrarTareas('entregadas')}>Ver entregadas</button>
      </div>
      <div>
        <ul className="tareas-lista">
          {tareasPendientes.map((tarea) => (
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

export default Tareas;