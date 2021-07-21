import React from "react";

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('') // colocando multiplos campos


  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }
  // onSubmit para enviar os dados
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <br/>
      <input 
      id={nome}
      value={nome}
      onChange={(event) => {setNome(event.target.value)}}      
      >
      </input>
      <br/>
      {/* multiplos campos*/}
      <label htmlFor="email">email</label>
      <br/>
      <input 
      id={email}
      type="email"
      value={email}
      onChange={(event) => {setEmail(event.target.value)}}      
      >
      </input>
      <button>Enviar</button>
    </form>
  )
  
}

export default App;
