// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/pages/Error.jsx';
import Portfolio from './components/ui/Portfolio.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
import Home from './components/pages/Home.jsx';
import Resume from './components/pages/Resume.jsx';
import './assets/css/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      { path: '/About', element: <About /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Portfolio', element: <Portfolio /> },
      { path: '/Resume', element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
