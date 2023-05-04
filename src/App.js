import React, { useState } from "react"

function App(){

  const [buttonText, setButtonText]=useState(["get Bitcoin price"])
  var [count, setCount]=useState(0);
  var cur=200;
  var pre=100;

  function handleClick(e){
    setCount(count+1)
    setButtonText("refresh bitcoin price");
    e.target.style.background="purple";
    
    
  }
  return(
  <div>
    {(count>=1) && <h1>Current Price {cur}</h1> }
    {(count>=2) && <h1>Previous price {pre}</h1>}
      
     

    
    
    <button style={{background: "blue"}} onClick={handleClick}>{buttonText}</button>

  </div>)
}

export default App;