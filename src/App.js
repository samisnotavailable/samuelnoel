import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Connect from './components/Connect';
import Pino from './components/Website/pino';
import Novice from './components/Website/novice';
import CCCollage from './components/Website/cccollage';
import RRHI from './components/Website/rrhi';
import Gawad from './components/Design/gawad';
import Diende from './components/Website/diende';
import Natu from './components/Website/natu';
import Agos from './components/Design/agos';
import Modo from './components/Website/modo';
import HitProd from './components/Website/hitprod';
import TB24 from './components/Design/tb24';
import TB25 from './components/Design/tb25';
import PMV from './components/Design/pmv';
import TorreLorenzo from './components/Website/torre';
import SWAN from './components/Design/swan';
import ShadesOfGray from './components/Design/sog';
import Madman from './components/Website/madman';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="connect" element={<Connect />} />
        <Route path="website/pino" element={<Pino />} />
        <Route path="website/novice" element={<Novice />} />
        <Route path="website/cccollage" element={<CCCollage />} />
        <Route path="website/robinsons-retail-holdings" element={<RRHI />} />
        <Route path="design/gawad-benildyano" element={<Gawad />} />
        <Route path="website/diende" element={<Diende />} />
        <Route path="website/natu" element={<Natu />} />
        <Route path="design/agos-charity-screening" element={<Agos />} />
        <Route path="website/modo-food-&-living" element={<Modo />} />
        <Route path="website/hit-productions" element={<HitProd />} />
        <Route path="design/the-benildean-24" element={<TB24 />} />
        <Route path="design/the-benildean-25" element={<TB25 />} />
        <Route path="design/people-may-vary" element={<PMV />} />
        <Route path="website/torre-lorenzo" element={<TorreLorenzo />} />
        <Route path="design/spaces-for-womens-arts-and-narratives" element={<SWAN />} />
        <Route path="design/shades-of-gray-irreversible" element={<ShadesOfGray />} />
        <Route path="website/madman" element={<Madman />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
