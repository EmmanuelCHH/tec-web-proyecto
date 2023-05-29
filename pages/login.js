
import React, { useState } from "react";
import { StyledContainer, StyledSubTitle, colors } from '@/styles/styles';
import { Button, Grid, Paper, TextField, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Link from 'next/link';




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

const paperStyle = {
  padding: "20px",
  minHeight: '70vh',
  width: "280px",
  margin: "20px auto",
};


const Login = () => {

  return (
    <StyledContainer>
      <div>
        <Paper elevation={10} style={paperStyle} className="flex flex-col items-center">
          <Avatar
            sx={{ width: 80, height: 80, marginBottom: 1, mt: 0 }}
            src="/assets/logo.png"
          />
          <StyledSubTitle color={colors.dark3} size={29}>
            LogIn
          </StyledSubTitle>

          <TextField
            margin="normal"
            label='Correo'
            variant="filled"
            placeholder="Ingresa tu Correo Institucional"
            className="form-group"
            fullWidth
            required
          />
          <TextField
            margin="normal"
            label='Contraseña'
            variant="filled"
            placeholder="Ingresa tu Contraseña"
            type="password"
            className="form-group"
            fullWidth
            required
          />

          <div className="mt-7"> {/* Separación entre el TextField y el CustomButton */}
            <Link href="/inicio" passHref>
              <CustomButton variant="outlined" size="large" className="text-3xl rounded-full" >
                Login
              </CustomButton>
            </Link>
          </div>
        </Paper>
      </div>
    </StyledContainer>
  );
};

export default Login;
