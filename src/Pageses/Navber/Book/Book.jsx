import React from 'react';

const Book = () => {
    return (
        <div className=" min-h-screen bg-base-600">
        <div className="flex justify-center flex-col lg:flex-row-reverse gap-10 ">
          <div className="flex flex-col text-start space-y-5">
            <h1 className='text-3xl font-extrabold'>The catagory in the raye</h1>
            <p className='font-medium'>By: <span>Awlad hussain</span></p>
            <hr />
            <h1 className='text-2xl'>Flaction</h1>
            <hr />
            <p className='w-[400px]'><span className='font-extrabold '>Revews</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sapiente, fugiat ipsum culpa natus deserunt repellendus voluptatibus voluptate possimus nulla quaerat vel sit exercitationem temporibus est totam nemo, dicta ex sed, a eaque commodi rem? Aliquam rem ea aspernatur recusandae obcaecati voluptates. Possimus, laboriosam! Provident debitis ipsam aut asperiores esse.<span></span></p>
            <div className='flex gap-5'>
               <div>
                <p className='font-extrabold '> Tags</p>
               </div>
               <div className='flex gap-5'>
               <button className='w-[125px] h-[33px] bg-slate-100 rounded-3xl text-green-600 font-semibold'># <span>Identity</span> </button>
               <button className='w-[125px] h-[33px] bg-slate-100 rounded-3xl text-green-600 font-semibold'>  #<span> Identity</span></button>
               
               </div>
               <hr />
               
            </div>
            <div className='flex gap-16'>
              <div className='space-y-2  text-gray-600'>
                <h1>Number of Pages:</h1>
                <h1>Publisher:</h1>
                <h1>Year of Publishing:</h1>
                <h1>Rating:</h1>
              </div>
              <div className='space-y-2 font-medium  text-gray-600'>
                <h1>200</h1>
                <h1>awlad</h1>
                <h1>2003</h1>
                <h1>5</h1>
              </div>
               </div>

               <div className='flex gap-5'>
               
               <button class="btn btn-secondary bg-green-600 border-none">Red</button>
               <button class="btn btn-secondary bg-purple-900 border-none">While List</button>
               </div>
          </div>
          <div className="shrink-0 w-[573px]  rounded-3xl bg-slate-200 ">
            <img className='w-[425px] h-[564px] mx-auto' src="../../../../img/pngwing 1.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Book;