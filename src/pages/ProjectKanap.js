import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import kanap from "../assets/kanap-screenshot.png";
const ProjectKanap = () => {
  return (
    <div>
      <Header />
      <Presentation
        title="Kanap, la découverte de JS"
        text="Kanap a été la découverte pour moi de JavaScript. Pour ce projet, je devais afficher les produits issue d'une API, enregistrer les commandes et gérer les payements ainsi que les informations utilisateurs; Je devais également réaliser un plan d'acceptation pour ce projet."
        text2="Ce projet m'a pris beaucoup de temps, étant même le plus long réalisé à ce jour en parti avec la contrainte d'utiliser que le JS comme mentionné dans le cahier des charges, c'était du pure apprentissage."
      />
      <article className="ohmyfood-screenshot">
        <img src={kanap} alt="project"></img>
      </article>
      <Footer />
    </div>
  );
};

export default ProjectKanap;
