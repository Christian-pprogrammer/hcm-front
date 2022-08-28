import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'

const DoughnutChartPage = () => {
Chart.register(ArcElement);
const labels = ['UnMapped Services','Mapped Services'];
const data = {
 labels: labels,
 datasets: [{
 label: 'Doughnut chart',
 data: [38, 99],
 backgroundColor: [
   'rgba(201, 203, 207, 0.2)',
   'rgba(26, 115, 232, 1)',
        ],
  borderWidth: 1,
  borderColor: [
    'rgba(201, 203, 207, 1)',
    'rgba(26, 115, 232, 1)',
        ],
 hoverBorderWidth: 4,
 hoverBorderColor: [
   'rgba(26, 115, 232, 1)',
 'rgb(153, 102, 255)',
],
    }]
};
const colorItems =(tooltipItem:any)=>{
  const tooltipBackgroundColor = tooltipItem.tooltip.labelColors[0].borderColor
  return tooltipBackgroundColor
}
const options:{
} = {
  responsive: true,
  cutout:70,
  maintainAspectRatio	: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Service Activities Chart',
    },
    tooltip:{
      displayColors:true,
      yAlign : "bottom",
      boxShadow : "4px 4px 4px 3px black",
      backgroundColor : colorItems 
    }
  },
}

 return (
<div className="flex flex-col justify-center place-items-center h-64 ">
 <Doughnut
 data={data}
 options={options}
 height={350}
 />
 </div>
 )
}
export default DoughnutChartPage;