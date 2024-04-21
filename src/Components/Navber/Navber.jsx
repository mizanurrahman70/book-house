import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
   const [theme,setTheme]=useState('light')
   const themeHandle=(e)=>{
    if(e.target.checked){
      setTheme('dim')
    }else(
      setTheme('light')
    )
   }
   useEffect(()=>{
    localStorage.setItem('theme',theme)
    const getTheme=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',getTheme)

   },[theme])
console.log(theme)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/'>Home</NavLink></li>  
     <li> <NavLink to='/listed'>Listed Books</NavLink></li>
      <li><NavLink to='/bar' >Pages to Read</NavLink></li>
      
      <li><NavLink to='/contact'>Contact</NavLink></li>
     <li> <NavLink to='/about'>About</NavLink></li>
      {/* theme  */}
    <label  className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input onChange={themeHandle} type="checkbox"  className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  </label>
      </ul>
      
    </div>
   <Link to='/'><p className="btn btn-ghost lg:text-2xl lg:font-extrabold ">Book Liberary</p></Link> 
  </div>
  <div className="navbar-center hidden lg:flex items-center">
    <ul className="menu menu-horizontal px-1 space-x-5">
   
       <li><NavLink to='/'>Home</NavLink></li>  
     <li> <NavLink to='/listed'>Listed Books</NavLink></li>
      <li><NavLink to='/bar' >Pages to Read</NavLink></li>
      
      <li><NavLink to='/contact'>Contact</NavLink></li>
     <li> <NavLink to='/about'>About</NavLink></li>
    </ul>
    {/* theme  */}
    <label  className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input onChange={themeHandle} type="checkbox"  className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  </div>
  <div className="mr-5 lg:navbar-end gap-5 ">
    <a className=" btn bg-indigo-600">Sign In </a>
    <a className="btn bg-green-500">Sign Up</a>
  </div>
 
</div>
    );
};

export default Navber;