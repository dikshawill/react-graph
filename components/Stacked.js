

import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis,  Tooltip,linearGradient, defs,CartesianGrid,ResponsiveContainer
} from 'recharts';

function Stacked () {

const data = [
  {
    name: 'Page A', uv: 2400, pv: 10000, amt: 2400,
  },
  {
    name: 'Page B', uv: 5020, pv: 3098, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 3000,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 10090, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 4000, pv: 4300, amt: 2100,
  },
];

    return (
        <>
      <div
          style= {{
            display: "flex",

            flexDirection:"row",
            width: '60%', height: 300
          }}>
        <ResponsiveContainer>

    <AreaChart width={730} height={250} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
       
        
       
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
          </ResponsiveContainer>
      </div>
          </>


    );

    }

    export default Stacked;