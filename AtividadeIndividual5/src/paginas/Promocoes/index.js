import React from "react";
import './style.css';
import Header from "../../componentes/Header"; 
import Footer from "../../componentes/Footer";
import Sobre from "./componentes/Sobre";



function Promocoes() {
    return(
         
         <section>
            <Header/>
            <Sobre/>
            
            <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="../Assets/paraty_destino.jpeg" alt="Imagem de capa do card"></img>
    <div class="card-body">
      <h5 class="card-title">Lorem ipsum</h5>
      <p class="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
      <p class="card-text"><small class="text-muted">Lorem ipsum, or lipsum ass</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../Assets/OlindaPromo.jpeg" alt="Imagem de capa do card"></img>
    <div class="card-body">
      <h5 class="card-title">Lorem ipsum</h5>
      <p class="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
      <p class="card-text"><small class="text-muted">Lorem ipsum, or lipsum as</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../Assets/RioPromo.jpeg" alt="Imagem de capa do card"></img>
    <div class="card-body">
      <h5 class="card-title">Lorem ipsum</h5>
      <p class="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
      <p class="card-text"><small class="text-muted">Lorem ipsum, or lipsum as</small></p>
    </div>
  </div>
</div>

            

            <Footer/>
        </section>

    );

}

export default Promocoes;
  