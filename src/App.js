import React from 'react';
import './css/App.css';
import WhyChooseUs from './components/WhyChooseUs'
import Home from './components/Home'
import CareerSolutionEveryone from "./components/CareerSolutionEveryone"
import BlogDetailedPage from './components/BlogPostDetailed/BlogDetailedPage'


function App() {
  return (
    <div>
      <Home/>
      <CareerSolutionEveryone/>
      <WhyChooseUs/> 
      <BlogDetailedPage/>
    </div>
  )
}

export default App;
