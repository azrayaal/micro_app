import { useState } from "react";
import { Link } from "react-router-dom";

interface Rates {
  [key: string]: number;
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>();
  const [fromCurrency, setFromCurrency] = useState("IDR");
  const [toCurrency, setTocurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState<Rates>({});
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  return (
    <>
      <Link to="/">
        <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
      </Link>
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">
        CURENCY CONVERTER
      </h2>

      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
            <div className="grid grid-cols-1">
              <div className="bg-gray-200  p-6 rounded-md shadow-md">
                <form action="">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="Amount">
                      <label htmlFor="amount" className="mr-2">
                        Amount:
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="border p-2 rounded-md"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="From Currency">
                      <label htmlFor="currencyFrom" className="md:ml-4 mr-2">
                        From Currency:
                      </label>
                      <select
                        id="currencyFrom"
                        name="currencyFrom"
                        className="border p-2 rounded-md"
                      >
                        {/* Add currency options here */}
                      </select>
                    </div>
                    <div className="To Currency">
                      <label htmlFor="currencyTo" className="md:ml-4 mr-2">
                        To Currency:
                      </label>
                      <select
                        id="currencyTo"
                        name="currencyTo"
                        className="border p-2 rounded-md"
                      >
                        {/* Add currency options here */}
                      </select>
                    </div>
                  </div>
                </form>
                <div className="result py-3">
                  <p>usd idr= </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
