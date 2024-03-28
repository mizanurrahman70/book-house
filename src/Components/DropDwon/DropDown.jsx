import React from 'react';
import { Link } from 'react-router-dom';

const DropDown = () => {
    return (
        <details className="dropdown mb-10">
  <summary className="m-1 btn">Short By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-400 rounded-box w-52 space-y-2 mb-5 mr-5 font-semibold ">
    <Link to='/listed/rating'><li>Rating</li></Link>
    <Link to='/listed/number'><li>Number of pages</li></Link>
    <Link><li>Publisher year</li></Link>
  </ul>
</details>
    );
};

export default DropDown;