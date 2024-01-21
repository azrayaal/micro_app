import { useState } from "react";
import { Link } from "react-router-dom";

export default function WordScramb() {
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  const scrambleWord = `Burick`;

  const checkAnswer = (e: any) => {
    e.preventDefault();
    if (answer == "Rubick" || answer == "rubick") {
      setResult("You're correct!!");
    } else {
      setResult("Try Again!");
    }
  };

  return (
    <>
      <>
        <Link to="/">
          <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
        </Link>
        <h2 className="text-3xl font-bold mb-2 text-center pb-5">
          WORD SCRAMB
        </h2>

        <main>
          <div className="flex justify-center">
            <div className="py-5 my5">
              <div className="grid grid-cols-1">
                <div className="bg-gray-200  p-6 rounded-md shadow-md">
                  <form action="" onSubmit={checkAnswer}>
                    <div className="grid grid-cols-1 md:grid-cols-1 md:gap-2 gap-4">
                      <div className="GAJI_POKOK">
                        <label htmlFor="gajiPokok" className="mr-2">
                          Guess the word:
                        </label>
                        <p className="font-medium text-xl">{scrambleWord}</p>
                      </div>
                      <input
                        type="text"
                        id=""
                        name=""
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="border p-2 rounded-md"
                        placeholder="Guess the word"
                      />

                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mr-3"
                      >
                        Check Answer
                      </button>
                    </div>
                  </form>
                  <div className="result py-3">
                    <p className="text-center md:text-left font-bold py-2">
                      Results:{" "}
                    </p>
                    <p>{result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
}
