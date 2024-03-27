import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getData=()=>{
    let book=[]
    const haveStore=localStorage.getItem('books')
    if(haveStore){
        book=JSON.parse(haveStore)
    }
    return book
}

export const saveBook = book => {
    let books = getData();
    const isExist = books.find(item => item.bookId === book.bookId);
    if (isExist) {
        toast.error("Book already exists!"); // Using toast.error to display error message
        return; // Exiting the function if the book already exists
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('Book added successfully!'); // Using toast.success to display success message
}

// while list card add 
export const getDataWhile=()=>{
    let whileData=[]
    const haveData=localStorage.getItem('while')
    if(haveData){
        whileData=JSON.parse(haveData)
    }
    return whileData

}
// while save data 
export const whileSave = (data) => {
    const read=getData()
    const have =read.find(data=>data.bookId === data.bookId)
    if(have){
        toast.error("Book already read!");
        return
    }
    let whileData = getDataWhile();
   
    const isExists = whileData.some(item => item.bookId === data.bookId);
    if (isExists) {
        toast.error("Book already exists!");
        return;
    } else {
        whileData.push(data); // Append new data to the existing array
        localStorage.setItem('while', JSON.stringify(whileData)); // Using 'while' as the key for storage
        toast.success('Book added successfully!');
    }
}

