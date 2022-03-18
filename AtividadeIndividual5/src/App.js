import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Destino from "./paginas/Destino";
import Promocoes from "./paginas/Promocoes";
import Contato from "./paginas/Contato";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../src/componentes/Footer";

function App() {

  return (

    <div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destino" element={<Destino />} />
            <Route path="/Promocoes" element={<Promocoes />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
        </Router>
        <Footer ano={2022}/>

      </div>



    );

 };

export default App;
