import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import axios from '../axios.config';
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend);

export const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Raw Materials Count by Category',
      fontSize: 50,
    },
  },
};

export function InventoryChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`api/inventory-stats/${localStorage.getItem("brand_id")}`);
          const rawMaterialsData = response.data.raw_materials_count_by_category;
      
          const labels = rawMaterialsData.map(item => item.category);
          const counts = rawMaterialsData.map(item => parseInt(item.count));
      
          const data = {
            labels,
            datasets: [
              {
                label: 'Raw Materials Count',
                data: counts,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          };
      
          setChartData(data);
        } catch (error) {
          console.error('Error fetching raw materials data:', error);
        }
      };

    fetchData();
  }, []);

  return (
    <div>
      {chartData ? (
        <Bar options={options} data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}
