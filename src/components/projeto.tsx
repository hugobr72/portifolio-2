import React, {ReactNode} from 'react'
import './projeto.css'

type TypeProjeto = {
    img: string;
    children: ReactNode;
    js?: boolean;
    html?: boolean;
    css?: boolean;
    reactjs?: boolean
}

const Projeto = ({ img, children, js, html, css, reactjs }: TypeProjeto) : React.JSX.Element => {
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
