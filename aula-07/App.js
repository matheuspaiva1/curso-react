import React from "react";

const luana = {
  cliente: "Luana",
  idade: "25",
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Fogão", preco: "R$ 1500" },
    { nome: "TV", preco: "R$ 1000" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: "27",
  compras: [
    { nome: "Celular", preco: "R$ 3000" },
    { nome: "PC", preco: "R$ 4000" },
    { nome: "Som", preco: "R$ 3500" },
  ],
  ativa: false,
};
const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {" "}
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: {total}</p>
    </div>
  );
};

export default App;
