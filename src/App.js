import React from 'react';
import './App.css';
import OurStory from './pages/OurStory/OurStory';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Login from './login/Login';
import Loginer from './Loginer/Loginer';
import ShopTab from './Components/Admin/Shop/Tab'
import OfferOfferTab from './Components/Admin/Offer/OfferTab'
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
  <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path ="/login" element ={<Login />} />
        <Route path ="/Loginer" element ={<Loginer/>}/>
        <Route path="/shops" element ={<ShopTab/>}/>
        <Route path ="/offer" element ={<OfferOfferTab/>}/>
      </Routes> 
     </>
  );
}
export default App;
