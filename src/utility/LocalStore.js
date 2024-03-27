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

 