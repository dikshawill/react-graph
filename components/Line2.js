import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,ResponsiveContainer
} from 'recharts';


function Line2 ()
{
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
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
       
       <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    
       
        <Line type="monotone" dataKey="Challans" stroke="#FF0000"  strokeWidth= {4} activeDot={{ r: 5 }} fill = "#FF0000"/>
      </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }

  export default Line2;
