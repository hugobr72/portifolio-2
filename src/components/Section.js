import React from 'react'
import './Section.css'
const Section = ({ html, reactSvg, js }) => {
    return (
        <section>
            <h2 id='line-sobre'>Sobre mim</h2>

            <div className="sobre" id='sobre'>
                <img src="https://avatars.githubusercontent.com/u/108242865?v=4" alt="Foto" data-aos="fade-right" />
                <div className="text" data-aos="fade-left" data-aos-delay="100">
                    <h2>Hugo Barbosa Rodrigues</h2>
                    <p>Me chamo Hugo, sou do sul de Minas e atualmente estou fazendo o curso de
                        Análise e Desenvolvimento de Sistemas na Unilavras.
                        Estou estudando programção Front-end há 4 meses e ultimamente estou estudando Python, Javascript e React Js.</p>
                    <p>
                        Comecei a me interessar na programação quando fazia Abi na Ufla e depois disso
                        troquei de curso para um mais voltado ao desenvolvimento de software e posso falar que
                        foi uma das melhores escolhas que fiz em minha vida.
                    </p>
                    <br />
                    <h3><a href="https://www.instagram.com/hugobrod_/">Intagram</a> <a href="https://github.com/hugobr72">Github</a>
                        <a href="https://api.whatsapp.com/send?phone=5535997164602&text=Ol%C3%A1%2C%20Seja%20bem%20vindo!">Whatsapp</a></h3>
                </div>
            </div>
            <div className="cartoes">
                <div className="cartao" data-aos="fade-up"  >
                    <img src={html} alt="html" />
                    <div className="textCartao">
                        <h2>Html e Css</h2>
                        <p>Sites responsivos e animados.</p>
                    </div>
                </div>

                <div className="cartao" data-aos="fade-up" data-aos-delay="100">
                    <img src={reactSvg} alt="html" />
                    <div className="textCartao">
                        <h2>React.Js</h2>
                        <p>Sites utilizando os hooks UseState e UseEffect.</p>
                    </div>
                </div>

                <div className="cartao" data-aos="fade-up" data-aos-delay="200">
                    <img src={js} alt="html" />
                    <div className="textCartao">
                        <h2>Javascript</h2>
                        <p>Dom e Programação Orientada a Objetos.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section
