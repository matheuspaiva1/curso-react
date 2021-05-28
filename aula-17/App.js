import React from "react";
import Produto from './Produto'
import { GlobalContext } from "./GlobalContext";

const App = () => {

  return (
    <GlobalContext.Provider> <Produto/> </GlobalContext.Provider>
  );
};

export default App;
