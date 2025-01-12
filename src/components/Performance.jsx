import React, { useState, useEffect } from "react";
import axios from "axios";

const PerformancePage = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Fetch both Bitcoin data and global market data
        const [cryptoResponse, globalResponse] = await Promise.all([
          axios.get("https://api.coingecko.com/api/v3/coins/bitcoin"),
          axios.get("https://api.coingecko.com/api/v3/global"),
        ]);

        setCryptoData({
          ...cryptoResponse.data,
          total_market_cap: globalResponse.data.data.total_market_cap.usd,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
        setIsLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cryptoData) {
    return <p>Error loading data</p>;
  }

  const {
    market_data: {
      current_price,
      market_cap,
      total_volume,
      high_24h,
      low_24h,
      ath,
      atl,
    },
    market_cap_rank,
    total_market_cap,
  } = cryptoData;

  const marketCapDominance = (
    (market_cap.usd / total_market_cap) *
    100
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Wrapper container for full screen layout */}
      <div className="h-full flex flex-col justify-between mx-auto p-6">
        {/* Tabs Section */}
        <div className="flex border-b border-gray-300  text-lg">
          {[
            "Overview",
            "Fundamentals",
            "News Insights",
            "Sentiments",
            "Team",
            "Technicals",
            "Tokenomics",
          ].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-lg ${
                tab === "Overview"
                  ? "border-b-2 border-blue-500 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Performance Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">Performance</h2>
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm">
              <p className="text-gray-600">Today's Low</p>
              <p className="text-lg font-bold text-red-500">
                ${low_24h.usd.toFixed(2)}
              </p>
            </div>
            <div className="flex-1 mx-4 relative">
              {/* Gradient Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transform -translate-y-1/2"></div>

              {/* Pointer */}
              <div
                className="absolute top-1/2 h-4 w-4 bg-black transform -translate-y-1/2 rotate-45"
                style={{
                  left: `${
                    ((current_price.usd - low_24h.usd) /
                      (high_24h.usd - low_24h.usd)) *
                    100
                  }%`,
                }}
              ></div>

              {/* Label */}
              <div
                className="absolute top-full text-sm text-gray-700 transform -translate-x-1/2 mt-2"
                style={{
                  left: `${
                    ((current_price.usd - low_24h.usd) /
                      (high_24h.usd - low_24h.usd)) *
                    100
                  }%`,
                }}
              >
                ${current_price.usd.toFixed(2)}
              </div>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">Today's High</p>
              <p className="text-lg font-bold text-green-500">
                ${high_24h.usd.toFixed(2)}
              </p>
            </div>
          </div>

          {/* 52-Week Range */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm">
              <p className="text-gray-600">52W Low</p>
              <p className="text-lg font-bold text-red-500">
                ${atl.usd.toFixed(2)}
              </p>
            </div>
            <div className="flex-1 mx-4 relative">
              {/* Gradient Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transform -translate-y-1/2"></div>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">52W High</p>
              <p className="text-lg font-bold text-green-500">
                ${ath.usd.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Fundamentals Section */}
        <h3 className="text-lg font-bold ">Fundamentals</h3>
        <div className="flex justify-between gap-20 text-sm">
          {/* Left Column */}
          <div className="flex-1">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">Bitcoin Price</p>
              <p className="text-lg">${current_price.usd.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">Market Cap</p>
              <p className="text-lg">${market_cap.usd.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">24h Low / 24h High</p>
              <p className="text-lg">
                ${low_24h.usd.toFixed(2)} / ${high_24h.usd.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">Market Cap Dominance</p>
              <p className="text-lg">{marketCapDominance}%</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">7d Low / 7d High</p>
              <p className="text-lg">
                ${low_24h.usd.toFixed(2)} / ${high_24h.usd.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">Volume / Market Cap</p>
              <p className="text-lg">{(total_volume.usd / market_cap.usd).toFixed(4)}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">Trading Volume</p>
              <p className="text-lg">${total_volume.usd.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">All-Time High</p>
              <p className="text-lg">
                ${ath.usd.toFixed(2)}{" "}
                <span className="text-red-500">
                  -{((1 - current_price.usd / ath.usd) * 100).toFixed(1)}%
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">Market Cap Rank</p>
              <p className="text-lg">#{market_cap_rank}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600">All-Time Low</p>
              <p className="text-lg">
                ${atl.usd.toFixed(2)}{" "}
                <span className="text-green-500">
                  {((current_price.usd / atl.usd - 1) * 100).toFixed(1)}%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;