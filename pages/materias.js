import React, { useState } from 'react';

// Importa tu archivo de estilos CSS personalizado
import SideBar from './SideBar';
import Link from 'next/link';

const materias = () => {
  const [frameSrc, setFrameSrc] = useState(null); // Estado para almacenar la URL del frame

  // Array de las materias que llevas
  const materias = [
    { id: 1, nombre: 'Taller de investigación ll', hora:'9:00-10:00', profe: 'Alonso Bassanetti Villalobos', imagen: "/assets/Ti.jpg" },
    { id: 2, nombre: 'Graficación', hora:' 10:00-11:00',profe:'Luis Rodrigo Bañuelos Hernandez', imagen: "/assets/g.png" },
    { id: 3, nombre: 'Inteligencia Artificial',hora:  '12:00-13:00',profe:'Luis Rodrigo Bañuelos Hernandez', imagen: "/assets/in.jpg" },
    { id: 4, nombre: 'Administración de redes',hora:' 11:00-12:00', profe: 'Jorge Arturo Ruiz Heiras', imagen: "/assets/ad.png" },
  ];

  // Función para manejar el clic en una materia
  const handleClick = (materiaId) => {
    console.log(`Haz clic en la materia con ID ${materiaId}`);
  };

  const openFrame = () => {
    const url = 'https://moodle.chihuahua2.tecnm.mx/login/index.php';
    setFrameSrc(url);
  };

  const openFrame2 = () => {
    const url = 'https://outlook.live.com/owa/'; // Reemplaza con la ruta de la página que deseas cargar en el frame
    setFrameSrc(url);
  };

  return (
    <div className="teams-container">
      <SideBar />
      
   
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Materias</h1>
      
      <div className="materias-container">
        
        {materias.map((materia) => (
          <Link href="/materias2" key={materia.id} passHref>
          <div
            className="materia-card"
            onClick={() => handleClick(materia.id)}
          >
            <img
              src={materia.imagen}
              alt={`Imagen ${materia.nombre}`}
              style={{ width: '100px', height: '100px' }}
            />
            <div className="materia-info">
              <h2 style={{ textAlign: 'center' }}>{materia.nombre}</h2>
              <h2 style={{ textAlign: 'center' }}>{materia.hora}</h2>
              <h2 style={{ textAlign: 'center' }}>{materia.profe}</h2>
            </div>
          </div>
        </Link>
        ))}
         <div className="man">
    <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Mantente conectado con:</h1>
       
<div className="botones-container">
  <button style={{ backgroundColor: '#f2f2f2', color: '#f2f2f2' }} onClick={openFrame}>
    <img src="/assets/a.png" alt="" width="400" height="130" />
  </button>
  <button style={{ backgroundColor: '#f2f2f2', color: '#f2f2f2' }} onClick={openFrame2}>
    <img src="/assets/o.png" alt="" width="400" height="130" />
  </button>
</div>

{frameSrc && <iframe src={frameSrc} title="Frame" width="1519" height="700" />}
</div>

    </div>
    
    </div>
    
  );
};

export default materias;




