import React from 'react';
import { CiStar } from "react-icons/ci";

const Card = () => {
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-black w-[374px] ">

      <div>
        <div className='w-[326px] h-[230px] bg-[#F3F3F3] rounded-md'>
          <div className='w-[134px] h-[166px] mx-auto'><img   src="../../../img/pngwing 1.png" alt="" /></div>

        </div>
        <div className='flex mt-5'>
          <button className='w-[125px] h-[33px] bg-slate-100 rounded-3xl text-green-600 font-semibold'>Young Adult</button>
          <button className='w-[125px] h-[33px] bg-slate-100 rounded-3xl text-green-600 font-semibold'> Identity</button>
        </div>
        <div className='flex flex-col justify-start text-start gap-2 mt-5'>
          <h2 className="mb-1 text-xl font-semibold ">The Catcher in the Rye By </h2>
          <p className="text-sm text-gray-400 font-semibold">By: <span>Awlad Hossain</span></p>
        </div>
        <div class="divider"></div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <h1 className='font-semibold text-xl text-gray-400'>ficion</h1>

        </div>
        <div className="flex space-x-2 text-sm text-gray-400 items-center">
          <div><p className='text-xl font-semibold'>5.00</p></div>
          <div ><CiStar className='font-semibold text-2xl' /></div>

        </div>
      </div>
    </div>
  );
};

export default Card;