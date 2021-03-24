import React from 'react'

function Modal({modal, setModal}) {
    if (modal === true) {
        return (
            <div>
                Esse é o modal.
                <button onClick={() => setModal(false)}>Fechar</button>
                
            </div>
        )   // aqui é a mesma coisa só que foi false por que precisa fechar 
           // o if foi usado pq la no useState ele começa com false e precisa ser true pra mudar o valor 

    } return null
}

export default Modal
