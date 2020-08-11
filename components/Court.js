import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';


function Court ()
{
const data = [
 
    {name: 'AVC', Challans: 100, pv: 2400, amt: 2400}, {name: 'MTC', Challans: 200, pv: 4323, amt: 3232}, {name: 'PTC', Challans: 300, pv: 3232, amt: 6454},
    {name: 'NRL', Challans: 234, pv: 4234, amt: 8767}, {name: 'BRD', Challans: 534, pv: 4234, amt: 8767}, {name: 'RHN', Challans: 400, pv: 2400, amt: 2400},
    {name: 'BNA', Challans: 323, pv: 4323, amt: 3232}, {name: 'MGP', Challans: 423, pv: 3232, amt: 6454}, {name: 'CLC', Challans: 244, pv: 4234, amt: 8767},
    {name: 'KOT', Challans: 323, pv: 4234, amt: 8767}, {name: 'SBC', Challans: 400, pv: 2400, amt: 2400},  {name: 'SMC', Challans: 323, pv: 4323, amt: 3232},
    {name: 'DGC', Challans: 423, pv: 3232, amt: 6454}, {name: 'KBC', Challans: 754, pv: 4234, amt: 8767}, {name: 'KMC', Challans: 123, pv: 4234, amt: 8767},
    {name: 'PGC', Challans: 400, pv: 2400, amt: 2400},  {name: 'CHP', Challans: 323, pv: 4323, amt: 3232}, {name: 'TRC', Challans: 423, pv: 3232, amt: 6454},
    {name: 'BKR', Challans: 123, pv: 4234, amt: 8767}, {name: 'TMC', Challans: 123, pv: 4234, amt: 8767}, {name: 'DCC', Challans: 400, pv: 2400, amt: 2400},
    {name: 'DFC', Challans: 323, pv: 4323, amt: 3232}, {name: 'IGI', Challans: 234, pv: 3232, amt: 6454}, {name: 'PAP', Challans: 345, pv: 4234, amt: 8767},
    {name: 'RKP', Challans: 123, pv: 4234, amt: 8767}, {name: 'VVC', Challans: 400, pv: 2400, amt: 2400},  {name: 'GNC', Challans: 323, pv: 4323, amt: 3232},
    {name: 'KPC', Challans: 423, pv: 3232, amt: 6454}, {name: 'VKC', Challans: 533, pv: 4234, amt: 8767},  {name: 'MWC', Challans: 232, pv: 4234, amt: 8767},
    {name: 'SHD', Challans: 234, pv: 4234, amt: 8767}, {name: 'KJC', Challans: 123, pv: 4234, amt: 8767}, {name: 'SPC', Challans: 400, pv: 2400, amt: 2400},
    {name: 'DWC', Challans: 323, pv: 4323, amt: 3232}, {name: 'KHC', Challans: 543, pv: 3232, amt: 6454}, {name: 'NJC', Challans: 123, pv: 4234, amt: 8767},
    {name: 'TNC', Challans: 123, pv: 4234, amt: 8767}, {name: 'MPC', Challans: 400, pv: 2400, amt: 2400},  {name: 'PBC', Challans: 323, pv: 4323, amt: 3232},
    {name: 'PNC', Challans: 423, pv: 3232, amt: 6454}, {name: 'RGC', Challans: 123, pv: 4234, amt: 8767},  {name: 'NLC', Challans: 123, pv: 4234, amt: 8767},
    {name: 'JPC', Challans: 754, pv: 4234, amt: 8767}, {name: 'GKC', Challans: 234, pv: 4234, amt: 8767}, {name: 'HKC', Challans: 400, pv: 2400, amt: 2400},
    {name: 'KKC', Challans: 345, pv: 4323, amt: 3232}, {name: 'LNC', Challans: 123, pv: 3232, amt: 6454}, {name: 'MRC', Challans: 234, pv: 4234, amt: 8767},
    {name: 'SGV', Challans: 123, pv: 4234, amt: 8767}, {name: 'SDV', Challans: 400, pv: 2400, amt: 2400},  {name: 'SVC', Challans: 323, pv: 4323, amt: 3232},
    {name: 'SKT', Challans: 423, pv: 3232, amt: 6454}, {name: 'PTH', Challans: 234, pv: 4234, amt: 8767}
  
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
        <CartesianGrid strokeDasharray="3 3" />
       
        <YAxis />
        <Tooltip />
    
       
        <Line type="monotone" dataKey="Challans" stroke="#76BAEC" activeDot={{ r: 1 }} />
      </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }

  export default Court;
