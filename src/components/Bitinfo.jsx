import React from "react";

const BitcoinInfoPage = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultrices urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="mb-4 text-gray-700">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam in nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
        </p>
        <p className="mb-4 text-gray-700">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
        </p>

        <hr className="my-6" />

        <h2 className="text-xl font-bold mb-4">Already Holding Bitcoin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <img
              src="/img1.jpg"
              alt="Calculate your Profits"
              className="w-28 h-28 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-bold mb-2">Calculate your Profits</h3>
              <button className="bg-green-500 text-white px-4 py-2 rounded shadow-md">
                Check Now →
              </button>
            </div>
          </div>

          <div className="bg-orange-100 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <img
              src="/img2.jpg"
              alt="Calculate your tax liability"
              className="w-28 h-28 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-bold mb-2">Calculate your tax liability</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded shadow-md">
                Check Now →
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-gray-700">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
        </p>
      </div>
    </div>
  );
};

export default BitcoinInfoPage;
