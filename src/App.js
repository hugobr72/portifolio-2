import { useEffect, useRef } from 'react';
import Header from './components/Header'
import Section from './components/Section';
import './App.css';
import Footer from './components/Footer';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css"


function App() {
  const sobre = useRef();
  const projetos = useRef();
  const contatos = useRef();


  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  })

  return (
    <div className="App">
      <Header sobre={sobre} projetos={projetos} contatos={contatos} />
      <main>
        <h2 data-aos="zoom-in" data-aos-duration="1000">Desenvolvedor_ Front-End</h2>
      </main>

      <Section sobre={sobre}/>
      <Footer projetos={projetos} />

      <div className="contatos" id='contato' ref={contatos} >
        <a data-aos="flip-right" data-aos-delay="0" href="https://www.instagram.com/hugobrod_/"><FaInstagramSquare /></a>
        <a data-aos="flip-right" data-aos-delay="200" href="https://www.linkedin.com/in/hugo-barbosa-rodrigues-090797243/"><FaLinkedin /></a>
        <a data-aos="flip-right" data-aos-delay="300" href="https://github.com/hugobr72"><FaGithubSquare /></a>
        <a data-aos="flip-right" data-aos-delay="400" href="https://api.whatsapp.com/send?phone=5535997164602&text=Ol%C3%A1%2C%20Seja%20bem%20vindo!"><FaWhatsappSquare /></a>

      </div>
    </div>

  );
}

export default App;
