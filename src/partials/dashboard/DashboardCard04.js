import React from 'react';
import BarChart from '../../charts/BarChart01';
import Icon from '../../images/graph_1.svg';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021','06-01-2021',
      '07-01-2021', '08-01-2021', '09-01-2021','10-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Direct',
        data: [
          800, 1600, 900, 1300, 1950, 1700, 2500, 1300, 1950, 1700, 2500,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        borderColor: tailwindConfig().theme.colors.blue[800],
        barPercentage: 1.1,
        categoryPercentage: 0.66,
      },
      // Blue bars
      /**
      {
        label: 'Indirect',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      */
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 pt-5">
      <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full pull-right">+22%</div>
        </header></div>

        <div className="px-5 py-3">
      <div className="flex justify-between items-start mb-2">
        <div className="text-3xl font-bold text-gray-800 mr-2">Participação Voluntária</div>
         
          <div className="text-3xl font-bold text-gray-800 mr-2">1.618</div>
          
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
