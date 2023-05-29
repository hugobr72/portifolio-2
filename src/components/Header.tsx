import React, { useState, MutableRefObject } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

type HeaderProps = {
    projetos: MutableRefObject<HTMLDivElement> | MutableRefObject<undefined>;
    contatos: MutableRefObject<HTMLDivElement> | MutableRefObject<undefined>;
    sobre: MutableRefObject<HTMLDivElement> | MutableRefObject<undefined>;
}

const Header = ({ projetos, contatos, sobre }: HeaderProps): React.JSX.Element => {
    const [burguer, setBurguer] = useState<boolean>(false)

    const scrollTo = (elementRef: MutableRefObject<HTMLDivElement> | MutableRefObject<undefined>) => {
        console.log(typeof elementRef)
        if(elementRef.current){
            window.scrollTo({
                top: elementRef.current.offsetTop - 35,
                behavior: 'smooth'
            })
        }
        
    }

    return (
        < header >
            <h1 data-aos="fade-down" >HBR.</h1>
            <div className={(burguer ? "header-sobre ativo" : "header-sobre")} >
                <button onClick={() => setBurguer(!burguer)}
                    data-aos="zoom-in"
                >
                    {burguer ? <AiOutlinePlus /> : <GiHamburgerMenu />}
                </button>
                <ul>
                    <li data-aos="fade-down" data-aos-delay='0' onClick={() => scrollTo(sobre)}>Sobre</li>
                    <li data-aos="fade-down" data-aos-delay='200' onClick={() => scrollTo(projetos)}>Projetos</li>
                    <li data-aos="fade-down" data-aos-delay='400' onClick={() => scrollTo(contatos)}>Contatos</li>
                </ul>
            </div>
        </header>

    )
}

export default Header
