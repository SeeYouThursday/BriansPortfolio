// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import ProjectContainer from './components/Project-Container';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
