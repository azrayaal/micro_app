import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SalaryCalculating() {
  const [gajiPokok, setGajiPokok] = useState<number>();
  const [tunjangan, setTunjangan] = useState<number>();
  const [kewajibanPokok, setKewajibanPokok] = useState<number>();
  const [totalSalary, setTotalSalary] = useState<number>();

  const countSalary = (e: any) => {
    e.preventDefault();
    if (gajiPokok && tunjangan) {
      let totalPokok = gajiPokok + tunjangan;
      setTotalSalary(totalPokok);
      console.log("total", totalPokok);
      if (kewajibanPokok) setTotalSalary((totalPokok -= kewajibanPokok));
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };
  const handleGajiPokok = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      setGajiPokok(numericValue);
    }
  };
  const handleTunjangan = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      setTunjangan(numericValue);
    }
  };
  const handleKewajiban = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      setKewajibanPokok(numericValue);
    }
  };

  useEffect(() => {
    const mockEvent = { preventDefault: () => {} };
    countSalary(mockEvent);
  }, []);

  return (
    <>
      <Link to="/">
        <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
      </Link>
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">
        SALARY CALCULATING
      </h2>

      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
            <div className="grid grid-cols-1">
              <div className="bg-gray-200  p-6 rounded-md shadow-md">
                <form action="" onSubmit={countSalary}>
                  <div className="grid grid-cols-1 md:grid-cols-1 md:gap-2 gap-4">
                    <div className="GAJI_POKOK">
                      <label htmlFor="gajiPokok" className="mr-2">
                        Gaji Pokok:
                      </label>
                      <input
                        type="number"
                        id="gajiPokok"
                        name="gajiPokok"
                        value={gajiPokok}
                        onChange={handleGajiPokok}
                        className="border p-2 rounded-md"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="TUNJANGAN">
                      <label htmlFor="tunjangan" className="mr-2">
                        Tunjangan:
                      </label>
                      <input
                        type="number"
                        id="tunjangan"
                        name="tunjangan"
                        value={tunjangan}
                        onChange={handleTunjangan}
                        className="border p-2 rounded-md"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="KEWAJIBAN_POKOK">
                      <label htmlFor="kewajibanPokok" className="mr-2">
                        Kewajiban Pokok:
                      </label>
                      <input
                        type="number"
                        id="kewajibanPokok"
                        name="kewajibanPokok"
                        value={kewajibanPokok}
                        onChange={handleKewajiban}
                        className="border p-2 rounded-md"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="BUTTONS justify-center items-center flex">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mr-3"
                      >
                        Hitung Gaji
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
                    Results:{" "}
                  </p>
                  <p>Gaji Kotor: Rp. {gajiPokok}</p>
                  <p>Gaji Pokok: Rp. {tunjangan}</p>
                  <p>Gaji Bersih: Rp. {totalSalary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
