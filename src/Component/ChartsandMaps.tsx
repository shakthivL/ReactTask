import * as React from 'react';
import Sidebar from './Sidebar';

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartsAndMaps() {
    const  series =[44, 55, 67, 83];
    const options: ApexOptions = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true
          }
        },
      };
      const  options2: ApexOptions = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      }
      const series2 =  [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]

    return (
        <>
            <Sidebar />
            <div className='cont-text' >
                <div id="chart">
                    <ReactApexChart options={options} series={series} type="radialBar" height={350} />
                </div>
                <div id="chart2">
                    <ReactApexChart options={options2} series={series2} type="bar" height={350} />
                </div>
            </div>

        </>
      );
}