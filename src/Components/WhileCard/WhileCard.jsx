import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { MdOutlineFindInPage } from 'react-icons/md';
import LittleCard from '../LittleCard/LittleCard';

const WhileCard = ({ book }) => {
    const { image, author, bookName, category, rating, tags, review, yearOfPublishing,
        totalPages, publisher, bookId } = book
    return (
        <div className="card card-side bg-base-100 shadow-xl border-2">
            <div>  <figure><img src={image} alt="Movie" /></figure></div>
            <div className='flex flex-col text-start ml-5'>
                <h1 className='text-3xl '>{bookName}</h1>
                <p className='font-medium mt-5'>By<span>{author}</span></p>
                <div className='flex items-center'>
                    <div className='flex gap-5'>
                        <div className='flex mt-6'>
                            <h1>tag</h1>
                        </div>
                        <div className='flex gap-5'>

                            {

                                tags.map(tag => <LittleCard tag={tag}></LittleCard>)
                            }
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <CiLocationOn className='text-2xl' />
                            <p className='text-gray-400 text-2'>year of pubslished: <span>{yearOfPublishing}</span></p>
                        </div>
                    </div>




                </div>
                <div className='flex gap-5 mt-5'>
                    <div className='flex items-center gap-2'>
                        <p><LiaUserFriendsSolid className='text-2xl' /></p>
                        <p className='text-gray-400 text-2'>Publisher: <span>{publisher}</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p><MdOutlineFindInPage className='text-2xl' /></p>
                        <p className='text-gray-400 text-2'> page: <span>{totalPages}</span></p>
                    </div>
                </div>
                <hr className='mt-2 boder-2' />
                <div className='flex gap-5 mt-5'>
                    <button class="btn border-none btn-secondary bg-[#328EFF]">Catcher: <span>{category}</span></button>
                    <button class="btn border-none bg-[#FFAC33] btn-secondary">Rating: {rating}</button>
                    <Link to={`/${book.bookId}`}><button class="btn bg-green-600 border-none btn-secondary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WhileCard;