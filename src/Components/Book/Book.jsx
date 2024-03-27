import { useLoaderData, useParams } from "react-router-dom";
import Contact from "../Contact/Contact";
import { saveBook } from "../../utility/LocalStore";

const Book = () => {
  const Books =useLoaderData()
  
 const {id}=useParams()
 
  const bookPt=parseInt(id)

  const book =Books.find(book=>book.bookId === bookPt)
  
  
  const {image,author,bookName,category,rating,tags,review,yearOfPublishing,
    totalPages,publisher,bookId}=book


    const buttonHandle = (book) => {
      saveBook(book); 
    };
    return (
     
        <div className=" min-h-screen bg-base-600 mt-10">
        <div className="flex justify-center flex-col lg:flex-row-reverse gap-10 ">
          <div className="flex flex-col text-start space-y-5">
            <h1 className='text-3xl font-extrabold'>{bookName}</h1>
            <p className='font-medium'>By: <span>{author}</span></p>
            <hr />
            <h1 className='text-2xl'>{category}</h1>
            <hr />
            <p className='w-[400px]'><span className='font-extrabold '>Revews</span>{review}<span></span></p>
            <div className='flex gap-5'>
               <div>
                <p className='font-extrabold '> Tags</p>
               </div>
               <div className='flex gap-5'>
               
             {
              tags.map(tag=><button className='w-[125px] h-[33px] bg-slate-100 rounded-3xl text-green-600 font-semibold'># <span>{tag}</span> </button>)
             }
               
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
                <h1>{totalPages}</h1>
                <h1>{publisher}</h1>
                <h1>{yearOfPublishing}</h1>
                <h1>{rating}</h1>
              </div>
               </div>

               <div className='flex gap-5'>
               
               <button onClick={()=>buttonHandle(book)} class="btn btn-secondary bg-green-600 border-none">Red</button>
               <button class="btn btn-secondary bg-purple-900 border-none">While List</button>
               </div>
          </div>
          <div className="shrink-0 w-[573px]  rounded-3xl bg-slate-200 ">
            <img className='w-[425px] h-[564px] mx-auto' src={image} alt="" />
          </div>
        </div>
      </div>
    );
};
export default Book