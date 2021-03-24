import React, {useState} from "react";
import Produto from "./Produto";

const App = () => {
  const [contar, setContar] = useState(0)
  const [dados, setDados] = useState(null)
  const [ativo, setAtivo] = useState(false)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then((response) => response.json())
    .then((json) => setDados(json));  // convertendo api pra JSON  
    }, [])
  
  React.useEffect(() => {
    console.log('executou')
  }, []) // pode ter varios effects

  const titulo = 'Total '
  React.useEffect(() => {
    document.title = titulo + contar // pode usar outra função
  }, [contar]) // pode inserir codigo html direto do DOM
  
  
  return (
    <div>
      {dados && ( // se não passar && retorna null o valor que ta no useState
      <div>
        <h1> {dados.nome} </h1>
        <p>R$ {dados.preco * contar} </p>
      </div>
      )}
      <button onClick={() => setContar(contar + 1)}> {contar} </button>
      
      {ativo && <Produto/>}
      <br/>
      <button onClick={() => setAtivo(!ativo)}> Ativar </button>

    </div>
  );
};

export default App;
