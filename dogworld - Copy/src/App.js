import React from 'react';
import SingleDog from './Components/SingleDog/SingleDog'
import Home from './Components/Home/Home';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SingleDog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
