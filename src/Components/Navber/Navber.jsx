import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
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
  </div>
  <div className="mr-5 lg:navbar-end gap-5 ">
    <a className=" btn bg-indigo-600">Sign In </a>
    <a className="btn bg-green-500">Sign Up</a>
  </div>
 
</div>
    );
};

export default Navber;