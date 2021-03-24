import React from "react";
import Produto from "./components/Produto";

const App = () => {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event) {
	// async utiliza no lugar do .then()
    setLoading(true) 
    const response = await fetch( // 
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    ) // fetch usa pra colocar a api como se fosse dados dos produtos
    const json = await response.json() // transformando em json
    setDados(json)
    setLoading(false)
  }
  
  return (
    <div>
      <button style={{margin:'5rem'}} onClick={handleClick}>Notebook</button>
      <button style={{margin:'5rem'}} onClick={handleClick}>Smartphone</button>
      <button style={{margin:'5rem'}} onClick={handleClick}>Tablet</button>
      
      {loading && <p>Carregando...</p>} // se loading existir coloca o <p>
      {!loading && dados && <Produto dados={dados}/>} // se o loading for false coloca os dados
    </div>


  );
};

export default App;
