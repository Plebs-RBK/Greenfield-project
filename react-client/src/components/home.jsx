import React from 'react';
import Carte from './top-teachers/Carte.jsx';
import Search from './search/Search.jsx';
import NavBar from './nav.jsx';
import Footer from './footer.jsx';
import About from './about.jsx'

//this component represents our home page, it contains all the components that form it
const Home = () => (
  <div>
    <NavBar />
    <Search />
    <Carte />
    <About />
    <Footer />
  </div>
)
export default Home;