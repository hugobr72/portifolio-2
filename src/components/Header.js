import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

const Header = ({ projetos, contatos, sobre }) => {
    const [burguer, setBurguer] = useState(false)

    const scroolTo = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 40,
            behavior: 'smooth'
        })
    }

    return (
        < header >
            <h1 data-aos="fade-down" >HBR.</h1>
            <div className={(burguer ? "header-sobre ativo" : "header-sobre")} >
                <button onClick={() => setBurguer(!burguer)}
                >
                    {burguer ? <AiOutlinePlus /> : <GiHamburgerMenu />}
                </button>
                <ul>
                    <li data-aos="fade-down" data-aos-delay='0' onClick={() =>scroolTo(sobre)}>Sobre</li>
                    <li data-aos="fade-down" data-aos-delay='200' onClick={() =>scroolTo(projetos)}>Projetos</li>
                    <li data-aos="fade-down" data-aos-delay='400' onClick={() =>scroolTo(contatos)}>Contatos</li>
                </ul>
            </div>
        </header>

    )
}

export default Header
