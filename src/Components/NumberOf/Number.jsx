import React, { useEffect, useState } from 'react';
import { getData } from '../../utility/LocalStore';
import RatingCard from '../RatingCard/RatingCard';

const Number = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
      const savedBlogs = getData()
      const sortedBlogs = savedBlogs.sort((a, b) => b.totalPages - a.totalPages);
      setBlogs(sortedBlogs)
    }, [])
    return (
        <div>
            {
                blogs.map(data=><RatingCard book={data}></RatingCard>)
            }
        </div>
    );
};

export default Number;