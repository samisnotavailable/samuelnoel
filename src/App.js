import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Connect from './components/Connect';
import Pino from './components/Website/pino';
import Novice from './components/Design/novice';
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
import WCLWHTR from './components/Design/wclwhtr';
import Madman from './components/Website/madman';
import Auro from './components/Website/auro';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="connect" element={<Connect />} />
        <Route path="website/pino-studio" element={<Pino />} />
        <Route path="design/novice-magazine" element={<Novice />} />
        <Route path="website/cccollage" element={<CCCollage />} />
        <Route path="website/robinsons-retail-holdings" element={<RRHI />} />
        <Route path="design/gawad-benildyano" element={<Gawad />} />
        <Route path="website/diende" element={<Diende />} />
        <Route path="website/natu-explorations" element={<Natu />} />
        <Route path="design/agos-charity-screening" element={<Agos />} />
        <Route path="website/modo-food-&-living" element={<Modo />} />
        <Route path="website/hit-productions" element={<HitProd />} />
        <Route path="design/the-benildean-24" element={<TB24 />} />
        <Route path="design/the-benildean-25" element={<TB25 />} />
        <Route path="design/people-may-vary" element={<PMV />} />
        <Route path="website/torre-lorenzo" element={<TorreLorenzo />} />
        <Route path="design/spaces-for-womens-arts-and-narratives" element={<SWAN />} />
        <Route path="design/we-cannot-leave-without-hoping-to-return" element={<WCLWHTR />} />
        <Route path="website/madman-creative-solutions" element={<Madman />} />
        <Route path="website/auro-chocolate" element={<Auro/>} />
        <Route path="*" element={<PageNotFound />} /> {/* Catch-all route for 404 */}
      </Route>
    </Routes>
    </>
  );
}

export default App;
