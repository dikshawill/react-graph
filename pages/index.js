import Head from 'next/head';
import Overview from '../components/Overview';
import Map from '../components/Map';

const OverviewPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Overview />
    <Map />
    
    

  </>
);

export default OverviewPage;
