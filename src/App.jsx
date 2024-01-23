// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import ProjectContainer from './components/Project-Container';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
// import Background from './components/ui/Background';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column">
      {/* <Background /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
