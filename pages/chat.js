
import SideBar from "./SideBar";
import { AiOutlineSearch} from "react-icons/ai";
import { MdPending, MdSentimentSatisfiedAlt,MdAddCircle,MdAssistantNavigation, MdOutlinePlayCircleFilled} from "react-icons/md";
import { TextField } from "@mui/material";
const chat = () =>{
    return(
        <div>
            <SideBar/>
            <ul className="chat">
            <img src="/assets/chat.png"/>
            </ul>
            <ul className="look">
            <AiOutlineSearch size={95} color="white"/>
            </ul>
            <TextField
            placeholder="Buscar usuario" 
            className="buscar-barra"
            />
            <TextField
            placeholder="Escribe tu mensaje..."
            className="mensaje-barra"
            />
            <ul className="mensaje">
            <MdPending size={60}/>
            </ul>
            <ul className="emoji">
            <MdSentimentSatisfiedAlt size={60}/>
            </ul>
            <ul className="agregar">
            <MdAddCircle size={60}/>
            </ul>
            <ul className="mandar">
            <MdAssistantNavigation size={60}/>
            </ul>
            <ul className="recording">
            <MdOutlinePlayCircleFilled size={60}/>
            </ul>
        </div>
    )
}
export default chat;  
