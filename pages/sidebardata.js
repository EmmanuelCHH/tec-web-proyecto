import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
     {  title: 'Inicio',
        path: '/inicio',
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    {  title: 'Noticias',
        path: '/noticias',
        icon: <GiIcons.GiNewspaper/>,
        cName: "nav-text"
    },
    {  title: 'Foro',
        path: '/foro',
        icon: <IoIcons.IoIosPeople/>,
        cName: "nav-text"
    },
    {  title: 'Materias',
        path: '/materias',
        icon: <ImIcons.ImBooks/>,
        cName: "nav-text"
    },
    {  title: 'Tareas',
    path: '/tareas',
    icon: <MdIcons.MdHomeWork/>,
    cName: "nav-text"
    },
     {  title: 'Calendario',
        path: '/calendario',
        icon: <AiIcons.AiOutlineCalendar/>,
        cName: "nav-text"
    },
    {  title: 'Chat',
    path: '/chat',
    icon: <BsIcons.BsChatDots/>,
    cName: "nav-text"
    },
    {  title: 'Ver Perfil',
        path: '/perfil',
        icon: <BsIcons.BsPerson/>,
        cName: "nav-text"
    },
    {  title: 'LogOut',
        path: '/',
        icon: <GiIcons.GiExitDoor/>,
        cName: "nav-text"
    }
]