import React from "react";
import './style.css';
import Header from "../../componentes/Header"; 
import Footer from "../../componentes/Footer";
import Sobre from "./componentes/Sobre";

function Home() {
    return(
        <section>
            <Header/>
            <Sobre/>
            <Footer/>
        </section>
        
    );
}

export default Home;
  