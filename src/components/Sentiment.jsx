import React, { useState } from "react";

const SentimentSection = () => {
  const [analystEstimates, setAnalystEstimates] = useState({
    buy: 60,
    hold: 30,
    sell: 10,
  });

  const { buy, hold, sell } = analystEstimates;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Sentiment</h2>
        <h3 className="text-lg font-bold mb-2 flex items-center">
          Key Events
          <span className="text-gray-400 ml-2 cursor-pointer">ℹ</span>
        </h3>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="flex space-x-4 mb-6 w-max">
            {/* Event cards here */}
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2 flex items-center">
          Analyst Estimates
          <span className="text-gray-400 ml-2 cursor-pointer">ℹ</span>
        </h3>
        <div className="flex items-center justify-between">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-green-100 flex items-center justify-center">
              <p className="text-green-500 text-3xl font-bold">{buy}%</p>
            </div>
          </div>
          <div className="flex-1 ml-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Buy</p>
              <p className="text-sm font-bold">{buy}%</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${buy}%` }}></div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Hold</p>
              <p className="text-sm font-bold">{hold}%</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div className="h-full bg-gray-400 rounded-full" style={{ width: `${hold}%` }}></div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Sell</p>
              <p className="text-sm font-bold">{sell}%</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-full bg-red-500 rounded-full" style={{ width: `${sell}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;
