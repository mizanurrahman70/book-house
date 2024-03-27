import React, { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineFindInPage } from "react-icons/md";
import { getData } from '../../utility/LocalStore';
import RdCard from '../RdCard/RdCard';


const RedCard = () => {
   
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
      const savedBlogs = getData()
      setBlogs(savedBlogs)
    }, [])
   
    
    return (
        <div className='space-y-5 mt-5'>
            {
                blogs.map(book=><RdCard book={book}></RdCard>)
            }
            
            
        </div>
    );
};

export default RedCard