import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Windows from "../components/Windows";
import projet_1 from "../assets/logoFooter.png";
import projet_5 from "../assets/kanap.png";
import projet_2 from "../assets/Booki@3x.png";
import projet_3 from "../assets/ohmyfood.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div id="root">
      <Header />
      <div className="box-windows">
        <NavLink className={"booky"} to="/booky">
          <Windows image={projet_2} />
          <Information text="HTML ET CSS" />
        </NavLink>
        <NavLink className={"ohmyfood"} to="/ohmyfood">
          <Windows image={projet_3} />
          <Information text="HTML, CSS et SASS" />
        </NavLink>
        <NavLink className={"kanap"} to="/kanap">
          <Windows image={projet_5} />
          <Information text="JS" />
        </NavLink>
        <NavLink className={"kasa"} to="/kasa">
          <Windows image={projet_1} />
          <Information text="JS, REACT, HTML ET SASS" />
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
