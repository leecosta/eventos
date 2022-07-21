import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useSelector } from "react-redux";
import firebase from "../../config/firebase";
import EventoCard from "../../components/evento-card";

// match propriedade em que conseguimos recuperar a rota
function Home({ match }) {
  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  let listaEventos = [];
  const usuarioEmail = useSelector((state) => state.usuarioEmail);

  useEffect(() => {
    if (match.params.parametro) {
      firebase
        .firestore()
        .collection("eventos")
        //Primeiro parâmetro será o que queremos filtrar, segundo é o operador e o terceiro é o valor do usuario
        .where("usuario", "==", usuarioEmail)
        .get()
        .then(async (resultado) => {
          //await esperando o firebase retornar alguma coisa
          await resultado.docs.forEach((doc) => {
            // Se tiver o valor da pesquisa no título, então puxa o evento para página
            if (doc.data().titulo.indexOf(pesquisa) >= 0) {
              listaEventos.push({
                id: doc.id,
                ...doc.data(),
              });
            }
          });

          setEventos(listaEventos);
        });
    } else {
      firebase
        .firestore()
        .collection("eventos")
        .get()
        .then(async (resultado) => {
          //await esperando o firebase retornar alguma coisa
          await resultado.docs.forEach((doc) => {
            // Se tiver o valor da pesquisa no título, então puxa o evento para página
            if (doc.data().titulo.indexOf(pesquisa) >= 0) {
              listaEventos.push({
                id: doc.id,
                ...doc.data(),
              });
            }
          });

          setEventos(listaEventos);
        });
    }
  }, [pesquisa]); // [] garantirá que o useEffect não seja executado várias vezes

  return (
    <>
      <Navbar />

      <div className="row p-3">
        <h2 className="mx-auto p-5">Eventos Publicados</h2>
        <input
          onChange={(e) => setPesquisa(e.target.value)}
          type="text"
          className="form-control text-center"
          placeholder="Pesquisar evento pelo título..."
        ></input>
      </div>

      <div className="row p-3">
        {eventos.map((item) => (
          <EventoCard
            key={item.id}
            id={item.id}
            img={item.foto}
            titulo={item.titulo}
            detalhes={item.detalhes}
            visualizacoes={item.vizualizacoes}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
