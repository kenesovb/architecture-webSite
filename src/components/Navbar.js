import React from "react";
import {NavLink} from "react-router-dom";
import LogoIcon from "../ui/Header/Icon/LogoIcon";

import "./style.scss";


export const Navbar = () => (

    // <nav className="nav-container">
    //   <div className="header-container">
    //     <div className="main-logo __margin">
    //       <LogoIcon
    //           originalHeight={18}
    //           originalWidth={24}
    //           width="100px"
    //           height="100px"
    //       />
    //     </div>
    //       <ul className="navbar">
    //           <li>
    //               <NavLink className="nav-link" to="/" exact>
    //                   О компании
    //               </NavLink>
    //           </li>
    //       </ul>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-brand">
                <LogoIcon
                    originalHeight={18}
                    originalWidth={24}
                    width="100px"
                    height="100px"
                />
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        О компании
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                        Услуги
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/partnership">
                        Партнерство
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
