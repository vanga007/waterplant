// components/PieChart.js
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart = ({ waterLevel, title }) => {
  const chartRef = useRef(null);
  const totalCapacity = 500000;

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const setChartOptions = () => {
      const option = {
        title: {
           left: 'center',
          fontSize: 12        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} L ({d}%)',
          fontsize:20
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Water Level',
            type: 'pie',
            radius: '90%',
            data: [
              { value: waterLevel, name: 'Available Water', itemStyle: {
                color: '#00aaff' 
              } },
              { value: totalCapacity - waterLevel, name: 'Total Capacity' , itemStyle: {
                color: '#FF6500' 
              }},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      chartInstance.setOption(option);
    };

    setChartOptions();

    return () => {
      chartInstance.dispose();
    };
  }, [waterLevel, title, totalCapacity]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default PieChart;
