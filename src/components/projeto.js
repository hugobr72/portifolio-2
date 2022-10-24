import React from 'react'
import './projeto.css'
const Projeto = ({ img, children, js, html, css, reactjs }) => {
    return (
        <>
            <div className="foto">
                <img src={img} alt="projeto" id='img'/>
            <h3>    
                {js ? 'Javascript  ' : null}
                {html ? 'Html  ' : null}
                {css ? 'CSS  ' : null}
                {reactjs ? 'React Js  ' : null}
            </h3>    
            </div>
            <div className="children">
                {children}
            </div>

        </>
    )
}

export default Projeto
