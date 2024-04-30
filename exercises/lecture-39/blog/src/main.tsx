import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Home from './pages/home';
import About from './pages/about';
import Blog  from './pages/blog';
import Contact  from './pages/contact';

import './index.css'
import {
  createBrowserRouter, RouterProvider, useLoaderData
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  
  children: [

    {
      path: 'about',
      element: <About />
    },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      
    ]
},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

