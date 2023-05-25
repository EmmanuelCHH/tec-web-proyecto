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
const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: 'inline-block',
  color: '#F2B023',
  borderColor: '#F2B023',
  '&:hover': {
    backgroundColor: '#F2B023',
    color: '#FFFFFF',
    borderColor: '#F2B023'
  },
}));
const foro = () =>{
    return(
        <div>
            <SideBar/>
            <ul className="Titulo-card">  
            <ul className="Interior-card">
            <ul className="Dentro-card">
            <h1> INSTITUTO TECNOLÓGICO DE CHIHUAHUA II</h1>
                <h1><b>FORO OFICIAL</b></h1>
                <img src="/assets/logo.png" width={110} height={110} className="Logo-img"/>

                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img"/>
                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-2"/>
                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-3"/>
                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-4"/>

                

                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-5"/>
                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-6"/>
                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-7"/>
                <img src="/assets/bisonte.png" width={50} height={50} className="Bull-img-8"/>

                <img src="/assets/logo.p" width={110} height={110} className="Logo-img-2"/>

            </ul>
            </ul>
            </ul>
            <ul className="Logo-card">
            <BsFillCaretRightSquareFill size={55}/>
            <TextField
            variant="filled"
            placeholder="Buscar en el foro..." 
            className="Search-card"
            />
            </ul>
            
           <ul className="Logo-card">
           <img src="/assets/publicaciones.png" width={1463} height={242} />
           </ul>
           <button class="btn" onclick="next()">Todo</button>
           <button class="btn-av" onclick="next()">Avisos</button>
           <button class="btn-ay" onclick="next()">Ayuda</button>
           <button class="btn-pr" onclick="next()">Pregunta</button>
           <button class="btn-su" onclick="next()">Sugerencia</button>
           <button class="btn-op" onclick="next()">Objetos Perdidos</button>
           <button class="btn-imp" onclick="next()">Importante</button>
           <Link href="/foro2" passHref>
            <CustomButton variant="outlined" size="large" className="text-3xl rounded-full">
                Nueva publicaciones
            </CustomButton>
            </Link>

         </div>
         
    )
}
export default foro;    