import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <div className="navbar-brand">Architect</div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          О Нас
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contacts">
          Контакты
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">
          Услуги
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/projects">
          Наши проекты
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/reviews">
          Отзывы
        </NavLink>
      </li>
    </ul>
    </div>
  </nav>
);
