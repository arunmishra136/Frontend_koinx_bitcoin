import React, { useEffect, useState } from "react";
import axios from "axios";
import Tradingview from "./Tradingview";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trending coins and their prices in USD
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        // Fetch trending coins from CoinGecko
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        // Extract the coin IDs to get detailed market data
        const coinIds = response.data.coins.map((coin) => coin.item.id);

        // Fetch detailed market data for these coins
        const marketResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(
            ","
          )}&vs_currencies=usd`
        );

        // Combine data from both responses
        const coins = response.data.coins.map((coin) => ({
          id: coin.item.id,
          symbol: coin.item.symbol,
          name: coin.item.name,
          image: coin.item.large, // Use 'large' for higher resolution
          price_usd: marketResponse.data[coin.item.id]?.usd || "N/A",
          market_cap_rank: coin.item.market_cap_rank,
        }));

        setTrendingCoins(coins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-6">
      {/* You May Also Like Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">You May Also Like</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {trendingCoins.map((coin) => (
            <div>
            <div
              key={coin.id}
              className="w-48 p-4 bg-white rounded-lg shadow-md flex-shrink-0"
            >
              <div className="flex items-center space-x-2 mb-2">
                {/* Display the coin image */}
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <p className="text-sm font-semibold">
                  {coin.symbol.toUpperCase()}
                </p>
              </div>
              <p className="text-lg font-bold">USD: ${coin.price_usd}</p>
            </div>
            <div>
              <Tradingview/>
            </div>
            </div>
            
            
          ))}
        </div>
      </div>

      {/* Trending Coins Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">Trending Coins</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {trendingCoins.map((coin) => (
            <div>
            <div
              key={coin.id}
              className="w-48 p-4 bg-white rounded-lg shadow-md flex-shrink-0"
            >
              <div className="flex items-center space-x-2 mb-2">
                {/* Display the coin image */}
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <p className="text-sm font-semibold">
                  {coin.symbol.toUpperCase()}
                </p>
              </div>
              <p className="text-lg font-bold">USD: ${coin.price_usd}</p>
            </div>
            <div><Tradingview/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
