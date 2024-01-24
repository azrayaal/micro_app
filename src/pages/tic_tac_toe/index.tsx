import { Link } from "react-router-dom";
import Square from "./components/square";
import { useState } from "react";
import BackButton from "../../components/backButton";

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares: any) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const onHandleClick = (i: any) => {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner " + `"${winner}"`;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div>
        <BackButton />
      </div>
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">TIC TAC TOE</h2>
      <div className="flex justify-center items-center">
        <button
          onClick={handleRefresh}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>
      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
            <div className="status">{status}</div>
            <div className="grid grid-cols-1 gap-2">
              <div className="grid grid-cols-3 gap-2">
                <Square
                  value={squares[0]}
                  onSquareClick={() => onHandleClick(0)}
                />
                <Square
                  value={squares[1]}
                  onSquareClick={() => onHandleClick(1)}
                />
                <Square
                  value={squares[2]}
                  onSquareClick={() => onHandleClick(2)}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Square
                  value={squares[3]}
                  onSquareClick={() => onHandleClick(3)}
                />
                <Square
                  value={squares[4]}
                  onSquareClick={() => onHandleClick(4)}
                />
                <Square
                  value={squares[5]}
                  onSquareClick={() => onHandleClick(5)}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Square
                  value={squares[6]}
                  onSquareClick={() => onHandleClick(6)}
                />
                <Square
                  value={squares[7]}
                  onSquareClick={() => onHandleClick(7)}
                />
                <Square
                  value={squares[8]}
                  onSquareClick={() => onHandleClick(8)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
