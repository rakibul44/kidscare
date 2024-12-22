import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Babyad from './components/Babyad';

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
        
      </div>
    </Router>
  );
}

export default App;
