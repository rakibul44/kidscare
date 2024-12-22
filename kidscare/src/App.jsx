import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Slider from './components/Slider';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* slider component */}
        {/* <Slider /> */}
      </div>
    </Router>
  );
}

export default App;
