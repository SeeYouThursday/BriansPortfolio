// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error from './components/pages/Error.jsx';
import ProjectContainer from './components/Project-Container.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
// import
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ProjectContainer />,
      },
      { path: '/About', element: <About /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Projects', element: <ProjectContainer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
