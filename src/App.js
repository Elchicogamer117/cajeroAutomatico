import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //Billetes disponibles
  const[aB500,setAB500] = React.useState(10);
  const[aB200,setAB200] = React.useState(15);
  const[aB100,setAB100] = React.useState(20);
  const[aB50,setAB50] = React.useState(50);
  //Billetes entregados
  const[oB500, setOB500] = React.useState(0);
  const[oB200, setOB200] = React.useState(0);
  const[oB100, setOB100] = React.useState(0);
  const[oB50, setOB50] = React.useState(0);
  

  const[newCash,setNewCash] = React.useState(0);
  const[cash,setCash] = React.useState(aB500*500 + aB200*200 + aB100*100 + aB50*50);

  //obtener los valores de entrada
  const onChange = (event) => {
    setNewCash(event.target.value)
    console.log(setCash)
  }
  //guardar el valor en una variable
  const onSubmit = (event) => {
    event.preventDefault();
    let outCash = newCash;
    console.log(newCash);
    outMoney(outCash);
};

//logica del cajero
  const outMoney = (outCash) => { 
    const availableCash = cash - outCash;
    setCash(availableCash);
    //*? Iterando manualmente dado que el useState guarda el estados despues de correr todo el evento y se obtenia un click de retraso en el cambio
    const select500 = parseInt(outCash / 500);
    setOB500(select500);

    const select200 = parseInt((outCash - 500*select500) / 200);
    setOB200(select200)

    const select100 = parseInt((outCash - 200*select200 - 500*select500)/ 100);
    setOB100(select100)

    const select50 = parseInt((outCash - 100*select100 - 200*select200 - 500*select500)/50);
    setOB50(select50)

    setAB500(parseInt(aB500 - select500));
    setAB200(parseInt(aB200 - select200));
    setAB100(parseInt(aB100 - select100));
    setAB50(parseInt(aB50 - select50));

    console.log(2000%500)
};


  return (
    <form onSubmit={onSubmit}>
      <p>{"Billetes disponibles:" }</p>
      <p>{"500: " + aB500 }</p>
      <p>{"200: " + aB200 }</p>
      <p>{"100: " + aB100 }</p>
      <p>{"50: " + aB50 }</p>
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
      <p>{"Billetes entregados:" }</p>
      <p>{"500: " + oB500 }</p>
      <p>{"200: " + oB200 }</p>
      <p>{"100: " + oB100 }</p>
      <p>{"50: " + oB50 }</p>

    </form>
      
  );
}

export default App;
