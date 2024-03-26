import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navber from './Pageses/Navber/Navber.jsx'
import Banner from './Components/Banner.jsx'
import Card from './Components/Card/Card.jsx'
import Book from './Pageses/Navber/Book/Book.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Navber></Navber>
    <Banner></Banner>
    <Card></Card>
    <Book></Book>
    
  </React.StrictMode>,
)
