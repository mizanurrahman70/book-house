import React from 'react';

const WhileList = () => {
    return (
        <div>
        <div className="card card-side bg-base-100 shadow-xl border-2">
            <div>  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure></div>
            <div className='flex flex-col text-start'>
            <h1 className='text-3xl'>The Royel Book</h1>
            <p  className='font-medium'>By<span>Awlad Hussain</span></p>
            <div className='flex'>
                <div className='flex gap-5'>
                    <h1>tag</h1>
                    <div className='flex gap-5'>
                        <h1>game</h1>
                        <h1>book</h1>
                    </div>
                    <div className='flex items-center'>
                        <CiLocationOn />
                        <p>year of pubslished: <span>160</span></p>
                    </div>
                </div>
              



            </div>
            <div className='flex gap-5'>
                    <div className='flex items-center'>
                        <p><LiaUserFriendsSolid /></p>
                        <p>Publisher: <span>40</span></p>
                    </div>
                    <div className='flex items-center'>
                        <p><MdOutlineFindInPage /></p>
                        <p>page: <span>20</span></p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-5'>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-secondary">Secondary</button>
                </div>
        </div>
        </div>
        
    </div>
    );
};

export default WhileList;