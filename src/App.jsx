import React from 'react' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Course from './Pages/Course';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/notfound" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App