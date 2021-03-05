import React from "react";
import Form from './Form/Form'

/*
const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
}
*/
/*
const Titulo = ({cor, texto, children}) => {
  return <h1 style={{color: cor}}>{texto} {children}</h1>
}
*/



const App = () => {

  
  return (
      <>
      <Form/>
      </>
      /*
        <Titulo cor="red" texto="Meu titulo 1">
          Isso é o children
          <p>Teste</p>
        </Titulo>
        <Titulo cor="blue" texto="Meu titulo 1"/>
      */
  );
};

export default App;
