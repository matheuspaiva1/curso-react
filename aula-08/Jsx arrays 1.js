import React from "react";

const App = () => {
  const livros = [
    { nome: "Game of Thrones", ano: 1996 },
    { nome: "Clash of Kings", ano: 1998 },
    { nome: "Storm of Sword", ano: 2000 },
  ];

  return (
    <ul>
      {livros.map(({ nome, ano }) => (
        <li key={nome}>
          {nome}, {ano}
        </li>
      ))}
    </ul>

  );
};

export default App;
