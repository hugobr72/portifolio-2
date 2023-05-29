import './Section.css'
import Tilt from 'react-parallax-tilt'
import CV from '.././pdf/Currículo 2.pdf'
import React, { MutableRefObject} from 'react'

type TypeSobre = {
    sobre: MutableRefObject<HTMLDivElement | undefined>
}

const Section = ({ sobre } : TypeSobre): React.JSX.Element => {

    return (
        <section ref={sobre as MutableRefObject<HTMLDivElement>}>
            <h2 id='line-sobre'>Sobre mim</h2>

            <div className="sobre" id='sobre'>
                <Tilt>
                    <img src="https://avatars.githubusercontent.com/u/108242865?v=4" alt="Foto" data-aos="fade-right" />
                </Tilt>
                <div className="text" data-aos="zoom-in" >
                    <h2>Hugo Barbosa Rodrigues</h2>
                    <p>Me chamo Hugo, sou do sul de Minas e atualmente estou cursando
                        Análise e Desenvolvimento de Sistemas na Unilavras.
                        Desenvolvo aplicações Front-end, Back-end e Mobile tenho conhecimento nas principais tecnologias como 
                        C# .net, React Native, Typescript, Html, Css, Keyframes, PHP e WordPress .
                    </p>
                    <p>
                        Comecei a me interessar na programação quando fazia Abi na UFLA com a linguagem Python e depois disso
                        resolvi me dedicar ao desenvolvimento de software e posso falar que
                        foi uma das melhores escolhas que fiz em minha vida.
                    </p>
                    <br />
                    <h3><a href="https://www.instagram.com/hugobrod_/">Instagram</a> <a href="https://github.com/hugobr72">Github</a>
                        <a href="https://api.whatsapp.com/send?phone=5535997164602&text=Ol%C3%A1%2C%20Seja%20bem%20vindo!">Whatsapp</a></h3>
                    <h3 id='btn-cv'><a href={CV} download={CV}>Baixar CV</a></h3>
                </div>

            </div>

        </section>

    )
}

export default Section
