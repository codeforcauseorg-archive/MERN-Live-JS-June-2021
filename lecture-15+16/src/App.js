import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let numerics = new Set("0123456789.");
  let operators = new Set("+-%*/");


  const [result, setResult] = useState("ANS = ");
  const [expression, setExpression] = useState("0");
  const [prev, setPrevious] = useState("NUM");


  let buttons = [9, 8, 7, "+", 6, 5, 4, "-", 3, 2, 1, "*", "C", "/", "%", "=", "0", ".", "A", "D"];

  const evaluate = () => {
    let res = eval(expression)
    setResult(res);
    setPrevious("EQ"); // equal-to
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

    else if (prev === "OP" && operators.has(item)) {
      console.log("prev", prev);
      alert("You can't use consecutive operators");
    }

    else if (item == "D") {
      setExpression(expression.slice(0, -1));
      if (prev === "OP") {
        setPrevious("NUM");
      }
    }

    else {
      if (expression == "0") {
        setExpression(item);
      }
      else {
        if (prev == "EQ") {
          setExpression(result.toString() + item);
        }
        else {
          setExpression(expression.toString() + item);
        }
      }

      if (operators.has(item)) {
        setPrevious("OP");
      } else {
        setPrevious("NUM")
      }
    }
  }

  const handleKeyPress = (event) => {
    let val = event.keyCode - 48;
    setExpression(expression.toString() + val);
  }

  return (
    <div className="App" >
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
              <button key={item} onClick={() => handleClick(item)} onKeyDown={handleKeyPress}>
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


