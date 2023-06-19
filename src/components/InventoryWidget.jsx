import React from "react";

const MostUsedItemsWidget = () => {
  const items = [
    { name: "Item A", usagePercentage: 80 },
    { name: "Item B", usagePercentage: 65 },
    { name: "Item C", usagePercentage: 55 },
    { name: "Item C", usagePercentage: 55 },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Most Used Items</h2>

      <ul className="w-64">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center w-full justify-between bg-gray-100 p-4 mb-2 rounded-lg"
          >
            <span className="text-gray-700">{item.name}</span>
            <span className="text-green-500">{item.usagePercentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostUsedItemsWidget;
