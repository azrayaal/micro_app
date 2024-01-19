import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CountDuration() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isValid && startDate && endDate) {
        const timeDifference = endDate.getTime() - Date.now();
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const durationString = `${days}d ${hours % 24}h ${minutes % 60}m ${
          seconds % 60
        }s`;
        setDuration(durationString);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate, isValid]);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newStartDate = new Date(event.target.value);
    setStartDate(newStartDate);
    setIsValid(true);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = new Date(event.target.value);
    if (startDate && newEndDate < startDate) {
      setIsValid(false);
    } else {
      setEndDate(newEndDate);
      setIsValid(true);
    }
  };

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
              <div className="grid grid-cols-1">
                <div className="bg-gray-200 p-6 rounded-md shadow-md">
                  <div className="py-3">
                    <label>
                      Start Date:
                      <input
                        className="ml-3"
                        type="datetime-local"
                        onChange={handleStartDateChange}
                      />
                    </label>
                  </div>
                  <div className="py-3">
                    <label>
                      End Date:
                      <input
                        className="ml-4"
                        type="datetime-local"
                        onChange={handleEndDateChange}
                      />
                    </label>
                  </div>
                  <div className="result py-3">
                    <p className="text-center md:text-left font-bold py-2">
                      Countdown:{" "}
                    </p>
                    {!isValid && (
                      <div style={{ color: "red" }}>
                        Ooops kita gabisa balik ke masa lalu, coba pilih masa
                        depan
                      </div>
                    )}
                    <p>{isValid ? duration : "Invalid"}</p>
                  </div>
                  <button
                    onClick={handleRefresh}
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-blue-600"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
