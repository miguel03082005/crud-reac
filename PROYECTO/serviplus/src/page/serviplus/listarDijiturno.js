import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const ListarDijiturno = () => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    cargarTurnos();
  }, []);

  // Función para cargar la lista de turnos
  const cargarTurnos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/turnos");
      setTicket(response.data);
    } catch (error) {
      console.error("Error al cargar los turnos:", error);
    }
  };

  // Función para eliminar un turno
  const eliminarTurno = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/turnos/${id}`);
      if (response.status === 200) {
        swal("Turno eliminado exitosamente", {
          icon: "success",
        });
        cargarTurnos(); // Recarga la lista de turnos después de la eliminación
      } else {
        swal("Error al eliminar el turno", {
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al eliminar el turno:", error);
    }
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listar Turno"}
          breadCumb1={"Inicio"}
          breadCumb2={"Listar Turno"}
          ruta1={"/home"}
        />
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to="/crear-dijiturno"
                  className="btn btn-block btn-primary btn-sm"
                >
                  Crear Turno
                </Link>
              </h3>
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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Turno</th>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "50%" }}>Documento</th>
                    <th style={{ width: "20%" }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {ticket.length > 0 ? (
                    ticket.map((d) => (
                      <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.nombre}</td>
                        <td>{d.documento}</td>
                        <td>
                          <Link
                            to={`/editar-dijiturno/${d.id}`} // Pasa el ID a la URL de edición
                            className="btn btn-sm btn-primary"
                          >
                            Edit
                          </Link>
                          &nbsp;&nbsp;
                          <button
                            onClick={() => eliminarTurno(d.id)} // Llama a la función eliminarTurno con el ID del turno
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No hay turnos</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ListarDijiturno;
