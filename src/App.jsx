import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Babyad from './components/Babyad';
import Service from './components/Features';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* slider component */}
        <Slider />

        {/* Babyad component */}
        <Babyad />

        {/* services component */}
        <Service />
        
      </div>
    </Router>
  );
}

export default App;
