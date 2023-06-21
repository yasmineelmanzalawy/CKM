import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from '../axios.config';
import { useState, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Staff Roles Chart',
      fontSize: 50,
    },
  },
};

export function Tester() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/staff-stats/${localStorage.getItem("brand_id")}`);
        const staffData = response.data.staff_count_by_role;

        const labels = staffData.map(item => item.role);
        const counts = staffData.map(item => parseInt(item.count));

        const data = {
          labels,
          datasets: [
            {
              label: 'Staff Count',
              data: counts,
              backgroundColor: 'rgba(255, 0, 0, 0.5)', // Bright red color
            },
          ],
        };

        setChartData(data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container rounded-lg bg-gray-100 p-6">
      {chartData ? (
        <Bar options={options} data={chartData} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}
