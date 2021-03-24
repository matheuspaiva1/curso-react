import React from 'react'

function ButtonModal({setModal}) {
    return (
        <button onClick={() => setModal(true)}>Abrir</button>
    ) // quando for em componenets faz um callback no onclick e passa a variavel set
     // pro componente injetado no app.js

}

export default ButtonModal
