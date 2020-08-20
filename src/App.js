import React from 'react';
import './css/App.css';
import WhyChooseUs from './components/WhyChooseUs'
import Home from './components/Home'
import CareerSolutionEveryone from "./components/CareerSolutionEveryone";


function App() {
  return (
    <div>
      <Home/>
      <CareerSolutionEveryone/>
      <WhyChooseUs/> 
    </div>
  )
}

export default App;
