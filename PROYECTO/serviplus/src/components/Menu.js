import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-item">
          <Link to={"/listar-dijiturno"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>Lista de Turnos</p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/crear-dijiturno"} className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>Crear Dijiturno</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
