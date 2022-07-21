import React, { useState } from "react";
import "./login.css";

// Redirect é um redirecionador
import { Link, Redirect } from "react-router-dom";

// Trazendo o arquivo de configuração do firebase
import firebase from "../../config/firebase";

// Recurso de autenticação do firebase
import "firebase/auth";

// useSelector serve para selecionar o estado que está armazenado na store do usuário
// useDispatch serve para enviar solicitações
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  const dispatch = useDispatch();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo("sucesso");
        setTimeout(() => {
          // Quando tiver a mensagem de sucesso, será enviada uma solicitação para o reducer com o dispatch
          dispatch({ type: "LOG_IN", usuarioEmail: email });
        }, 2000);
      })
      .catch((erro) => {
        setMsgTipo("erro");
      });
  }

  return (
    <div className="login-content d-flex align-items-center">
      {useSelector((state) => state.usuarioLogado) > 0 ? (
        <Redirect to="/" />
      ) : null}

      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <i className="far fa-smile-wink text-white fa-5x"></i>
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        <input
          // Irá guardar o valor do input dentro da variável email
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
        />

        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
        />

        <button
          onClick={logar}
          className="btn btn-lg btn-block btn-login"
          type="button"
        >
          Logar
        </button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo === "sucesso" && (
            <span>
              <strong>WoW</strong> Você está conectado! &#128526;
            </span>
          )}
          {msgTipo === "erro" && (
            <span>
              <strong>Ops!</strong> Verifique se a senha ou usuário estão
              corretos! &#128546;
            </span>
          )}
        </div>

        <div className="opcoes-login mt-5 text-center">
          <Link to="/usuariorecuperarsenha" className="mx-2">
            Recuperar senha
          </Link>
          <span className="text-white">&#9733;</span>
          <Link to="novousuario" href="#" className="mx-2">
            Quero cadastrar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
