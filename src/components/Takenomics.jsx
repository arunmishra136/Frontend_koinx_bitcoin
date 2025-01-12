import React from 'react';

const TokenomicsPage = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen pb-10 pt-6">
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Tokenomics</h1>
        <h2 className="text-xl font-semibold mb-4">Initial Distribution</h2>
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://img.freepik.com/premium-vector/loading-start-infographic-chart-design-template_106317-34119.jpg?semt=ais_hybrid"
            alt="Pie Chart"
            className="w-full max-w-lg"
          />
          <div className="mt-4 text-center">
            <p className="text-blue-500 font-medium">Crowdsale Investors: 80%</p>
            <p className="text-yellow-500 font-medium">Foundation: 20%</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc
          dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci
          augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue.
        </p>
        <p className="text-gray-700">
          Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
          rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut.
        </p>
      </div>
    </div>
  );
};

export default TokenomicsPage;
