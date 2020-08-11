import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,Label
} from 'recharts';


function BarGraph () {
const data = [
    {name: '', Challans: 100, pv: 2400, amt: 3000}, 
    {name: 'Jun 08', Challans: 234, pv: 4234, amt: 8767}, 
    {name: '', Challans: 323, pv: 4323, amt: 3232}, 
    {name: '', Challans: 323, pv: 4234, amt: 8767}, 
    {name: 'Jun 11', Challans: 423, pv: 3232, amt: 6454}, 
    {name: '', Challans: 400, pv: 2400, amt: 2400}, 
    {name: '', Challans: 123, pv: 4234, amt: 8767}, 
    {name: 'Jun 14', Challans: 323, pv: 4323, amt: 3232}, 
    {name: '', Challans: 123, pv: 4234, amt: 8767}, 
    {name: '', Challans: 423, pv: 3232, amt: 6454}, 
    {name: 'Jun 17', Challans: 234, pv: 4234, amt: 8767}, 
    {name: '', Challans: 323, pv: 4323, amt: 3232}, 
    {name: '', Challans: 123, pv: 4234, amt: 8767}, 
    {name: 'Jun 20', Challans: 423, pv: 3232, amt: 6454}, 
    {name: '', Challans: 754, pv: 4234, amt: 8767}, 
    {name: '', Challans: 345, pv: 4323, amt: 3232}, 
    {name: 'Jun 23', Challans: 123, pv: 4234, amt: 8767},
    {name: '', Challans: 423, pv: 3232, amt: 6454}, 
    {name: '', Challans: 345, pv: 4323, amt: 3232}, 
    {name: 'Jun 26', Challans: 123, pv: 4234, amt: 8767},
    {name: '', Challans: 423, pv: 3232, amt: 6454} 
];


    return (

        <div
        style= {{
          display: "flex",
          justifyContent: "center",
          flexDirection:"row",
          width: '100%', height: 300
        }}
        >
                     <ResponsiveContainer>
      <BarChart
       
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" >
        <Label value="Volume" offset={0} position="insideTopLeft" />
          </XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
       
        <Bar dataKey="pv" fill="#76BAEC" />
      </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }

  export default BarGraph;

