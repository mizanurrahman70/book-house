import React from 'react';

const LittleCard = ({tag}) => {
    
    
    return (
        <div className=' lg:flex  mt-5'>
        <button className='w-[125px] h-[33px] bg-slate-100 rounded-3xl text-green-600 font-semibold'>#<span>{tag}</span></button>
       
      </div>
    );
};

export default LittleCard;