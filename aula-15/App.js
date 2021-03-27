import React from "react";

const App = () => {
  // mais usado em forms
  // retorna um objeto de unico prop "current"
  // pode ser usado para se referir a um elemento do DOM e utilizá-lo
  // pode ser utilizado em qualquer valor, um valor que não seja um state
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()

  function handleClick() {
    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho')

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000);
  }
  
  
  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho} </button>
    </div>
  );
};

export default App;
