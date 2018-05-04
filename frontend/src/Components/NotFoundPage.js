import React from 'react'
import '../404.css'

function NotFoundPage(props) {
    return (
        <div id="main">
            <div className="fzf">
                <h1>Oops. Página não encontrada!</h1>
                <p>A página que você estava buscando não existe mais.</p>
                <a onClick={() => props.history.push('/')} className="btn" data-wipe="Ir para o Início">Ir para o Início</a>
            </div>
        </div>
    )
}

export default NotFoundPage
