import React from "react";


const App = () => {
  const [contar, setContar] = React.useState(0)

  const handleCLick = React.useCallback(() => {
    setContar((contar) => contar + 1)
    // array de dependecia
  }, [])



  return (
    <div>
      <button onClick={handleCLick}>{contar}</button>
    </div>
  );
};

export default App;
