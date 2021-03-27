import React from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 10000000; i++) {
    c = i + i/10;
  }
  return c;
}

const App = () => {
  // recebe um callback que retorna um valor que ficasalvo na memória
  // só executa na criação evitando a recriação do valor varias vezes
  // é usado para operações lentas ou grandes
  const [contar, setContar] = React.useState(0)

  const t1 = performance.now()
  const valor = React.useMemo( () => operacaoLenta(), [])
  console.log(performance.now() - t1)



  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
