import React, { useRef, useEffect } from 'react';

import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';

// Import utilities
import { tailwindConfig, formatValue } from '../utils/Utils';

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

function RealtimeChart({
  data,
  width,
  height
}) {

  const canvas = useRef(null);
  const chartValue = useRef(null);
  const chartDeviation = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        chartArea: {
          backgroundColor: tailwindConfig().theme.colors.gray[50],
        },
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true,
          },
          x: {
            //type: 'time',
            time: {
              //parser: 'MM-DD-YYYY',
              //unit: 'month',
              parser: 'YYYY-MM-DD-T-HH-mm',
              unit: 'day',
            },
            display: false,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => 'Nota:', // Disable tooltip title
              //label: (context) => formatValue(context.parsed.y),
            },
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
      },
    });
    return () => chart.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  }, [data]);

  // Update header values
  

  return (
    <canvas ref={canvas} width={width} height={height}></canvas>
  );
}

export default RealtimeChart;