import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
