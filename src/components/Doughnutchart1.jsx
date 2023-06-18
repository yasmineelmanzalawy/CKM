import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [faker.datatype.number(), faker.datatype.number(), faker.datatype.number()],
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 205, 86, 0.5)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
    legend: {
      position: 'bottom',
    },
  },
};

export function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
