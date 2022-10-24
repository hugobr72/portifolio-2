import Projeto from './projeto'
import './Footer.css'
import calculadora from '../img/calculadora.png'
import list from '../img/list.png'
import pokedex from '../img/pokedex.png'
const Footer = () => {
    return (
        <footer id='projetos'>
            <h2 data-aos="fade-left">Projetos pessoais</h2>
            <div className="projetos" >

                <div className="projeto" data-aos="fade-right">
                    <Projeto
                        reactjs={true} css={true} js={true}
                        img='https://github.com/hugobr72/projeto-secret-word/raw/main/ProjetoSecretWord.png'>
                        <h3>Projeto Secret Word</h3>
                        <p>Projeto de um jogo de adivinhar palavras feito com react no curso do Matheus Battisti.
                            Utilizando os hooks useState e useEffect.</p>
                        <h4><a href="https://github.com/hugobr72/projeto-secret-word">Repositório do Projeto</a></h4>
                    </Projeto>
                </div>

                <div className="projeto" data-aos="fade-left" data-aos-delay="250">
                    <Projeto
                        reactjs={true} css={true} js={true}
                        img={list}>
                        <h3>Lista de Tarefas</h3>
                        <p>Fiz esse projeto totalmente com React Js confesso que a parte de editar foi a mais complicada
                            para fazer demorei dois dias para fazer essa parte mas no fim deu tudo certo.</p>
                        <h4><a href="https://github.com/hugobr72/To-do-List-React">Repositório do Projeto</a></h4>
                    </Projeto>
                </div>
                <div className="projeto" data-aos="fade-right">
                    <Projeto
                        reactjs={true} css={true} js={true}
                        img={calculadora}>
                        <h3>Calculadorda Com React</h3>
                        <p>Primeiro projeto que fiz com React demorei mais ou menos 3 dias e ainda conhecia poucos dos hooks.</p>
                        <h4><a href="https://github.com/hugobr72/To-do-List-React">Repositório do Projeto</a></h4>
                    </Projeto>
                </div>
                <div className="projeto" data-aos="fade-left" data-aos-delay="250">
                    <Projeto
                        html={true} css={true} js={true}
                        img={pokedex}>
                        <h3>Pokedex Api</h3>
                        <p>Famosa Pokedex Api, fiz com Html, Css e Js consumindo a Api pokeapi.co utilizando Axio.</p>
                        <h4><a href="https://hugobr72.github.io/Pokedex-Api/">Repositório do Projeto</a></h4>
                    </Projeto>
                </div>
            </div>
            <h5 data-aos="fade-up" ><a href="https://github.com/hugobr72">Para Mais Projetos</a></h5>
        </footer>
    )
}

export default Footer