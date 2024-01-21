import { Link } from "react-router-dom";
import Square from "./components/square";
import { useEffect } from "react";

export default function TicTacToe() {
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
                <Square />
                <Square />
                <Square />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Square />
                <Square />
                <Square />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Square />
                <Square />
                <Square />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}