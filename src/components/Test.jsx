import React, { useState } from 'react';

const YourComponent = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'pending':
        return (
          <div>
            {/* Content for Pending Orders */}
            <h2>Pending Orders</h2>
            {/* Add your pending orders content here */}
          </div>
        );
      case 'progress':
        return (
          <div>
            {/* Content for In-progress Orders */}
            <h2>In-progress Orders</h2>
            {/* Add your in-progress orders content here */}
          </div>
        );
      case 'history':
        return (
          <div>
            {/* Content for History */}
            <h2>History</h2>
            {/* Add your history content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="antialiased">
      <div className="w-full h-screen mt-20">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                Pantazi Software
              </h1>
              <p className="text-center text-sm text-gray-400 font-medium">
                UI Components Factory
              </p>
              <p>
                <span></span>
              </p>
              <div className="my-5 px-6">
                <a
                  href="."
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Connect with <span className="font-bold">@pantazisoft</span>
                </a>
              </div>
              <div className="flex justify-between items-center my-5 px-6">
                <button
                  onClick={() => handleTabClick('pending')}
                  className={`${
                    activeTab === 'pending' ? 'bg-gray-100' : 'bg-transparent'
                  } text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  Pending orders
                </button>
                <button
                  onClick={() => handleTabClick('progress')}
                  className={`${
                    activeTab === 'progress' ? 'bg-gray-100' : 'bg-transparent'
                  } text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  In-progress orders
                </button>
                <button
                  onClick={() => handleTabClick('history')}
                  className={`${
                    activeTab === 'history' ? 'bg-gray-100' : 'bg-transparent'
                  } text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  History
                </button>
              </div>

              <div className="w-full">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
