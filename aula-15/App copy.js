import React from "react";

const App = () => {
  // mais usado em forms
  // retorna um objeto de unico prop "current"
  // pode ser usado para se referir a um elemento do DOM e utilizá-lo
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef()

  // utiliza o current com "useEffect" ou no callback de uma function
  // pode modificar o video.current
  function handleClick () {
    setComentarios([...comentarios, input])
    // adicionando novos comentarios quando clica no botão
    // input é o novo comentário
    setInput('')
    // limpando o input, colocando ele como '' (vazio)
    inputElement.current.focus()
    // colocando o foco no input, atributo do useRef
  }
  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}> {comentario} </li>
        ))}

      </ul>
      <input
          type="text"
          ref={inputElement}     // colocando o foco no input
          value={input}
          onChange={({ target }) => setInput(target.value)} // definindo input como target.value
        />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
