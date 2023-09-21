import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div classname="container-fluid">
      <div classname="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Crear Truno</h3>
              <p />
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to={"/crear-dijiturno"} className="small-box-footer">
            Crear Truno <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Listar Truno</h3>
              <p />
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to={"/listar-dijiturno"} className="small-box-footer">
            Listar Truno <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
