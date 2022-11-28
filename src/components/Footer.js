import Projeto from './projeto'
import './Footer.css'
import calculadora from '../img/calculadora.png'
import list from '../img/list.png'
import pokedex from '../img/pokedex.png'
import Tilt from 'react-parallax-tilt'


const Footer = ({ projetos }) => {

    return (
        <footer id='projetos' ref={projetos}>
            <h2 data-aos="zoom-in">Projetos pessoais</h2>
            <div className="projetos" >

                <Tilt style={{ backgroundColor: 'transparent' }} className='projeto' >
                    <div className="projetow" data-aos="zoom-in">
                        <Projeto
                            img='https://github.com/hugobr72/projeto-secret-word/raw/main/ProjetoSecretWord.png'>
                            <h3>Projeto Secret Word</h3>
                            <p>Projeto de um jogo de adivinhar palavras feito com react no curso do Matheus Battisti.
                                Utilizando os hooks useState e useEffect.</p>
                            <h4><a href="https://github.com/hugobr72/projeto-secret-word">Repositório do Projeto</a></h4>
                        </Projeto>

                    </div>
                </Tilt>

                <Tilt style={{ backgroundColor: 'transparent' }} className='projeto'  >
                    <div className="projetow" data-aos="zoom-in" data-aos-delay="250">
                        <Projeto
                            img={'https://media-exp1.licdn.com/dms/image/C4D22AQEmKWkOXmgVrw/feedshare-shrink_2048_1536/0/1669595717845?e=1672272000&v=beta&t=yniC4rcAyuyEpemVu4FTGeJUWCv4oOyHsRW9KtgawHM'}>
                            <h3>FireBlog</h3>
                            <p>Projeto de blog com React, Firebase e com dark mode.
                            Utilizei React router para rotas, redux para gerenciar estado, react icons, firebase Authentication para autenticação de usuário e Cloud Firestore para banco de dados.</p>
                            <h4><a href="https://lnkd.in/dXtPRc3j">Repositório do Projeto</a></h4>
                        </Projeto>
                    </div>
                </Tilt>

                <Tilt style={{ backgroundColor: 'transparent' }} className='projeto'  >
                    <div className="projetow" data-aos="zoom-in">
                        <Projeto
                            img={calculadora}>
                            <h3>Calculadorda Com React</h3>
                            <p>Projeto de calculadora que fiz no começo dos meus estudos de React, utilizando apenas o hook useState e eventos de click.</p>
                            <h4><a href="https://github.com/hugobr72/To-do-List-React">Repositório do Projeto</a></h4>
                        </Projeto>
                    </div>
                </Tilt>

                <Tilt style={{ backgroundColor: 'transparent' }} className='projeto'  >
                    <div className="projetow" data-aos="zoom-in" data-aos-delay="250">
                        <Projeto
                            html={true} css={true} js={true}
                            img={pokedex}>
                            <h3>Pokedex Api</h3>
                            <p>Famosa Pokedex Api, fiz com Html, Css e Js consumindo a Api pokeapi.co utilizando Axio.</p>
                            <h4><a href="https://hugobr72.github.io/Pokedex-Api/">Repositório do Projeto</a></h4>
                        </Projeto>
                    </div>
                </Tilt>
            </div>
            <h5 data-aos="fade-up" ><a href="https://github.com/hugobr72">Para Mais Projetos</a></h5>
        </footer>
    )
}

export default Footer
