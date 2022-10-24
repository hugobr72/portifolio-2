import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
    const [burguer, setBurguer] = useState(false)

    return (
        < header >
            <h1 data-aos="fade-down" >HBR.</h1>
            <div className={(burguer ? "header-sobre ativo"  : "header-sobre" )} >
                <button onClick={() => setBurguer(!burguer)}
                    >
                    {burguer ? <AiOutlinePlus />  : <GiHamburgerMenu />}
                </button>
                <ul>
                    <li data-aos="fade-down" data-aos-delay='0'><a href="#sobre">Sobre</a></li>
                    <li data-aos="fade-down" data-aos-delay='200'><a href="#projetos">Projetos</a></li>
                    <li data-aos="fade-down" data-aos-delay='400'><a href="#contato">Contatos</a></li>
                </ul>
            </div>
        </header>

    )
}

export default Header
