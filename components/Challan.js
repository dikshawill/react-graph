import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer
} from 'recharts';


function Challan () {
  const data = [
    {
      name: 'Page A', uv: 2400, pv: 2000, amt: 2400,
    },
    {
      name: 'Page B', uv: 2220, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 5800, amt: 3000,
    },
    {
      name: 'Page D', uv: 2780, pv: 2908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 1800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 2800, amt: 2500,
    },
    {
      name: 'Page G', uv: 4000, pv: 1300, amt: 2100,
    },
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
      
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#BCC6CC" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#BCC6CC" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82caff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82caff" stopOpacity={0}/>
          </linearGradient>
        </defs>
        
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#BCC6CC" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82caff" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }


  export default Challan;
