import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  for (let row = 0; row < 3; row++) {}

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      {/* {(() => {})()} */}
      {(() => {
        const rows = [];
        for (let i = 0; i < 3; i++) {
          const cols = [];
          for (let j = 0; j < 3; j++) {
            const squareIndex = i * 3 + j;
            cols.push(
              <Square
                key={squareIndex}
                value={squares[squareIndex]}
                onSquareClick={() => handleClick(squareIndex)}
              />
            );
          }
          rows.push(
            <div className="board-row" key={i}>
              {cols}
            </div>
          );
        }
        return rows;
      })()}
    </React.Fragment>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    // console.log(`move: ${move}`);
    // console.log(`history.length: ${history.length - 1}`);

    let description;
    if (move === history.length - 1) {
      description = "You are on move #" + (move + 1);
    } else if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    if (move === history.length - 1) {
      return (
        <li key={move}>
          <p onClick={() => jumpTo(move)}>{description}</p>
        </li>
      );
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        {/* <p>You are at move #{lastMove}</p> */}
      </div>
    </div>
  );
}
