import React, { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearTarea = () => {

  const navigate = useNavigate();

  const [tareas, settareas] = useState({
    nombre: "",
  });

  const { nombre } = tareas;

  const { idTurno } = useParams();
  let array = idTurno.split("@");
  const nombret = array[1];
  const documentot = array[2];
  const titulob = `Creacion de tareas: ${nombret} ${documentot}`;
   
  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    settareas({
      ...tareas,
      [e.target.name]: e.target.value,
    });
  };

  const creartarea = async () => {
    let array = idTurno.split("@");
    const idt = array[0];

    const data = {
      turno: idt,
      nombre: tareas.nombre,
    };

    const response = await APIInvoke.invokePOST("/tareas", data);
    const idTarea = response.tareas.id;

    if (idTarea === "") {
      const msg = "la tarea no fue creada correctamente";
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
      navigate(`/tareas-dijiturno/${idTurno}`);

      const msg = "la tarea fue creada corectamente";
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
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    creartarea();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <ContentHeader
          titulo={titulob}
          breadCumb1={"Inicio"}
          breadCumb2={"Crear Turno"}
          ruta1={`/tareas-dijiturno/${idTurno}`}
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
                      placeholder="Ingrese de la Tarea"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    crear tarea
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

export default CrearTarea;
