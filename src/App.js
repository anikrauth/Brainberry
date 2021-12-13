import React from 'react';
import Home from './pages/home';
import Layout from './Components/Layout';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <React.Fragment>
            <Route path="/" element={<Home />} />
          </React.Fragment>
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
