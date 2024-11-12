import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Booki from "../assets/projet-2-screenshot.png";
import Presentation from "../components/Presentation";
const Projet_Booky = () => {
  return (
    <div>
      <Header />
      <Presentation
        title="Booky - Découverte HTML et CSS"
        text="Booky est une template de site d'hébergement. Il reprend les bases
            acquises lors des cours et permet de s'orienter niveau design"
        text2="Le projet a aussi été adapté en mobile afin de répondre à la demande
            utilisateur de plus en plus influent sur cette platforme"
      />
      <article className="ohmyfood-screenshot">
        <img src={Booki} alt="booky"></img>
      </article>
      <Footer />
    </div>
  );
};

export default Projet_Booky;
