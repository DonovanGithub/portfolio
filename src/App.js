import React from "react";
import Home from "./pages/Home";
import ProjectBooky from "./pages/ProjectBooky";
import ProjectOhmyfood from "./pages/ProjectOhmyfood";
import ProjectKasa from "./pages/ProjectKasa";
import ProjectKanap from "./pages/ProjectKanap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booky" element={<ProjectBooky />} />
        <Route path="/kanap" element={<ProjectKanap />} />
        <Route path="/ohmyfood" element={<ProjectOhmyfood />} />
        <Route path="/kasa" element={<ProjectKasa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
