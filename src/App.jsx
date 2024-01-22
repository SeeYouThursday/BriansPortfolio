// import { useState } from 'react';
import ProjectContainer from './components/Project-Container';
import Header from './components/Header';
import Footer from './components/Footer';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ProjectContainer />
      <Footer />
    </>
  );
}

export default App;
