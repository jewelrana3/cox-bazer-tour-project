import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './componets/Main/Main.jsx';

import News from './componets/News/News.jsx';
import Contact from './componets/Contact/Contact.jsx';
import Blog from './componets/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<App></App>
      },
      {
        path:'news',
        element:<News></News>,
      },
      {
        path:'contact',
        element:<Contact></Contact>,
        loader:()=> fetch('data.json')
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
