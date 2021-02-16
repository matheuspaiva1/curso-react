import React from 'react'

const titulo = <h1>Esse é um titulo</h1>

const App = () => {
  const random = Math.random()
  const ativo = true

  function mostrarNome(sobrenome) {
    return ' Andrpe' + sobrenome
    
  }

  const carro = {
    marca: 'ford', 
    rodas: '4'
  }

  const estiloP = {
    color: "blue",
    fontSize: '30px',

  }

  return (
    //REACT FRAGMENT
<>

    
    {titulo}

  <p>
    {true ? 'sjdka' : 'adjad'} - {10}

    {mostrarNome('Rafael')}

  </p>

  <p style={estiloP}>{new Date().getFullYear()}</p>
  <p>{carro.marca}</p>
  <p>{carro.rodas}</p>

  // NÃO PODE PASSAR OBJETOS

    
  <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>

  <label htmlFor="nome">Nome</label>
  <input type="text" id="nome"/>
  
  
</>
    
  )
}

export default App;
