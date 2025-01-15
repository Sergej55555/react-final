import React from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Home from './Home';
import './App.css';
import Contact from './Contact';
import About from './About';


function App() {

  useGSAP(() => {
    gsap.from('.navigate', { y: -250, duration: 3, delay: 3 });
    gsap.from('.change', { duration: 5, scale: -1, rotation: 180, ease: 'bounce' });
    gsap.from('.back', { duration: 3, delay: 3, opacity: 0 });
    gsap.from('.cards', { duration: 2, delay: 1.2, x: '-400', ease: 'power2.inOut', opacity: 0 });
    gsap.from('.product-info', { duration: 2, delay: 1, x: '400', ease: 'power2.inOut', opacity: 0 });
  });
  
  return (
    <Router>
      <nav className='navigate'>
        <Link to='/' className='link'>Luxury Watch Store</Link> {/* '/' - переход на первую страницу (дефолтную) */}
        <Link to='/about' className='link'>About our Store</Link>
        <Link to='/contact' className='link'>Contact us</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>  
  );
}

export default App;
