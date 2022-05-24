import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[cash,setCash] = React.useState(12500)
  const[newCash,setNewCash] = React.useState(0)

  //obtener los valores de entrada
  const onChange = (event) => {
    setNewCash(event.target.value)
    console.log(setCash)
  }
  //guardar el nombre en una variable
  const onSubmit = (event) => {
    event.preventDefault();
    let outCash = newCash;
    console.log(newCash);
    availableMoney(outCash);
};

const availableMoney = (outCash) => {
  const availableCash = cash - outCash;
  setCash(availableCash);
}

  return (
    <form onSubmit={onSubmit}>
      <p>{"Dinero disponible: " + cash }</p>
      <label> Efectivo a retirar </label>
      <input 
      // value={cash}
      onChange = {onChange}
      placeholder='Solo enteros'
      type="submmit" >
      </input>
      <button >
        Retirar
      </button>
      <p> </p>
    </form>
      
  );
}

export default App;
