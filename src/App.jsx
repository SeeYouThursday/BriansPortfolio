// import Footer from './components/ui/Footer.jsx';
import Header from './components/ui/Header.jsx';
// import Background from './components/ui/Background';
import { Outlet } from 'react-router-dom';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <main id="coverImage">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
