import React, { useState } from 'react';

function Calculator() {

  const [value, setValue] = useState("")

  function handleClick(event) {
    setValue(function(prevState) {
      return prevState + event.target.innerText;
    })
  }

  function calculate() {
    let calculation = eval(value);
    setValue(calculation)
  }

  return (
    <div id="calculator">
      <div id="screen">
        <p>{value}</p>
      </div>
      <div id="button-grid">
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick} className="operation-button">/</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick} className="operation-button">*</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick} className="operation-button">-</button>
        <button onClick={handleClick} className="wide-button">0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleClick} className="operation-button">+</button>
        <button className="ultra-wide-button" onClick={calculate}>
          CALCULATE
        </button>
      </div>
    </div>
  );
}

export default Calculator;