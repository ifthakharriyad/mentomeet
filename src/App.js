import React from 'react';

import './css/App.css';

import WhyChooseUs from './components/WhyChooseUs'
import Home from './components/Home'
import CareerSolutionEveryone from "./components/CareerSolutionEveryone"
import BlogDetailedPage from './components/BlogPostDetailed/BlogDetailedPage'
import BlogList from './components/BlogList/BlogList'
import About from './components/About'
import BeyondMentorship from './components/BeyondMentorship'
import WhyChooseMentomeet from './components/WhyChooseMentomeet'


function App() {
  return (
    <div>
      <Home/>
      <CareerSolutionEveryone/>
      <WhyChooseUs/> 
      <BlogDetailedPage/>
      <BlogList/>
      <About/>
      <BeyondMentorship/>
      <WhyChooseMentomeet/>
    </div>
  )
}

export default App;
