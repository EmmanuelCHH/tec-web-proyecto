import home from './login'; // Asegúrate de proporcionar la ruta correcta a tu archivo de inicio personalizado
import { Avatar } from "@mui/material";
import Link from 'next/link';
import { StyledContainer, colors } from '@/styles/styles';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

//Crea un custom button modificando sus colores 
const CustomButton = styled(Button)(({ theme }) => ({
  color: '#F2B023',
  borderColor: '#F2B023',
  '&:hover': {
    backgroundColor: '#F2B023',
    color: '#FFFFFF',
    borderColor: '#F2B023'
  },
}));

export default function Index() {
  return (
    <StyledContainer>
        <div className="flex flex-col items-center" >
        <div>
        <Avatar
        sx={{ width: 100, height: 100, marginBottom: 1, mt: -29 }}
        src="/assets/logo.png"
        />
        </div>
        <h1 className="T1H">Bienvenido a la página oficial del TEC 2</h1>
        <h2 className="T2H">Una página especial para nuestros alumnos</h2>
   
        <Link href="/login" passHref>
        <CustomButton variant="outlined"  className='text-3xl rounded-full'>
          Login
        </CustomButton>
        </Link>
      
      </div> 
    </StyledContainer>
  )
}