import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import screenshot from "../assets/ohmyfood-screenshot.png";
import Presentation from "../components/Presentation";
const ProjectOhmyfood = () => {
  return (
    <div>
      <Header />
      <Presentation
        title="OhMyFood, découverte de Sass et animation"
        text="OhMyFood était la suite logique de mon premier projet. Il entreprend l'HTML et le CSS avec l'ajout de SASS. "
        text2=" Suite à l'ajout de SASS, je devais pour valider ce projet suivre la maquette et ajouter des animations comme un loader (chargement), animation au survolement et d'apparition des restaurants."
      />
      <article className="ohmyfood-screenshot">
        <img src={screenshot} alt="projet"></img>
      </article>
      <Footer />
    </div>
  );
};

export default ProjectOhmyfood;
