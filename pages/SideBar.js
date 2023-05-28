
import { SidebarData } from './sidebardata';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const SideBar = () =>{
    const [sidebar, setSidebar]= useState(false);
    const router = useRouter();
    const showSidebar= () => setSidebar(!sidebar);
    return(
        <>
        <IconContext.Provider value={{ color: 'F2D023' }}>
          <div className="navbar">
            <button className="menu-bars" onClick={showSidebar}>
              <FaBars />
            </button>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <button className="menu-bars">
                  <AiOutlineClose />
                </button>
              </li>
              {SidebarData.map((item, index) => (
                <li key={index} className={item.cName}>
                <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                </li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    )
}
export default SideBar;
