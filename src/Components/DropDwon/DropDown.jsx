import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const DropDown = () => {
  const [active,setActive]=useState(0)
  
    return (
        <details className="dropdown mb-20">
  <summary className="m-1 btn">Short By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-100 rounded-box w-52 space-y-2 mb-5 mr-5 font-semibold ">
    <NavLink to='/listed/rating'><li onClick={()=>setActive(1)} className={`p-2 rounded-2xl ${active === 1 ? 'bg-green-500' : ''}`}>Rating</li></NavLink>
    <NavLink to='/listed/number'><li onClick={()=>setActive(2)} className={`p-2 rounded-2xl ${active === 2 ? 'bg-green-500' : ''}`}>Number of pages</li></NavLink>
    <NavLink><li onClick={()=>setActive(3)} className={`p-2 rounded-2xl ${active === 3 ? 'bg-green-500' : ''}`}>Publisher year</li></NavLink>
  </ul>
</details>
    );
};

export default DropDown;