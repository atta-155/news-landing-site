import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import HappeningSection from './components/HappeningSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className='bg-light'>
        <div className='container'>
          <TrendingSection />
          <HappeningSection />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
