import React, { useState, useEffect } from "react";
import axios from "axios";

// Component for the blue section
const GetStartedSection = () => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold">Get Started with KoinX for FREE</h2>
      <p className="mt-2">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold">
        Get Started for FREE →
      </button>
    </div>
  );
};

// Component for the "Trending Coins" section
const TrendingCoinsSection = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch trending coins data from an API
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoins(response.data.coins.slice(0, 3)); // Only get the top 3 coins
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-bold mb-4">Trending Coins (24h)</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li
              key={coin.item.id}
              className="flex justify-between items-center py-2 border-b last:border-none"
            >
              <div className="flex items-center">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-6 h-6 mr-2"
                />
                <span>
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </span>
              </div>
              <span className="text-green-500 font-bold">
                {Math.random().toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main component to render both sections
const KoinXPage = () => {
  return (
    <div className="p-0 m-0 min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto">
        {/* Blue Section */}
        <GetStartedSection />

        {/* Trending Coins Section */}
        <TrendingCoinsSection />
      </div>
    </div>
  );
};

export default KoinXPage;