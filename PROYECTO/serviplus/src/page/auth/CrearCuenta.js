import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import axios from "axios";

const CrearCuenta = () => {

  const url = 'http://localhost:4000/usuarios'

  const [usuarios, setUsuario] = useState({
    user: "",
    email: "",
    password: "",
    confirmar: ""
  });

  const { user, email, password, confirmar } = usuarios;
  const onChange = (e) => {
    setUsuario({
      ...usuarios,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    document.getElementById("user").focus();
  }, []);

  const crearCuenta = async () => {
    if (password !== confirmar) {
      const msg = "Las contraseñas no coinciden";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-danger",
            closeModal: true
          },
        },
      });
    } else if (password.length < 6) {
      const msg = "La contraseña al menos debe tener 6 carateres";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-danger",
            closeModal: true
          },
        },
      });
    } else {
      const data = {
        user: usuarios.user,
        email: usuarios.email,
        password: usuarios.password
      };
      try {
        // Verificar si ya existe una cita con la misma fecha y hora
        const response = await axios.get(url, { params: { email: usuarios.email } });
        const usuariosExisten = response.data.length > 0;
  
        if (!usuariosExisten) {
          // Si no existen usuarios en la API, registrar el nuevo usuario
          await APIInvoke.invokePOST(`/usuarios`, data);
          const msg = "Usuario creado";
          swal({
            title: "Successful",
            text: msg,
            icon: "success",
            buttons: {
              confirm: {
                text: "Ok",
                value: "true",
                visible: "btn btn-primary",
                closeModal: true
              }
            }
          });
  
          setUsuario({
            user: "",
            email: "",
            password: "",
            confirmar: ""
          });

        } else {
          // Si ya existe un usuario
          const msg = "El usuario ya existe";
        swal({
          title: "Atentención",
          text: msg,
          icon: "info",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-info",
              closeModal: true
            }
          }
        });
        }
      } catch (error) {
        console.error(error);
      }
    };
  }
  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };

  return (
    <div className="login-box" style={{ margin:500, marginTop:100, marginBottom:10}}>
      <div className="login-logo">
        <b>Crear</b> Cuenta
      </div>

      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Bienvenido, Ingrese sus Datos</p>
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="user"
                id="user"
                name="user"
                value={user}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="confirm your password"
                id="confirmar"
                name="confirmar"
                value={confirmar}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="social-auth-links text-center mb-3">
              <button type="submit" className="btn btn-block btn-primary">
                Crear Cuenta
              </button>
              <Link to="/" className="btn btn-block btn-danger">
                Regresar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
