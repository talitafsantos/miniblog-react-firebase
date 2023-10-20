import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
