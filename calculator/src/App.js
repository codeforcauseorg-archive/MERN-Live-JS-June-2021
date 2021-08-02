import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let numerics = new Set("0123456789.");
  let operators = new Set("+-%*/");

  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const [prev, setPrevious] = useState("");

  let buttons = [9, 8, 7, "+", 6, 5, 4, "-", 3, 2, 1, "*", "C", "/", "%", "=", "0", ".", "A", "D"];

  const evaluate = () => {
    setResult(eval(expression));
  }

  const handleClick = (item) => {
    console.log(item);
    if (item == "=") {
      evaluate();
    }
    else if (item == "C") {
      setExpression("");
      setResult("");
    }
    else if (operators.has(prev)) {

    }
    else {
      setExpression(expression + item);
    }
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <div style={{ padding: '10px', color: "#fff" }} >
          My Simple Calculator
        </div>
        <div className="expr-header">
          <strong> {result} </strong>
          <strong> {expression} </strong>
        </div>
        {/* button */}
        <div className="button-container">
          {
            buttons.map((item) => (
              <button key={item} onClick={() => handleClick(item)}>
                {item}
              </button>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;


