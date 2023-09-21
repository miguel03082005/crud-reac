import React from "react";
import Menu from "./Menu";
import LogoImage from "../../node_modules/admin-lte/dist/img/AdminLTELogo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to={"/home"} className="brand-link">
        <span className="brand-text font-weight-light">Serviplus</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            {/* This is a blank space */}
            &nbsp;
          </div>
          <div className="info">&nbsp;</div>
          <div className="info">
            <Link to={"/home"} className="d-block">
              Menu Principal
            </Link>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </aside>
  );
};

export default Sidebar;
