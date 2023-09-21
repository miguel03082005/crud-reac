import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Cookies from "universal-cookie";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";

const EditTurno = () => {
  const url = "http://localhost:4000/turnos";
  const cookies = new Cookies();
  const navigate = useNavigate(); // Utilizamos useNavigate para la redirección

  const { id } = useParams();

  const [ticket, setTicket] = useState({
    id: "",
    nombre: "",
    documento: ""
  });

  const { nombre, documento } = ticket;

  const onChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const nombreTicket = cookies.get("nombre");
    const documentoTicket = cookies.get("documento");

    setTicket({
      ...ticket,
      id: id,
      nombre: nombreTicket,
      documento: documentoTicket
    });

    document.getElementById("nombre").focus();
  }, []);

  const editarTurno = async (e) => {
    e.preventDefault();

    const data = {
      id: ticket.id,
      nombre: ticket.nombre,
      documento: ticket.documento,
    };
    try {
      const response = await axios.put(`${url}/${id}`, data);

      if (response.status === 200) {
        navigate("/listar-dijiturno");
        const msg = "actualizado correctamente";
        swal({
          title: "Éxito",
          text: msg,
          icon: "success",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-success",
              closeModal: true,
            },
          },
        });
      } else {
        const msg = "no se a podido actualizar";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      }
    } catch (error) {
      console.error("Error al actualizar la información:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editarTurno(e);
};

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Turno"}
          breadCumb1={"Listar Turno"}
          breadCumb2={"Editar Turno"}
          ruta1={"/listar-dijiturno"}
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
                    Editar Turno
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

export default EditTurno;