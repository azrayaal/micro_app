import { Link } from "react-router-dom";
import Square from "./components/square";
import { useState } from "react";

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

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
  return (
    <>
      <Link to="/">
        <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
      </Link>
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">TIC TAC TOE</h2>

      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
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
