import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';



const ListedBook = () => {
    const [active,setActive]=useState(0)
  
    return (
        <div>
            <div className=' w-full lg:w-[1169px] lg:h-[100px] bg-slate-400 mx-auto rounded-md'>
                <h1 className='text-3xl flex items-center justify-center pt-5'> Book</h1>
            </div>
            <div className="flex mt-5">
	<Link to=''><p onClick={()=>setActive(1)} rel="noopener noreferrer" href="#" className={`flex flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600 ${active== 1?'border border-b-0' : 'border-b'}`}>
		
		<span>Read Books</span>
        </p></Link> 
    
  <Link to={`while`}><p onClick={()=>setActive(2)} rel="noopener noreferrer" href="#"className={`flex flex-shrink-0 px-5 py-3 space-x-2 border-b-0 dark:border-gray-600 dark:text-gray-600 ${active=== 2?  'border border-b-0' : 'border-b'}`}>
	
		<span>Wishlist Books</span>
	</p></Link> 
	
</div>
<Outlet></Outlet>

        </div>
    );
};

export default ListedBook;