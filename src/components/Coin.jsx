import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "./Graph";

const BitcoinPricePage = () => {
  const [priceUSD, setPriceUSD] = useState(null);
  const [priceINR, setPriceINR] = useState(null);
  const [changeUSD, setChangeUSD] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from CoinGecko API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }
        );

        const priceResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "usd,inr",
              include_24hr_change: true,
            },
          }
        );

        const data = priceResponse.data.bitcoin;

        setPriceUSD(data.usd);
        setPriceINR(data.inr);
        setChangeUSD(data.usd_24h_change.toFixed(2));
        setChartData(response.data.prices.map((item) => item[1]));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-50%">
        <div id="div1" className="flex">
          <h1 className="text-2xl font-bold mb-4 flex items-center mr-5">
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              alt="Bitcoin Logo"
              className="w-8 h-8 mr-1"
            />
            Bitcoin
            <p className="text-gray-500 pl-2 font-semibold">(BTC)</p>
          </h1>
          <p className="bg-gray-500 text-white px-4 py-3 rounded-xl">Rank #1</p>
        </div>
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <>
            <div className="mb-4">
              {/* Display USD Price */}
              <div className="flex items-center">
                <h2 className="text-4xl font-bold">${priceUSD}</h2>
                <p
                  className={`ml-4 text-sm ${
                    changeUSD >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {changeUSD}% (24h)
                </p>
              </div>

              {/* Display INR Price */}
              <h2 className="text-lg font-semibold text-black-500 mt-2">
                ₹{priceINR}
              </h2>
            </div>

            {/* Graph Section */}
            <div>
              <h3 className="text-lg font-bold mb-2">
                Bitcoin Price Chart (USD)
              </h3>
              <div className="relative h-64">
                <Graph />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BitcoinPricePage;
