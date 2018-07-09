import React from 'react'
import '../404.css'
import {Link} from "react-router-dom"

function NotFoundPage(props) {
    return (
        <div id="main">
            <div className="fzf">
                <h1>Oops. Página não encontrada!</h1>
                <p>A página que você estava buscando não existe mais.</p>
                <Link to={'/'}>
                    <span className="btn" data-wipe="Ir para o Início">Ir para o Início</span>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
