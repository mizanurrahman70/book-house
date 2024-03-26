import React from 'react';
import { CiStar } from "react-icons/ci";

const Card = () => {
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
        
        <div>
          <div>
          <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
          </div>
          <div className='flex'>
            <button>Young Adult</button>
            <button> Identity</button>
          </div>
          <div className='flex flex-col justify-start text-start'>
          <h2 className="mb-1 text-xl font-semibold ">The Catcher in the Rye By </h2>
            <p className="text-sm text-gray-400">Awlad Hossain</p>
          </div>
          <div class="divider"></div> 
        </div>
        <div className="flex flex-wrap justify-between">
            <div className="space-x-2">
                <h1>ficion</h1>
               
            </div>
            <div className="flex space-x-2 text-sm text-gray-400 items-center">
               <div><p>5.00</p></div>
               <div><CiStar /></div>
                
            </div>
        </div>
    </div>
    );
};

export default Card;