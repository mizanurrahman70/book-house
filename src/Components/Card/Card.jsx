import React from 'react';
import { CiStar } from "react-icons/ci";
import LittleCard from '../LittleCard/LittleCard';
import { Link } from 'react-router-dom';

const Card = ({book}) => {

  const {image,author,bookName,category,rating,tags,bookId


    
    }=book
  return (
    <Link to={`/${bookId}`}><div className="flex flex-col lg:max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-slate-200 text-black lg:w-[374px] mt-5 mx-auto">

    <div>
      <div className='w-[326px] h-[230px] bg-[#F3F3F3] rounded-md'>
        <div className='lg:w-[200px] lg:h-[200px] mx-auto p-5'><img   src={image} alt="" /></div>

      </div>
   <div className=' lg:flex gap-5'>
   {
      tags.map(tag=><LittleCard tag={tag}></LittleCard>)
    }
   </div>

      <div className='flex flex-col justify-start text-start gap-2 mt-5'>
        <h2 className="mb-1 text-xl font-semibold ">{bookName}</h2>
        <p className="text-sm text-gray-800 font-semibold">By: <span>{author}</span></p>
      </div>
      <div class="divider"></div>
    </div>
    <div className="flex flex-wrap sm:gap-5 lg:justify-between">
      <div className="space-x-2">
        <h1 className='font-semibold text-xl text-gray-900'>{category}</h1>

      </div>
      <div className="flex space-x-2 text-sm text-black items-center">
        <div><p className='text-xl font-semibold'>{rating}</p></div>
        <div ><CiStar className='font-semibold text-2xl' /></div>

      </div>
    </div>
  </div>
    </Link>
  );
};

export default Card;