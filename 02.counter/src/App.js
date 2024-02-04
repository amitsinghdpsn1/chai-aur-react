import "./App.css";
import { useState, } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    if (counter === 20) {
      counter = 20;
    } else {
      
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);     ////// 1 baar me 5 add hoga;
    }
  };
  const decreaseValue = () => {
    if (counter === 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  };

  // onst increaseValueby5 = () => {
  //   if(counter===20){
  //     counter=20;
  //   }else{
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //     setCounter(prevCounter => prevCounter+1);
  //   }
  
  return (
    <>
      <h1>CHAI OR REACT </h1>
      <h2>COUNTER VALUE : {counter}</h2>
      <button onClick={increaseValue}>INCREASE VALUE {counter}</button>
      <br />
      <button onClick={decreaseValue}>DECREASE VALUE {counter}</button>
     
      <h1>{counter}</h1>
      
    </>
  );
  }


  export default App;
