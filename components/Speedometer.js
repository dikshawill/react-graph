


/*
import {scaleLinear} from "d3-scale";
import * as d3 from 'd3'
import GaugeChart from 'react-gauge-chart'
var d3 = require("d3");

*/

import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,LabelList
} from 'recharts';


function Speedometer ()
{
const data1 = [
  { name: 'Group A', value: 0 },
 
 
 
  { name: 'Group E', value: 80 },
  { name: 'Group F', value: 100 },
  { name: 'Group G', value: 120 },
  { name: 'Group H', value: 140 },
  { name: 'Group I', value: 160 },
];
const data2 = [
    { name: 'Group A', value: 0 },
  
  
   
    { name: 'Group E', value: 80 },
    { name: 'Group F', value: 100 },
    { name: 'Group G', value: 120 },
    { name: 'Group H', value: 140 },
    { name: 'Group I', value: 160 },
    { name: 'Group J', value: 180 },
    { name: 'Group K', value: 200 },
    { name: 'Group L', value: 220 },
    { name: 'Group M', value: 240 },
  ];




    return (
      <PieChart width={400} height={400}>
         <Pie dataKey="value" startAngle={230} endAngle={-40} data={data1} cx={200} cy={200} outerRadius={100} innerRadius = {95} fill="#F88017" label  >
       
             </Pie>
             <Pie dataKey="value" startAngle={230} endAngle={-40} data={data2} cx={200} cy={200} outerRadius={140} innerRadius = {135} fill="#1589FF" label  >
       
       </Pie>
      </PieChart>
    );
  }

  export default Speedometer;
