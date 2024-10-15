import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './components/About.jsx';
import Product from './pages/Product.jsx';
import Kids from './components/Kids.jsx';
import Faq from './components/Faq.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
    {
    path: "/Kids",
    element: <Kids/>,
  },
   {
    path: "/Faq",
    element: <Faq/>,
  },
 
     

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
