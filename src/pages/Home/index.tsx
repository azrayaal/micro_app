import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-2 text-center py-5 my-5">
        MICRO APP
      </h2>

      <div className="flex justify-center">
        <main className="list-film py-3 mb-5">
          <div className="container-fluid">
            <div className="grid grid-cols-1 gap-4">
              <Link to="/mobileLegend">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    MOBILE LEGEND
                  </h2>
                </div>
              </Link>
              <Link to="/currencyconvert">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    CURRENCY CONVERT
                  </h2>
                </div>
              </Link>
              <Link to="/salarycalculating">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    SALARY CALCULATING
                  </h2>
                </div>
              </Link>
              <Link to="/countduration">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    COUNT DURATION
                  </h2>
                </div>
              </Link>
              <Link to="/tictactoe">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    TIC TAC TOE
                  </h2>
                </div>
              </Link>
              <Link to="/matchingcard">
                <div className="bg-gray-200 p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    MATCHING CARD
                  </h2>
                </div>
              </Link>
              <Link to="/wordscramb">
                <div className="bg-gray-200 p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-bold mb-2 text-center">
                    WORD SCRAMB
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
