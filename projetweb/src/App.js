

import Navbar from './Navbar';


import Footer from "./Footer";


import './App.css';
import {Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages/Home';
import ContactUsPage from './pages/ContactUsPage';
import Testomonial from './pages/Testomonial';
import Login from './Login';
import Signup from './Signup';
import Cart from './pages/Cart';






function App() {

 
  return (
    <div>


      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/testomonial" element={<Testomonial/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
      
  
      <Footer/>
      
      
  
    </div>
    
  );
}

export default App;


