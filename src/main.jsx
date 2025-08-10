import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import About from './Components/About';
import RootLayout from './Components/RootLayout';  // We'll define this next
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'Projects',
        element: <Projects />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
