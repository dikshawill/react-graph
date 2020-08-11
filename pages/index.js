import Head from 'next/head';
import Overview from '../components/Overview';
import Chart from '../components/PieGraph';
import AreaGraph from '../components/AreaGraph';
import LineGraph from '../components/LineGraph';
import Stacked from '../components/Stacked';
import Court from '../components/Court';
import BarGraph from '../components/BarGraph';
import Challan from '../components/Challan';
import Doughnut from '../components/Doughnut';
import Speedometer from '../components/Speedometer';
import Line2 from '../components/Line2';
import Echallan from '../components/Echallan';
import  Select  from '../components/Select';
import Zoom from '../components/Zoom';


import Map from '../components/Map';

const OverviewPage = () => (
  <>
  
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>

    <div 
    style= {{
      display: "flex",
      justifyContent: "center",
      flexDirection:"row"
    }}
    >
    <Overview />
    
   <Stacked />
 
    </div>

    <LineGraph />
    <div 
    style= {{
      display: "flex",
      justifyContent: "center",
      flexDirection:"row"
    }}
    >
      <Speedometer/>
      <Chart/>
    </div>
    
    <div
    style= {{
      display: "flex",
    
      flexDirection:"row"
    }}>
      <Select/>
    <Court/>

    </div>
    
    <div
    style= {{
      display: "flex",
    
      flexDirection:"row"
    }}>
      <Zoom/>
    <BarGraph/>
    </div>


    <div 
    style= {{
      display: "flex",
      justifyContent: "center",
      flexDirection:"row"
    }}
    >
      <Doughnut/>
      <Challan/>
    </div>

    <div
    style= {{
      display: "flex",
    
      flexDirection:"row"
    }}>
    <Line2/>
    <Echallan />
    </div>
      <Map />
  </>
);

export default OverviewPage;
