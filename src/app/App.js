import { Routes,Route } from 'react-router-dom';
import Header from '../components/header/Header.jsx';
import CatalogCofe from '../pages/catalogCofe/CatalogCofe.jsx';
import CatalogPageTee from '../pages/catalogPage/CatalogPageTee.jsx';
import CatalogVending from '../pages/catalogVending/CatalogVending.jsx';
import Home from '../pages/Home/Home';
import CatalogZdo from '../pages/catalogZdo/CatalogZdo.jsx';
import Basket from '../pages/basketPage/Basket.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/catalogTee" element={ <CatalogPageTee/>}/>
      <Route path='/catalogCofe' element={<CatalogCofe/>}/>
      <Route path='/catalogVending' element={<CatalogVending/>}/>
      <Route path='/catalogZdor' element={<CatalogZdo/>}/>
      <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </div>
  );
}

export default App;
