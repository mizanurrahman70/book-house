import React from 'react';
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import { useActionData, useLoaderData } from 'react-router-dom';
const Home = () => {
    const Book =useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
           <div className='grid grid-cols-3 gap-5'>
           {
                Book.map(book=><Card book={book}></Card>)
            }
           </div>
        </div>
    );
};

export default Home;