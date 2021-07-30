import { useState } from 'react';
import './App.css';

function App() {

  let initial = {
    player: 1,
    board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    gameOver: false,
    winner: undefined,
    steps: 0
  }

  let [boardState, setBoardState] = useState(initial);

  let gameLogic = function (board, player, row, col) {

    let rcount = 0;
    for (let r = 0; r < 3; r++) {
      if (board[r][col] === player) {
        rcount += 1;
      }
    }

    if (rcount === 3) {
      return true;
    }

    let ccount = 0;
    for (let c = 0; c < 3; c++) {
      if (board[row][c] === player) {
        ccount += 1;
      }
    }

    if (ccount === 3) {
      return true;
    }

    let dlcount = 0;
    for (let l = 0; l < 3; l++) {
      if (board[l][l] === player) {
        dlcount += 1;
      }
    }

    if (dlcount === 3) {
      return true;
    }

    let drcount = 0;
    for (let r = 0; r < 3; r++) {
      if (board[r][2 - r] === player) {
        drcount += 1;
      }
    }

    if (drcount === 3) {
      return true;
    }

    return false
  }


  return (
    <div className="App">

      {boardState.board.map(function (row, index) {
        return <div key={index}>{row.map((function (item, cindex) {
          return (<button
            disabled={boardState.gameOver}
            onClick={function () {
              let copystate = { ...boardState }
              if (copystate.board[index][cindex] === 0) {
                copystate.board[index][cindex] = copystate.player;

                let result = gameLogic(copystate.board, copystate.player, index, cindex);
                if (result) {
                  copystate.gameOver = true;
                  copystate.winner = copystate.player;
                }

                copystate.steps += 1;

                if (copystate.steps === 9) {
                  copystate.gameOver = true;
                  copystate.winner = 0;
                }

                copystate.player = -copystate.player;

                setBoardState(copystate);
              }

            }}
            key={cindex}
            className="tictacbutton">{item === 0 ? undefined : item}
          </button>);
        }))
        }
        </div>
      })}


      {boardState.gameOver && <div>
        <h1>Winner is {boardState.winner}</h1>
        <button onClick={function () {
          setBoardState(initial);
        }}>Reset Game</button>
      </div>}

    </div>
  );
}

export default App;
