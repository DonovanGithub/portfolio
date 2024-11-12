import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import kasa from "../assets/kasa-screenshot.png";
const ProjectKasa = () => {
  return (
    <div>
      <Header />
      <Presentation
        title="KASA, découverte de REACT JS"
        text="Kasa est le début de REACT JS pour moi. J'ai tout de suite accroché et j'adore juste l'efficacité que possède cette bibliothèque. "
        text2="Pour ce projet, je devais réaliser le front end, l'affichage des produits avec une API en utilisant du JS, les differentes pages mais surtout suivre une maquette donnée. "
      />
      <article className="ohmyfood-screenshot">
        <img src={kasa} alt="project"></img>
      </article>
      <Footer />
    </div>
  );
};

export default ProjectKasa;
