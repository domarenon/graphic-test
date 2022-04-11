import React, {useState}from "react";
import { MenuData } from "./MenuData";

import menu from '../assets/menu.png'
import cancel from '../assets/cancel.png'

import '../styles/menu.css'

import { useAuth } from '../context/AuthContext';

function Menu(){
    const [sidebar, setSidebar] = useState(false);

    const isAuth = useAuth();

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <a href='#' onClick = {showSidebar} className='menu-bars'>
                    <img src={menu}></img>
                </a>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li>
                        <a href='#' className='menu-bars'>
                            <img src={cancel}></img>
                        </a>
                    </li>
                    {MenuData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <a href={item.path}>
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        )
                    })}

                </ul>

            </nav>

        </>
    )

}

export default Menu;
