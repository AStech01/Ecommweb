import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './components/About.jsx';
import Product from './pages/Product.jsx';
import MyFooter from './pages/MyFooter.jsx';


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
    path: "/product",
    element: <Product/>,
  },
     
  // {
  //   path: "/Grid",
  //   element: <Grid/>,
  //   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
