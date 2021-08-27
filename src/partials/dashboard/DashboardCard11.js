import React from 'react';
import BarChart from '../../charts/BarChart03';
import Icon from '../../images/graph_1.svg';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Pouco satisfeito',
        data: [11],
        backgroundColor: '#f18c79',
        hoverBackgroundColor: '#f18c79',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Regular',
        data: [16],
        backgroundColor: '#f1e579',
        hoverBackgroundColor: '#f1e579',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Bom',
        data: [22],
        backgroundColor: '#79f1d0',
        hoverBackgroundColor: '#79f1d0',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Satisfeito',
        data: [56],
        backgroundColor: '#d8f598',
        hoverBackgroundColor: '#d8f598',
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Muito satisfeito',
        data: [72],
        backgroundColor: '#93f081',
        hoverBackgroundColor: '#93f081',
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">

<div className="px-5 pt-5">
      <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full pull-right">+49%</div>
        </header>

        </div>
      <div className="px-5 py-3">
      <div className="flex justify-between items-start mb-2">
        <div className="text-3xl font-bold text-gray-800 mr-2">Percepção de Satisfação</div>
         
          <div className="text-3xl font-bold text-gray-800 mr-2">2.247</div>
          
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
      </div>
  );
}

export default DashboardCard11;
