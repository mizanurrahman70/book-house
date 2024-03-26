import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navber from './Pageses/Navber.jsx'
import Banner from './Components/Banner.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Navber></Navber>
    <Banner></Banner>
  </React.StrictMode>,
)
