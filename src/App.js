import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Páginas
import Login from "./view/login";
import NovoUsuario from "./view/usuario-novo";
import Home from "./view/home";
import UsuarioRecuperarSenha from "./view/usuario-recuperar-senha";
import EventoCadastro from "./view/evento-cadastro";
import EventoDetalhes from "./view/evento-detalhes";

function App() {
  /*store deixa disponível para todas as rotas 
  todos elementos dentro do provider tem acesso as informações do store*/
  return (
    <Provider store={store}>
      {/* Armazenando o estado do usuário no navegador */}
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          {/* Quando o endereço for exatamente "/" então o componente que irá renderizar na tela será o Home */}
          <Route exact path="/" component={Home} />
          <Route path="/eventos/:parametro" component={Home} />
          <Route exact path="/novousuario" component={NovoUsuario} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/usuariorecuperarsenha"
            component={UsuarioRecuperarSenha}
          />
          <Route exact path="/eventocadastro" component={EventoCadastro} />
          <Route exact path="/eventodetalhes/:id" component={EventoDetalhes} />
          <Route exact path="/editarevento/:id" component={EventoCadastro} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
