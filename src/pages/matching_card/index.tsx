import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SquareMatchingCard from "./components/square";

export default function MatchingCard() {
  const [win, setWin] = useState<string>("");

  return (
    <>
      <div>
        <Link to="/">
          <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">
        MATCHING CARD
      </h2>
      <p className="text-center">{win}</p>
      <div className="flex justify-center items-center"></div>
      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
            <div className="status"></div>
            <div className="grid grid-cols-1 gap-2">
              <div className="grid grid-cols-3 gap-2">
                <SquareMatchingCard value={"a"} />
                <SquareMatchingCard value={"a"} />
                <SquareMatchingCard value={"a"} />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <SquareMatchingCard value={"a"} />
                <SquareMatchingCard value={"a"} />
                <SquareMatchingCard value={"a"} />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <SquareMatchingCard value={"a"} />
                <SquareMatchingCard value={"a"} />
                <SquareMatchingCard value={"a"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
