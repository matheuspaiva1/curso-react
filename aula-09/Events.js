import React from "react";




const App = () => {

  /*
  function handleClick (event) {
    console.log(event.target.innerText)
  }
  */
 function handleScroll (event) {
  console.log(event)
}

  window.addEventListener('scroll', handleScroll)
    
  return (
    <div style={{height: "200vh"}}>
      <button onClick={(event) => alert(event.target.innerText)}>Clique</button>
    </div>
    //<button onClick={handleClick} onMouseMove={handleClick}>Clique</button>
  );
};

export default App;
