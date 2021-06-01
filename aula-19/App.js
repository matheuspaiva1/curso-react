import React from 'react';
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', ' ')

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <p>Produto Preferido: {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Celular</button>
    </div>
  );
};

export default App;
