let React = require('react');
let ReactDOM = require('react-dom');


let root = document.getElementById('root');

let MyComp = function () {

  let [count, setcount] = React.useState(0);

  return <div>
  <h1>{count}</h1>
    <h1>{count % 2}</h1>
    <h1>{count * 5}</h1>
    <h1>{count / 10}</h1>

    <button onClick={function(){
      setcount(count + 1);
    }}>
      +
    </button>
  </div>
}

ReactDOM.render(<MyComp />, root);
