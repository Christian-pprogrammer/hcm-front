import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
      );
    const colorItems =(tooltipItem:any)=>{
        const tooltipBackgroundColor = tooltipItem.tooltip.labelColors[0].borderColor
        return tooltipBackgroundColor
    }
    const options :any | undefined= {
        responsive: true,
        transitions: {
            show: {
              animations: {
                x: {
                  from: 0
                },
                y: {
                  from: 0
                }
              }
            },
            hide: {
              animations: {
                x: {
                  to: 0
                },
                y: {
                  to: 0
                }
              }
            }
          },
        plugins: {
          legend: {
            position: 'bottom' as const,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
          tooltip:{
            displayColors:false,
            yAlign : "bottom",
            boxShadow : "4px 4px 4px 3px black",
            backgroundColor : colorItems
          }
        },
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'October', 'November', 'December'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => (faker.random.numeric(100))),
            borderColor: 'rgba(32, 252, 84, 0.7)',
            backgroundColor: 'rgba(32, 252, 84, 0.5)',
            fill:false,
            tension : 0.5,
            pointBackgroundColor : 'rgba(32, 252, 84, 0.7)',
            pointBorderColor : 'rgba(32, 252, 84, 0.7)',
            pointHoverBackgroundColor : 'white',
            pointHoverRadius : 8,
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => (faker.random.numeric(100))),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.38)',
            fill:true,
            tension : 0.5,
            pointBackgroundColor: 'rgb(53, 162, 235)',
            pointBorderColor: 'rgb(53, 162, 235)',
            pointHoverBackgroundColor: 'white',
            pointStyle: 'rectRounded',
            pointHoverRadius : 8,

          },
        ],
      };

  return (
    <>
        <Line data={data} options={options} />
    </>
  )
}

export default Chart
