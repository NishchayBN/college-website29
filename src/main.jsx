import React from 'react'
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './routes/App';
import About from './routes/About.jsx';
import Blog from './routes/Blog.jsx';
import Contact from './routes/Contact.jsx';
import Course from './routes/Course.jsx';
import Root from './routes/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: '/',
        element: <App />
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/course",
        element:<Course/>
      }

    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
