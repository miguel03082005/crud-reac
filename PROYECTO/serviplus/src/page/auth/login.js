import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Cookies from "universal-cookie";
import axios from "axios";

const Login = () => {
  const url = "http://localhost:4000/usuarios";

  const cookies = new Cookies();
  // Para redireccionar de un componente a otro

  const navigate = useNavigate();

  const [usuarios, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuarios;

  const onChange = (e) => {
    setUsuario({
      ...usuarios,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const iniciarSesion = async () => {
    await axios
      .get(url, {
        params: { email: usuarios.email, password: usuarios.password },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          let res = response[0];
          cookies.set("id", res.id, { path: "/" });
          cookies.set("user", res.user, { path: "/" });
          cookies.set("email", res.email, { path: "/" });
          cookies.set("password", res.password, { path: "/" });
          const msg =`Bienvenido ${res.user}`;
          swal({
            title: "Bienvenido",
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
          navigate("/home");
        } else {
          const msg =
            "Verifique el email o contraseña, puede ser de que no exista";
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
      })
      .catch((error) => {
        console.log(error);
      });

    if (password.length < 6) {
      const msg = "La contraseña debe tener al menos 6 caracteres";
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
  };

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  return (
    <div
      className="login-box"
      style={{ margin: 500, marginTop: 150, marginBottom: 10 }}
    >
      <div className="login-logo">
        <Link to={"../../index2.html"}>
          <b>Iniciar </b>Sesión
        </Link>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body">
          <p className="login-box-msg">Bienvenido, Ingrese sus Credenciales</p>
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                require="true"
              />

              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
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
                require="true"
              />

              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="social-auth-links text-center mb-3">
              {/* <Link to={"/home"}> */}
              <button type="submit" className="btn btn-block btn-primary">
                Ingresar
              </button>
              {/* </Link> */}

              <br />

              <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                Crear Cuenta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
