import React from "react";
import ReactApexChart from "react-apexcharts";
import './circularProgress.css';


class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      series: [100,85,98,66],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '20%',
            }
          },
        },
        fill: {
          background:"green",
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["","","",""],  
            
            stops: [0, 100],
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ['Task','Leaves','performance','status'],
        //colors: ['green', 'blue', ' #95B9C7', ''],
      },
    
      
      };
  }



  render() {
    return (
      

<div  className="circle" id="chart">
<ReactApexChart  options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>
);
}
}
export default ApexChart;

