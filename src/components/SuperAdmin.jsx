import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Avatar from 'react-avatar';
import { Line, Bar } from 'react-chartjs-2';

const AdminDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('Dashboard');



  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const renderMainContent = () => {
    switch (selectedNavItem) {
      case 'Dashboard':
        return (
          <div>
            <div className="flex mb-4">
              <div className="w-1/3">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Revenue</h3>
                  <Line
                    data={{
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                      datasets: [
                        {
                          label: 'Revenue',
                          data: [1200, 1500, 900, 1900, 1400, 1800],
                          borderColor: '#E94249',
                          borderWidth: 2,
                          fill: false,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
              <div className="w-1/3 mx-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Profit</h3>
                  <Bar
                    data={{
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                      datasets: [
                        {
                          label: 'Profit',
                          data: [600, 800, 400, 900, 700, 1000],
                          backgroundColor: '#E94249',
                        },
                      ],
                    }}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Growth Rate</h3>
                  <Line
                    data={{
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                      datasets: [
                        {
                          label: 'Growth Rate',
                          data: [2, 4, 1, 5, 3, 6],
                          borderColor: '#E94249',
                          borderWidth: 2,
                          fill: false,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">Widget 1</h3>
                <p>Widget content goes here</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">Widget 2</h3>
                <p>Widget content goes here</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">Widget 3</h3>
                <p>Widget content goes here</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">Widget 4</h3>
                <p>Widget content goes here</p>
              </div>
            </div>
          </div>
        );
      case 'Users':
        return <h1 className="text-2xl font-bold mb-4">Users</h1>;
      case 'Products':
        return <h1 className="text-2xl font-bold mb-4">Products</h1>;
      case 'Orders':
        return <h1 className="text-2xl font-bold mb-4">Orders</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-Inter font-semibold">
      {/* Header */}
      <header className="bg-gray-800 text-gray-300 py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white text-xl font-bold ml-2">Admin Dashboard</div>
          </div>
          <div className="relative">
            <div
              className="bg-gray-500 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 shadow-md rounded-md">
                <div className="py-2 px-4">Name: Admin</div>
                <div className="py-2 px-4">Email: admin@example.com</div>
                <div className="py-2 px-4 border-t border-gray-200">Settings</div>
                <div className="py-2 px-4 cursor-pointer text-red-600 hover:text-red-800">
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800 flex">
        {/* Collapsible Sidebar */}
        <aside
          className={`bg-gray-700 text-gray-300 py-8 w-[15%] transition-all duration-300 overflow-y-auto`}
        >
          <nav>
            <ul>
              <li
                className={`p-4 cursor-pointer ${
                  selectedNavItem === 'Dashboard' ? 'text-white bg-gray-600' : ''
                }`}
                onClick={() => handleNavItemClick('Dashboard')}
              >
                Dashboard
              </li>
              <li
                className={`p-4 cursor-pointer ${
                  selectedNavItem === 'Users' ? 'text-white bg-gray-600' : ''
                }`}
                onClick={() => handleNavItemClick('Users')}
              >
               Brands
              </li>
              <li
                className={`p-4 cursor-pointer ${
                  selectedNavItem === 'Products' ? 'text-white bg-gray-600' : ''
                }`}
                onClick={() => handleNavItemClick('Products')}
              >
                Users
              </li>
            </ul>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <div
          className={` p-8 px-4 transition-all duration-300 flex-grow`}
        >
          {renderMainContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
