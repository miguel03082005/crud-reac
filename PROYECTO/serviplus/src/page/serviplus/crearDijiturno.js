import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearDijiturno = () => {
  const navigate = useNavigate();

  const [turno, setturno] = useState({
    nombre: "",
    documento: "",
  });

  const { nombre, documento } = turno;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setturno({
      ...turno,
      [e.target.name]: e.target.value,
    });
  };

  const CrearTurno = async () => {
    const data = {
      nombre: turno.nombre,
      documento: turno.documento,
    };

    const response = await APIInvoke.invokePOST("/turnos", data);
    const idTurno = response.id;

    if (idTurno === "") {
      const msg = "turno no fue creado correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "Error",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      navigate('/listar-dijiturno')
      const msg = "turno creado corectamente";
      swal({
        title: "success",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-primary",
            closeModal: true,
          },
        },
      });

      setturno({
        nombre: '',
        documento: ''
      })
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearTurno();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Crear Turno"}
          breadCumb1={"Inicio"}
          breadCumb2={"Crear Turno"}
          ruta1={"/home"}
        />
        <div className="content">
          <div className="card">
            <div className="card-header">
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese su Nombre"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">documento</label>
                    <input
                      type="number"
                      className="form-control"
                      id="documento"
                      name="documento"
                      placeholder="Ingrese su Documento"
                      value={documento}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    crear Turno
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CrearDijiturno;
