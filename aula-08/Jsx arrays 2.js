import React from "react";


const produtos = [

  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766' ],
  },

  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#29d700', '#250a20', '#fd0706' ],
  },

  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1000',
    cores: ['#2000e0', '#000000', '#ac0ac0' ],
  },


]


const App = () => {
  
  const dados = produtos.filter(({preco}) => Number(preco.replace("R$", "")) > 1500,)
  
  return (
    <section>
      {dados.map(({id, nome, preco, cores}) => 
      <div key={id}>
        <h1> {nome} </h1>
        <p>Preço: {preco} </p>
        <ul>
          {cores.map((cor) => 
          <li style={{backgroundColor: cor, color: "white"}}>
            {cor}
          </li>
          )}
        </ul>
      </div>
      )}
    </section>
      
  );
};

export default App;
