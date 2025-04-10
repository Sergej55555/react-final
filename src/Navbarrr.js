import {
    BrowserRouter as Router, 
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  import Home from './Home';
  import Contact from './Contact';
  import About from './About';

const Navbar = () => {
    return(
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
    )
};

export default Navbar;