import React from 'react';

const Book = () => {
    return (
        <div className=" min-h-screen bg-base-200">
        <div className="flex justify-around flex-col lg:flex-row-reverse">
          <div className="flex flex-col text-start">
            <h1 className='text-3xl font-extrabold'>The catagory in the raye</h1>
            <p className='font-medium'>By: <span>Awlad hussain</span></p>
            <hr />
            <h1 className='text-2xl'>Flaction</h1>
            <hr />
            <p><span className='font-extrabold'>Revews</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sapiente, fugiat ipsum culpa natus deserunt repellendus voluptatibus voluptate possimus nulla quaerat vel sit exercitationem temporibus est totam nemo, dicta ex sed, a eaque commodi rem? Aliquam rem ea aspernatur recusandae obcaecati voluptates. Possimus, laboriosam! Provident debitis ipsam aut asperiores esse.<span></span></p>
            <div className='flex gap-5'>
               <div>
                <p className='font-extrabold '> Tags</p>
               </div>
               <div className='flex gap-5'>
                <p>hobby</p>
                <p>gamming</p>
               </div>
               <hr />
               
            </div>
            <div className='flex gap-5'>
              <div>
                <h1>pagr</h1>
                <h1>publisher</h1>
                <h1>year of published</h1>
                <h1>ratting</h1>
              </div>
              <div>
                <h1>200</h1>
                <h1>awlad</h1>
                <h1>2003</h1>
                <h1>5</h1>
              </div>
               </div>

               <div className='flex gap-5'>
               <button class="btn btn-secondary">Red</button>
               <button class="btn btn-secondary">While List</button>
               </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img src="../../../../img/pngwing 1.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Book;