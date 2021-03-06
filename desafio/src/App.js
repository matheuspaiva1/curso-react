import React from "react";
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Home from "./components/Home";


const App = () => {

  const {pathname} = window.location;

  let Pagina;

  if (pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  
  return (
    <section>
      <Header/>
      <Pagina/>
    </section>

  );
};

export default App;
