import {StyleButtonCancel,StyleButtonGo} from "@/styles/styles";
import { TextField, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel} from "@mui/material";
import SideBar from './SideBar';
import Link from "next/link";
const foro2 = () =>{
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

            <aa className="Title-card">
            <TextField
            variant="filled"
            placeholder="Titulo..." 
            className="Title-card"
            />
            </aa> 

            <ul className="Post-card">
            <TextField
            variant="filled"
            placeholder="Escribe aqui..." 
            className="Post-card"
            multiline={true}
            rows={8}
            />
            </ul>
            
            <ul className="Anexo-card">
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Aviso"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="Aviso" control={<Radio />} label="Aviso" />
        <FormControlLabel value="Ayuda" control={<Radio />} label="Ayuda" />
        <FormControlLabel value="Pregunta" control={<Radio />} label="Pregunta" />
        <FormControlLabel value="Sugerencia" control={<Radio />} label="Sugerencia" />
        <FormControlLabel value="Objetos Perdidos" control={<Radio />} label="Objetos Perdidos" />
        <FormControlLabel value="Importante" control={<Radio />} label="Importante" />
      </RadioGroup>
    </FormControl>
    <img src="/assets/clip.png" width={30} height={30} className="Clip-img"/>
    <FormLabel id="demo-radio-buttons-group-label" className="Duda-img">¿Permitir respuestas en la publicación?
    </FormLabel>
    <FormControl className="Pregunta-img">
    
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Privacidad"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="Si" control={<Radio />} label="Si" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
            </ul> 

            <Link href="/foro" passHref>
        <button class="btn-cancel">
          Cancelar
        </button>
        </Link>
           
        <button class="btn-publicar" onclick="next()">Publicar</button>  
        </div>
    )
}
export default foro2;