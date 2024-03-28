import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navber from './Components/Navber/Navber.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Error from './Components/ErrorPage/Error.jsx'
import Book from './Components/Book/Book.jsx'
import ListedBook from './Components/ListedBook/ListedBook.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RedCard from './Components/RedBook/RedBook.jsx'
import WhileList from './Components/WhileList/WhileList.jsx'
import About from './Components/About/About.jsx'
import BarChart from './Components/BarChart/BarCharts.jsx'
import BarCharts from './Components/BarChart/BarCharts.jsx'
import RdCard from './Components/RdCard/RdCard.jsx'
import Rating from './Components/Rating/Rating.jsx'
import Number from './Components/NumberOf/Number.jsx'
import Publisher from './Components/Publisher/Publisher.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:([
      {
        path:'/',
        loader: ()=>fetch('Book.json'),
        element:<Home></Home>
      },
      {
       path:`/:id`,
       loader:()=>fetch('../Book.json'),
       element:<Book></Book>

      },
      {
        path:'/about',
        element:<About></About>

      },
     {
     path:'/rating',
     element:<Rating></Rating>
     },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/bar',
        element:<BarCharts></BarCharts>
      },
      {
        path:'/listed',
        element:<ListedBook></ListedBook>,
        children:([
          {
          index:true,
          element:<RedCard></RedCard>,
          },
          {
            path:'/listed/while',
            element:<WhileList></WhileList>

          },
          {
            path:'/listed/rating',
            element:<Rating></Rating>

          },
          {
            path:'/listed/number',
            element:<Number></Number>

          },
          {
            path:'/listed/year',
            element:<Publisher></Publisher>

          },
         
        ])
      }
    

    ])
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
  </React.StrictMode>,
)
