import {StyleButtonNew} from "@/styles/styles";
import React, {useState} from 'react';
import Link from "next/link";
/*import Bisonte from './../assets/bisonte.png';
import Logo from './../assets/logo.png';
import Tabla from './../assets/publicaciones.png';*/
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { TextField, Button } from "@mui/material";
import SideBar from "./SideBar";
import { styled } from '@mui/material/styles';

const foro = () =>{
    return(
        <div>
            <SideBar/>
            <ul className="Titulo-card">  
            <ul className="Interior-card">
            <ul className="Dentro-card">
              <h1>FORO OFICIAL DE INSTITUTO TECNOLÓGICO DE CHIHUAHUA II</h1>
            <img src="/assets/bisonte.png" width={50} height={50} className="Logo-img-2"/>
            <img src="/assets/bisonte.png" width={50} height={50} className="Logo-img"/>
            </ul>
            </ul>
            </ul>

            <ul className="Logo-card">
            <BsFillCaretRightSquareFill size={55}/>
            </ul>
            <TextField
            variant="filled"
            placeholder="Buscar en el foro..." 
            className="Search-card"
            />
            
            <ul className="Logo-card">
           <img src="/assets/publicaciones.png" width={1510} height={260} />
           </ul>
           <button class="btn-todo" onclick="next()">Todo</button>
           <button class="btn-av" onclick="next()">Avisos</button>
           <button class="btn-ay" onclick="next()">Ayuda</button>
           <button class="btn-pr" onclick="next()">Pregunta</button>
           <button class="btn-su" onclick="next()">Sugerencia</button>
           <button class="btn-op" onclick="next()">Objetos Perdidos</button>
           <button class="btn-imp" onclick="next()">Importante</button>

           <Link href="/foro2" passHref>
        <button class="btn-new">
          Nueva Publicación
        </button>
        </Link>

         </div>
         
    )
}
export default foro;    