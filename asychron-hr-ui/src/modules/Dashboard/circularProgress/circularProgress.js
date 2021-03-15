import React from "react";
import ReactApexChart from "react-apexcharts";
import './circularProgress.css';


class ApexChart extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
    
      series: [70],
      options: {
        chart: {
          height: 150,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '40%',
            }
          },
        },
        fill: {
          background:"green",
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["blue","","",""], 
             
            
            stops: [0, 100],
          }
        },
        padding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
      },
        stroke: {
          lineCap: "round",
        },
        
          colors: ['red', '#E91E63'],
        
        
        labels:['Task','performance'],
        
      },
    };
}
  render() {
    return (
<div className="circle" id="chart">
<div className="d-flex align-items-center">  
  <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
  <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200}  />
 
</div>
<div className="d-flex align-items-center">
   <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200}  />
  <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200}/>
  
</div>

  
 
  
</div>
    );  
    }
}
export default ApexChart;