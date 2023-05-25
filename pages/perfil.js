import {Avatar} from "@mui/material";
import { Button, Paper, IconButton, TextField, Grid, Box  } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

const paperStyle={padding: 20, height: '85vh', width:920, margin: "20px auto"};
const perfil = () =>{
    const [image, setImage] = useState("/assets/1.jpg");

    useEffect(() => {
      const storedImage = localStorage.getItem("profileImage");
      if (typeof window !== "undefined" && storedImage) {
        setImage(storedImage);
      }
    }, []);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const result = reader.result;
        setImage(result);
        if (typeof window !== "undefined") {
          localStorage.setItem("profileImage", result);
        }
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    return(
        <>
        <SideBar/>
        <div>
        <Paper elevation={24} style={paperStyle}>
            <Grid container spacing={3}> 
            <Grid xs={12}  sm={3}>
            <label htmlFor="image-upload">
                <IconButton component="span">
                     <Avatar
                sx={{ width: 150, height: 150, mt: 2, mx: 4 }}
                src={image}
            />
                </IconButton>
            </label>
            <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
            />
           
            </Grid>
            <Grid xs={12}  sm={4} mt={8}>
                <TextField
                    label="Nombre"
                    defaultValue="Emmanuel Chavira Holguin"
                    InputProps={{
                    readOnly: true,
                    style: { color: "#000000", backgroundColor: "#transparent", borderColor: "red"  },
                    }}
                    TextFieldProps={{
                        sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" } },
                      }}
                    InputLabelProps={{
                        sx: { color: "black" }, // Cambia el color del texto del label a negro
                      }}
                      sx={{ width: "325px", "& .MuiInputBase-input": {
                        textAlign: "center",}, }} // Ajusta el ancho del TextField para mostrar el texto completo y centra el texto
                />
            </Grid> 
            <Grid xs={12}  sm={1.8} mt={8} mx={4}>
                <TextField
                    label="Numero de Control"
                    defaultValue="19550730"
                    InputProps={{
                    readOnly: true,
                    style: { color: "#000000", backgroundColor: "#transparent" },               
                    }}
                    InputLabelProps={{
                        sx: { color: "black" }, // Cambia el color del texto del label a negro
                      }}
                      sx={{"& .MuiInputBase-input": {
                        textAlign: "center",}, }} // centra el texto
                />
            </Grid> 
            <Grid xs={12}  sm={1.2} mt={8} mx={-3}>
                <TextField
                    label="Semestre"
                    defaultValue="8"
                    InputProps={{
                    readOnly: true,
                    style: { color: "#000000", backgroundColor: "#transparent" },               
                    }}
                    InputLabelProps={{
                        sx: { color: "black" }, // Cambia el color del texto del label a negro
                      }}
                      sx={{  "& .MuiInputBase-input": {
                        textAlign: "center",}, }} // centra el texto

                />            
            </Grid>    
            </Grid>
            <Grid container spacing={3}> 
                <Grid xs={12}  mt={4} mx={28.5}>
                    <TextField
                        label="Carrera"
                        defaultValue="Ingenieria en Sistemas Computacionales"
                        InputProps={{
                        readOnly: true,
                        style: { color: "#000000", backgroundColor: "#transparent" },               
                        }}
                        InputLabelProps={{
                            sx: { color: "black" }, // Cambia el color del texto del label a negro
                        }}
                        sx={{ width: "565px",  "& .MuiInputBase-input": {
                            textAlign: "center",}, }} // Ajusta el ancho del TextField para mostrar el texto completo y centra el texto

                    />
                </Grid> 
            </Grid> 
            <Grid container spacing={3}> 
                <Grid xs={12}  mt={12} mx={28.5}>
                    <TextField
                        label="Correo Institucional"
                        defaultValue="L19550730@chihuahua2.tecnm.mx"
                        InputProps={{
                        readOnly: true,
                        style: { color: "#000000", backgroundColor: "#transparent" },               
                        }}
                        InputLabelProps={{
                            sx: { color: "black" }, // Cambia el color del texto del label a negro
                        }}
                        sx={{ width: "565px",  "& .MuiInputBase-input": {
                            textAlign: "center",}, }} // Ajusta el ancho del TextField para mostrar el texto completo y centra el texto

                    />
                </Grid> 
            </Grid> 
        </Paper>
        </div>
        </>
    )
}
export default perfil;  