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
         </div>
         
    )
}
export default foro; 