import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg">
      <i className="far fa-smile-wink text-white fa-2x"></i>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-solid fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto h6">
          <li className="nav-item">
            <Link className="nav-link ml-2" to="/">
              Home
            </Link>
          </li>

          {useSelector((state) => state.usuarioLogado) > 0 ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/eventocadastro">
                  Publicar Evento
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eventos/meus">
                  Meus Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to=""
                  onClick={() => dispatch({ type: "LOG_OUT" })}
                >
                  Sair
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/novousuario">
                  Cadastrar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
