import { Link } from "react-router-dom";

export default function CountDuration() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <Link to="/">
        <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
      </Link>
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">
        COUNT DURATION
      </h2>

      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
            <div className="grid grid-cols-1">
              <div className="bg-gray-200  p-6 rounded-md shadow-md">
                <form action="">
                  {/* <form action="" onSubmit={countSalary}> */}
                  <div className="grid grid-cols-1 md:grid-cols-1 md:gap-2 gap-4">
                    <label htmlFor="gajiPokok" className="mr-2">
                      Enter the Target Date and Time:
                    </label>
                    <div className="GAJI_POKOK">
                      <input
                        type="date"
                        id="gajiPokok"
                        name="gajiPokok"
                        // value={gajiPokok}
                        // onChange={handleGajiPokok}
                        className="border p-2 rounded-md"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="BUTTONS ">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mr-3"
                      >
                        Count
                      </button>
                      <button
                        onClick={handleRefresh}
                        className="bg-green-500 text-white p-2 rounded-md hover:bg-blue-600 ml-3"
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                </form>
                <div className="result py-3">
                  <p className="text-center md:text-left font-bold py-2">
                    Countdown:{" "}
                  </p>
                  {/* <p>Gaji Kotor: Rp. {gajiPokok}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
