import SideBar from './SideBar';
import Link from "next/link";
import {StyleButtonNew} from "@/styles/styles";
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Calendario = () =>{

return(
    <div>
            <SideBar/>
           <img src="/assets/mayo.png" width={895} height={895} className="mes-img" id='myImg'/>
           <Link href="/calendario0" passHref>
           <button class="btn-mes-antes" onclick="prev()">
           <AiFillCaretLeft size={75} />
           </button>
           </Link>
           <Link href="/calendario2" passHref>
           <button class="btn-mes-despues" onclick="next()">
           <AiFillCaretRight size={75} />
            </button>         
            </Link>

           
    </div> 
   )

}
export default Calendario;