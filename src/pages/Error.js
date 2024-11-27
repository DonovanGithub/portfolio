import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error-block">
        <article className="error-gap">
          <h1 className="error-h1">Erreur 404</h1>
          <h3 className="error-h3">
            Oups ! La page que vous demandez n'existe pas
          </h3>
        </article>
        <NavLink to="/portfolio">
          <p className="error-redirect"> Retournez à la page d'accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
