import SideBar from './SideBar';
import Link from "next/link";
import {StyleButtonNew} from "@/styles/styles";
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Calendario2 = () =>{

return(
    <div>
            <SideBar/>
           <img src="/assets/junio.png" width={895} height={895} className="mes-img" id='myImg'/>
           <Link href="/calendario" passHref>
           <button class="btn-mes-antes" onclick="prev()">
           <AiFillCaretLeft size={75} />
           </button>
            </Link> 
           <button class="btn-mes-despues" onclick="next()">
           <AiFillCaretRight size={75} />
            </button>  

             
    </div> 
   )
}
export default Calendario2;