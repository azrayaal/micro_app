import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/backButton";

interface Rates {
  [key: string]: number;
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>();
  const [fromCurrency, setFromCurrency] = useState("IDR");
  const [toCurrency, setTocurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState<Rates>({});
  const [convertedAmount, setConvertedAmount] = useState<number | null>(0);

  const currencyConvert = async (e: any) => {
    e.preventDefault();
    const apiKey = "API_KEY";
    console.log("amount", amount);
    await axios
      .get(`https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`)
      .then((response) => {
        console.log("data search", response.data);
        setExchangeRates(response.data.rates);
        if (amount !== undefined && amount !== 0 && exchangeRates[toCurrency]) {
          const conversion = amount * exchangeRates[toCurrency];
          setConvertedAmount(conversion);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    }
  };

  useEffect(() => {
    const mockEvent = { preventDefault: () => {} };
    currencyConvert(mockEvent);
  }, []);

  return (
    <>
      <BackButton />
      <h2 className="text-3xl font-bold mb-2 text-center pb-5">
        CURENCY CONVERTER
      </h2>

      <main>
        <div className="flex justify-center">
          <div className="py-5 my5">
            <div className="grid grid-cols-1">
              <div className="bg-gray-200  p-6 rounded-md shadow-md">
                <form action="" onSubmit={currencyConvert}>
                  <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 gap-4">
                    <div className="Amount">
                      <label htmlFor="amount" className="mr-2">
                        Amount:
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={handleAmountChange}
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
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                      >
                        {Object.keys(exchangeRates).map((currency) => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
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
                        value={toCurrency}
                        onChange={(e) => setTocurrency(e.target.value)}
                      >
                        {Object.keys(exchangeRates).map((currency) => (
                          <option value={currency} key={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="BUTTONS justify-center items-center flex">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mr-3"
                      >
                        Convert
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
                  <p>
                    {amount} {fromCurrency}
                  </p>
                  <p> = </p>
                  <p>
                    {convertedAmount} {toCurrency}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
