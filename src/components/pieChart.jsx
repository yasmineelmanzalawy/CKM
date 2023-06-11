import React from 'react'
import { faker } from "@faker-js/faker";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

const PieChart = () => {
    ChartJS.register(
        ArcElement,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        BarElement,
        Title
      );
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "",
          },
        },
      };
      const labels = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ];
      const data1 = {
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          
        ],
      };
  return (
    <div>
        <div className=" w-[500px]">
        <Bar  options={options} data={data1} />
      </div>
    </div>
  )
}

export default PieChart