import React from "react";
import { NavLink } from "react-router-dom";
import LogoIcon from "../ui/Header/Icon/LogoIcon";

import "./style.scss";


export const Navbar = () => (

    <nav className="nav-container">
      <div className="header-container">
        <div className="main-logo __margin">
          <LogoIcon
              originalHeight={18}
              originalWidth={24}
              width="100px"
              height="100px"
          />
        </div>
          <ul className="navbar">
              <li>
                  <NavLink className="nav-link" to="/" exact>
                      О компании
                  </NavLink>
              </li>
              <li>
                  <NavLink className="nav-link" to="/" exact>
                      Услуги
                  </NavLink>
              </li>
              <li>
                  <NavLink className="nav-link" to="/" exact>
                      Наши проекты
                  </NavLink>
              </li>
              <li>
                  <NavLink className="nav-link" to="/" exact>
                      Отзывы
                  </NavLink>
              </li>
              <li>
                  <NavLink className="nav-link" to="/" exact>
                      Партнерство
                  </NavLink>
              </li>
              <li>
                  <NavLink className="nav-link" to="/" exact>
                      Контакты
                  </NavLink>
              </li>
          </ul>
      </div>
    </nav>

  // <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
  //   <div className="container-fluid">
  //     <div className="navbar-brand">Architect</div>
  //
  //   <ul className="navbar-nav">
  //     <li className="nav-item">
  //
  //     </li>
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to="/about">
  //         О Нас
  //       </NavLink>
  //     </li>
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to="/contacts">
  //         Контакты
  //       </NavLink>
  //     </li>
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to="/services">
  //         Услуги
  //       </NavLink>
  //     </li>
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to="/projects">
  //         Наши проекты
  //       </NavLink>
  //     </li>
  //     <li className="nav-item">
  //       <NavLink className="nav-link" to="/reviews">
  //         Отзывы
  //       </NavLink>
  //     </li>
  //   </ul>
  //   </div>
  // </nav>
);
